import React, { Component } from 'react'
import axios from 'axios';
export default class PersonsList extends Component {

    state={
        PersonsList:[]
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(
            response =>{
               console.log(response)
                this.setState({PersonsList:response.data})
            }
        )
    }
    render() {
        return (
            <div>
                <h1>Welcome </h1>
                <ul>
                    {this.state.PersonsList.map(person=> <li key={person.id}>{person.name}</li> )
                    }
                </ul>
            </div>
        )
    }
}
