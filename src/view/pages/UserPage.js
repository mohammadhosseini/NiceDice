import React from 'react'
import Slider from '../../common/Caro';
import { Summary } from '../../common/Summary';
import {Navigation} from '../../common/Navigation'
import {OnlineUsers} from '../../common/OnlineUsers'

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
        <div className='user-home-container'>
          <Slider/>
          <Summary/>
          <OnlineUsers/>
        </div>
    </React.Fragment>
   )
 } 
}

export default UserPage