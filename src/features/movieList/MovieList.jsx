import { useEffect, useState, useRef } from "react";
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
  const [searchParams, setSearchParams] = useSearchParams();

  const moviesQuery = searchParams.get("search") || "";
  const page = Math.max(1, Number(searchParams.get("page") || 1));
  const debouncedQuery = useDebounce(moviesQuery, 500);

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});
  const [showHeaderLoader, setShowHeaderLoader] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const isMovieTab = location.pathname.startsWith("/movies");
  const prevQueryRef = useRef("");

  useEffect(() => {
    if (debouncedQuery && prevQueryRef.current !== debouncedQuery) {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);
        params.set("search", debouncedQuery);
        params.set("page", "1");
        return params;
      });
    }
    prevQueryRef.current = debouncedQuery;
  }, [debouncedQuery, setSearchParams]);

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
            searchMovies({ query: debouncedQuery, page })
          ).unwrap();
          setTimeout(() => {
            if (!cancelled) {
              setMovies(results.results || []);
              setTotalPages(results.total_pages || 1);
              setShowHeaderLoader(false);
            }
          }, 2000);
        } else if (isMovieTab) {
          const moviesData = await fetchPopularMovies(page);
          setTimeout(() => {
            if (!cancelled) {
              setMovies(moviesData.movies || []);
              setTotalPages(
                moviesData.totalPages > 500 ? 500 : moviesData.totalPages || 1
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
  }, [page, debouncedQuery, dispatch, isMovieTab]);

  if (error) return <ErrorPage />;

  const hasNoResults =
    !showHeaderLoader && (!movies || movies.length === 0) && debouncedQuery;

  return (
    <Container>
      {!hasNoResults && (
        <MainHeader>
          {isMovieTab &&
            (debouncedQuery
              ? `Search results for "${debouncedQuery}"`
              : "Popular movies")}
        </MainHeader>
      )}

      {showHeaderLoader ? (
        <Loader full text="Loading..." />
      ) : hasNoResults ? (
        <NoResult query={debouncedQuery} />
      ) : (
        <>
          <List>
            {(movies || []).map(
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
                      <Poster
                        src={`${IMG_BASE_URL}${poster_path}`}
                        alt={title}
                      />
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
                      {release_date
                        ? new Date(release_date).getFullYear()
                        : "N/A"}
                    </Year>
                    <Genre>
                      {(genre_ids || []).length
                        ? (genre_ids || []).map((id) => (
                            <GenreButton key={id}>{genres[id]}</GenreButton>
                          ))
                        : "No genres"}
                    </Genre>
                    <Vote>
                      <StyledStarIcon
                        src={StarIcon}
                        alt=""
                        aria-hidden="true"
                      />
                      <VoteAverage>
                        {vote_average?.toFixed(1).replace(".", ",")}
                      </VoteAverage>
                      <VoteInfo>{vote_count} votes</VoteInfo>
                    </Vote>
                  </Description>
                </MovieCard>
              )
            )}
          </List>
          {movies && movies.length > 0 && (
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={(newPage) =>
                setSearchParams((prev) => {
                  const params = new URLSearchParams(prev);
                  params.set("page", String(newPage));
                  if (moviesQuery) params.set("search", moviesQuery);
                  return params;
                })
              }
            />
          )}
        </>
      )}
    </Container>
  );
};

export default MovieList;
