import React from 'react';
import '../css/user.css'
import {Link} from 'react-router-dom'


const User =  (props) => {
  const {user} = props
  const {username, status, src, id, avgScore, friends,
    email, fullName, bornedAt, gender, password, detail} = user

  const isOnline = (s) => (s === 'Online')
  
  return(
    isOnline(status) ?
    <Link to={`/profile/${id}`} className='user-container-online'>
      <img className='user-image' src={src} alt='user-profile'/>
      <p>{username}</p>
      <p>{status}</p>
    </Link> : 
    <Link to={`/profile/${id}`} className='user-container-offline'>
      <img className='user-image' src={src} alt='user-profile'/>
      <p>{username}</p>
      <p>{status}</p>
    </Link>
  )
}

export default User