import RECEIVE_TRAPS from '../actions'

function traps (state = [], action) {
    switch (action.type) {
    case RECEIVE_TRAPS:
        return action.traps
    default:
        return state
    }
}

export default traps
