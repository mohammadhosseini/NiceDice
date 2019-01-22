import React from 'react'
import { AdminNavigation } from '../../common/adminNavigation'
import Slider from '../../common/Caro';
import {AdminSideBar} from '../../common/adminSideBar'
import AdminCommentBox from '../../commentBox/adminComment';

class AdminUR extends React.Component{
 render(){
    var comments = [
      { id: '1', author: 'Ali', text: 'Blah Blah Blahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' , stars : 3},
      { id: '2', author: 'Sina', text: 'HaHaHaHa' , stars : 5}
    ];   
    return(
      <React.Fragment>
      <AdminNavigation/>
      <div className='admin-home-container'>
        <AdminSideBar className='side-bar'/>
        <AdminCommentBox className='comment-box' comments = {comments}/>
      </div>
      </React.Fragment>
    )
 } 
}

export default AdminUR