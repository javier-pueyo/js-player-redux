import { configureStore } from '@reduxjs/toolkit';
import { spotifyReducers } from 'spotify';

export const store = configureStore({
  reducer: {
    ...spotifyReducers
  },
});
