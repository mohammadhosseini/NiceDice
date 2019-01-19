import React from 'react'
import '../css/navigation.css'
import { FaHome } from 'react-icons/fa';
// import SideBar from '../common/mysidebar';

export class AdminNavigation extends React.Component{
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
            <li className={this.state.isSelected === 'User Review' ? 'nav-selected':'nav-item'} onClick={()=>{this.selected('User Review')}}>
              <a className='nav-link' href="#">
                User Review
              </a>
            </li>
            <li className={this.state.isSelected === 'Game Review' ? 'nav-selected':'nav-item'} onClick={()=>{this.selected('Game Review')}}>
              <a className='nav-link' href="#">
                Game Review
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