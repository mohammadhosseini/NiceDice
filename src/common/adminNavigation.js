import React from 'react'
import '../css/navigation.css'
import { FaHome , FaSignOutAlt} from 'react-icons/fa';
// import SideBar from '../common/mysidebar';
import {Link} from 'react-router-dom'


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
            <div className='nav'>
              <div>
                  {/* <Link to='/admin' className={this.state.isSelected === 'Home' ? 'nav-selected home nav-link':'nav-item home nav-link'} onClick={()=>{this.selected('Home')}}>
                    <FaHome className = 'icons'/>
                  </Link> */}
                  <Link to='/adminuserreview' className={this.state.isSelected === 'User Review' ? 'nav-selected nav-link':'nav-item nav-link'} onClick={()=>{this.selected('User Review')}}>
                    User Review
                  </Link>
                  <Link to='/admingamereview' className={this.state.isSelected === 'Game Review' ? 'nav-selected  nav-link':'nav-item nav-link'} onClick={()=>{this.selected('Game Review')}}>
                    Game Review
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