import React from 'react'
import '../css/navigation.css'
import { FaHome } from 'react-icons/fa';


export class GamesSideBar extends React.Component{
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
            <li className={this.state.isSelected === 'Time of Design' ? 'side-bar-selected':'side-bar-item'} onClick={()=>{this.selected('Time of Design')}}>
              <a className='side-bar-link' href="#">
                Time of Design
              </a>
            </li>
            <li className={this.state.isSelected === 'Score' ? 'side-bar-selected':'side-bar-item'} onClick={()=>{this.selected('Score')}}>
              <a className='side-bar-link' href="#" >
                Score
              </a>
            </li>
            <li className={this.state.isSelected === 'Game Numbers' ? 'side-bar-selected':'side-bar-item'} onClick={()=>{this.selected('Game Numbers')}}>
              <a className='side-bar-link' href="#">
                Game Numbers
              </a>
            </li>
            <li className={this.state.isSelected === 'Game Numbers Per Day' ? 'side-bar-selected':'side-bar-item'} onClick={()=>{this.selected('Game Numbers Per Day')}}>
              <a className='side-bar-link' href="#">
                Game Numbers Per Day
              </a>
            </li>
          </ul>
        </div>
    );
  }
}