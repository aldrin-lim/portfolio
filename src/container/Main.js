import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
import { Col } from 'reactstrap';
import Typewritter from './TypeWritter';
import Navigation from './Navigation';
import Projects from './Projects';
export default class Main extends Component {
  render() {
    return (
      <div>
        <Navigation />
        {/* <Typewritter /> */}
        <Projects />
      </div>
    )
  }
}
