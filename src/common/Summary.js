import React from 'react'
import '../css/summary.css'
import { IoIosStarOutline } from 'react-icons/io';
import { MdExtension } from "react-icons/md";
import { MdEventSeat } from "react-icons/md";




export class Summary extends React.Component{
  render(){
    return (
      <div className="summary-container">
          <div className='profile-summary'>
          Profile Summary
          </div>
          <div className='summary'>
            <div className="summary-items">
              <a className='summary-item' href='#'>
                <IoIosStarOutline  size={50}></IoIosStarOutline>
                <div>My Score</div>
              </a>
              <a className='summary-item' href='#'>
                <MdExtension size={50}></MdExtension>
                <div>My Games</div>
              </a>
              <a className='summary-item' href='#'>
                <MdEventSeat size={50}></MdEventSeat>
                <div>My Invitations</div>
              </a>
            </div>
          </div>
          </div>
    );
  }
}