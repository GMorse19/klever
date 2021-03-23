import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { icon } from '../../helpers/images/icons/iconArray'

import './Contact.scss'

const Contact = () => (
    <div className='contact'>
    <Container>
    <Row className='justify-content-center'>
        <Col xs={12} lg={3}>
          <div className='contact-address'>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ fontWeight: 'bold' }}>Klever Boxing</li>
              <li>1 Weston House Plaza</li>
              <li>Building A</li>
              <li>Hyde Park, MA 02136</li>
              <li><a href={'mailto: kleverboxing@gmail.com'}>kleverboxing@gmail.com</a></li>
            </ul>
          </div>
        </Col>

        <Col xs={12} lg={3}>
          <p>
            <a href='https://www.instagram.com/kleverboxing'>
                <img width={100} src={icon.media.instagram} alt='instagram' />
            </a>
          </p>
        </Col>
        <Col xs={12} lg={3}>
          <p>
            <a href='https://www.facebook.com/kleverboxinggym/'>
                <img width={100} src={icon.media.facebook} alt='facebook' />
            </a>
          </p>
        </Col>
    </Row>
</Container>
    </div>
)

export default Contact
