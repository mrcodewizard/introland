import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import googlePlay from '../assets/img/google-play.svg';
import introLogo from '../assets/img/freebridge-logo.png'
import avenuLogo from '../assets/img/avenu-logo.svg';
import '../assets/css/footer.css';

function Footer() {
  return (
    <footer className="footer" id="footer">
        <div className='footer-top'>
            <Row>
                <Col md={6}>
                    <h4 className='title-heading'>Personal Finance</h4>
                    <ul className='row nav'>
                        <li className='col-sm-6'>
                            <a href="#">Free credit score &amp; ID monitoring</a>
                        </li>
                        <li className='col-sm-6'>
                            <a href="#">Refinance your existing mortgage</a>
                        </li>
                        <li className='col-sm-6'>
                            <a href="#">Apply online for a new mortgage</a>
                        </li>
                        <li className='col-sm-6'>
                            <a href="#">Get a 3-bureau credit report</a>
                        </li>
                    </ul>
                </Col>
                <Col md={3}>
                    <h4 className='title-heading'>For Agents</h4>
                    <ul className='row nav'>
                        <li className='col-sm-12'>
                            <a href="#">Find your Local Office</a>
                        </li>
                        <li className='col-sm-12'>
                            <span className='download-app'> Download App </span>
                            <a href="#"> <i className='fa fa-apple'></i></a> <span> | </span>
                            <img src={googlePlay} className='google-play' alt="google-play" />
                        </li>
                    </ul>
                </Col>
                <Col>
                    <h4 className='title-heading'>Business Services</h4>
                    <ul className='row nav'>
                        <li className='col-sm-12'>
                            <a href="#">For real estate professionals</a>
                        </li>
                        <li className='col-sm-12'>
                            <a href="#">For lenders and loan originators</a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
        <div className="footer-legal">
            <Row>
                <Col md={2} sm={3}>
                    <img className="professional" src={introLogo} alt="Freebridge" />
                </Col>
                <Col md={10} sm={9}>
                    <ul className="nav">
                        <li><a href="https://offices.introlend.com/" target="_blank">Find Your Local Chapter</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms-of-use">Terms of Use</a></li>
                        <li><a href="https://www.securerights.org/licenses.html" target="_blank">Licenses</a></li>
                    </ul>
                    <div>Copyright © 2022 
                        <a href="#" target="_blank"> Freebridge™ USA Company NMLS #1711434 </a>
                        All rights reserved.
                    </div>
                </Col>
            </Row>
        </div>
        <div className="footer-bottom hidden-xs">
            <Row>
                <Col md={2} sm={3} >
                    <a href="https://myavenu.com">
                        <img src={avenuLogo} alt="Avenu, Inc"/>
                    </a>
                </Col>
                <Col md={10} sm={9} >
                    <ul className="list-unstyled">
                        <li>FreeBridge™ is an <a href="https://myavenu.com">Avenu, Inc</a>. company.</li>
                        <li><a href="http://introlend.com">IntroLend</a></li>
                        <li><a href="http://homekick.com">HomeKick</a></li>
                        <li><a href="https://www.leadpoint.com/">LeadPoint</a></li>
                        <li><a href="https://creditcards.org">CreditCards.org</a></li>
                    </ul> 
                </Col>
            </Row>
        </div>
    </footer>
  );
}

export default Footer;
