import { doAuthorizedCall } from './spotify.api'
import { updateMyAlbums } from './spotify.myAlbums.slice'

export const getMyAlbums = () => async (dispatch, getState) => {
    const response = await doAuthorizedCall({
        getState,
        url: 'https://api.spotify.com/v1/me/albums',
        method: 'GET'
    })
    dispatch(updateMyAlbums(response.items.map(item => item.album)))
}