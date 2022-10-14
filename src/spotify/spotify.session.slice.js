import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'initial',
    accessToken: '',
    refreshToken: '',
    displayName: '',
    avatarURL: ''
};

export const spotifySessionSlice = createSlice({
    name: 'spotify',
    initialState,
    reducers: {
        authorizationRequested: (state, action) => {
            state.status = 'authorizationInProgress'
        },
        hasBeenAuthorized: (state, action) => {
            state.status = 'logged'
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
        },
        updateAccessToken: (state, action) => {
            state.accessToken = action.payload
        },
    },
});

export const {
    hasBeenAuthorized,
    authorizationRequested,
    updateAccessToken,
} = spotifySessionSlice.actions;

export const isLoggedIn = (state) => state.spotifySession.status === 'logged';

export const spotifySessionReducer = spotifySessionSlice.reducer
