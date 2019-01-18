import React from 'react'
import { UsersStatus } from './UsersStatus'
import { Navigation } from '../../common/Navigation'

class Users extends React.Component{
 render(){
   return(
     <div>
       <Navigation/>
       <UsersStatus/>
     </div>
   )
 } 
}

export default Users