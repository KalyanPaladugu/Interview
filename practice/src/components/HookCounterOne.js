import React,{useEffect,useState} from 'react'

export default function HookCounterOne() {

    const [score,setScore]=useState(0)
    const [name,setName]=useState("")
    useEffect(() => {
        console.log("Updated score ");
      document.title=`score is ${score}`
     },[score] )
    return (
        <div>
             <input type="text" value={name} onChange={(e)=>setName(e.target.value) }/>
            <button onClick={()=> setScore(score+1)}>Score is - {score}</button>
        </div>
    )
}
