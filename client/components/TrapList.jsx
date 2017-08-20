import React from 'react'
import { getTraps } from '../api'

export default class TrapList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            traps: []
        }
        this.setData = this.setData.bind(this)
    }

    setData(err, trapData) {
        if (err) {
            console.log(err)
        } else {
            this.setState({traps: trapData})
        }
    }

    componentDidMount () {
        console.log(this.setData)
        getTraps(this.setData)

    }

    render () {
        console.log(this.state.traps)
        console.log('traplist')
        return (
            <div>
              <ul>
                {this.state.traps.map(x => {
                    return (

                        <li>{x.description}
                          <p>[{x.latitude},{x.longitude}]</p>
                        </li>
                    )
                }
                                     )}
            </ul>
                </div>
        )
    }
}
