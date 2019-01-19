import React from 'react'
import { UsersStatus } from './UsersStatus'
import { Navigation } from '../../common/Navigation'
import {UsersSideBar} from '../../common/UsersSideBar'
import {OnlineUsers} from '../../common/OnlineUsers'

class Users extends React.Component{
 render(){
   return(
    <React.Fragment>
    <Navigation/>
    <div className='home-container'>
      <UsersSideBar/>
      <OnlineUsers/>
    </div>
    </React.Fragment>
   )
 } 
}

export default Users