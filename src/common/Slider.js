import React from 'react';
import Carousel from 'nuka-carousel';

export default class Slider extends React.Component {
  render() {
    return (
      <Carousel autoplay>
        <img className='slider-image' src="https://www.profiletalent.com.au/wp-content/uploads/2017/05/profile-talent-ant-simpson-feature.jpg" />
        <img className='slider-image' src="https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-all-about-face.jpg" />
        <img className='slider-image' src="https://www.profiletalent.com.au/wp-content/uploads/2017/06/Mark-Kenfield-600x317.jpg" />
      </Carousel>
    );
  }
}