import { Topbar } from './topbar/Topbar'
import { MainPanel } from './mainPanel/MainPanel'
import { NavigationBar } from './navigationBar/NavigationBar'
import { AudioContext } from '../../context/Context';
import useControllerAudio from 'hooks/useControllerAudio.hook';

// import de estilos
// import styles from './Player.module.scss'

export const Player = () => {
    const controllerPlayer = useControllerAudio();

    return (
        <AudioContext.Provider value={controllerPlayer.setContextAudio()}> 
            <Topbar />
            <NavigationBar />
            <MainPanel />
        </AudioContext.Provider>
    )
}