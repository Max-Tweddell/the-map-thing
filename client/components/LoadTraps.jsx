import React from 'react'
import {connect} from 'react-redux'
import {fetchTraps} from '../actions'

function LoadTraps ({dispatch}) {
    return (
        <button onClick={() => dispatch(fetchTraps())}>Load Traps</button>
    )
}

export default connect()(LoadTraps)
