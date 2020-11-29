import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Footer from '../../components/Footer/Footer'

import './Classes.scss'

const Classes = () => (
    <div className='classes'>
        <Container fluid className='classes-bg'>
            <Row className='justify-content-center'>
                <div className=''>
                    <div className='classes-title'>
                        <p>Classes</p>
                    </div>
                </div>
            </Row>
            <Row><Footer /></Row>
        </Container>
    </div>
)

export default Classes
