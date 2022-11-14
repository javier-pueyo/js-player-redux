import { authorizationRequested, hasBeenAuthorized } from "./spotify.session.slice";


//deployed
const CLIENT_ID = '5d4fb8c1ce75440eb9c0d7ad61790a4a';
const CLIENT_SECRET = '2a1b4e5bc365420e9251e2503775709e';
const REDIRECT_URI = 'https://js-player-redux.netlify.app/callback';
const SPOTIFY_URL = 'https://accounts.spotify.com'


//production
/* const CLIENT_ID = '0f4a363667ae4c5698d81900b79243b1';
const CLIENT_SECRET = '584f6c65d8234dcab80c724a5c06f5f6';
const REDIRECT_URI = 'http://localhost:3000/callback';
const SPOTIFY_URL = 'https://accounts.spotify.com' */


const scopes = [
    'playlist-read-private',
    'user-follow-read',
    'user-read-playback-state',
    'user-modify-playback-state',
    'streaming',
    'user-read-private',
    'user-library-read',
    'user-read-email',
    'user-read-currently-playing'
]


const login = () => {
    const width = 450;
    const height = 730;
    const left = (window.screen.width / 2) - (width / 2);
    const top = (window.screen.height / 2) - (height / 2);

    const url = `${SPOTIFY_URL}/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(scopes.join(' '))}&response_type=code`;
    console.log(url);

    window.open(url,
        'Spotify',
        'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
    );

}

export const requestAuthorization = () => (dispatch, getState) => {
    const spotifyStatus = getState().spotifySession.status
    if (spotifyStatus === 'initial') {
        const accessToken = localStorage.getItem('AT')
        const refreshToken = localStorage.getItem('RT')
        if (accessToken && refreshToken) {
            dispatch(hasBeenAuthorized({
                accessToken,
                refreshToken
            }))
        } else {
            dispatch(authorizationRequested())
            login()
        }
    }
}

export const requestAccesToken = async (code) => {
    const url = SPOTIFY_URL + '/api/token';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
                authorization: `Basic ${window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)}`,
            },
            body: new URLSearchParams({
                code,
                grant_type: 'authorization_code',
                redirect_uri: REDIRECT_URI
            }),
        })
        console.log('response-requestAccesToken', response);
        if (response.ok) {
            return await response.json()
        } else {
            console.error(response)
        }
    } catch (e) {
        console.error(e)
    }
}