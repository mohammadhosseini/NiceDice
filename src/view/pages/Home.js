import React from 'react';
import {Navigation} from '../../common/Navigation'
import {OnlineUsers} from '../../common/OnlineUsers'
import {Summary} from './Summary'
import {GuestHomeNavigation} from '../../common/GuestHomeNavigation';

class Home extends React.Component {
  render() {
    return (
      <div>
        
        <GuestHomeNavigation/>
        <OnlineUsers/>
        {/* <Navigation/>
        <Summary/>
        <OnlineUsers/> */}
      </div>
    );
  }
}

export default Home;
