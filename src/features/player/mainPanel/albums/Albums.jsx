import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyAlbums } from "spotify";

import styles from "./Albums.module.scss";


export const Albums = () => {
    const dispatch = useDispatch()
    const { albums } = useSelector((state) => state.spotifyMyAlbums)
    console.log(albums);

    useEffect(() => {
        dispatch(getMyAlbums())
    }, [dispatch])

    return (
        <div className={styles.albums}>
            <ul className="row"> 
                {albums.map(album => {
                    return(
                        <li className={styles.item} key={album.id}>
                            <img src={album.images[0].url} alt="" />
                            <p>{album.name}</p>
                            <a href={album.external_urls.spotify} target="_blank" rel="noreferrer">Ver album</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}