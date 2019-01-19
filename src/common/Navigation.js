import React from 'react'
import '../css/navigation.css'
import { FaHome } from 'react-icons/fa';
// import SideBar from '../common/mysidebar';

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
          <ul className="nav">
            <li className={this.state.isSelected === 'Home' ? 'nav-selected home':'nav-item home'} onClick={()=>{this.selected('Home')}} >
              <a className='nav-link' href="#">
                <FaHome className = 'icons'/>
              </a>
            </li>
            <li className={this.state.isSelected === 'Profile' ? 'nav-selected':'nav-item'} onClick={()=>{this.selected('Profile')}}>
              <a className='nav-link' href="#">
                Profile
              </a>
            </li>
            <li className={this.state.isSelected === 'Start Game' ? 'nav-selected':'nav-item'} onClick={()=>{this.selected('Start Game')}}>
              <a className='nav-link' href="#">
                Start Game
              </a>
            </li>
            <li className={this.state.isSelected === 'Design Game' ? 'nav-selected':'nav-item'} onClick={()=>{this.selected('Design Game')}}>
              <a className='nav-link' href="#">
                Design Game
              </a>
            </li>
            <li className={this.state.isSelected === 'Users' ? 'nav-selected':'nav-item'} onClick={()=>{this.selected('Users')}}>
              <a className='nav-link' href="#">
                Users
              </a>
            </li>
            <li className={this.state.isSelected === 'exit' ? 'nav-selected':'nav-item exit'} onClick={()=>{this.selected('Exit')}}>
              <a className='nav-link' href="#">
                Exit
              </a>
            </li>
          </ul>
        </nav>
        </div>
    );
  }
}