import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
import { Col } from 'reactstrap';
export default class Main extends Component {
  render() {
    return (
      <Col>
        <Header />
      </Col>
    )
  }
}
