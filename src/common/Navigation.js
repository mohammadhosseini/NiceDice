import React from 'react'
import '../css/navigation.css'
import { FaHome , FaSignOutAlt} from 'react-icons/fa';
import {Link} from 'react-router-dom'

export class Navigation extends React.Component{
  constructor(props){
    super(props)
    this.state={isSelected:''}
  }
  selected(target){
    this.setState({isSelected:target})
  }
  render(){
    return (
        <div>
          <nav>
            <div className='nav'>
              {/* <Link to='/' className={this.state.isSelected === 'Home' ? 'nav-selected home nav-link':'nav-item home nav-link'} onClick={()=>{this.selected('Home')}}>
                <FaHome className = 'icons'/>
              </Link> */}
              <div>
                <Link to='/profile' className={this.state.isSelected === 'Profile' ? 'nav-selected home nav-link':'nav-item home nav-link'} onClick={()=>{this.selected('Profile')}}>
                  <FaHome className = 'icons'/>
                </Link>
                <Link to='/games' className={this.state.isSelected === 'Start Game' ? 'nav-selected  nav-link':'nav-item nav-link'} onClick={()=>{this.selected('Start Game')}}>
                  Games
                </Link>
                <Link to='/design' className={this.state.isSelected === 'Design Game' ? 'nav-selected  nav-link':'nav-item nav-link'} onClick={()=>{this.selected('Design Game')}}>
                  Design Game
                </Link>
                <Link to='/users' className={this.state.isSelected === 'Users' ? 'nav-selected  nav-link':'nav-item nav-link'} onClick={()=>{this.selected('Users')}}>
                  Users
                </Link>
              </div>
              <div>
                <Link to='/' className={this.state.isSelected === 'Exit' ? 'nav-selected exit nav-link':'nav-item exit nav-link'} onClick={()=>{this.selected('Exit')}}>
                  <FaSignOutAlt className = 'icons'/>
                </Link>
              </div>
            </div>
          </nav>
        </div>
    );
  }
}