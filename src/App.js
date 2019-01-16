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

// import ImgCarousel from './common/Carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";


class App extends Component {
  render() {
    return (
      <div>
        
        {/* <div><Myform/></div> */}
        <div><SideBar/></div>
        <div className="slider"><Img/></div>
        {/* <div><SidebarExampleVisible/></div> */}
      </div>
    );
  }
}

export default App;
