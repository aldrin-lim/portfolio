import React, { Component } from 'react'
import { Col, Row} from 'reactstrap';
import Logo from '../assets/logo.png';
export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div id="logo">
          <img  src={Logo} alt="logo" />
        </div>
        <div id="menu">
          <a href="#">Projects</a>
          <a href="#">Skills</a>
          <a href="#">Contact</a>
        </div>
      </div>
    )
  }
}
