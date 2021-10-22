import React from 'react'
import ComponentF from './ComponentF'
import { useContext } from 'react'
import { UserContext,ChanelContext } from '../App'
export default function ComponentE() {
    const user=useContext(UserContext)
    const chanel=useContext(ChanelContext)
    return (
        <div>
         {user} chanel is {chanel}
        </div>
    )
}
