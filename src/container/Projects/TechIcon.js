import React, { Component } from 'react'
import nodejs from '../../assets/nodejs-min.png';
import html from '../../assets/html-min.png';
import css from '../../assets/css-min.png';
import js from '../../assets/js-min.png';
import php from '../../assets/php-min.png';
import react from '../../assets/react-min.png';
import grails from '../../assets/grails-min.png';
import meteor from '../../assets/meteorjs-min.png';
import sass from '../../assets/sass-min.png';
export default class TechIcon extends Component {
  render() {
    const techs = { nodejs, html, js, php, react, grails, meteor, sass, css }
    return (
      <div className="tech-icon">
        <img src={techs[this.props.name]} />
      </div>
    )
  }
}
