import React from 'react'
import { AdminNavigation } from '../../common/adminNavigation'
import Slider from '../../common/Caro';


class Admin extends React.Component{
 render(){
   return(
    <React.Fragment>
    <AdminNavigation/>
    <div className='home-container'>
        <div className="slider"><Slider/></div>
    </div>
    </React.Fragment>
   )
 } 
}

export default Admin