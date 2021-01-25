import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './Footer.scss'

import { icon } from '../../helpers/images/icons/iconArray'

const Footer = () => (
    <div className='footer' id='footer'>
        <Container>
            <Row>
                <Col xs={12} lg={6}>
                    <p>Email: <a href={'mailto: kleverboxing@gmail.com'}>kleverboxing@gmail.com</a></p>
                </Col>
                <Col xs={6} lg={6}>
                  
                        <a href='https://www.facebook.com/kleverboxinggym/'>
                            <img width={30} src={icon.media.instagram} alt='instagram' />
                        </a>

                        <a href='/#'>
                            <img width={30} src={icon.media.facebook} alt='facebook' />
                        </a>

                </Col>
            </Row>
        </Container>
    </div>
)

export default Footer
