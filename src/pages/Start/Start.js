import React from 'react'
import { Button, Container, Col, Row } from 'react-bootstrap'
import Calendar from 'react-calendar'

import { icon } from '../../helpers/images/icons/iconArray'
import Footer from '../../components/Footer/Footer'

import './Start.scss'
import 'react-calendar/dist/Calendar.css'

const Start = () => (
    <Container fluid className='start-bg'>
    <Row className='justify-content-center'>
        <div className=''>
            <div className='start-title'>
                <p>Start Here</p>
            </div>
        </div>
    </Row>
    <Row className='justify-content-center'>
    
        <div className='start-content'>
        <Col>
            <h1>Welcome!</h1>
            <p>
                Nothing makes us happier than seeing new faces around Klever Boxing!
                Follow the steps below to get started…
            </p>
            <hr/>
            <h1>1. TAKE “BEGINNER BOXING 1”</h1>
            <p>
            We offer Beginner Boxing 1 no experience is required, and this
            first class is 50% off! You won’t need gloves or hand wraps for this
            class; just bring a jump rope for warmup (or you can loan or buy one
            at the front desk).
            </p>

            <p>
            Please note, this class is popular and normally fills up—if you
            no-show or late cancel (less than 4 hours), you’ll be billed a fee!
            </p>

            <p>
            Have prior boxing experience? Give us a call/email and we’ll get
            you started on the right track for you!
            </p>

            <div className='start-calendar'>
            <h4>Check our calendar for availability.</h4>
                <Calendar />
            </div>
        </Col>

            <hr />

            <h1>2. TAKE “BEGINNER BOXING 2” </h1>
            <p>
            Now go download our app and book Beginner Boxing 2! Our app is the easiest way to: 
            </p>
            <ul className='start-list'>
                <li>Book your classes</li>
                <li>Sync to your calendar</li>
                <li>Track your attendance and purchases</li>
                <li>Stay up to date on schedule changes</li>
                <li>Change your form of payment</li>
                <li>Get notified about promotions</li>
                <li>And more!</li>
            </ul>
            <br/>
            <Button>Download Our App!</Button>
            <hr/>
            <h1>3. TAKE THE NEXT STEP…</h1>
            <p>
            We only require you to take Beginner Boxing 1 and 2 once each
            (although you’re welcome to take them again if you’d like!) After
            that, no matter what your goals are, we have a path for you, and
            promos to sweeten the deal along the way!...
            </p>
            <ul className='start-list'>
                <li>Ready to become a member? Get $86 off your first month of
                membership (either “Class” or “Academy”) with our beginner
                deals. Hurry, this promo is only valid up to 2 weeks after your
                first beginner class!</li>

                <li>Still want to check out a few “Class”-level classes before
                committing? All good—get 2 classes for $49, or 5 classes for
                $119!</li>

                <li>If you’re not so much into classes and just want to workout
                on your own, get a Club membership!</li>

                <li>If a monthly membership doesn’t make sense for you, get a
                10-pack (“Class” or “Academy” for classes, or Club for using
                the facilities) which you can use over a 3-month period.</li>

                <li>Have a specific boxing or fitness goal, or just really like
                the 1-on-1 setting? Book a personal training session. If you
                become a member, your first session is only $50!</li>

                <li>Ready to dive headfirst into boxing technique, losing weight,
                gaining strength, and developing muscle tone? Our Boxing Bootcamp is
                for you. </li>

                <li>The workout is only half the story. If you’re serious about
                locking down your diet, take advantage of a free nutrition
                consultation with our registered dietitian!</li>
            </ul>
            <hr/>
             <h4>LASTLY, GO FOLLOW US ON INSTAGRAM AND FACEBOOK!</h4>
             <a href='#/'><img width={30} src={icon.media.facebook} alt='facebook' /></a>
             <a href='#/'><img width={30} src={icon.media.instagram} alt='instagram' /></a>
            <hr/>
            <p>
            Please note: All new folks at 3rd Street must take both “Beginner
            Boxing 1” and “Beginner Boxing 2” before any other boxing classes.
            These classes introduce you to our punch system, help prevent
            injuries, and ensure the best experience for you and others, so they
            are required! You can only skip this requirement if you go straight
            into our Bootcamp or Personal Training, or just want to take our non-boxing
            classes.
            </p>
        </div>
        </Row>
        <Row><Footer /></Row>
        </Container>
)

export default Start
