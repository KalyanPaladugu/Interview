import React ,{useState,useEffect}from 'react'
import axios from 'axios'
export default function DataFetching() {

    const [post,setPost]=useState({})
    const [id,setId]=useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
            res=>
             setPost(res.data)
        ).catch(
            error => console.log(error)
        )
    })
    return (
        <div>
            <input type="text" value={id} onChange={(e)=> setId(e.target.value) } />
            {/* <ul>
                {
                  posts.map((value)=> (
                      <li key={value.id}>{value.title}</li>
                  ))
                }
            </ul> */}
            <div>{post.title}</div>
        </div>
    )
}
