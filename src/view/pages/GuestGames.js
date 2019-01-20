import React from 'react'
import { Navigation } from '../../common/Navigation'
import { GamesSideBar } from '../../common/GamesSideBar'
import {DesignedGames} from '../../common/DesignedGames'
import { GuestHomeNavigation } from '../../common/GuestHomeNavigation';

class GuestGames extends React.Component{
 render(){
   return(
    <React.Fragment>
    <GuestHomeNavigation/>
    <div className='home-container'>
      <GamesSideBar/>
      <DesignedGames/>
    </div>
    </React.Fragment>
   )
 } 
}

export default GuestGames

