import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../../components/loader";
import ProfilePlaceholder from "../../images/profile.svg";
import StarIcon from "../movieList/images/star.svg";
import { fetchPersonDetails, fetchPersonCredits } from "../movieList/fetchMovieApi";
import {
  Page,
  HeaderCard,
  Avatar,
  Info,
  Name,
  MetaRow,
  MetaLabel,
  MetaValue,
  Bio,
  SectionTitle,
  CreditsGrid,
  CreditCard,
  Poster,
  PosterPlaceholder,
  CTitle,
  CMeta,
  VoteRow,
  VoteAverage,
  VoteInfo,
} from "./styled";

const img = (path, size = "w342") => (path ? `https://image.tmdb.org/t/p/${size}${path}` : null);
const poster = (path) => (path ? `https://image.tmdb.org/t/p/w342${path}` : null);
const fmt = (dateStr) => {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
};

export default function PersonDetails() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const [d, c] = await Promise.all([
          fetchPersonDetails(id),
          fetchPersonCredits(id),
          new Promise((r) => setTimeout(r, 1000)),
        ]);
        if (!cancelled) {
          setPerson(d);
          setCast(c.cast);
          setCrew(c.crew);
        }
      } catch (e) {
        if (!cancelled) setError(e.message || "Error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  const castClean = useMemo(
    () => cast
      .filter(m => m.release_date || m.first_air_date || m.poster_path)
      .sort((a, b) => (b.popularity || 0) - (a.popularity || 0)),
    [cast]
  );
  const crewClean = useMemo(
    () => crew
      .filter(m => m.release_date || m.first_air_date || m.poster_path)
      .sort((a, b) => (b.popularity || 0) - (a.popularity || 0)),
    [crew]
  );

  if (loading) return <Loader full />;
  if (error) return <Page>Error: {error}</Page>;
  if (!person) return <Page />;

  return (
    <Page>
      <HeaderCard>
        <Avatar>
          {person.profile_path ? (
            <img src={img(person.profile_path, "w342")} alt={person.name} />
          ) : (
            <img src={ProfilePlaceholder} alt="No profile available" width="120" height="120" />
          )}
        </Avatar>
        <Info>
          <Name>{person.name}</Name>
          <MetaRow>
            <MetaLabel>Date of birth:</MetaLabel>
            <MetaValue>{fmt(person.birthday)}</MetaValue>
          </MetaRow>
          <MetaRow>
            <MetaLabel>Place of birth:</MetaLabel>
            <MetaValue>{person.place_of_birth || "—"}</MetaValue>
          </MetaRow>
          {person.biography && <Bio>{person.biography}</Bio>}
        </Info>
      </HeaderCard>

      <SectionTitle>Movies – cast ({castClean.length})</SectionTitle>
      <CreditsGrid>
        {castClean.map(({ id: mid, title, original_title, poster_path, release_date, vote_average, vote_count, character }) => (
          <CreditCard key={mid} as={Link} to={`/movies/${mid}`}>
            {poster_path ? (
              <Poster src={poster(poster_path)} alt={title || original_title} />
            ) : (
              <PosterPlaceholder />
            )}
            <CTitle>{title || original_title}</CTitle>
            <CMeta>{character || "—"} {release_date ? `(${new Date(release_date).getFullYear()})` : ""}</CMeta>
            <VoteRow>
              <img src={StarIcon} alt="" />
              <VoteAverage>{(vote_average || 0).toFixed(1).replace(".", ",")}</VoteAverage>
              <VoteInfo>{vote_count || 0} votes</VoteInfo>
            </VoteRow>
          </CreditCard>
        ))}
      </CreditsGrid>

      <SectionTitle>Movies – crew ({crewClean.length})</SectionTitle>
      <CreditsGrid>
        {crewClean.map(({ id: mid, title, original_title, poster_path, release_date, vote_average, vote_count, job }) => (
          <CreditCard key={mid} as={Link} to={`/movies/${mid}`}>
            {poster_path ? (
              <Poster src={poster(poster_path)} alt={title || original_title} />
            ) : (
              <PosterPlaceholder />
            )}
            <CTitle>{title || original_title}</CTitle>
            <CMeta>{job || "—"} {release_date ? `(${new Date(release_date).getFullYear()})` : ""}</CMeta>
            <VoteRow>
              <img src={StarIcon} alt="" />
              <VoteAverage>{(vote_average || 0).toFixed(1).replace(".", ",")}</VoteAverage>
              <VoteInfo>{vote_count || 0} votes</VoteInfo>
            </VoteRow>
          </CreditCard>
        ))}
      </CreditsGrid>
    </Page>
  );
}
