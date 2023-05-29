import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './redux/moviesSlice';

const store = configureStore({
  //This reducer will be used to manage the state related to movies in the Redux store.
  reducer: {
    movies: moviesSlice
  }
});

export default store;
