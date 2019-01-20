import React from 'react'
import '../css/navigation.css'
import { FaHome , FaSignOutAlt} from 'react-icons/fa';

import {Link} from 'react-router-dom'

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
            <div className='nav'>
              {/* <Link to='/' className={this.state.isSelected === 'Home' ? 'nav-selected home nav-link':'nav-item home nav-link'} onClick={()=>{this.selected('Home')}}>
                <FaHome className = 'icons'/>
              </Link> */}
              <Link to='/userpage' className={this.state.isSelected === 'Profile' ? 'nav-selected nav-link':'nav-item nav-link'} onClick={()=>{this.selected('Profile')}}>
                Profile
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
              <Link to='/' className={this.state.isSelected === 'Exit' ? 'nav-selected exit nav-link':'nav-item exit nav-link'} onClick={()=>{this.selected('Exit')}}>
                <FaSignOutAlt className = 'icons'/>
              </Link>
            </div>
          </nav>

        </div>







        // <div>
        // <nav>
        //   <ul className="nav">
        //     <li className={this.state.isSelected === 'Home' ? 'nav-selected home':'nav-item home'} onClick={()=>{this.selected('Home')}} >
        //       <a className='nav-link' href="http://localhost:3000">
        //         <FaHome className = 'icons'/>
        //       </a>
        //     </li>
        //     <li className={this.state.isSelected === 'Profile' ? 'nav-selected':'nav-item'} onClick={()=>{this.selected('Profile')}}>
        //       <a className='nav-link' href="http://localhost:3000/userpage">
        //         Profile
        //       </a>
        //     </li>
        //     <li className={this.state.isSelected === 'Start Game' ? 'nav-selected':'nav-item'} onClick={()=>{this.selected('Start Game')}}>
        //       <a className='nav-link' href="#">
        //         Start Game
        //       </a>
        //     </li>
        //     <li className={this.state.isSelected === 'Design Game' ? 'nav-selected':'nav-item'} onClick={()=>{this.selected('Design Game')}}>
        //       <a className='nav-link' href="http://localhost:3000/design">
        //         Design Game
        //       </a>
        //     </li>
        //     <li className={this.state.isSelected === 'Users' ? 'nav-selected':'nav-item'} onClick={()=>{this.selected('Users')}} >
        //       <a className='nav-link' href="http://localhost:3000/users">
        //         Users
        //       </a>
        //     </li>
        //     <li className={this.state.isSelected === 'exit' ? 'nav-selected':'nav-item exit'} onClick={()=>{this.selected('Exit')}}>
        //       <a className='nav-link' href="#">
        //         Exit
        //       </a>
        //     </li>
        //   </ul>
        // </nav>
        // </div>
    );
  }
}