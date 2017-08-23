import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchTraps} from '../actions'

import LoadTraps from './LoadTraps'

function TrapList ({traps}) {
    return (
        <div>
            <ul>
                {traps.map(x => {
                    return (
                        <li>{x.description}
                            <p>[{x.latitude},{x.longitude}]</p>
                        </li>
                    )
                })}
            </ul>
            <LoadTraps/>
        </div>
    )
}

TrapList.propTypes = {
    traps: PropTypes.array.isRequired
}

function mapStateToProps (state) {
    return {
        traps: state.traps
    }
}

export default connect(mapStateToProps)(TrapList)
