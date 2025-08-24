
import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../../common/loader";
import ProfilePlaceholder from "../../images/profile.svg";
import StarIcon from "../movieList/images/star.svg";
import { fetchPersonDetails, fetchPersonCredits } from "../movieList/fetchMovieApi";
import {
  Container,
  HeaderCard,
  Avatar,
  Info,
  Name,
  MetaRow,
  MetaLabel,
  MetaValue,
  Bio,
  SectionTitle,
  MoviesGrid,
  MovieCard,
  Poster,
  PosterPlaceholder,
  CContent,
  CTitle,
  CMeta,
  VoteRow,
  VoteAverage,
  VoteInfo,
} from "./styled";

const img = (path, size = "w342") => (path ? `https://image.tmdb.org/t/p/${size}${path}` : null);
const poster = (path) => (path ? `https://image.tmdb.org/t/p/w342${path}` : null);
const fmt = (d) => (d ? new Date(d).toLocaleDateString("en-GB") : "—");

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
          new Promise((r) => setTimeout(r, 800)),
        ]);
        if (!cancelled) {
          setPerson(d);
          setCast(c.cast || []);
          setCrew(c.crew || []);
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
    () => cast.sort((a, b) => (b.popularity || 0) - (a.popularity || 0)),
    [cast]
  );
  const crewClean = useMemo(
    () => crew.sort((a, b) => (b.popularity || 0) - (a.popularity || 0)),
    [crew]
  );

  if (loading) return <Loader full />;
  if (error) return <Container>Error: {error}</Container>;
  if (!person) return <Container />;

  return (
    <Container>
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
          <MetaRow><MetaLabel>Birth:</MetaLabel><MetaValue>{fmt(person.birthday)}</MetaValue></MetaRow>
          <MetaRow><MetaLabel>Place of birth:</MetaLabel><MetaValue>{person.place_of_birth || "—"}</MetaValue></MetaRow>
          {person.biography && <Bio>{person.biography}</Bio>}
        </Info>
      </HeaderCard>

      <SectionTitle>Movies – cast ({castClean.length})</SectionTitle>
      <MoviesGrid>
        {castClean.map(({ id: mid, title, original_title, poster_path, release_date, vote_average, vote_count, character }) => (
          <MovieCard key={mid} as={Link} to={`/movies/${mid}`}>
            {poster_path ? <Poster src={poster(poster_path)} alt={title || original_title} /> : <PosterPlaceholder />}
            <CContent>
              <CTitle>{title || original_title}</CTitle>
              <CMeta>{character || "—"} {release_date ? `(${new Date(release_date).getFullYear()})` : ""}</CMeta>
              <VoteRow>
                <img src={StarIcon} alt="" />
                <VoteAverage>{(vote_average || 0).toFixed(1).replace(".", ",")}</VoteAverage>
                <VoteInfo>{vote_count || 0} votes</VoteInfo>
              </VoteRow>
            </CContent>
          </MovieCard>
        ))}
      </MoviesGrid>

      <SectionTitle>Movies – crew ({crewClean.length})</SectionTitle>
      <MoviesGrid>
        {crewClean.map(({ id: mid, title, original_title, poster_path, release_date, vote_average, vote_count, job }) => (
          <MovieCard key={mid} as={Link} to={`/movies/${mid}`}>
            {poster_path ? <Poster src={poster(poster_path)} alt={title || original_title} /> : <PosterPlaceholder />}
            <CContent>
              <CTitle>{title || original_title}</CTitle>
              <CMeta>{job || "—"} {release_date ? `(${new Date(release_date).getFullYear()})` : ""}</CMeta>
              <VoteRow>
                <img src={StarIcon} alt="" />
                <VoteAverage>{(vote_average || 0).toFixed(1).replace(".", ",")}</VoteAverage>
                <VoteInfo>{vote_count || 0} votes</VoteInfo>
              </VoteRow>
            </CContent>
          </MovieCard>
        ))}
      </MoviesGrid>
    </Container>
  );
}
