import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMySongs } from "spotify";
import useControllerAudio from "hooks/useControllerAudio.hook";
import React from 'react';

import styles from "./Songs.module.scss";

export const Songs = () => {
    const dispatch = useDispatch();
    const refSong = useRef([]);
    const { songs } = useSelector((state) => state.spotifyMySongs);
    const controllerPlayer = useControllerAudio();

    useEffect(() => {
        dispatch(getMySongs());
        refSong.current = songs.map((element, i) => refSong.current[i] ?? React.createRef());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                        <li className={styles.track} key={track.id} onClick={() => {dispatch(controllerPlayer.setPlayAudio(track))}} ref={refSong.current[i]} data_id={track.id}>
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