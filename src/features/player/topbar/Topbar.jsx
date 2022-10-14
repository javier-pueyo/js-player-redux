import { Search } from "./search/Search"
import { User } from "./user/User"

//import styles from "./Topbar.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "spotify";

export const Topbar = () => {
    const dispatch = useDispatch()
    const { displayName, avatarURL } = useSelector((state) => state.spotifyProfile)


    useEffect(() => {
        dispatch(getUserProfile())
    }, [dispatch])

    return (
        <div style={{ background: 'red' }}>
            <p>Topbar</p>
            <header>
                <div ><p>logo</p></div>
                <div ><Search /></div>
                <div ><User name={displayName} avatarURL={avatarURL} /></div>

            </header>
        </div>
    )
}