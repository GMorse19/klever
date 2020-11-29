import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import Footer from '../../components/Footer/Footer'
import { stock } from '../../helpers/images/stock/stockArray'

import './About.scss'

const About = () => (
        <Container fluid className='about-bg'>
            <Row className='justify-content-center'>
                <div className=''>
                    <div className='about-title'>
                        <p>about</p>
                    </div>
                </div>
            </Row>
            <div className='about-content'>
            <Row className='justify-content-center'>
            
                <Col>
                <h3>Where We Came From</h3>
                    <p>
                    In 2001, Paul Wade celebrated a Golden Gloves title win.
                    Following that, he began to focus on training and developing
                    fighters, producing numerous Golden Gloves champions. But
                    boxing in San Francisco had seen better days, and there was
                    a pressing need for an authentic gym. 
                    </p>
                </Col>

            </Row>
            <Row className='justify-content-center'>
            <Col lg={4}>
                    <p>
                    A space on Third Street opened up, and with its concrete
                    walls, iron piping, and low ceilings, it had the look and
                    feel he wanted: a hard space for hard workouts. Sold.
                    </p>
            </Col>
            <Col lg={8}><img src={stock.boxing.boxer} alt='boxer' /></Col>
            <Col>
                    <p>
                    Third Street Boxing Gym opened its doors in September of 2003. 
                    </p>
                    <p>
                    Today, 3rd Street is home to aspiring amateurs and local pros
                    alike. With a friendly atmosphere and classes designed to teach
                    boxing to the masses, we've become home to a growing number of
                    people who recognize the unparalleled benefit of the boxer's
                    workout. School teachers, mothers, stockbrokers, dentists,
                    artists, and lawyers all come to experience and reap the benefits
                    of our expertly guided classes and training.
                    </p>
                    <p>
                    And we're just getting started. Come be a part of it!
                    </p>
                    <Button>TAKE A FREE BEGINNERS CLASS</Button>
                </Col>
                
            </Row>
            <hr />
            <Row>
            <Col>
            <p><img src={stock.boxing.clubber} alt='clubber lang'/></p>
            </Col>
            <Col>
                <div>
                    <p>"I pity the fool, and I will destroy any man who tries
                    to take what I got!"</p>
                    <p>-- Clubber Lang</p>
                </div>
            </Col>
            </Row>
            </div>
            <Row><Footer /></Row>
        </Container>
)

export default About
