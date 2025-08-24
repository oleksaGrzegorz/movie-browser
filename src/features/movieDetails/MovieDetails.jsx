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
  ContentWrapper,
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
  PosterPlaceholder,
  BackdropOverlay,
  BackdropImageContainer,
  Label,
  MovieRating,
  MovieVotes,
  StyledStarIcon,
  BackdropRatingExtra,
  RatingContainer,
  RatingWrapper,
  Header,
  PosterImage,
  PersonInfo,
  ExtraPersonInfo,
  PlaceholderIcon,
  Icon,
  ExtraMovieInfo,
  MovieVotes10,
  BackdropInfo,
  StyledLink,
  StyledVideoIcon,
} from "./styled";

import PersonIcon from "./Profile.svg";
import StarIcon from "../movieList/images/star.svg";
import Loader from "../../components/loader/index";
import VideoIcon from "../movieList/images/video.svg";

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
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <Loader full />;
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
          <BackdropImageContainer>
            <BackdropImage src={backdropUrl} alt={movie.title} />
            <BackdropOverlay />
            <BackdropContent>
              <BackdropTitle>{movie.title}</BackdropTitle>
              <BackdropInfo>
                <BackdropRating>
                  <StyledStarIcon
                    src={StarIcon}
                    alt=""
                    aria-hidden="true"
                    size={40}
                  />
                  <RatingWrapper>
                    {movie.vote_average.toFixed(1).replace(".", ",")}
                    <BackdropRatingExtra>/ 10</BackdropRatingExtra>
                  </RatingWrapper>
                </BackdropRating>
                <BackdropVotes>{movie.vote_count} votes</BackdropVotes>
              </BackdropInfo>
            </BackdropContent>
          </BackdropImageContainer>
        </Backdrop>
      )}

      <ContentWrapper>
        <InfoSection>
          {posterUrl ? (
            <Poster src={posterUrl} alt={movie.title} />
          ) : (
            <PosterPlaceholder>
              <StyledVideoIcon
                src={VideoIcon}
                alt=""
                aria-hidden="true"
              ></StyledVideoIcon>
            </PosterPlaceholder>
          )}
          <MovieInfo>
            <Title>{movie.title}</Title>
            <Year>{movie.release_date?.slice(0, 4) || "N/A"}</Year>
            <Production>
              <Label>Production: </Label>
              {movie.production_countries.length
                ? movie.production_countries.map((c) => c.name).join(", ")
                : "N/A"}
            </Production>
            <ReleaseDate>
              {" "}
              <Label>Release date:</Label> {releaseDateFormatted}
            </ReleaseDate>
            <Genres>
              {movie.genres.map((genre) => (
                <GenreTag key={genre.id}>{genre.name}</GenreTag>
              ))}
            </Genres>

            <RatingContainer>
              <StyledStarIcon
                src={StarIcon}
                alt=""
                aria-hidden="true"
                size={24}
              />
              <MovieRating>
                {movie.vote_average.toFixed(1).replace(".", ",")}
              </MovieRating>

              <MovieVotes10>/ 10</MovieVotes10>
              <MovieVotes>{movie.vote_count} votes</MovieVotes>
            </RatingContainer>
          </MovieInfo>
          <ExtraMovieInfo>
            <Overview>{movie.overview}</Overview>
          </ExtraMovieInfo>
        </InfoSection>

        {credits && (
          <Section>
            <Header>Cast</Header>
            <Grid>
              {credits.cast.map((actor) => (
                <StyledLink to={`/people/${actor.id}`} key={actor.cast_id}>
                  <GridItem>
                    {actor.profile_path ? (
                      <PosterImage
                        src={`${IMG_POSTER_URL}${actor.profile_path}`}
                        alt={actor.name}
                      />
                    ) : (
                      <PlaceholderIcon>
                        <Icon src={PersonIcon} alt="" aria-hidden="true" />
                      </PlaceholderIcon>
                    )}
                    <PersonInfo>{actor.name}</PersonInfo>
                    <ExtraPersonInfo>{actor.character}</ExtraPersonInfo>
                  </GridItem>
                </StyledLink>
              ))}
            </Grid>

            <Header>Crew</Header>
            <Grid>
              {credits.crew.map((member) => (
                <StyledLink to={`/people/${member.id}`} key={member.credit_id}>
                  <GridItem>
                    {member.profile_path ? (
                      <PosterImage
                        src={`${IMG_POSTER_URL}${member.profile_path}`}
                        alt={member.name}
                      />
                    ) : (
                      <PlaceholderIcon>
                        <Icon src={PersonIcon} alt="" aria-hidden="true" />
                      </PlaceholderIcon>
                    )}
                    <PersonInfo>{member.name}</PersonInfo>
                    <ExtraPersonInfo>{member.job}</ExtraPersonInfo>
                  </GridItem>
                </StyledLink>
              ))}
            </Grid>
          </Section>
        )}
      </ContentWrapper>
    </Container>
  );
};

export default MovieDetails;
