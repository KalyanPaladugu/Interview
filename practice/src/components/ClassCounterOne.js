import React, { Component ,useEffect} from 'react'

export default class ClassCounterOne extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             score:0,
             name:""
        }
    }
    componentDidMount(){
        console.log("Initial score");
        document.title=`Your score is ${this.state.score}`
    }
    componentDidUpdate(prevProps,prevState){

  
  if(prevState.score !==this.state.score){
    console.log("Updated score");
  document.title=`Your score is ${this.state.score}`
  }
    }
    render() {
        
        return (
            <div>
                  <h1>Score is {this.state.score}</h1>
                  <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value}) }/>
                  <button onClick={()=> this.setState({score:this.state.score+1})}>{this.state.score}</button>         
            </div>
        )
    }
}
