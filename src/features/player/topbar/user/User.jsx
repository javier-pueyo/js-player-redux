import styles from './User.module.css'

export const User = ({ name, avatarURL }) => {
    return (
        <>
            {avatarURL && <img className={styles.avatar} src={avatarURL} alt='Avatar' />}
            <p>{name}</p>
        </>
    )
}