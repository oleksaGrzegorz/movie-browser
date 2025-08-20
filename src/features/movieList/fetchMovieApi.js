const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchGenres = async () => {
    const res = await fetch(
        `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    if (!res.ok) throw new Error("Failed to fetch genres");
    const data = await res.json();
    return data.genres;
};

export const fetchPopularMovies = async (page = 1) => {
    const res = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    if (!res.ok) throw new Error("Failed to fetch popular movies");
    const data = await res.json();
    return { movies: data.results, totalPages: data.total_pages };
};

export const fetchPopularPeople = async (page = 1) => {
    const res = await fetch(
        `${BASE_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    if (!res.ok) throw new Error("Failed to fetch popular people");
    const data = await res.json();
    return { people: data.results, totalPages: data.total_pages };
};

export const fetchPersonDetails = async (id) => {
    const res = await fetch(
        `${BASE_URL}/person/${id}?api_key=${API_KEY}&language=en-US`
    );
    if (!res.ok) throw new Error("Failed to fetch person details");
    return await res.json();
};

export const fetchPersonCredits = async (id) => {
    const res = await fetch(
        `${BASE_URL}/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`
    );
    if (!res.ok) throw new Error("Failed to fetch person credits");
    const data = await res.json();
    return { cast: data.cast || [], crew: data.crew || [] };
};
