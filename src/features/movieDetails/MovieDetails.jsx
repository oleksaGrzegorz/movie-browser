import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Backdrop,
  BackdropImage,
  BackdropContent,
  BackdropTitle,
  BackdropRating,
  BackdropVotes,
  InfoSection,
  Poster,
  MovieInfo,
  Title,
  Year,
  Production,
  ReleaseDate,
  Genres,
  GenreTag,
  Overview,
  Section,
  Grid,
  GridItem,
  PlaceholderIcon,
  PosterPlaceholder,
} from "./styled";

const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";
const IMG_POSTER_URL = "https://image.tmdb.org/t/p/w500";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        if (!res.ok) throw new Error("Failed to fetch movie details");
        const data = await res.json();
        setMovie(data);

        const creditsRes = await fetch(
          `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
        );
        if (!creditsRes.ok) throw new Error("Failed to fetch credits");
        const creditsData = await creditsRes.json();
        setCredits(creditsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!movie) return null;

  const backdropUrl = movie.backdrop_path
    ? `${IMG_BASE_URL}${movie.backdrop_path}`
    : "";
  const posterUrl = movie.poster_path
    ? `${IMG_POSTER_URL}${movie.poster_path}`
    : "";
  const releaseDateFormatted = movie.release_date
    ? new Date(movie.release_date).toLocaleDateString("pl-PL")
    : "N/A";

  return (
    <Container>
      {backdropUrl && (
        <Backdrop>
          <BackdropImage src={backdropUrl} alt={movie.title} />
          <BackdropContent>
            <BackdropTitle>{movie.title}</BackdropTitle>
            <BackdropRating>
              ⭐ {movie.vote_average.toFixed(1).replace(".", ",")}/10
            </BackdropRating>
            <BackdropVotes>{movie.vote_count} głosów</BackdropVotes>
          </BackdropContent>
        </Backdrop>
      )}

      <InfoSection>
        {posterUrl ? (
          <Poster src={posterUrl} alt={movie.title} />
        ) : (
          <PosterPlaceholder />
        )}
        <MovieInfo>
          <Title>{movie.title}</Title>
          <Year>{movie.release_date?.slice(0, 4) || "N/A"}</Year>
          <Production>
            Production:{" "}
            {movie.production_countries.length
              ? movie.production_countries.map((c) => c.name).join(", ")
              : "N/A"}
          </Production>
          <ReleaseDate>Release date: {releaseDateFormatted}</ReleaseDate>
          <Genres>
            {movie.genres.map((genre) => (
              <GenreTag key={genre.id}>{genre.name}</GenreTag>
            ))}
          </Genres>
          <BackdropRating>
            ⭐ {movie.vote_average.toFixed(1).replace(".", ",")}/10
          </BackdropRating>
          <Overview>{movie.overview}</Overview>
        </MovieInfo>
      </InfoSection>

      {credits && (
        <Section>
          <h3>Cast</h3>
          <Grid>
            {credits.cast.map((actor) => (
              <GridItem key={actor.cast_id}>
                {actor.profile_path ? (
                  <img
                    src={`${IMG_POSTER_URL}${actor.profile_path}`}
                    alt={actor.name}
                  />
                ) : (
                  <PlaceholderIcon />
                )}
                <p>{actor.name}</p>
                <p>{actor.character}</p>
              </GridItem>
            ))}
          </Grid>

          <h3>Crew</h3>
          <Grid>
            {credits.crew.map((member) => (
              <GridItem key={member.credit_id}>
                {member.profile_path ? (
                  <img
                    src={`${IMG_POSTER_URL}${member.profile_path}`}
                    alt={member.name}
                  />
                ) : (
                  <PlaceholderIcon />
                )}
                <p>{member.name}</p>
                <p>{member.job}</p>
              </GridItem>
            ))}
          </Grid>
        </Section>
      )}
    </Container>
  );
};

export default MovieDetails;
