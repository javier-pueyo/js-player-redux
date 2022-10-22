import { NavLink } from 'react-router-dom'

import styles from './NavigationBar.module.scss'

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
        <nav className={styles.navigationBar}>
            <h2 className={styles.title}>Your Music</h2>
            <ul className={styles.menu}>
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
        </nav>

    )
}