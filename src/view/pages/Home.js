import React from 'react';
import {Navigation} from '../../common/Navigation'
import {OnlineUsers} from '../../common/OnlineUsers'
import {Summary} from '../../common/Summary'
import {GuestHomeNavigation} from '../../common/GuestHomeNavigation';
import {SideBar} from '../../common/mysidebar'
import '../../css/home.css'
import Slider from '../../common/Slider';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GuestHomeNavigation/>
        <div>
            <Slider/>
          </div>
        <div className='guest-home-container'>
          <div>
            <OnlineUsers/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
