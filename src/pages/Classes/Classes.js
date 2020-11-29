import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import Footer from '../../components/Footer/Footer'

import './Classes.scss'

const Classes = () => (
        <Container fluid className='classes-bg'>
            <Row className='justify-content-center'>
                <div className=''>
                    <div className='classes-title'>
                        <p>Classes</p>
                    </div>
                </div>
            </Row>
            <div className='classes-content'>
                <Row>
                    <Col>
                        <h3>Get In Boxing Shape!</h3>
                        <p>
                        This is where it all begins! Get the basics down in
                        Beginner Boxing 1 and 2, then ramp up your workout in an
                        energized group setting. FYI - your first Beginner Boxing
                        class is 50% off! Our 60-minute “Class”-level classes offer
                        a range of cardio drills, boxing technique, partner and mitt
                        work, body weight exercises, strength and conditioning, and
                        more - you’ll never get bored. Here are the different classes
                        we offer:
                        </p>
                    
                        <ul>
                            <li>“Beginner Boxing 1” (Limited):
                            Start learning the fundamentals like stance, punch
                            numbers, and how to move. </li>
                            <li>“Beginner Boxing 2” (Limited):
                            Learn the rest of the punches, how to wrap your
                            hands, and basic defense.</li>
                            <li>“Beginner Boxing 3” (Limited):
                            Finished with Beginner 1 and 2? Let’s keeping
                            working on those skills until you’re ready to jump
                            into the rest of our classes</li>
                            <li>“Old School Boxing” (INDOOR):
                            Classic heavy bag boxing, mat-based strength drills,
                            and old-school grit! A great class for refining your
                            boxing technique.</li>
                            <li>“Tough Love” (INDOOR):
                            Part boxing, part cardio, part strength &
                            conditioning, and a heavy dose of Tough Love! This
                            class will get you working up a sweat, both mental
                            and physical.</li>
                            <li>“Circuit & Strength (VIRTUAL)”:
                            Our popular non-boxing class, you’ll get a tough
                            session of full body conditioning through a blend of
                            power, strength, core, and cardio.</li>
                            <li>“Fighter Fit (VIRTUAL)”:
                            Join owner Paul Wade in a mixed bag of HIIT, cardio,
                            body mechanics, and intense shadowboxing rounds.</li>
                        </ul>
                       
                        <Button>Book a Class!</Button>
                    </Col>
                </Row>
            </div>
            <Row><Footer /></Row>
        </Container>
)

export default Classes
