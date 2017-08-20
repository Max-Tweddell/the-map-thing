import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import Trap from './Trap'

export default function Chart (props) {

    console.log(props.traps)
    let traps = props.traps
    console.log("traps")
    return (
        <Map center={[-36.84, 174.74]} zoom={13}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
          {traps.map((trap) => {
              return (
                  <Trap trap ={trap} />
              )})
          }
            <Marker position={[traps[0].latitude,traps[0].longitude]}>
            <Popup>
            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
            </Popup>
            </Marker>
            </Map>
    )

}
