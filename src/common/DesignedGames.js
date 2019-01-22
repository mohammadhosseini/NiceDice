import React from 'react'
import '../css/designedGames.css'
import Game from './Game';

export class DesignedGames extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      games: [
        {
          id:1,
          username: 'user1',
          src : 'https://png.pngtree.com/element_origin_min_pic/16/07/23/1657932a14d8609.jpg',
          Score : 100,
          played : 4 
        },
        {
          id:2,
          username: 'user2',
          src : 'https://png.pngtree.com/element_origin_min_pic/16/07/23/1657932a14d8609.jpg',
          Score : 100,
          played : 4 
        },
        {
          id:3,
          username: 'user3',
          src : 'https://png.pngtree.com/element_origin_min_pic/16/07/23/1657932a14d8609.jpg',
          Score : 100,
          played : 4 
        },
        {
          id:4,
          username: 'user4',
          src : 'https://png.pngtree.com/element_origin_min_pic/16/07/23/1657932a14d8609.jpg',
          Score : 100,
          played : 4 
        },
        {
          id:5,
          username: 'user1',
          src : 'https://png.pngtree.com/element_origin_min_pic/16/07/23/1657932a14d8609.jpg',
          Score : 100,
          played : 4 
        },
        {
          id:6,
          username: 'user1',
          src : 'https://png.pngtree.com/element_origin_min_pic/16/07/23/1657932a14d8609.jpg',
          Score : 100,
          played : 4 
        },
        {
          id:7,
          username: 'user1',
          src : 'https://png.pngtree.com/element_origin_min_pic/16/07/23/1657932a14d8609.jpg',
          Score : 100,
          played : 4 
        }
        ],
    }
  }

  render(){
    const {games} = this.state
    return (
      <div className='games'>
        <div>
        {games.map(game => <Game key={game.id} game={game}/>)
        }
        </div>
      </div>
    );
  }
}
