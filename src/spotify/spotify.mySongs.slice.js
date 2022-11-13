import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    songs: [],
};

export const spotifyMySongsSlice = createSlice({
    name: 'spotifyMySongs',
    initialState,
    reducers: {
        updateMySongs: (state, action) => {
            state.songs = action.payload;
        }
    },
});

export const {
    updateMySongs
} = spotifyMySongsSlice.actions;

export const spotifyMySongsReducer = spotifyMySongsSlice.reducer

