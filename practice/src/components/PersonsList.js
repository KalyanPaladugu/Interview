import React, { Component } from 'react'
import axios from 'axios'
export default class PersonsList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             personsList:[]
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            response => {console.log(response)
            this.setState({personsList:response.data})
             } )
    }

    render() {
        return (
            <div>
              <ul>
               {
                //    this.state.personsList
                this.state.personsList.map((data) => 
                    <li key="data.id">{data.id}. {data.name}</li>
                )
               }      
            </ul>  
            </div>
        )
    }
}
