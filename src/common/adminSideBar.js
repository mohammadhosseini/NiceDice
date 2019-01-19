import React from 'react'
import '../css/navigation.css'
import { FaHome } from 'react-icons/fa';

export class AdminSideBar extends React.Component{
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
          <li className='title'>
              <a>Filter</a>
            </li>
            <li className={this.state.isSelected === 'User' ? 'side-bar-selected':'side-bar-item'} onClick={()=>{this.selected('User')}}>
              <a className='side-bar-link' href="#">
                User
              </a>
            </li>
            <li className={this.state.isSelected === 'Date' ? 'side-bar-selected':'side-bar-item'} onClick={()=>{this.selected('Date')}}>
              <a className='side-bar-link' href="#" >
                Date
              </a>
            </li>
          </ul>
        </div>
    );
  }
}