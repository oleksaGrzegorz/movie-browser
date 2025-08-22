import { useEffect, useState } from "react";
import { fetchGenres, fetchPopularMovies } from "./fetchMovieApi";
import { Link } from "react-router-dom";

import {
  Container,
  Description,
  Genre,
  GenreButton,
  List,
  MainHeader,
  MovieCard,
  Poster,
  Title,
  Vote,
  VoteAverage,
  VoteInfo,
  Year,
  PosterPlaceholder,
  StyledVideoIcon,
} from "./styled";
import StarIcon from "./images/star.svg";
import VideoIcon from "./images/video.svg";
import Pagination from "../../common/Pagination/Pagination";
import Loader from "../../components/loader/index";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w300";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [genresData, moviesData] = await Promise.all([
          fetchGenres(),
          fetchPopularMovies(currentPage),
        ]);

        const genresMap = {};
        genresData.forEach(({ id, name }) => {
          genresMap[id] = name;
        });

        setGenres(genresMap);
        setMovies(moviesData.movies);
        setTotalPages(
          moviesData.totalPages > 500 ? 500 : moviesData.totalPages
        );

        setTimeout(() => setLoading(false), 1000);
      } catch (error) {
        setTimeout(() => {
          setError(error.message);
          setLoading(false);
        }, 1000);
      }
    };

    fetchData();
  }, [currentPage]);

  if (loading) return <Loader full />;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      <MainHeader>Popular Movies</MainHeader>
      <List>
        {movies.map(
          ({
            id,
            poster_path,
            title,
            release_date,
            genre_ids,
            vote_average,
            vote_count,
          }) => (
            <MovieCard key={id}>
              <Link to={`/movies/${id}`}>
                {poster_path ? (
                  <Poster src={`${IMG_BASE_URL}${poster_path}`} alt={title} />
                ) : (
                  <PosterPlaceholder>
                    <StyledVideoIcon
                      src={VideoIcon}
                      alt="No poster available"
                    />
                  </PosterPlaceholder>
                )}
              </Link>

              <Description>
                <Title>{title}</Title>
                <Year>
                  {release_date ? new Date(release_date).getFullYear() : "N/A"}
                </Year>

                <Genre>
                  {genre_ids.length
                    ? genre_ids.map((genreId) => (
                        <GenreButton key={genreId}>
                          {genres[genreId]}
                        </GenreButton>
                      ))
                    : "No genres"}
                </Genre>

                <Vote>
                  <img src={StarIcon} />
                  <VoteAverage>
                    {vote_average.toFixed(1).replace(".", ",")}
                  </VoteAverage>{" "}
                  <VoteInfo>{vote_count} votes</VoteInfo>
                </Vote>
              </Description>
            </MovieCard>
          )
        )}
      </List>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
};

export default MovieList;
