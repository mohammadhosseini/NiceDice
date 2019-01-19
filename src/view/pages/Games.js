import React from 'react'
import { Navigation } from '../../common/Navigation'
import { GamesSideBar } from '../../common/GamesSideBar'
import {DesignedGames} from '../../common/DesignedGames'

class Games extends React.Component{
 render(){
   return(
    <React.Fragment>
    <Navigation/>
    <div className='home-container'>
      <GamesSideBar/>
      <DesignedGames/>
    </div>
    </React.Fragment>
   )
 } 
}

export default Games

