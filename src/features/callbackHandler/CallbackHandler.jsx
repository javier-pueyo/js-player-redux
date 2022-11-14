import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { requestAccesToken } from 'spotify';
import { setTokens } from 'app/session'

let apiFetched = false

// Este componente esta pensado para renderezarse solamente en el modal de autenticación

export const CallbackHandler = () => {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');
    console.log('codeStart', code);

    const getTokens = async (code) => {
        console.log('codeProcess', code);
        if (apiFetched) {
            return
        }

        apiFetched = true
        try {
            const response = await requestAccesToken(code)
            console.log('response', response);
            if (response.access_token && response.refresh_token) {
                setTokens(response.access_token, response.refresh_token)
                window.opener.location.reload()
                window.close()
            } else {
                console.log('response-notoken', response);
                throw response
            }
        } catch (error) {
            console.log('response-error', error);
            console.error(error);
        }
    }

    useEffect(() => {
        code && getTokens(code)
    }, [code])


    return (
        <div style={{width: 100 + 'vw', margin: 15 + 'px'}}>
            <p><b>Production Login User:</b></p>
            <p>email: pueyo.mir@gmail.com</p>
            <p>pass: pueyomir92</p>
        </div>
    )
}