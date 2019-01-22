import React from 'react'
import '../../css/signup.css'
import { GuestHomeNavigation } from '../../common/GuestHomeNavigation';

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state={
      firstName:'',
      lastName:'',
      email:'',
      username:'',
      birthday:'',
      gender:'',
      password:'',
    }
   }

   handleInputChange = (event)=> {
    
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
        [name]: value
    });
    console.log(name , value);
  }

  // _submit = () => {
    
  // }

  render() {
      return (
        <React.Fragment>
          <GuestHomeNavigation/>
          <div className='sign-up-form-container'>
          <div className='sign-up-field-container'>
            <label className='sign-up-form-label'>First Name: </label>
            <input 
              name='firstname'
              className='sign-up-form-input'
              onChange = {this.handleInputChange}
              />
          </div>
            <br/>
            <div className='sign-up-field-container'>
            <label className='sign-up-form-label'>Last Name: </label>
            <input
              name='lastname'
              className='sign-up-form-input'
              onChange = {this.handleInputChange}
              />
            <br/>
            </div>
            <div className='sign-up-field-container'>
            <label className='sign-up-form-label'>E-mail: </label>
            <input 
              name='email'
              type='email'
              className='sign-up-form-input'
              onChange = {this.handleInputChange}
              />
            <br/>
            </div>
            <div className='sign-up-field-container'>
            <label className='sign-up-form-label'>Birthday: </label>
            <input
              name='birthday'
              className='sign-up-form-input'
              type='date'
              onChange = {this.handleInputChange}
              />
            <br/>
            </div>
            <div className='sign-up-field-container'>
            <label className='sign-up-form-label'>Gender: </label>
            <input className='sign-up-form-input-radio' type="radio" name="gender" value="male" onChange = {this.handleInputChange}/> Male
            <input className='sign-up-form-input-radio' type="radio" name="gender" value="female"  onChange = {this.handleInputChange}/> Female
            <input className='sign-up-form-input-radio' type="radio" name="gender" value="other"  onChange = {this.handleInputChange}/> Other
            <br/>
            </div>
            <div className='sign-up-field-container'>
            <label className='sign-up-form-label'>Password: </label>
            <input
                name='password'
                className='sign-up-form-input'
                type='password'
                onChange = {this.handleInputChange}                />
            <br/>
            </div>
            <br/>
            <input className='sign-up-form-submit register-margin' type='submit' value='Sign Up' onClick={this._submit}/>
            <br/>
          </div>
          </React.Fragment>
      );
    }
  }
export default SignUp