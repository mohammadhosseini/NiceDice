import React from 'react'
import '../../css/login.css'
import { gunzipSync } from 'zlib';
import { GuestHomeNavigation } from '../../common/GuestHomeNavigation';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
    username:'',
    password:''
    }
   }
  render() {
      return (
        <React.Fragment>
          <GuestHomeNavigation/>
          <div className='login-form-container'>
            <p className='login-form-label'>Username: </p>
            <input
              className='login-form-input'
              hintText='Enter your Username'
              floatingLabelText='Username'
              onChange = {(event,newValue) => this.setState({username:newValue})}
              />
            <br/>

            <p className='login-form-label'>Password: </p>
            <input
                className='login-form-input'
                type='password'
                hintText='Enter your Password'
                floatingLabelText='Password'
                onChange = {(event,newValue) => this.setState({password:newValue})}
                />
                <br/>
                <input className='login-form-submit' type='submit' value='Login'/>
            <br/>
          </div>
        </React.Fragment>
      );
    }
  }
export default Login