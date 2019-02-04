import React, { Component } from 'react'
import Typewritter from './Typewritter';
import avatar from '../assets/avatar.png';
import Nav from './Nav';
export default class Header extends Component {
  render() {
    return (
      <div id="first_section">
        <Nav />
        <div id="header">
          {/* <div id="avatar">
            <img src={avatar} alt="me" />
          </div> */}
          <Typewritter />
          
        </div>
      </div>

    )
  }
}
