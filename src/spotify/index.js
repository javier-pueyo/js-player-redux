import { spotifyProfileReducer } from './spotify.profile.slice'
import { spotifySessionReducer } from './spotify.session.slice'

import { spotifyMyAlbumsReducer } from './spotify.myAlbums.slice'
import { spotifyMyPlaylistReducer } from './spotify.myPlaylist.slice'

export * from './spotify.api'
export * from './spotify.session.api'
export * from './spotify.session.slice'
export * from './spotify.profile.api'
export * from './spotify.profile.slice'
export * from './spotify.myAlbums.api'
export * from './spotify.myAlbums.slice'
export * from './spotify.myPlaylist.api'
export * from './spotify.myPlaylist.slice'

export const spotifyReducers = {
    spotifyProfile: spotifyProfileReducer,
    spotifySession: spotifySessionReducer,
    spotifyMyAlbums: spotifyMyAlbumsReducer,
    spotifyMyPlaylist: spotifyMyPlaylistReducer,
}