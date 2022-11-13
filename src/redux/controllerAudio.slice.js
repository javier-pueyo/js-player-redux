import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    ref: {},
    trackUrl: '',
    trackId: '',
    isPlay: false,
};

export const controllerAudioSlice = createSlice({
    name: 'controllerAudio',
    initialState,
    reducers: {
        updateRef: (state, action) => {
            state.ref = action.payload;
        },
        updateSong: (state, action) => {
            state.trackUrl = action.payload.trackUrl;
            state.trackId = action.payload.trackId;
        },
        updateIsPlay: (state, action) => {
            state.isPlay = action.payload
        },
    },
});

export const {
    updateSong,
    updateIsPlay,
    updateRef
} = controllerAudioSlice.actions;

export const controllerAudioReducer = controllerAudioSlice.reducer