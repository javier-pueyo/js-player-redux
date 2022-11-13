import { createActions } from './actions.context'

export const createStore = (state) => {
    const actions = createActions(state)
    return { ...state, actions }
}