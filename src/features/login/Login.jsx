import { useEffect } from "react"

import { useSelector, useDispatch } from 'react-redux';
import { requestAuthorization } from "spotify"

export const Login = () => {
    const dispatch = useDispatch()
    const status = useSelector((state) => state.spotifySession.status);

    useEffect(() => {
        status === 'initial' && dispatch(requestAuthorization())
    }, [status, dispatch])


    return <div>login</div>
}