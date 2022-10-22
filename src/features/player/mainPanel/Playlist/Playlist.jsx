import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyPlaylists } from "spotify";

import styles from "./Playlist.module.scss";


export const Playlist = () => {
    const dispatch = useDispatch()
    const { playlists } = useSelector((state) => state.spotifyMyPlaylist)
    console.log(playlists);

    useEffect(() => {
        dispatch(getMyPlaylists())
    }, [dispatch])

    return (
        <div className={styles.playlist}>
            <ul className="row">
                {playlists.map(playlist => {
                        return(
                            <li className={styles.item} key={playlist.id}>
                                <img src={playlist.images[0].url} alt="" />
                                <p>{playlist.name}</p>
                                <a href={playlist.external_urls.spotify} target="_blank" rel="noreferrer">Ver playlist</a>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )

}