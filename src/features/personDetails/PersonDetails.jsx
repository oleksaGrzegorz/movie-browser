
import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { fetchPersonDetails, fetchPersonCredits, fetchGenres } from "../movieList/fetchMovieApi";
import {
  Container,
  HeaderCard,
  Avatar,
  Info,
  Name,
  MetaRow,
  MetaRowStackOnMobile,
  LabelDesktop,
  LabelMobile,
  MetaValue,
  Bio,
  SectionTitle,
  MoviesGrid,
  MovieCard,
  CardLink,
  Poster,
  PosterPlaceholder,
  CContent,
  CTitle,
  CMeta,
  VoteRow,
  VoteAverage,
  VoteInfo,
  Genre,
  GenreButton,
} from "./styled";
import StarIcon from "../../images/star.svg";
import ProfilePlaceholder from "../../images/profile.svg";

const poster = (path, size = "w500") =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : null;

const fmt = (v) => (v ? v : "—");

const PersonDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [genresMap, setGenresMap] = useState({});

  useEffect(() => {
    (async () => {
      const d = await fetchPersonDetails(id);
      setDetails(d);
      const credits = await fetchPersonCredits(id);
      setCast(credits.cast || []);
      setCrew(credits.crew || []);
      const genres = await fetchGenres();
      const map = {};
      for (const { id, name } of genres) map[id] = name;
      setGenresMap(map);
    })();
  }, [id]);

  const castClean = useMemo(
    () => [...cast].sort((a, b) => (b.popularity || 0) - (a.popularity || 0)),
    [cast]
  );
  const crewClean = useMemo(
    () => [...crew].sort((a, b) => (b.popularity || 0) - (a.popularity || 0)),
    [crew]
  );

  if (!details) return <Container />;

  const castCount = castClean.length;
  const crewCount = crewClean.length;

  return (
    <Container>
      <HeaderCard>
        <Avatar>
          {details.profile_path ? (
            <img
              src={poster(details.profile_path)}
              alt={details.name || "Profile photo"}
              loading="lazy"
              decoding="async"
              width={400}
              height={600}
            />
          ) : (
            <img
              src={ProfilePlaceholder}
              alt={details.name || "Profile photo"}
              loading="lazy"
              decoding="async"
              width={400}
              height={600}
            />
          )}
        </Avatar>

        <Info>
          <Name>{details.name}</Name>

          <MetaRow>
            <LabelDesktop>Date of birth:</LabelDesktop>
            <LabelMobile>Birth:</LabelMobile>
            <MetaValue>{fmt(details.birthday)}</MetaValue>
          </MetaRow>

          <MetaRowStackOnMobile>
            <LabelDesktop>Place of birth:</LabelDesktop>
            <LabelMobile>Place of</LabelMobile>
            <MetaValue>{fmt(details.place_of_birth)}</MetaValue>
          </MetaRowStackOnMobile>
        </Info>

        <Bio>{fmt(details.biography)}</Bio>
      </HeaderCard>

      <SectionTitle>Movies – cast ({castCount})</SectionTitle>
      <MoviesGrid>
        {castClean.map(
          ({
            id: mid,
            poster_path,
            title,
            original_title,
            character,
            release_date,
            vote_average,
            vote_count,
            genre_ids = [],
          }) => (
            <MovieCard key={mid}>
              <CardLink to={`/movies/${mid}`}>
                {poster_path ? (
                  <Poster
                    src={poster(poster_path)}
                    alt={title || original_title || "Movie poster"}
                    loading="lazy"
                    decoding="async"
                    width={500}
                    height={750}
                  />
                ) : (
                  <PosterPlaceholder aria-label="No poster available" role="img" />
                )}

                <CContent>
                  <CTitle>{title || original_title || "—"}</CTitle>
                  <CMeta>
                    {character || "—"} {release_date ? `(${new Date(release_date).getFullYear()})` : ""}
                  </CMeta>

                  <Genre>
                    {genre_ids.length
                      ? genre_ids.map((gid) => (
                        <GenreButton key={gid}>{genresMap[gid]}</GenreButton>
                      ))
                      : <GenreButton as="span">No genres</GenreButton>}
                  </Genre>

                  <VoteRow>
                    <img src={StarIcon} alt="" />
                    <VoteAverage>{(vote_average || 0).toFixed(1).replace(".", ",")}</VoteAverage>
                    <VoteInfo>{vote_count || 0} votes</VoteInfo>
                  </VoteRow>
                </CContent>
              </CardLink>
            </MovieCard>
          )
        )}
      </MoviesGrid>

      <SectionTitle>Movies – crew ({crewCount})</SectionTitle>
      <MoviesGrid>
        {crewClean.map(
          ({
            id: mid,
            poster_path,
            title,
            original_title,
            job,
            release_date,
            vote_average,
            vote_count,
            genre_ids = [],
          }) => (
            <MovieCard key={mid}>
              <CardLink to={`/movies/${mid}`}>
                {poster_path ? (
                  <Poster
                    src={poster(poster_path)}
                    alt={title || original_title || "Movie poster"}
                    loading="lazy"
                    decoding="async"
                    width={500}
                    height={750}
                  />
                ) : (
                  <PosterPlaceholder aria-label="No poster available" role="img" />
                )}

                <CContent>
                  <CTitle>{title || original_title || "—"}</CTitle>
                  <CMeta>
                    {job || "—"} {release_date ? `(${new Date(release_date).getFullYear()})` : ""}
                  </CMeta>

                  <Genre>
                    {genre_ids.length
                      ? genre_ids.map((gid) => (
                        <GenreButton key={gid}>{genresMap[gid]}</GenreButton>
                      ))
                      : <GenreButton as="span">No genres</GenreButton>}
                  </Genre>

                  <VoteRow>
                    <img src={StarIcon} alt="" />
                    <VoteAverage>{(vote_average || 0).toFixed(1).replace(".", ",")}</VoteAverage>
                    <VoteInfo>{vote_count || 0} votes</VoteInfo>
                  </VoteRow>
                </CContent>
              </CardLink>
            </MovieCard>
          )
        )}
      </MoviesGrid>
    </Container>
  );
};

export default PersonDetails;
