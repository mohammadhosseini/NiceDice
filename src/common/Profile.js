import React from 'react'
import '../css/profile.css'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 1,
      friends:[],
      user: {
        status:'Online',
        src: 'https://www.profiletalent.com.au/wp-content/uploads/2017/05/profile-talent-ant-simpson-feature.jpg',
        id: props.userID,
        avgScore: 100,
        email: 'shantia.1997@gmail.com', 
        firstName: 'Mohammad', 
        lastName: 'H',
        birthday: '', 
        gender: 'Male', 
      },
      input:{
        status:'',
        src: '',
        id:'',
        avgScore: '',
        email: '', 
        firstName: '', 
        lastName: '',
        birthday: '', 
        gender: '',
      },
      isEditing:false,
    }
  }

  componentDidMount(props) {
    // this.setState({isOwner: /*function() */ true})
    // request be back va calllback
    //this.setState({user: /*user back*})
    const {id, user} = this.state
    console.log(id, user.id)
  }

  componentDidUpdate(props) {
    // console.log(this.state.user.recievedInvites, this.state.sentInvites)
  }

  handleInputChange = (event)=> {
    
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      input: {
        ...this.state.input, 
        [name]: value
      },
    });
  }
 
  _canAddFriend = () => {
    const{friends, user} = this.state
    const{id} = user
    if(!friends.includes(id))
      return true
    return false
  }

  _edit = () => {
    const {isEditing, user} = this.state
    this.setState({isEditing: !isEditing, input: user })
  }
  _submit = () => {
    const {isEditing, input} = this.state
    this.setState({isEditing: !isEditing, user: input })
  }

  _addFriend = (friendID) => {

    const {user , friends} = this.state


    this.setState({
      ...this.state,
      friends: [... friendID],
      user: {
        ...this.state.user,
      }
    })
  }

  _isOwner = () => {
    const{user, id} = this.state
    return user.id === id
  }

  render() {
    const {isEditing, user} = this.state
    const {status, src, avgScore, 
      email, firstName, lastName, birthday, gender} = user
      return(
        <div className='profile-form-container'>
          <div className='profile-field-container'>
            {/* <label className='profile-form-label'>Profile Picture:</label> */}
      {!isEditing && <img className='profile-profile-image' src={src} alt='Nothing Set'/>} 
            {/* // : <p>Profile Picture</p>} */}
          </div>
          <div className='profile-field-container'>
            <label className='profile-form-label'>First Name: </label>
            {!isEditing
            ?<p>
              {firstName}   
            </p>
            :<input
              name='firstName'
              defaultValue={firstName}
              className='profile-form-input'
              onChange = {this.handleInputChange}
              />
            }
          </div>
          <div className='profile-field-container'>
            <label className='profile-form-label'>Last Name: </label>
            {!isEditing
            ?<p>{lastName}   </p>
            :<input 
              name='lastName'
              defaultValue={lastName}
              className='profile-form-input'
              onChange = {this.handleInputChange}
              />
            }
          </div>
          <div className='profile-field-container'>
            {!isEditing && <React.Fragment><label className='profile-form-label'>Status: </label>
             <p> {status}</p></React.Fragment>}
          </div>
          <div className='profile-field-container'>
          {!isEditing && <React.Fragment><label className='profile-form-label'>Average Score: </label>
            <p> {avgScore}</p></React.Fragment>}
          </div>
          <div className='profile-field-container'>
            <label className='profile-form-label'>Email: </label>
            {!isEditing
            ?<p>
              {email}   
            </p>
            :<input 
              name='email'
              defaultValue={email}
              className='profile-form-input'
              onChange = {this.handleInputChange}
              />
            }
          </div>
          <div className='profile-field-container'>
            <label className='profile-form-label'>Birthday: </label>
            {!isEditing
            ?<p>
              {birthday}   
            </p>
            :<input 
              name='birthday'
              defaultValue={birthday}
              className='profile-form-input'
              type='date'
              onChange = {this.handleInputChange}
              />
            }
          </div>
          <div className='profile-field-container profile-field-container-radio'>
            <label className='profile-form-label'>Gender: </label>
            <div className='profile-radio-wrapper'>
              {!isEditing
              ? <p>
                {user.gender}
              </p>
              : <React.Fragment>
                <div>
                  <input defaultChecked={gender === 'Male'} className='profile-form-input-radio' type="radio" name="gender" value="Male" onChange={this.handleInputChange}/>
                  <label className='radio-label'>Male</label>
                </div>
                <div>
                  <input defaultChecked={gender === 'Female'} className='profile-form-input-radio' type="radio" name="gender" value="Female" onChange={this.handleInputChange}/>
                  <label className='radio-label'>Female</label>
                </div>
                <div>
                  <input defaultChecked={gender === 'Other'} className='profile-form-input-radio' type="radio" name="gender" value="Other" onChange={this.handleInputChange}/>
                  <label className='radio-label'>Other</label>
                </div>
              </React.Fragment>
              }
            </div>
          </div>
          {this._isOwner() ?
            <React.Fragment>
              <div className='profile-field-container'>
              {isEditing && 
              <React.Fragment>
              <label className='profile-form-label'>Password: </label>
                <input 
                  name='password'
                  className='profile-form-input'
                  type='password'
                  onChange = {this.handleInputChange}
                />
                </React.Fragment>
                }
                
              </div>
              <button className={!isEditing?'profile-form-edit':'profile-form-cancel'} onClick={this._edit}>{!isEditing?'Edit':'Cancel'}</button>
              {isEditing &&  <button className='profile-form-submit' onClick={this._submit}>Submit</button>}
            </React.Fragment>
            : 
            <React.Fragment>
              <div className='profile-field-container'>
            </div>
            {this._canAddFriend() && <button className='profile-form-add-friend' onClick={(e) => {this._addFriend(user.id)}}>Add Friend</button>}
            </React.Fragment>
          }
        </div>
       );
     }
  }
export default Profile