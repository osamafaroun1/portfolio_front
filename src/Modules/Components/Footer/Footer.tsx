import React from 'react'
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitterSquare } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";





const Footer = () => {
  return (
    <div>
        <div className="footer">
            <Container>
                <Row>
                   <Col>
                    <h4 className='titFooter'>My Acount</h4>
                     <ul className='ulFooter'>
                        <li className='iconFooter'> <a href="https://www.facebook.com/"><CiFacebook/></a></li>
                        <li className='iconFooter'> <a href="https://www.linkedin.com/"><CiLinkedin/></a></li>
                        <li className='iconFooter'> <a href="https://twitter.com/"><FaTwitterSquare/></a></li>
                     </ul>
                     <p className='copyreightFooter'>Copyreight <FaRegCopyright/>2024; Designed by <span>Focal Team 3</span> </p>
                   </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default Footer