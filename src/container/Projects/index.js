import React, { Component } from 'react'
import './styles.scss';
import Slider from 'simple-react-slider';
import image1 from '../../assets/portfoliowork1.png';
import image2 from '../../assets/portfoliowork2.png';
import image3 from '../../assets/portfoliowork3.png';
import image4 from '../../assets/portfoliowork4.png';
import TechIcon from './TechIcon';


export default class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <h1>NOTE: <br /> These are some of my work, Screenshots are only provided due to Non-Discolure Agreement</h1>
        <Slider>
          <div className="items">
            <img src={image1} />
            <div className="description">
              <h2>Our Scene</h2>

              <p>Web Application that exchanges services between Artist and Events & Production provider</p>
              <div className="tech-stack">
                <TechIcon name="php" />
                <TechIcon name="html" />
                <TechIcon name="css" />
                <TechIcon name="sass" />
                <TechIcon name="js" />
              </div>
            </div>
          </div>

          <div className="items">
            <img src={image2} />
            <div className="description">
              <h2>Uni5 Wellness</h2>
              <p>Website for a Health and Wealth Organization from the Philippines</p>
              <div className="tech-stack">
                <TechIcon name="html" />
                <TechIcon name="css" />
                <TechIcon name="sass" />
                <TechIcon name="js" />
              </div>
            </div>
          </div>

          <div className="items">
            <img src={image3} />
            <div className="description">
              <h2>Little Angel</h2>
              <p>Website for a Small Day Care Centre in Taguig, Philippines</p>
              <div className="tech-stack">
                <TechIcon name="html" />
                <TechIcon name="css" />
                <TechIcon name="sass" />
                <TechIcon name="js" />
              </div>
            </div>
          </div>

          <div className="items">
            <img src={image4} />
            <div className="description">
              <h2>IDOOH </h2>
              <p>A CMS application using MERN Stack</p>
              <div className="tech-stack">
                <TechIcon name="react" />
                <TechIcon name="nodejs" />
                <TechIcon name="html" />
                <TechIcon name="css" />
                <TechIcon name="sass" />
                <TechIcon name="js" />
              </div>
            </div>
          </div>



        </Slider>
      </div>
    )
  }
}
