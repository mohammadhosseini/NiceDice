import React from 'react'
import '../css/navigation.css'
import { FaHome } from 'react-icons/fa';




export class Navigation extends React.Component{
  render(){
    return (
        <nav>
          <ul className="nav">
            <li className='nav-item home'>
              <a className='nav-link' href="#">
                <FaHome className = 'icons'/>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#">
                Profile
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#">
                Start Game
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#">
                Design Game
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#">
                Users
              </a>
            </li>
            <li className='nav-item exit'>
              <a className='nav-link' href="#">
                Exit
              </a>
            </li>
          </ul>
        </nav>
    );
  }
}