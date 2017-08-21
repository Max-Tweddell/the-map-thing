import {combineReducers} from 'redux'

import errorMessage from './error-message'
import traps from './traps'

export default combineReducers({
    errorMessage,
    traps
})
