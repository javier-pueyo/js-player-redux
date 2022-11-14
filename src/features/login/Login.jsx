import { useEffect } from "react"

import { useSelector, useDispatch } from 'react-redux';
import { requestAuthorization } from "spotify"

export const Login = () => {
    const dispatch = useDispatch()
    const status = useSelector((state) => state.spotifySession.status);

    useEffect(() => {
        status === 'initial' && dispatch(requestAuthorization())
    }, [status, dispatch])


    return (
        <div style={{width: 100 + 'vw', margin: 15 + 'px'}}>
            <p><b>Production Login User:</b></p>
            <p>email: pueyo.mir@gmail.com</p>
            <p>pass: pueyomir92</p>
        </div>
    )
}