import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    playlists: [],
};

export const spotifyMyPlaylistSlice = createSlice({
    name: 'spotifyMyPlaylist',
    initialState,
    reducers: {
        updateMyPlaylist: (state, action) => {
            state.playlists = action.payload
        }
    },
});

export const {
    updateMyPlaylist
} = spotifyMyPlaylistSlice.actions;

export const spotifyMyPlaylistReducer = spotifyMyPlaylistSlice.reducer

