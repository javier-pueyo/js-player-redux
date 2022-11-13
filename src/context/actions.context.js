export const createActions = store => ({
    setAudio: (audio) => store.setState({ audio: store.state.audio})
})