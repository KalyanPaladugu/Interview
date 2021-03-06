import axios from 'axios'
import React, { Component } from 'react'

export default class PersonInput extends Component {
       state={
           id:0
       }
             handleChange=(event)=>{
                this.setState({id:event.target.value})
             }
  handleSubmit= (event)=>{
  event.preventDefault();
  axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`,).then(
      res=>{
          console.log(res)
      }
  )
  }
 
 
 
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label for="id">Person ID:
                    <input type="number" name='id' onChange={this.handleChange} />
                </label>
                <button type="submit">Delete</button>
            </form>
         </div>
        )
    }
}
