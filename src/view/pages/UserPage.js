import React from 'react'
import Slider from '../../common/Slider';
import { Summary } from '../../common/Summary';
import {Navigation} from '../../common/Navigation'
import {OnlineUsers} from '../../common/OnlineUsers'
import CommentBox from '../../commentBox/comment';
import { UsersStatus } from './UsersStatus';

class UserPage extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
    }
  }
  render(){
    const {id} = this.state
   return(
      <React.Fragment>
        <Navigation/>
        <Slider className='slider'/>
        <div className='user-home-container'>
          <Summary/>
          <UsersStatus/>
        </div>
    </React.Fragment>
   )
 } 
}

export default UserPage