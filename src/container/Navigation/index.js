import React, { Component } from 'react'
import Logo from '../../assets/logo.png';
import './styles.scss';
export default class Nav extends Component {
  state = {
    toggle: false
  }
  render() {
    return (
      <div className="nav">
        {/* <div id="logo">
          <img  src={Logo} alt="logo" />
        </div> */}
        <div id="hamburger">
          <a className="anchor" href="#" onClick={() => this.setState({ toggle: !this.state.toggle })}><i className={`fa ${this.state.toggle ? 'fa-times' : 'fa-bars'}`} /></a>
        </div>
        <div id="menu" class={`${this.state.toggle ? 'show' : 'hide'}`}>
          <div className="menu-box">
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#">About Me</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    )
  }
}
