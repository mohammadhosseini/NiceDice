import React from 'react'
import '../css/guest-home-navigation.css'
import {Link} from 'react-router-dom'
import { FaHome } from 'react-icons/fa';


export class GuestHomeNavigation extends React.Component{
  render(){
    return (
        <nav>
          <div className="nav-guest">
            <div className='nav-guest-flex'>
              <div className='nav-guest-item home'>
                <Link to='/' className='nav-guest-link'>
                  <FaHome className = 'icons'/>
                </Link>
              </div>
              <div className='nav-guest-item'>
                <Link to='/guestgames' className='nav-guest-link'>
                  Games
                </Link>
              </div>
            </div>
            <div className='nav-guest-flex'>
              <div className='nav-guest-item nav-guest-login'>
                <Link to='/login' className='nav-guest-link'>
                  Login
                </Link>
              </div>
              <div className='nav-guest-item nav-guest-sign-up'>
                <Link to='/sign-up' className='nav-guest-link'>
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </nav>
    );
  }
}