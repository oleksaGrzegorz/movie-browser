// src/api/fetchMovieApi.js
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
    return {
        movies: data.results || [],
        totalPages: data.total_pages || 1,
    };
};

export const searchMovies = async ({ query, page = 1 }) => {
    const url = new URL(`${BASE_URL}/search/movie`);
    url.searchParams.set("api_key", API_KEY);
    url.searchParams.set("language", "en-US");
    url.searchParams.set("query", query);
    url.searchParams.set("page", String(page));
    url.searchParams.set("include_adult", "false");

    const res = await fetch(url.toString());
    if (!res.ok) throw new Error("Failed to search movies");
    return await res.json(); // { results, total_pages, ... }
};

export const fetchPeople = async (page = 1) => {
    const res = await fetch(
        `${BASE_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    if (!res.ok) throw new Error("Failed to fetch people");
    return await res.json(); // { results, total_pages, ... }
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

/* === NEW: single movie details & credits (for MovieDetails.jsx) === */

export const fetchMovieDetails = async (id) => {
    const res = await fetch(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    if (!res.ok) throw new Error("Failed to fetch movie details");
    return await res.json();
};

export const fetchMovieCredits = async (id) => {
    const res = await fetch(
        `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    if (!res.ok) throw new Error("Failed to fetch movie credits");
    return await res.json(); // { cast: [], crew: [] }
};
