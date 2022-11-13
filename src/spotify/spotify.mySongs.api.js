import { doAuthorizedCall } from './spotify.api'
import { updateMySongs } from './spotify.mySongs.slice'

export const getMySongs = () => async (dispatch, getState) => {
    const response = await doAuthorizedCall({
        getState,
        url: 'https://api.spotify.com/v1/me/tracks',
        method: 'GET'
    })
    console.log('response', response.items);
    dispatch(updateMySongs(response.items.map(
        item => {
            const mapSong = {
                id : item.track.id,
                trackName : item.track.name,
                trackUrl : item.track.preview_url,
                artists : item.track.artists[0].name,
                albumName : item.track.album.name,
                albumImage : item.track.album.images[0].url,
                isplaying : false
            }
            return(mapSong)
        }
    )))
}