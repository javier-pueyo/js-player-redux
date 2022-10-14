import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    displayName: '',
    avatarURL: ''
};

export const spotifyProfileSlice = createSlice({
    name: 'spotifyProfile',
    initialState,
    reducers: {
        updateProfileData: (state, action) => {
            state.displayName = action.payload.displayName
            state.avatarURL = action.payload.avatar
        }
    },
});

export const {
    updateProfileData
} = spotifyProfileSlice.actions;

export const spotifyProfileReducer = spotifyProfileSlice.reducer

