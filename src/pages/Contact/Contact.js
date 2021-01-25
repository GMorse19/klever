import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { icon } from '../../helpers/images/icons/iconArray'

import './Contact.scss'

const Contact = () => (
    <div className='contact'>
    <Container>
    <Row>
        <Col xs={12} lg={12}>
            <h5>Contact</h5>
            <p>Email: <a href={'mailto: kleverboxing@gmail.com'}>kleverboxing@gmail.com</a></p>
            <p>
                <a href='/#'>
                    <img width={30} src={icon.media.instagram} alt='instagram' />
                </a>
            </p>
            <p>
                <a href='https://www.facebook.com/kleverboxinggym/'>
                    <img width={30} src={icon.media.facebook} alt='facebook' />
                </a>
            </p>
        </Col>
    </Row>
</Container>
    </div>
)

export default Contact
