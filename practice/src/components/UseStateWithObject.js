import React,{useState} from 'react'


export default function UseStateWithObject() {
    const [user,setUser]=useState({firstName:"",lastName:""})
    return (
        <div>
            <form action="">

              <input type="text" value={user.firstName} onChange={event => 
                setUser({...user,firstName:event.target.value})} />
                <input type="text" value={user.lastName} onChange={event => 
                setUser({...user,lastName:event.target.value})} />


            </form>

            <h1>First Name is - {user.firstName}</h1>
            <h1>Last Name is - {user.lastName}</h1>
        </div>
    )
}
