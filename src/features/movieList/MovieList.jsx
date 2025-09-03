import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams, useLocation, Link } from "react-router-dom";
import Loader from "../../common/Loader/Loader";
import NoResult from "../noResult/noResult";
import ErrorPage from "../errorPage/ErrorPage";
import Pagination from "../../common/Pagination/Pagination";
import StarIcon from "../../images/star.svg";
import {
  Container,
  MainHeader,
  List,
  MovieItem,
  MovieCard,
  CardLink,
  Poster,
  PosterPlaceholder,
  CardContent,
  CardTitle,
  CardMeta,
  GenreRow,
  GenreTag,
  VoteRow,
  VoteAverage,
  VoteInfo,
} from "./styled";
import { fetchPopularMovies, fetchGenres, searchMovies } from "../../api/fetchMovieApi";

const poster = (path, size = "w342") =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : null;

const getCols = (w) => {
  if (w <= 667) return 1;
  if (w <= 900) return 2;
  if (w <= 1200) return 3;
  return 4;
};

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const h = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(h);
  }, [value, delay]);
  return debouncedValue;
}

export default function MovieList() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Math.max(1, Number(searchParams.get("page") || 1));
  const query = searchParams.get("search") || "";
  const debouncedQuery = useDebounce(query, 500);
  const isMoviesTab = location.pathname.startsWith("/movies");

  const [movies, setMovies] = useState([]);
  const [genresMap, setGenresMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [width, setWidth] = useState(() => window.innerWidth);

  const cols = useMemo(() => getCols(width), [width]);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const list = await fetchGenres();
        if (cancelled) return;
        const map = {};
        for (const { id, name } of list) map[id] = name;
        setGenresMap(map);
      } catch { }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const prevQueryRef = useRef("");

  useEffect(() => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      if (query) {
        params.set("search", query);
        if (prevQueryRef.current !== query) params.set("page", "1");
      } else {
        params.delete("search");
      }
      prevQueryRef.current = query;
      return params;
    });
  }, [query, isMoviesTab, setSearchParams]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    (async () => {
      try {
        if (isMoviesTab && debouncedQuery.trim()) {
          const res = await searchMovies({ query: debouncedQuery, page });
          if (!cancelled) {
            setMovies(res.results || []);
            setTotalPages(Math.min(res.total_pages || 1, 500));
          }
        } else if (isMoviesTab) {
          const res = await fetchPopularMovies(page);
          if (!cancelled) {
            setMovies(res.movies || []);
            setTotalPages(Math.min(res.totalPages || 1, 500));
          }
        } else {
          if (!cancelled) setMovies([]);
        }
      } catch (e) {
        if (!cancelled) setError(e?.message || "Error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [page, debouncedQuery, isMoviesTab]);

  if (error) return <ErrorPage />;

  const hasNoResults = !loading && movies.length === 0 && debouncedQuery;

  return (
    <Container>
      {!hasNoResults && (
        <MainHeader>
          {isMoviesTab &&
            (debouncedQuery ? `Search results for "${debouncedQuery}"` : "Popular movies")}
        </MainHeader>
      )}

      {loading ? (
        <Loader full text="Loading..." />
      ) : hasNoResults ? (
        <NoResult query={debouncedQuery} />
      ) : (
        <>
          <List style={{ ["--cols"]: cols }}>
            {movies.map(
              ({
                id,
                poster_path,
                title,
                original_title,
                release_date,
                genre_ids = [],
                vote_average,
                vote_count,
              }) => {
                const year = release_date ? new Date(release_date).getFullYear() : "—";
                return (
                  <MovieItem key={id}>
                    <MovieCard>
                      <CardLink to={`/movies/${id}`}>
                        {poster_path ? (
                          <Poster
                            src={poster(poster_path)}
                            alt={title || original_title || "Movie poster"}
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <PosterPlaceholder aria-label="No poster available" role="img" />
                        )}

                        <CardContent>
                          <CardTitle>{title || original_title || "—"}</CardTitle>
                          <CardMeta>{year}</CardMeta>

                          <GenreRow>
                            {genre_ids.length ? (
                              genre_ids.slice(0, 3).map((gid) => (
                                <GenreTag key={gid}>{genresMap[gid]}</GenreTag>
                              ))
                            ) : (
                              <GenreTag as="span">No genres</GenreTag>
                            )}
                          </GenreRow>

                          <VoteRow>
                            <img src={StarIcon} alt="" />
                            <VoteAverage>
                              {(vote_average || 0).toFixed(1).replace(".", ",")}
                            </VoteAverage>
                            <VoteInfo>{vote_count || 0} votes</VoteInfo>
                          </VoteRow>
                        </CardContent>
                      </CardLink>
                    </MovieCard>
                  </MovieItem>
                );
              }
            )}
          </List>

          {movies.length > 0 && (
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={(newPage) =>
                setSearchParams((prev) => {
                  const params = new URLSearchParams(prev);
                  params.set("page", String(newPage));
                  if (query) params.set("search", query);
                  return params;
                })
              }
            />
          )}
        </>
      )}
    </Container>
  );
}
