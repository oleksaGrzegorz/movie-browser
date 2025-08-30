import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Loader from "../../common/Loader/Loader";
import Pagination from "../../common/Pagination/Pagination";
import { fetchGenres, fetchPopularMovies } from "./fetchMovieApi";
import { searchMovies } from "../../store/searchSlice";
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
  StyledStarIcon,
} from "./styled";
import VideoIcon from "./images/video.svg";
import StarIcon from "./images/star.svg";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w300";

const MovieList = () => {
  const dispatch = useDispatch();
  const { moviesQuery } = useSelector((state) => state.search);
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const isMovieTab = location.pathname.startsWith("/movies");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const genresData = await fetchGenres();
        const genresMap = {};
        genresData.forEach(({ id, name }) => { genresMap[id] = name; });
        setGenres(genresMap);

        if (isMovieTab && moviesQuery) {
          const results = await dispatch(searchMovies({ query: moviesQuery, page: currentPage })).unwrap();
          setMovies(results.results || results);
          setTotalPages(results.total_pages || 1);
        } else if (isMovieTab) {
          const moviesData = await fetchPopularMovies(currentPage);
          setMovies(moviesData.movies);
          setTotalPages(moviesData.totalPages > 500 ? 500 : moviesData.totalPages);
        } else {
          setMovies([]);
        }

        setTimeout(() => setLoading(false), 500);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage, moviesQuery, dispatch, isMovieTab]);

  if (loading) return <Loader full />;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      <MainHeader>
        {isMovieTab && (moviesQuery ? `Search results for "${moviesQuery}"` : "Popular movies")}
      </MainHeader>
      {movies.length === 0 && isMovieTab ? <p>Brak wyników</p> : (
        <List>
          {movies.map(({ id, poster_path, title, release_date, genre_ids, vote_average, vote_count }) => (
            <MovieCard key={id}>
              <Link to={`/movies/${id}`}>
                {poster_path ? <Poster src={`${IMG_BASE_URL}${poster_path}`} alt={title} /> : (
                  <PosterPlaceholder><StyledVideoIcon src={VideoIcon} alt="No poster available" /></PosterPlaceholder>
                )}
              </Link>
              <Description>
                <Title>{title}</Title>
                <Year>{release_date ? new Date(release_date).getFullYear() : "N/A"}</Year>
                <Genre>{genre_ids.length ? genre_ids.map((id) => <GenreButton key={id}>{genres[id]}</GenreButton>) : "No genres"}</Genre>
                <Vote>
                  <StyledStarIcon src={StarIcon} alt="" aria-hidden="true" />
                  <VoteAverage>{vote_average.toFixed(1).replace(".", ",")}</VoteAverage>
                  <VoteInfo>{vote_count} votes</VoteInfo>
                </Vote>
              </Description>
            </MovieCard>
          ))}
        </List>
      )}
      {isMovieTab && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />}
    </Container>
  );
};

export default MovieList;
