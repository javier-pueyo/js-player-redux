import { Topbar } from './topbar/Topbar'
import { MainPanel } from './mainPanel/MainPanel'
import { NavigationBar } from './navigationBar/NavigationBar'

// import de estilos
import styles from './Player.module.css'

export const Player = () => {
    return (
        <>
            <Topbar />
            <div >
                <div >
                    <NavigationBar />
                </div>
                <div className={styles.rightColumn}>
                    <MainPanel />
                </div>
            </div>
        </>
    )
}