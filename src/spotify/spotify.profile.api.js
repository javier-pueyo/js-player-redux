import { doAuthorizedCall } from './spotify.api'
import { updateProfileData } from './spotify.profile.slice'

export const getUserProfile = () => async (dispatch, getState) => {
    const response = await doAuthorizedCall({
        getState,
        url: 'https://api.spotify.com/v1/me',
        method: 'GET'
    })
    const displayName = response.display_name
    const avatar = response.images?.[0]?.url ?? ''
    dispatch(updateProfileData({ displayName, avatar }))
}