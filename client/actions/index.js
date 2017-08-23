import request from 'superagent'

// traps
export const GET_TRAPS = 'GET_TRAPS'
export const RECEIVE_TRAPS = 'RECEIVE_TRAPS'
export const REQUEST_TRAPS = 'REQUEST_TRAPS'
export const ADD_TRAP = 'ADD_TRAP'
export const SHOW_ERROR = 'SHOW_ERROR'

export function requestTraps () {
    return {
        type: REQUEST_TRAPS
    }
}

export function requestDeleteTrap () {

}

export function addNewTrap (trap) {
    return {
        type: ADD_TRAP,
        trap: trap
    }
}

export function receiveTraps (traps) {
    console.log(traps)
    return {
        type: RECEIVE_TRAPS,
        traps: traps
    }
}
export function showError (errorMessage) {
    return {
        type: SHOW_ERROR,
        errorMessage: errorMessage
    }
}

export function fetchTraps () {
    return (dispatch) => {
        dispatch(requestTraps())
        request
            .get('/api/v1/traps')
            .end((err, res) => {
                if (err) {
                    dispatch(showError(err.message))
                } else {
                    dispatch(receiveTraps(res.body.traps))
                }
            })
    }
}

export function addTrap (trap, cb) {
    return (dispatch) => {
        request
            .post('/api/v1/traps')
            .send(trap)
            .end((err, res) => {
                if (err) {
                    dispatch(showError(err.message))
                } else {
                    dispatch(fetchTraps())
                    cb()
                }
            })
    }
}
