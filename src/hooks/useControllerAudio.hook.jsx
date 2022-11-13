import { updateIsPlay, updateSong, updateRef } from '../redux/controllerAudio.slice'
import { useSelector } from "react-redux";

const useControllerAudio = () => {
    // const { ref, trackId } = useSelector((state) => state.controllerAudio);

    const startControlerAudio = (getRef) => async (dispatch, getState) => {
        console.log('holi', getRef);
        dispatch(updateRef(getRef));
    }

/*     const setPlayAudio = () => async (dispatch, getState) => {
        ref.src = getState.trackUrl;
        ref.play();
        dispatch(updateSong(getState))
        dispatch(updateIsPlay(true));
    }

    const setStopAudio = () => async (dispatch, getState) => {
        ref.src = getState.trackUrl;
        ref.pause();
        dispatch(updateIsPlay(false));
    }

    const setNextAudio = () => async (dispatch, currentList) => {
        const foundedIdTrack = currentList.findIndex(track => trackId === track.id);
        const nextSound = currentList[foundedIdTrack + 1];
        ref.load();
        ref.src = nextSound.trackUrl;
        dispatch(updateSong({trackUrl : nextSound.trackUrl, trackId : nextSound.id}));
    }

    const getTimeAudio = () => {
        return ref.currentTime;
    } */

    return {
            startControlerAudio,
            // setPlayAudio,
            // setStopAudio,
            // setNextAudio,
            // getTimeAudio
    };
}

export default useControllerAudio;

