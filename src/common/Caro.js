// import makeCarousel from 'react-reveal/makeCarousel';
// import Slide from 'react-reveal/Slide';
// import styled, { css } from 'styled-components';
// import React, { Component } from 'react';
// import ReactModal from 'react-modal';



// const width = '400px', height='450px';
// const Container = styled.div`
//   border: 1px solid red;
//   position: relative;
//   overflow: hidden;
//   width: ${width};
//   height: ${height};
//   text-align: center;
//   margin: 10px;
// `;
// const Children  = styled.div`
//   // width: ${width};
//   max-width : 40%;
//   height: auto;
//   // position: relative;
//   // height: ${height};
//   // max-height : 60%;
//   align-items : center;
//   // background-size : contain;
// `;
// const Arrow = styled.div`
//   text-shadow: 1px 1px 1px #fff;
//   z-index: 100;
//   line-height: ${height};
//   text-align: center;
//   position: absolute;
//   top: 0;
//   width: 10%;
//   font-size: 3em;
//   cursor: pointer;
//   user-select: none;
//   ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
// `;
// const Dot = styled.span`
//   font-size: 1.5em;
//   cursor: pointer;
//   text-shadow: 1px 1px 1px #fff;
//   user-select: none;
  
// `;
// const Dots = styled.span`
//   text-align: center;
//   width: ${width};
//   z-index: 100;
  
// `;
// const CarouselUI = ({ position, total, handleClick, children }) => (
//   <Container>
//     <Children>
//       {children}
//       <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
//       <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
//     </Children>
//     <Dots>
//       {Array(...Array(total)).map( (val, index) =>
//         <Dot key={index} onClick={handleClick} data-position={index}>
//           {index === position ? '● ' : '○ ' }
//         </Dot>
//       )}
//     </Dots>
//   </Container>
// );
// const Carousel = makeCarousel(CarouselUI);

// class Sliders extends Component {
//   constructor () {
//     super();
//     this.state = {
//       showModal: false
//     };
    
//     this.handleOpenModal = this.handleOpenModal.bind(this);
//     this.handleCloseModal = this.handleCloseModal.bind(this);
//   }
  
//   handleOpenModal () {
//     this.setState({ showModal: true });
//   }
  
//   handleCloseModal () {
//     this.setState({ showModal: false });
//   }
// render (){
//     return(
//       <div>
//         <ReactModal className='modal' isOpen={this.state.showModal} contentLabel="Minimal Modal Example">
//           <button onClick={this.handleCloseModal}>Close Modal</button>
//         </ReactModal>
//         <Carousel>
//             <Slide right>
//             <div>
//             {/* href="http://localhost:3000/users" */}
//                 <a href="#" onClick={this.handleOpenModal}>
//                   <img className='image' src="https://www.profiletalent.com.au/wp-content/uploads/2017/05/profile-talent-ant-simpson-feature.jpg"/>
//                 </a>
//                 {/* <h1>Seyed</h1> */}
//                 <p>Slide Description</p>
//             </div>
//             </Slide>
//             <Slide right>
//             <div>
//                 <img className='image' src="https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-all-about-face.jpg"/>
//                 {/* <h1>Sina</h1> */}
//                 <p>Slide Description</p>
//             </div>
//             </Slide>
//             <Slide right>
//             <div>
//                 <img className='image' src="https://weneedfun.com/wp-content/uploads/2015/09/Cute-baby-girl-pics-for-facebook-profile-12.jpg"/>
//                 {/* <h1>Alis</h1> */}
//                 <p>Slide Description</p>
//             </div>
//             </Slide>
//             <Slide right>
//             <div>
//                 <img className='image' src="https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-all-about-face.jpg"/>
//                 {/* <h1>Sina</h1> */}
//                 <p>Slide Description</p>
//             </div>
//             </Slide>
//         </Carousel>
//         </div>
//         );
//     }
// }

// export default Sliders
