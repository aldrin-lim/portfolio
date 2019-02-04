import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/normalize.css';
import './assets/main.scss';
import { Row } from 'reactstrap';
import Main from './container/Main';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Main/>
        </Row>
      </div>
    );
  }
}

export default App;
