import {Col, Container, Row} from 'react-bootstrap'
import person from "../assetss/person-removebg-preview.png";
import './AboutMe.css'
import React from 'react';

export type TAboutProps = {
  onSwitch : ()=> void
}

const AbouteMe:React.FC<TAboutProps> = ({onSwitch}) => {
  return (
    <div className='about-color'>
    <Container>
      <Row className='about'>
        <Col xs="12" md='4' >
          <div className="about_img">
             <img src={person} alt="person-img" />
          </div>
        </Col>
        <Col xs='12' md='6'>
          <div className="about-content">
            <h1>About Me</h1>
            <h3>Full Stack Developer!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quia exercitationem sit, perspiciatis incidunt,
               odio maxime iure quidem, nostrum iste debitis maiores totam ducimus! Qui, porro.
               Aliquam sequi excepturi quia molestiae!
            </p>
            <button onClick={onSwitch}>Read More</button>   
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default AbouteMe