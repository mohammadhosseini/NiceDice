import React from 'react'
import User from '../../common/User'
import '../../css/users-status.css'
import { FaLessThanEqual } from 'react-icons/fa';


export class UsersStatus extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      users:[
        {
          id:1,
          username: 'user1',
          status:'Online',
          src:'https://www.profiletalent.com.au/wp-content/uploads/2017/05/profile-talent-ant-simpson-feature.jpg',
          details: true,
          avgScore: 100,
        },
        {
          id:2,
          username: 'user2',
          status:'Online',
          src:'https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-all-about-face.jpg',
          detail: true,
          avgScore: 100,
        },
        {
          id:3,
          username: 'user3',
          status:'Offline',
          src:'https://weneedfun.com/wp-content/uploads/2015/09/Cute-baby-girl-pics-for-facebook-profile-12.jpg',
          detail: true,
          avgScore: 100,
        },
        {
          id:4,
          username: 'user1',
          status:'Online',
          src:'https://www.profiletalent.com.au/wp-content/uploads/2017/05/profile-talent-ant-simpson-feature.jpg',
          detail: true,
          avgScore: 100,
        },
        {
          id:5,
          username: 'user2',
          status:'Online',
          src:'https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-all-about-face.jpg',
          detail: true,
          avgScore: 100,
        },
        {
          id:6,
          username: 'user3',
          status:'Online',
          src:'https://weneedfun.com/wp-content/uploads/2015/09/Cute-baby-girl-pics-for-facebook-profile-12.jpg',
          detail: true,
          avgScore: 100,
        },
      ]
    }
  }

  render(){
    const {users} = this.state
    return (
      <div className='online-users'>
        <div className='users-online-users'>
        </div>
        <div className='online-users-container'>
        {users.map(user => <User key={user.id} user={user}/>)}
        </div>
      </div>
    )
  }
}