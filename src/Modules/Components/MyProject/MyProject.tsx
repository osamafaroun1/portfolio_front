// import React from 'react'
import proj from './../assets/myproject.jpg'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './MyProject.css'
const MyProject = () => {
  return (
    <div className='MyProject'>
        <Container>
         <h1 className='titProj'>My Projects</h1>
         <Row className='card_Proj'>
            <Col md='5' lg='3'>
                <Card  className='card_projcontent'>
                 <Card.Img className='card_img' variant="top" src={proj} />
                </Card>
            </Col>
            <Col md='5' lg='3'>
                <Card  className='card_projcontent'>
                 <Card.Img className='card_img' variant="top" src={proj} />
                </Card>
            </Col>
            <Col md='5' lg='3'>
                <Card  className='card_projcontent'>
                 <Card.Img className='card_img' variant="top" src={proj} />
                </Card>
            </Col>
            <Col md='5' lg='3'>
                <Card  className='card_projcontent'>
                 <Card.Img className='card_img' variant="top" src={proj} />
                </Card>
            </Col>
            <Col md='5' lg='3'>
                <Card  className='card_projcontent'>
                 <Card.Img className='card_img' variant="top" src={proj} />
                </Card>
            </Col>
            <Col md='5' lg='3'>
                <Card  className='card_projcontent'>
                 <Card.Img className='card_img' variant="top" src={proj} />
                </Card>
            </Col>
            
            
         </Row>
        </Container>
    </div>

  )
}

export default MyProject