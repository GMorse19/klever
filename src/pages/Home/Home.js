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
  </Container>
  <Footer />
  </div>
)

export default Home
