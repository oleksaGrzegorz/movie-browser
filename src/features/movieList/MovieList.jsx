import { useEffect, useRef, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
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

export default function MovieList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const page = Math.max(1, Number(searchParams.get("page") || 1));
  const query = (searchParams.get("search") || "");
  const isMoviesTab = location.pathname.startsWith("/movies");

  const searchState = useSelector((state) => state.search);
  const { isTyping, isSearching } = searchState;

  const [movies, setMovies] = useState([]);
  const [genresMap, setGenresMap] = useState({});
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [fetchReady, setFetchReady] = useState(false);

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
    (async () => {
      setFetchReady(false);
      setError(null);
      try {
        if (query && isMoviesTab) {
          const res = await searchMovies({ query, page });
          if (!cancelled) {
            setMovies(res.results || []);
            setTotalPages(Math.min(res.total_pages || 1, 500));
          }
        } else if (isMoviesTab) {
          const res = await fetchPopularMovies(page);
          if (!cancelled) {
            const list = res.movies || res.results || [];
            setMovies(list);
            setTotalPages(Math.min(res.total_pages || res.totalPages || 1, 500));
          }
        }
      } catch (e) {
        if (!cancelled) setError(e || true);
      } finally {
        if (!cancelled) setFetchReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [query, page, isMoviesTab]);

  const handlePageChange = (nextPage) => {
    setSearchParams((prev) => {
      const p = new URLSearchParams(prev);
      p.set("page", String(nextPage));
      if (query) p.set("search", query);
      return p;
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (error) return <ErrorPage />;

  const hasResults = movies && movies.length > 0;

  const getHeaderText = () => {
    if (!query) return "Popular Movies";
    if (hasResults) return `Search results for "${query}"`;
    return `Sorry, there are no results for "${query}"`;
  };

  const headerText = getHeaderText();
  const loaderDelay = isTyping ? 0 : 1000;
  const loaderReady = fetchReady && !isTyping && !isSearching;

  return (
    <Container>
      <MainHeader>{headerText}</MainHeader>

      <Loader
        ready={loaderReady}
        delayMs={loaderDelay}
        isTyping={isTyping}
        showTypingIndicator={true}
      >
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
                const avgNum = Number(m.vote_average);
                const hasVotes = voteCount > 0 && Number.isFinite(avgNum) && avgNum > 0;
                const voteAverage = hasVotes ? avgNum.toFixed(1).replace(".", ",") : null;

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
          <NoResult query={query} />
        )}
      </Loader>
    </Container>
  );
}