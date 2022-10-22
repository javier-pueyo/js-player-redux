import { doAuthorizedCall } from './spotify.api'
import { updateMyPlaylist } from './spotify.myPlaylist.slice'

export const getMyPlaylists = () => async (dispatch, getState) => {
    const response = await doAuthorizedCall({
        getState,
        url: 'https://api.spotify.com/v1/me/playlists',
        method: 'GET'
    })
    dispatch(updateMyPlaylist(response.items))
}