import { Route, Routes } from "react-router-dom"

//import styles from './MainPanel.module.css'

import { Albums } from './albums/Albums'
import { Playlist } from "./Playlist/Playlist"
import { Songs } from "./Songs/Songs"
import Controlplayer from "./Controlplayer/Controlplayer"

import styles from './MainPanel.module.scss'

export const MainPanel = () => {
    return (
        <main className={styles.mainpanel}>
            <Routes>
                <Route index element={<Albums />} />
                <Route path="albums" element={<Albums />} />
                <Route path="playlists" element={<Playlist />} />
                <Route path="songs" element={<Songs />} />
            </Routes>
            {/* <Controlplayer /> */}
        </main>
    )
}