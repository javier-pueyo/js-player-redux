import styles from './User.module.scss'

export const User = ({ name, avatarURL }) => {
    return (
        <div>
            {avatarURL && <img className={styles.avatar} src={avatarURL} alt='Avatar' />}
            <p>{name}</p>
        </div>
    )
}