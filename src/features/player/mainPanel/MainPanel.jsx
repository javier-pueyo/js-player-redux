import { Route, Routes } from "react-router-dom"

//import styles from './MainPanel.module.css'

import { Albums } from './albums/Albums'

export const MainPanel = () => {
    return (
        <>
            <Routes>
                <Route index element={<Albums />} />
                <Route path="albums" element={<Albums />} />
            </Routes>
        </>
    )
}