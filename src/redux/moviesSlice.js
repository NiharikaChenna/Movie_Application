import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  movies: [],
  error: "",
};

export const fetchTopMovies = createAsyncThunk(
  "movies/fetchTopMovies",
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        method: "GET",
        url: "https://imdb-top-100-movies.p.rapidapi.com/",
        headers: {
          "X-RapidAPI-Key":
            "bf6a9395damsh5a8de9e9bdb7145p1102d8jsn73a8c96aa67c",
          "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
        },
      };

      const response = await axios(options);
      const data = response.data;

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async (_, { rejectWithValue }) => {
    try {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
      const response = await axios.get(url);
      const data = response.data;

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTopMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
        state.error = "";
      })
      .addCase(fetchTopMovies.rejected, (state, action) => {
        state.loading = false;
        state.movies = [];
        state.error = action.payload;
      })
      .addCase(fetchPopularMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
        state.error = "";
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.loading = false;
        state.movies = [];
        state.error = action.payload;
      })
  },
});

export default moviesSlice.reducer;
