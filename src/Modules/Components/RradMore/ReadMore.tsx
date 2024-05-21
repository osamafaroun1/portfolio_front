import React from 'react';
import Card from 'react-bootstrap/Card';
import './ReadMore.css'
import { data } from './read';
import { TAboutProps } from '../AboutMe/AbouteMe';
import { Col, Container, Row } from 'react-bootstrap';

const ReadMore:React.FC<TAboutProps> = ({onSwitch}) => {
return (
    <div className='about-color read-res'>
      <Container>
        
        <Row className='read_More'>
        { data.map((item)=>(
            <Col sm='4' md='4' lg='3' key={item.id}>
                 <item.icon className='read-icon' />
                  { item.iconTwo?<item.iconTwo className='read-icon read-icon2'/> : null}
                <Card className='read-card'>
                <Card.Body className='read-body'>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.desc}
                </Card.Text>
                </Card.Body>
             </Card>
            </Col>
        ))}
        <button className='read-button' onClick={onSwitch}>Back</button>
        </Row>
          
     </Container>
    </div>
  )
}

export default ReadMore