import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Footer from '../../components/Footer/Footer'

import './About.scss'

const About = () => (
    <div className='about'>
        <Container fluid className='about-bg'>
            <Row className='justify-content-center'>
                <div className=''>
                    <div className='about-title'>
                        <p>about</p>
                    </div>
                </div>
            </Row>
            <Row><Footer /></Row>
        </Container>
    </div>
)

export default About
