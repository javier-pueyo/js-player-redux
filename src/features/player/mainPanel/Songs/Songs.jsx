import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMySongs } from "spotify";
import React from 'react';

import styles from "./Songs.module.scss";

const playlist = {
    ref: {},
    isplaying : false,
    trackUrl : ''
}

export const Songs = () => {
    const dispatch = useDispatch();
    const refSong = useRef([]);
    const [currentPlaySong, setcurrentPlaySong] = useState(null);
    const { songs } = useSelector((state) => state.spotifyMySongs);
    const audioElement = new Audio();
    console.log('paused', audioElement.paused);
    console.log(songs);

    useEffect(() => {
        dispatch(getMySongs())
        refSong.current = songs.map((element, i) => refSong.current[i] ?? React.createRef());
    }, [dispatch])
    

    const makeRef = (element, index) => {
        // const newRef = React.createRef();
        refSong.current.push(element);
        return refSong.current[index];
    }
    

    const playSong = (track = null, newrefSong = null) => {
        console.log('track', track);
        setcurrentPlaySong(newrefSong);
        audioElement.src = track.trackUrl;
        audioElement.load();
        currentPlaySong ? audioElement.pause() : audioElement.play();
        console.log('paused', audioElement.paused);
        // console.log('prueba', searchNextSong(dataId));
        console.log('reproducir', newrefSong.current);
    }

/*     audioElement.addEventListener('ended', (event) => {
        const dataId = refSong.current[currentPlaySong].current.attributes.data_id.value;
        // console.log('id', refSong.current.attributes.data_id);
        audioElement.src = searchNextSong(dataId);
        audioElement.play();
    });

    const searchNextSong = (currentIdSong) => {
        const foundedIdTrack = songs.findIndex(track => currentIdSong === track.id);
        const nextSound = songs[foundedIdTrack + 1];
        return nextSound.trackUrl;
    } */

    return (
        <div className={styles.songs}>
            <ul className={styles.name}>
                <li><p>Song</p></li>
                <li><p>Artist</p></li>
                <li><p>Album</p></li>
            </ul>
            <ul>
                {songs.map((track, i) => {
                    return(
                        <li className={styles.track} key={track.id} onClick={() => {playSong(track, i)}} ref={refSong.current[i]} data_id={track.id}>
                            <p>{track.trackName}</p>
                            <p>{track.artists}</p>
                            <p>{track.albumName}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}