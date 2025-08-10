import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
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
        const [genresRes, moviesRes] = await Promise.all([
          fetch(
            `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
          ),
          fetch(
            `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`
          ),
        ]);

        if (!genresRes.ok || !moviesRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const genresData = await genresRes.json();
        const moviesData = await moviesRes.json();

        const genresMap = {};
        genresData.genres.forEach(({ id, name }) => {
          genresMap[id] = name;
        });

        setGenres(genresMap);
        setMovies(moviesData.results);
        setTotalPages(
          moviesData.total_pages > 500 ? 500 : moviesData.total_pages
        );

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

    setLoading(true);
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
                <div className="posterPlaceholder">SVG Placeholder</div>
              )}
              <h2>
                {title} ({new Date(release_date).getFullYear()})
              </h2>
              <p>{genre_ids.map((genreId) => genres[genreId]).join(", ")}</p>
              <p>X {vote_average} {vote_count} votes</p>
            </li>
          )
        )}
      </ul>
      <div>
        <button onClick={goToFirstPage} disabled={currentPage === 1}>vFirst</button>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>vPrevious</button>

        <span>Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong></span>

        <button onClick={goToNextPage} disabled={currentPage === totalPages}>Next v</button>
        <button onClick={goToLastPage} disabled={currentPage === totalPages}>Last v</button>
      </div>
    </div>
  );
};

export default MovieList;
