import React from 'react'
import { UserContext } from '../App'
import { ChanelContext } from '../App'
export default function ComponentF() {
    return (
        <div>
          <UserContext.Consumer>
                 {
                     user =>{
                         return (
                         <ChanelContext.Consumer>
                             {
                                    chanel =>{
                                        return (
                                            <div>
                                              {user} is   {chanel}
                                            </div>
                                        )
                                    }
                                 }
                                 </ChanelContext.Consumer>
                      
                         )
                     }
                 }
          </UserContext.Consumer>
        </div>
    )
}
