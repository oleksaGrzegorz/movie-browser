import { useEffect, useRef, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import NoResult from "../noResult/noResult";
import ErrorPage from "../errorPage/ErrorPage";
import Pagination from "../../common/Pagination/Pagination";
import MovieCard from "../../common/components/MovieCard";
import { fetchPopularMovies, fetchGenres, searchMovies } from "../../api/fetchMovieApi";
import { Container, MainHeader } from "./styled";
import { MoviesGrid } from "../../common/components/Grids";
import Loader from "../../common/Loader/Loader";

const poster = (path, size = "w342") =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : null;

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const h = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(h);
  }, [value, delay]);
  return debouncedValue;
}

export default function MovieList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const page = Math.max(1, Number(searchParams.get("page") || 1));
  const query = (searchParams.get("search") || "").trim();
  const debouncedQuery = useDebounce(query, 500);
  const isMoviesTab = location.pathname.startsWith("/movies");

  const [movies, setMovies] = useState([]);
  const [genresMap, setGenresMap] = useState({});
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [ready, setReady] = useState(false);

  const prevQueryRef = useRef("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const list = await fetchGenres();
        if (!cancelled && Array.isArray(list)) {
          const map = {};
          for (const g of list) map[g.id] = g.name;
          setGenresMap(map);
        }
      } catch { }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

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
    (async () => {
      setReady(false);
      setError(null);
      try {
        if (debouncedQuery && isMoviesTab) {
          const res = await searchMovies({ query: debouncedQuery, page });
          if (!cancelled) {
            setMovies(res.results || []);
            setTotalPages(Math.min(res.total_pages || 1, 500));
          }
        } else if (isMoviesTab) {
          const res = await fetchPopularMovies(page);
          if (!cancelled) {
            const list = res.movies || res.results || [];
            setMovies(list);
            setTotalPages(Math.min(res.totalPages || res.total_pages || 1, 500));
          }
        }
      } catch (e) {
        if (!cancelled) setError(e || true);
      } finally {
        if (!cancelled) setReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [debouncedQuery, page, isMoviesTab]);

  const handlePageChange = (nextPage) => {
    setSearchParams((prev) => {
      const p = new URLSearchParams(prev);
      p.set("page", String(nextPage));
      if (debouncedQuery) p.set("search", debouncedQuery);
      return p;
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (error) return <ErrorPage />;

  const hasResults = movies && movies.length > 0;

  return (
    <Container>
      <MainHeader>
        {debouncedQuery ? `Results for “${debouncedQuery}”` : "Popular Movies"}
      </MainHeader>

      <Loader ready={ready} delayMs={1000}>
        {hasResults ? (
          <>
            <MoviesGrid>
              {movies.map((m) => {
                const id = m.id;
                const title = m.title || m.original_title;
                const year = m.release_date ? new Date(m.release_date).getFullYear() : undefined;
                const genres = Array.isArray(m.genre_ids)
                  ? m.genre_ids.slice(0, 3).map((gid) => genresMap[gid]).filter(Boolean)
                  : [];

                const voteCount = Number.isFinite(m.vote_count) ? m.vote_count : 0;
                const avgNumber = Number(m.vote_average);
                const hasVotes = voteCount > 0 && Number.isFinite(avgNumber) && avgNumber > 0;
                const voteAverage = hasVotes
                  ? avgNumber.toFixed(1).replace(".", ",")
                  : null;

                return (
                  <MovieCard
                    key={id}
                    id={id}
                    title={title}
                    year={year}
                    posterUrl={poster(m.poster_path)}
                    genres={genres}
                    voteAverage={voteAverage}
                    voteCount={voteCount}
                    to={`/movies/${id}`}
                  />
                );
              })}
            </MoviesGrid>

            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <NoResult query={debouncedQuery} />
        )}
      </Loader>
    </Container>
  );
}
