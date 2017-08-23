import React from 'react'
import PropTypes from 'prop-types'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { connect } from 'react-redux'

import { fetchTraps } from '../actions'
import Trap from './Trap'


function Chart (props) {
    props.dispatch(fetchTraps())
    let traps = props.traps
    return (
        <Map center={[-36.84, 174.74]} zoom={13}>
            <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
            {traps.map((trap) => {
                return (
                    <Trap trap ={trap} />
                )
            })
            }
            <Marker position={[traps[0].latitude, traps[0].longitude]}>
                <Popup>
                    <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
                </Popup>
            </Marker>
        </Map>
    )
}

Chart.propTypes = {
    traps: PropTypes.array.isRequired
}

function mapStateToProps (state) {
    return {
        traps: state.traps
    }
}

export default connect(mapStateToProps)(Chart)
