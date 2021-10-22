import React,{useState} from 'react'

function UseStateWithArray() {

    const [data,setData]=useState([])


    let addList=()=>{
        setData([...data,{
            id:data.length,
            value:Math.floor(Math.random()*10)+1,
            age:20
        }])
    }
    return (
        <div>
            <button onClick={addList}>Add Number</button>
            <ul>
                {
                    data.map( list=>(
                       <li key={list.id}>{list.value}{list.age}</li> 
                    )
                    )
                }
            </ul>
        </div>
    )
}

export default UseStateWithArray
