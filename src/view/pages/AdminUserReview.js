import React from 'react'
import { AdminNavigation } from '../../common/adminNavigation'
import Slider from '../../common/Caro';
import {AdminSideBar} from '../../common/adminSideBar'


class AdminUR extends React.Component{
 render(){
   return(
    <React.Fragment>
    <AdminNavigation/>
    <div className='home-container'>
        <AdminSideBar/>
    </div>
    </React.Fragment>
   )
 } 
}

export default AdminUR