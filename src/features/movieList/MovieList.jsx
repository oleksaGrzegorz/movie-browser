import { useEffect, useState } from "react";
import { fetchGenres, fetchPopularMovies } from "./fetchMovieApi";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w200";

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
      setTotalPages(moviesData.totalPages > 500 ? 500 : moviesData.totalPages);

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (err) {
      setTimeout(() => {
        setError(err.message);
        setLoading(false);
      }, 1000);
    }
  };

  fetchData();
}, [currentPage]);

  const goToFirstPage = () => setCurrentPage(1);
  const goToPreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToLastPage = () => setCurrentPage(totalPages);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
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
            <li key={id}>
              {poster_path ? (
                <img src={`${IMG_BASE_URL}${poster_path}`} alt={title} />
              ) : (
                <div
                  className="posterPlaceholder"
                  aria-label="No poster available"
                  style={{ width: 200, height: 300, backgroundColor: "#ccc" }}
                >
                  SVG Placeholder
                </div>
              )}
              <h2>
                {title} (
                {release_date ? new Date(release_date).getFullYear() : "N/A"})
              </h2>
              <p>
                {genre_ids.length
                  ? genre_ids.map((genreId) => genres[genreId]).join(", ")
                  : "No genres"}
              </p>
              <p>
                X {vote_average} {vote_count} votes
              </p>
            </li>
          )
        )}
      </ul>
      <div>
        <button onClick={goToFirstPage} disabled={currentPage === 1}>
          First
        </button>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
        <button onClick={goToLastPage} disabled={currentPage === totalPages}>
          Last
        </button>
      </div>
    </div>
  );
};

export default MovieList;
