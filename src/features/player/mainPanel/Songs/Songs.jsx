import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyAlbums } from "spotify";
import React from 'react';

import styles from "./Songs.module.scss";


export const Songs = () => {
    const dispatch = useDispatch()
    const { albums } = useSelector((state) => state.spotifyMyAlbums)
    console.log(albums);

    useEffect(() => {
        dispatch(getMyAlbums())
    }, [dispatch])

    return (
        <div className={styles.albums}>
            <ul className={styles.name}>
                <li><p>Song</p></li>
                <li><p>Artist</p></li>
                <li><p>Album</p></li>
            </ul>
            <ul>
                {albums.map(album => {
                    return(
                        <React.Fragment key={album.id}>
                            { album.tracks.items.map(track => {
                                return(
                                <li className={styles.track} key={track.id}>
                                    <p>{track.name}</p>
                                    <p>{track.artists[0].name}</p>
                                    <p>{album.name}</p>
                                </li>
                                )
                            })}
                        </React.Fragment>
                    )
                })}
            </ul>
        </div>
    )

}