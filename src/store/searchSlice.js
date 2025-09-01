import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const searchMovies = createAsyncThunk(
  "search/movies",
  async ({ query, page = 1 }) => {
    const res = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    );
    const data = await res.json();
    return data;
  }
);

export const searchPeople = createAsyncThunk(
  "search/people",
  async ({ query, page = 1 }) => {
    const res = await fetch(
      `${BASE_URL}/search/person?api_key=${API_KEY}&query=${query}&page=${page}`
    );
    const data = await res.json();
    return data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    moviesQuery: "",
    peopleQuery: "",
    moviesResults: [],
    peopleResults: [],
    loading: false,
    error: null,
  },
  reducers: {
    setMoviesQuery(state, action) {
      state.moviesQuery = action.payload;
    },
    setPeopleQuery(state, action) {
      state.peopleQuery = action.payload;
    },
    clearMoviesResults(state) {
      state.moviesResults = [];
      state.moviesQuery = "";
    },
    clearPeopleResults(state) {
      state.peopleResults = [];
      state.peopleQuery = "";
    },
    clearAllResults(state) {
      state.moviesResults = [];
      state.peopleResults = [];
      state.moviesQuery = "";
      state.peopleQuery = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.moviesResults = action.payload.results || [];
        state.totalMoviesPages = action.payload.total_pages || 1;
      })
      .addCase(searchPeople.fulfilled, (state, action) => {
        state.loading = false;
        state.peopleResults = action.payload.results || [];
        state.totalPeoplePages = action.payload.total_pages || 1;
      });
  },
});

export const {
  setMoviesQuery,
  setPeopleQuery,
  clearMoviesResults,
  clearPeopleResults,
  clearAllResults,
} = searchSlice.actions;

export default searchSlice.reducer;
