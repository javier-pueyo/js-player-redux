import { Topbar } from './topbar/Topbar'
import { MainPanel } from './mainPanel/MainPanel'
import { NavigationBar } from './navigationBar/NavigationBar'

// import de estilos
// import styles from './Player.module.scss'

export const Player = () => {
    return (
        <>
            <Topbar />
            <NavigationBar />
            <MainPanel />
        </>
    )
}