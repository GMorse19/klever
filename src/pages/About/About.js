import React from 'react'
import { Container, Row } from 'react-bootstrap'

import Footer from '../../components/Footer/Footer'
// import { stock } from '../../helpers/images/stock/stockArray'

import './About.scss'

const About = () => (
        <Container fluid className='about-bg'>
            <Row className='justify-content-center'>
                <div className=''>
                    <div className='about-title'>
                        <p>about</p>
                    </div>
                </div>
            </Row>
            <div className='about-content'>
              <h1>Under Construction</h1>
            </div>
            <Row><Footer /></Row>
        </Container>
)

export default About
