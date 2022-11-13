export const createActions = store => ({
    increment: (num) => store.setState({ count: store.state.count + num }),
    decrement: (num) => store.setState({ count: store.state.count - num }),
    multiply: (num) => store.setState({ count: store.state.count * num }),
    mid: (num) => store.setState({ count: store.state.count / num }),
})