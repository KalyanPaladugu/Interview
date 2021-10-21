import React, { PureComponent } from 'react'

export class Pure extends PureComponent {
    render(props) {

        console.log("...Pure...")
        return (
            <div>
                <h1>Pure Component {this.props.name}</h1>
            </div>
        )
    }
}

export default Pure
