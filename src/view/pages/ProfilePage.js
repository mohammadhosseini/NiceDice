import React from 'react'
import {Navigation} from '../../common/Navigation'
import Profile from '../../common/Profile';
import CommentViewBox from '../../commentBox/commentView'

class ProfilePage extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
    }
  }
  render(){
    const {id} = this.state
    var comments = [
      { id: '1', author: 'Ali', text: 'Blah Blah Blahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' , stars : 3},
      { id: '2', author: 'Sina', text: 'HaHaHaHa' , stars : 5}
  ];
   return(
      <React.Fragment>
        <Navigation/>
        <div className='profile-home-container'>          
          <Profile userID = {1}/>
          <CommentViewBox className='comment-box' comments = {comments}/>
        </div>
    </React.Fragment>
   )
 } 
}

export default ProfilePage