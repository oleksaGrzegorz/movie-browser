import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Loader from "../../common/Loader/Loader";
import Pagination from "../../common/Pagination/Pagination";
import NoResult from "../noResult/noResult";
import ErrorPage from "../errorPage/ErrorPage";
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

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

const MovieList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const moviesQuery = searchParams.get("search") || "";
  const debouncedQuery = useDebounce(moviesQuery, 500);

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});
  const [showHeaderLoader, setShowHeaderLoader] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const isMovieTab = location.pathname.startsWith("/movies");

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedQuery, isMovieTab]);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      try {
        setShowHeaderLoader(true);
        const genresData = await fetchGenres();
        const genresMap = {};
        genresData.forEach(({ id, name }) => (genresMap[id] = name));
        setGenres(genresMap);

        if (isMovieTab && debouncedQuery.trim() !== "") {
          const results = await dispatch(
            searchMovies({ query: debouncedQuery, page: currentPage })
          ).unwrap();
          setTimeout(() => {
            if (!cancelled) {
              setMovies(results.results || []);
              setTotalPages(results.total_pages || 1);
              setShowHeaderLoader(false);
            }
          }, 2000);
        } else if (isMovieTab) {
          const moviesData = await fetchPopularMovies(currentPage);
          setTimeout(() => {
            if (!cancelled) {
              setMovies(moviesData.movies);
              setTotalPages(
                moviesData.totalPages > 500 ? 500 : moviesData.totalPages
              );
              setShowHeaderLoader(false);
            }
          }, 2000);
        } else {
          setMovies([]);
          setTimeout(() => {
            if (!cancelled) setShowHeaderLoader(false);
          }, 500);
        }
      } catch (err) {
        if (!cancelled) setError(err.message);
      }
    };

    fetchData();
    return () => {
      cancelled = true;
    };
  }, [currentPage, debouncedQuery, dispatch, isMovieTab]);

  if (error) return <ErrorPage />;

  const hasNoResults = !showHeaderLoader && movies.length === 0 && debouncedQuery;

  return (
    <Container>
      {!hasNoResults && (
        <MainHeader>
          {isMovieTab &&
            (debouncedQuery ? `Search results for "${debouncedQuery}"` : "Popular movies")}
        </MainHeader>
      )}

      {showHeaderLoader ? (
        <Loader full text="Loading..." />
      ) : hasNoResults ? (
        <NoResult query={debouncedQuery} />
      ) : (
        <>
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
                        <StyledVideoIcon src={VideoIcon} alt="No poster available" />
                      </PosterPlaceholder>
                    )}
                  </Link>
                  <Description>
                    <Title>{title}</Title>
                    <Year>{release_date ? new Date(release_date).getFullYear() : "N/A"}</Year>
                    <Genre>
                      {genre_ids.length
                        ? genre_ids.map((id) => <GenreButton key={id}>{genres[id]}</GenreButton>)
                        : "No genres"}
                    </Genre>
                    <Vote>
                      <StyledStarIcon src={StarIcon} alt="" aria-hidden="true" />
                      <VoteAverage>{vote_average.toFixed(1).replace(".", ",")}</VoteAverage>
                      <VoteInfo>{vote_count} votes</VoteInfo>
                    </Vote>
                  </Description>
                </MovieCard>
              )
            )}
          </List>
          {movies.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default MovieList;