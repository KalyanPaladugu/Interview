import React, { Component } from 'react'
import Pure from './Pure';
import Reg from './Reg';
export default class Parent extends Component {
    constructor() {
        super()
    
        this.state = {
             name:"Kalyan"
        }
    }
    
    componentDidMount()
        {
            setInterval(()=>{
            this.setState({
                name:"Kalyan P"
            })
        },2000)
    }
    render() {
        console.log("..Parent Component...")
        return (
            <div>
                <Pure name={this.state.name} />
                <Reg name={this.state.name}/>
            </div>
        )
    }
}
