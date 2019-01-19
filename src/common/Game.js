import React from 'react';
import '../css/designedGames.css'
import {Link} from 'react-router-dom'


const Game =  (props) => {
  const {game} = props
  const {username, id, Score, played} = game

  return(
    <div className='games-container'>
        <p>{username}</p>
        <p>Score: {Score}</p>
        <p>Played: {played}</p>
        <Link to={`/user/${id}`}>
            <button>Play Game</button>
        </Link>      
    </div>
    
  )
}

export default Game