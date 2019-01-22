import React from 'react'
import '../../css/login.css'
import { gunzipSync } from 'zlib';
import { GuestHomeNavigation } from '../../common/GuestHomeNavigation';
import axios from 'axios'
import {baseURL} from '../../const/consts'

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
    username:'',
    password:''
    }
   }

   handleInputChange = (event)=> {
    
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
        [name]: value
    });
    // console.log(name , value);
    }
  
  onSubmit = async () => {
    const response = await axios.post(`${baseURL}/user` , this.state)
    console.log(response);
  }

  render() {
      return (
        <React.Fragment>
          <GuestHomeNavigation/>
          <div className='login-form-container'>
            <p className='login-form-label'>E-mail: </p>
            <input 
              name='username'
              type='email'
              className='login-form-input'
              onChange = {this.handleInputChange}
              />
            <br/>

            <p className='login-form-label'>Password: </p>
            <input
              name='password'
              className='login-form-input'
              type='password'
              onChange = {this.handleInputChange}
              />
              <br/>
            <input className='login-form-submit' type='submit' value='Login' />
            <br/>
          </div>
        </React.Fragment>
      );
    }
  }
export default Login