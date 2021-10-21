import React, { Component } from 'react'

export default class Reg extends Component {
    render(props) {
        console.log("...REg...")
        return (
            <div>
                <h2>Regular Component {this.props.name}</h2>
            </div>
        )
    }
}
