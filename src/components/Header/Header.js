import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { fallDown as Menu } from 'react-burger-menu'

import './Header.scss'

import { icon } from '../../helpers/images/icons/iconArray'

class Header extends React.Component {
  constructor() {
    super()

    this.state = {
      menuOpen: false
    }
  }

  handleChange = (state) => {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu = () => {
    this.setState({ menuOpen: false })
  }

  render () {

    const { menuOpen } = this.state

    return (
  <div className='header'>
  
    <Menu
      className='header-menu'
      isOpen={menuOpen}
      onStateChange={(state) => this.handleChange(state)}
      width={ '100vw' }
    >
      <Container fluid>
      <Row>
        <Col className='menu-col-left'>
          <img width={100} src={icon.logo.logo} alt='boxing gloves' />
        </Col>
          <Col className='menu-col-right'>
            <Col className='link-col' lg={12}><a onClick={() => this.closeMenu()} href='#/'>Home</a></Col>
            <Col className='link-col' lg={12}><a onClick={() => this.closeMenu()} href='#start'>Start Here</a></Col>
            <Col className='link-col' lg={12}><a onClick={() => this.closeMenu()} href='#about'>About</a></Col>
            <Col className='link-col' lg={12}><a onClick={() => this.closeMenu()} href='#classes'>Classes</a></Col>
            <Col className='link-col' lg={12}><a onClick={() => this.closeMenu()} href='#contact'>Contact</a></Col>
          </Col>
        </Row>
      </Container>
    </Menu>
    <Container fluid>
      <Row className='header-row'>
        <Col xs={{ span: 2, offset: 1 }}><a href='#/'>Home</a></Col>
        <Col xs={2}><a href='#start'>Start Here</a></Col>
        <Col xs={2}><a href='#classes'>Classes</a></Col>
        <Col xs={2}><a href='#about'>About</a></Col>
        <Col xs={2}><a href='#/'><img width={20} src={icon.media.facebook} alt='facebook'/></a>
        <a href='#/'><img width={20} src={icon.media.instagram} alt='instagram'/></a></Col>
      </Row>
    </Container>
  </div>
    )
  }
}

export default Header
