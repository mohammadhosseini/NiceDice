import React from 'react'
import '../css/online-users.css'
import User from './User';




export class OnlineUsers extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      users: [
        {
          id:1,
          username: 'user1',
          status:'Online',
          src:'https://www.profiletalent.com.au/wp-content/uploads/2017/06/Angus-McColl-368x264.jpg',
          detail: false,
          avgScore: 100,
        },
        {
          id:2,
          username: 'user2',
          status:'Online',
          src:'https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-all-about-face.jpg',
          detail: false,
          avgScore: 100,
        },
        {
          id:3,
          username: 'user3',
          status:'Online',
          src:'https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-all-about-face.jpg',
          detail: false,
          avgScore: 100,
        },
        {
          id:4,
          username: 'user4',
          status:'Online',
          src:'https://www.profiletalent.com.au/wp-content/uploads/2017/06/Claire-Gazzo-368x264.jpg',
          detail: false,
          avgScore: 100,
        },
        {
          id:5,
          username: 'user5',
          status:'Offline',
          src:'https://www.profiletalent.com.au/wp-content/uploads/2017/06/Mark-Kenfield-600x317.jpg',
          detail: false,
          avgScore: 100,
        },
        {
          id:6,
          username: 'user6',
          status:'Online',
          src:'https://www.profiletalent.com.au/wp-content/uploads/2017/05/profile-talent-ant-simpson-feature.jpg',
          detail: false,
          avgScore: 100,
        },
        {
          id:7,
          username: 'user7',
          status:'Offline',
          src:'https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-all-about-face.jpg',
          detail: false,
          avgScore: 100,
        },
        {
          id:8,
          username: 'user8',
          status:'Offline',
          src:'https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-all-about-face.jpg',
          detail: false,
          avgScore: 100,
        }
        ],
    }
  }

  render(){
    const {users} = this.state
    var onlineUsers = []
    users.map(user => {
      if(user.status === 'Online'){
        onlineUsers = [...onlineUsers, user]
      }
    })

    return (
      <div className='online-users'>
        OnlineUsers
        <div className='online-users-container'>
         {onlineUsers.map(user => <User key={user.id} user={user}/>)
        }
        </div>
      </div>
    );
  }
}
