import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyAlbums } from "spotify";

import styles from "./Albums.module.css";


export const Albums = () => {
    const dispatch = useDispatch()
    const { albums } = useSelector((state) => state.spotifyMyAlbums)

    useEffect(() => {
        dispatch(getMyAlbums())
    }, [dispatch])

    return (
        <ul>
            {albums.map(album => <li key={album.id}><img className={styles.img} alt={album.name} src={album.images[0]?.url} /></li>)}
        </ul>
    )

}