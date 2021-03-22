import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './Footer.scss'

import { icon } from '../../helpers/images/icons/iconArray'

const Footer = () => (
    <div className='footer' id='footer'>
        <Container>
            <Row>
                <Col xs={12} lg={6}>
                  <div className='footer-address'>
                    <ul style={{ listStyle: 'none' }}>
                    
                      <li><a href={'mailto: kleverboxing@gmail.com'}>kleverboxing@gmail.com</a></li>
                    </ul>
                  </div>

                </Col>
                <Col xs={6} lg={3}>

                        <a href='https://www.instagram.com/kleverboxing'>
                            <img width={60} src={icon.media.instagram} alt='instagram' />
                        </a>
                        </Col>
                        <Col xs={6} lg={3}>

                        <a href='https://www.facebook.com/kleverboxinggym'>
                            <img width={60} src={icon.media.facebook} alt='facebook' />
                        </a>

                </Col>
            </Row>
        </Container>
    </div>
)

export default Footer
