import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Marker, Popup} from 'react-leaflet'

export default function Trap (props) {
    return (
        <Marker position = {[props.trap.latitude, props.trap.longitude]}>
            <Popup>
                <span>Description: {props.trap.description}</span>
            </Popup>
        </Marker>
    )
}
Trap.propTypes = {
    trap: PropTypes.object.isRequired
}
