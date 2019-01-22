import React from 'react'
import '../css/navigation.css'
import { FaHome } from 'react-icons/fa';



export class UsersSideBar extends React.Component{
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
            <li className={this.state.isSelected === 'Newest' ? 'side-bar-selected':'side-bar-item'} onClick={()=>{this.selected('Newest')}}>
              <a className='side-bar-link' href="#">
                Newest
              </a>
            </li>
            <li className={this.state.isSelected === 'Score' ? 'side-bar-selected':'side-bar-item'} onClick={()=>{this.selected('Score')}}>
              <a className='side-bar-link' href="#" >
                Score
              </a>
            </li>
            <li className={this.state.isSelected === 'Play Time' ? 'side-bar-selected':'side-bar-item'} onClick={()=>{this.selected('Play Time')}}>
              <a className='side-bar-link' href="#">
                Play Time
              </a>
            </li>
          </ul>
        </div>
    );
  }
}