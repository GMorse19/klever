import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { icon } from '../../helpers/images/icons/iconArray'

import './Contact.scss'

const Contact = () => (
    <div className='contact'>
    <Container>
    <Row>
        <Col xs={12} lg={4}>
            <h5>Contact</h5>
            <p>Email: kleverB@kleverboxing.com</p>
            <p>Phone: (555)555-5555</p>
        </Col>
        <Col xs={6} lg={4}>
            <h5>Links</h5>
            <p><a href='#start'>Start Here</a></p>
            <p><a href='#about'>About</a></p>
            <p><a href='#classes'>Classes</a></p>
        </Col>
        <Col xs={6} lg={4}>
            <h5>Media</h5>
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
