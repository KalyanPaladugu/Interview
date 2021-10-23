import React ,{useState,useEffect}from 'react'
import Axios from 'axios'


export default function DataFetchingOne() {

    const [loading,setLoading]=useState(true)
    const [error,setError]=useState('')
    const [post,setPost]=useState({})
    useEffect(()=>{
            Axios.get('https://jsonplaceholder.typicode.com/posts/1').then(
                res=>{
                setLoading(false)
                setError('')
                setPost(res.data)
                }
            ).catch(error=>{
                setPost({})
                setLoading(false)
                setError('Something Went Wrong')
            })
    },[])
    return (
        <div>
          {loading ? 'Loading' : post.id}  
          {error ? 'Error': null}
        </div>
    )
}
