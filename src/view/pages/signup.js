import React from 'react'
import '../../css/signup.css'

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
  render() {
      return (
          <div className='sign-up-form-container'>
          <div className='sign-up-field-container'>
            <label className='sign-up-form-label'>First Name: </label>
            <input
              className='sign-up-form-input'
              onChange = {(event,newValue) => this.setState({username:newValue})}
              />
          </div>
            <br/>
            <div className='sign-up-field-container'>
            <label className='sign-up-form-label'>Last Name: </label>
            <input
              className='sign-up-form-input'
              onChange = {(event,newValue) => this.setState({lastName:newValue})}
              />
            <br/>
            </div>
            <div className='sign-up-field-container'>
            <label className='sign-up-form-label'>Email: </label>
            <input
              className='sign-up-form-input'
              onChange = {(event,newValue) => this.setState({email:newValue})}
              />
            <br/>
            </div>
            <div className='sign-up-field-container'>
            <label className='sign-up-form-label'>Birthday: </label>
            <input
              className='sign-up-form-input'
              type='date'
              onChange = {(event,newValue) => this.setState({birthday:newValue})}
              />
            <br/>
            </div>
            <div className='sign-up-field-container'>
            <label className='sign-up-form-label'>Gender: </label>
            <input className='sign-up-form-input' type="radio" name="gender" value="male" checked/> Male
            <input className='sign-up-form-input' type="radio" name="gender" value="female"/> Female
            <input className='sign-up-form-input' type="radio" name="gender" value="other"/> Other
            <br/>
            </div>
            <div className='sign-up-field-container'>
            <label className='sign-up-form-label'>Password: </label>
            <input
                className='sign-up-form-input'
                type='password'
                onChange = {(event,newValue) => this.setState({password:newValue})}
                />
            <br/>
            </div>
            <input className='sign-up-form-submit' type='submit' value='Register'/>
            <br/>
          </div>
      );
    }
  }
export default SignUp