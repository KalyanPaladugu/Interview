import Axios from 'axios'
import React from 'react'
import { useState } from 'react'
export default function API() {
     const [joke,setJoke]=useState("")
    const getData= ()=>{
    //    Axios.get('https://official-joke-api.appspot.com/random_joke').then(
    //        response => {console.log(response)
    //        setJoke(response.data.setup+" ..."+ response.data.punchline)
    //         } )
      fetch('https://official-joke-api.appspot.com/random_joke').then(response => response.json()).then(data=>{
          setJoke(data.setup+" ... "+ data.punchline)
      })
    }
    return (
        <div>
          
           <button onClick={getData}>getData</button>
           {joke}
        </div>
    )
}
