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
          <a href="#">Projects<i className="ml-1 fa fa-briefcase"/></a>
          <a href="#">Skills<i className="ml-1 fa fa-keyboard"/></a>
          <a href="#">Contact<i className="ml-1 fa fa-envelope"/></a>
        </div>
      </div>
    )
  }
}
