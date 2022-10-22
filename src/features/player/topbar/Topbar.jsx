import { Search } from "./search/Search"
import { User } from "./user/User"

//import styles from "./Topbar.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "spotify";

import styles from './Topbar.module.scss'

export const Topbar = () => {
    const dispatch = useDispatch()
    const { displayName, avatarURL } = useSelector((state) => state.spotifyProfile)


    useEffect(() => {
        dispatch(getUserProfile())
    }, [dispatch])

    return (
        <header className={styles.topbar}>
            <img width="200" height="45" className={styles.logo}  src="./assets/logo.png" alt="" />
            <Search />
            <User name={displayName} avatarURL={avatarURL} />
        </header>
    )
}