import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import Img from './common/Caro';
import './css/slider.css'
import Slider from './common/Caro';
import Myform from './form/form';
import './css/form.css'
// import SidebarExampleVisible from './common/sidebar'
// import SidebarExampleSidebar from './common/sidebar';
import {SideBar} from './common/mysidebar';
import './css/sidebar.css'
import CommentBox from './commentBox/comment'
// import './css/comments.css'
import { ICON_NAME } from "react-icons/fa";
import Login from './view/pages/login';
import SignUp from './view/pages/signup';
import Home from './view/pages/Home'
import {Switch} from "react-router-dom"
import PropsRoute from "./const/PropsRoute"
import PrivateRoute from "./const/PrivateRoute"
import UserPage from "./view/pages/UserPage"
import Users from "./view/pages/Users"
import Games from './view/pages/Games';
import Design from './view/pages/Design'
import Admin from './view/pages/AdminPage';
import AdminGR from './view/pages/AdminGameReview';
import AdminUR from './view/pages/AdminUserReview'
// import './css/star.css'



class App extends Component {
  render() {
    var comments = [
      { id: '1', author: 'Ali', text: 'Blah Blah Blah' , stars : 3},
      { id: '2', author: 'Sina', text: 'HaHaHaHa' , stars : 5}
  ];
    return (
      <div>
        <Switch>
            <PropsRoute exact={true} path="/" component={Home}/>
            <PrivateRoute exact={true} path="/users" component={Users}/>
            <PropsRoute path="/login" component={Login}/>
            <PropsRoute path="/sign-up" component={SignUp}/>
            <PropsRoute path="/user/:id" component={UserPage}/>
            <PropsRoute path="/games" component={Games}/>
            <PropsRoute path="/design" component={Design}/>
            <PropsRoute path="/admin" component={Admin}/>
            <PropsRoute path="/admingamereview" component={AdminGR}/>
            <PropsRoute path="/adminuserreview" component={AdminUR}/>
          </Switch>



          {/* <div className="slider"><Slider/></div> */}
        {/* <div><Myform/></div> */}
        {/* <div><CommentBox comments = {comments}/></div> */}
        {/* <div><Login/></div>
        <div><SignUp/></div> */}
      </div>
    );
  }
}

export default App;
