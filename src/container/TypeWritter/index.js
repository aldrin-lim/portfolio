import React, { Component } from 'react'
import TypeIt from 'typeit';
import './styles.scss';
export default class TypeWritter extends Component {
  state = {
    onAnimation: true
  }
  typeTitle = (callback = () => {})  => {
    new TypeIt('.type_intro.active', {
      speed: 50,
      waitUntilVisible: true
    })
    .type("Uhmm, Hello?")
    .pause(200)
    .delete(50)
    .type("Are you there?")
    .pause(200)
    .delete(50)
    .type("Good. I'll introduce myself :)")
    .pause(400)
    .delete(90)
    .type("Hi, I'm <span id='highlight'>Aldrin Lim</span>. A Software Developer based in Philippines. Let me build you a beautiful website or a cool web application")
    .exec(async () => {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          this.setState({ onAnimation: false })
        },500)
      })
    })
    .go()
  }

  typeDescription = () => {
    const description = "Im a Software Developer from Philippines. Also a <span id='highlight'>Fullstack Developer</span>. I can build you a beautiful website or a cool web application :)"
    new TypeIt('#type_description', {
      speed: 40,
      waitUntilVisible: true
    }).type(description).go();
  }
  componentDidMount = () => {
    this.typeTitle(this.typeDescription);
  }
  render() {
    
    return (
      <div id="typewritter">
        <h1 className="type_intro active"></h1>
        <div className={`seemycv ${!this.state.onAnimation && "show"}`}>
          <a href="https://drive.google.com/open?id=1WkALNv_wBGFQoVnjbRe8ky_h07-DKHRr" target="_blank">View Resume</a>
        </div>  
      </div>
    )
  }
}
