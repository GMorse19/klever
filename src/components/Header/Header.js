import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import './Header.scss'

import { icon } from '../../helpers/images/icons/iconArray'

const Header = () => (
  <div className='header'>
    <Container fluid>
      <Row className='header-row'>
        <Col xs={2}><img width={20} src={icon.logo.logo} alt='gloves'/></Col>
        <Col xs={2}>Home</Col>
        <Col xs={2}>About</Col>
        <Col></Col>
        <Col xs={2}><img width={20} src={icon.media.facebook} alt='facebook'/></Col>
        <Col xs={2}><img width={20} src={icon.media.instagram} alt='instagram'/></Col>
      </Row>
    </Container>
  </div>
)

export default Header
