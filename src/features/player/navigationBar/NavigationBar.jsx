import styles from './NavigationBar.module.css'
import { NavLink } from 'react-router-dom'

export const NavigationBar = () => {
    const yourSections = [{
        name: 'Songs',
        path: 'songs'
    }, {
        name: 'Albums',
        path: 'albums'
    }, {
        name: 'Playlists',
        path: 'playlists'
    }]


    return (
        <ul>
            <h2>Your Music</h2>
            {yourSections.map(({ name, path }) => (
                <li key={name}>
                    <NavLink
                        to={path}
                        className={({ isActive }) =>
                            isActive ? styles.activeClass : undefined
                        }
                    >
                        {name}
                    </NavLink>
                </li>))}
        </ul>

    )
}