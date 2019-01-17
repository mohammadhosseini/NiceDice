import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import Img from './common/Caro';
import './css/slider.css'
import Carousel from './common/Caro';
import Myform from './from/form';
import './css/form.css'
import SidebarExampleVisible from './common/sidebar'
import SidebarExampleSidebar from './common/sidebar';
import SideBar from './common/mysidebar';
import './css/sidebar.css'
import CommentBox from './commentBox/comment'
import './css/comments.css'
import { ICON_NAME } from "react-icons/fa";


// import ImgCarousel from './common/Carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";


class App extends Component {
  render() {
    var comments = [
      { id: '1', author: 'Ali', text: 'Blah Blah Blah' , stars : 3},
      { id: '2', author: 'Sina', text: 'HaHaHaHa' , stars : 5}
  ];
    return (
      <div>
        
        {/* <div><Myform/></div> */}
        <div><SideBar/></div>
        <div className="slider"><Img/></div>
        {console.log(comments)}
        <div><CommentBox comments = {comments}/></div>
        {/* <div><SidebarExampleVisible/></div> */}
      </div>
    );
  }
}

export default App;
