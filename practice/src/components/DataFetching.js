import React ,{useState,useEffect}from 'react'
import axios from 'axios'
export default function DataFetching() {

    const [posts,setPost]=useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/').then(
            res=>
             setPost(res.data)
        ).catch(
            error => console.log(error)
        )
    })
    return (
        <div>
            <ul>
                {
                  posts.map((value)=> (
                      <li key={value.id}>{value.title}</li>
                  ))
                }
            </ul>
        </div>
    )
}
