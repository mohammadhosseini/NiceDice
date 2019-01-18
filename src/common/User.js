import React from 'react';
import '../css/user.css'
import {Link} from 'react-router-dom'


const User = (props) => {
  const {user} = props
  const {username, status, src, id, avgScore, friends,
    email, fullName, bornedAt, gender, password, detail} = user

  const hideDetails = () => {
    return !detail
  }
  return(
    hideDetails() ?
    <Link to={`/user/${id}`} className='user-container'>
      <img className='user-image' src={src} alt='user-profile'/>
      <p>{username}</p>
      <p>{status}</p>
    </Link> : 
    <Link to={`/user/${id}`} className='user-container-detailed'>
    <img className='user-image' src={src} alt='user-profile'/>
    <p>{username}</p>
    <p>{status}</p>
    <p>Score: {avgScore}</p>
    </Link>
  )
}

export default User