import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import Footer from '../../components/Footer/Footer'

import './Home.scss'

const Home = () => (
  <div>
  <Container fluid className='home-page'>
    <Row>
      <Col md={2} lg={2}>
        <div><p className='home-page-title'>Klever Boxing</p></div>
      </Col>
    </Row>
    <Row className='justify-content-center'>
      <Col lg={6} xs={6} className='home-page-intro'>
        <p>
          This is where we will put a brief description of what Klever Boxing is all about.
        </p>
      </Col>
    </Row>
  </Container>
  <div className='home-footer'>
    <Footer />
  </div>
  </div>
)

export default Home
