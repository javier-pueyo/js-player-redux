import { updateIsPlay, updateSong, updateRef } from '../redux/controllerAudio.slice'
import { useSelector } from "react-redux";
import {useContext, useState} from 'react';
import { AudioContext } from 'context/Context';

const useControllerAudio = () => {
    const { songs } = useSelector((state) => state.spotifyMySongs);
    const { trackId } = useSelector((state) => state.controllerAudio);
    const [audio, setAudio] = useState(null);
    const audioContext = useContext(AudioContext);
    
/*     const getSrcAudio = () => {
        return audioContext.audio ? audioContext.audio.current.attributes.src.value : '';
    } */
    const getAudio = () => {
        return audioContext.audio ? audioContext.audio.current : '';
    }

    const setContextAudio = () => {
        return {
            audio,
            setStateAudio : (value) => {
                setAudio(value);
            }
        }
    }

    const startControlerAudio = (getRef) => async (dispatch, getState) => {
        console.log('holi', getRef);
        dispatch(updateRef(getRef));
    }

    const setPlayAudio = (props) => async (dispatch, getState) => {
        const audio = getAudio();
        dispatch(updateIsPlay(true));
        if (props) {
            const {trackUrl , id} = props;
            await dispatch(updateSong({trackUrl, trackId : id}))
        }
        audio.play();
    }

    const setStopAudio = () => async (dispatch, getState) => {
        const audio = getAudio();
        await dispatch(updateIsPlay(false));
        audio.pause();
    }

    const setNextAudio = () => async (dispatch, getState) => {
        const audio = getAudio();
        const foundedIdTrack = songs.findIndex(track => trackId === track.id);
        const nextSound = songs[foundedIdTrack + 1];
        dispatch(updateIsPlay(true));
        await dispatch(updateSong({trackUrl : nextSound.trackUrl, trackId : nextSound.id}));
        audio.play();
    }

    const setPreviewAudio = () => async (dispatch, getState) => {
        const audio = getAudio();
        const foundedIdTrack = songs.findIndex(track => trackId === track.id);
        const nextSound = songs[foundedIdTrack - 1];
        dispatch(updateIsPlay(true));
        await dispatch(updateSong({trackUrl : nextSound.trackUrl, trackId : nextSound.id}));
        audio.play();
    }

    const getTimeAudio = () => {
        const audio = getAudio();
        console.log(audio.currentTime);
        return audio.currentTime;
    }

    return {
            setContextAudio,
            startControlerAudio,
            setPlayAudio,
            setStopAudio,
            setNextAudio,
            setPreviewAudio,
            getTimeAudio
    };
}

export default useControllerAudio;

