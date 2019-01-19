import React from 'react';
import {Navigation} from '../../common/Navigation'
import {OnlineUsers} from '../../common/OnlineUsers'
import {Summary} from '../../common/Summary'
import {GuestHomeNavigation} from '../../common/GuestHomeNavigation';
import {SideBar} from '../../common/mysidebar'
import '../../css/home.css'

class Home extends React.Component {
  render() {
    return (
      <GuestHomeNavigation/>
    );
  }
}

export default Home;
