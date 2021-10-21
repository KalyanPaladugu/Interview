import React, { Component } from 'react'
import WithCounter from './withCounter'
class HoverCounter extends Component {
    render() {
        const {count,increment}=this.props
        return (
            <div>
                <h2 onMouseOver={increment}>Hovered {count} times</h2>
            </div>
        )
    }
}

export default WithCounter(HoverCounter,8)
