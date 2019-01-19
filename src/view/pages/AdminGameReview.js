import React from 'react'
import { AdminNavigation } from '../../common/adminNavigation'
import Slider from '../../common/Caro';
import {AdminSideBar} from '../../common/adminSideBar'
import CommentBox from '../../commentBox/comment';


class AdminGR extends React.Component{
 render(){
    var comments = [
        { id: '1', author: 'Ali', text: 'Blah Blah Blah' , stars : 3},
        { id: '2', author: 'Sina', text: 'HaHaHaHa' , stars : 5}
    ];
   return(
    <React.Fragment>
    <AdminNavigation/>
    <div className='home-container'>
        <AdminSideBar className='side-bar'/>
        <CommentBox className='comment-box' comments = {comments}/>
    </div>
    </React.Fragment>
   )
 } 
}

export default AdminGR