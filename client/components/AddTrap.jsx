import React from 'react'
import { postTrap } from '../api'

export default class AddTrap extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            latitude: 0,
            longitude: 0,
            description: ''
        }
    }

    fieldChanged (e) {
        // e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addTrap (e) {
        let trap = this.state
        console.log(trap)
        console.log('addTrap')
        postTrap(trap, this.props.finishAdd)

    }
    render() {
        return (
            <div className = "add-trap">
              <form>
                <p> Description </p>
                <br/>
                Latitude
                <input type="number" step="0.00001" name="latitude"
                       onChange={e => this.fieldChanged(e)}/>
                  <br/>
                  Longitude
                  <input type="number" step="0.00001" name="longitude"
                         onChange={e => this.fieldChanged(e)}/>
                    <br/>
                    Description
                    <input type="text" name = "description" onChange={e => this.FieldChanged(e)}/>
                      <button onClick={e => this.addTrap(e)}> add trap</button>
              </form>
            </div>
        )

    }
}
