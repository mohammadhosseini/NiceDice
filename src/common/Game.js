import React from 'react';
import '../css/designedGames.css'
import {Link} from 'react-router-dom'


const Game =  (props) => {
  const {game} = props
  const {username, id, src, Score, played} = game

  return(
    <div className='games-container'>
      <Link to={`/user/${id}`}>
        <img className='user-image' src={src} alt='user-profile'/>
        <p>{username}</p>
        <p>Score: {Score}</p>
        <p>Played: {played}</p>
            {/* <button>Play Game</button> */}
      </Link>      
    </div>

    
  )
}

export default Game