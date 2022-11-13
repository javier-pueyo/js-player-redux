import { configureStore } from '@reduxjs/toolkit';
import { spotifyReducers } from 'spotify';
import { generalReducers } from '../redux'

export const store = configureStore({
  reducer: {
    ...generalReducers,
    ...spotifyReducers
  },
});
