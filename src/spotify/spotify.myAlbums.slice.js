import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    albums: [],
};

export const spotifyMyAlbumsSlice = createSlice({
    name: 'spotifyMyAlbums',
    initialState,
    reducers: {
        updateMyAlbums: (state, action) => {
            state.albums = action.payload
        }
    },
});

export const {
    updateMyAlbums
} = spotifyMyAlbumsSlice.actions;

export const spotifyMyAlbumsReducer = spotifyMyAlbumsSlice.reducer

