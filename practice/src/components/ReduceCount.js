import React ,{useReducer}from 'react'

const initialState=0
const reducer=(state,action)=>{

    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1

        case 'reset':
            return initialState
    }

}

export default function ReduceCount() {

   const [count,dispatch]=useReducer(reducer,initialState)
    return (
        <div>
            <button onClick={()=> dispatch('increment')}>Increment</button>
            <button onClick={()=> dispatch('decrement')}>Decrement</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
            count is -{count}
        </div>
    )
}
