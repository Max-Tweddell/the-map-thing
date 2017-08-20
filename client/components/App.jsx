import React from 'react'
import {
    Route,
    HashRouter as Router,
} from 'react-router-dom'

import Home from './Home'
import Chart from './Chart'
import AddTrap from './AddTrap'
import TrapList from './TrapList'
import { getTraps } from '../api'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            traps: [{latitude: -36.1, longitude: 150.2}]
        }
        this.setTraps = this.setTraps.bind(this)
    }

    setTraps (err, trapData) {
        console.log(trapData)
        console.log("set traps")
        this.setState({
            traps: trapData || []
        })
    }


    componentDidMount () {
        console.log(this.setTraps)
        return getTraps(this.setTraps)

    }


    render (){
        return(
            <div>
              <Chart traps = {this.state.traps}/>
              <AddTrap/>
              <TrapList />
            </div>
        )
    }
}
