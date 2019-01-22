import React from 'react'
import '../css/navigation.css'
import { FaHome } from 'react-icons/fa';



export class SideBar extends React.Component{
  constructor(props){
    super(props)
    this.state={isSelected:''}
  }
  selected(target){
    this.setState({isSelected:target})
  }
  render(){
    return (
        <div className="side-bar">
          <ul>
          <li className='side-bar-title'>
              <a>Filter</a>
            </li>
            <li className={this.state.isSelected === 'Profile' ? 'side-bar-selected':'side-bar-item'} onClick={()=>{this.selected('Profile')}}>
              <a className='side-bar-link' href="#">
                Profile
              </a>
            </li>
            <li className={this.state.isSelected === 'Start Game' ? 'side-bar-selected':'side-bar-item'} onClick={()=>{this.selected('Start Game')}}>
              <a className='side-bar-link' href="#" >
                Start Game
              </a>
            </li>
            <li className={this.state.isSelected === 'Design Game' ? 'side-bar-selected':'side-bar-item'} onClick={()=>{this.selected('Design Game')}}>
              <a className='side-bar-link' href="#">
                Design Game
              </a>
            </li>
            <li className={this.state.isSelected === 'Users' ? 'side-bar-selected':'side-bar-item'} onClick={()=>{this.selected('Users')}}>
              <a className='side-bar-link' href="#">
                Users
              </a>
            </li>
          </ul>
        </div>
    );
  }
}