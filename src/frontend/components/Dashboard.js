import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/dashboard.css';
import homeIcon from '../assets/img/dash-home.png';
import phoneIcon from '../assets/img/dash-phone.svg';
import emailIcon from '../assets/img/dash-email.svg';
import shadowImage from '../assets/img/shadow.png';
import transUnionLogo from '../assets/img/trans-union.svg'
import Footer from './Footer';

function Dashboard() {
  return (
     <div>
        <div className='dashboard'>
         <Container>
             <Row>
                <Col md="12">
                   <div className='dash-intro'>
                       <h3 className="dash-heading">You work hard for your money.</h3>
                       <p className='dash-para'>Let our financial tools work hard for you.</p>
                   </div>
                </Col>
             </Row>
         </Container>

         <Container>
            <Row>
                <Col md="4">
                   <div className='dash-item'>
                       <h3 className='item-heading'><i className='fa fa-home'></i> Mortgage Quotes</h3>
                       <h4 className='item-subhead'>LOWEST PAYMENT</h4>
                       <img src={homeIcon} className='icon-home' alt="dashbaord-home"/>

                       <p>Are you looking for the best <br/> mortgage rate?</p>
                       <div className="item-block-link">
                         <a className="link" href="/home-purchaser">Home Purchaser</a> <span> | </span> 
                         <a className="link" href="/mortgage-refinancer">Mortgage Refinancer</a>
                        </div>
                   </div>
                </Col>

                <Col md="4">
                   <div className='dash-item'>
                       <h3 className='item-heading'><i className='fa fa-credit-card'></i> Credit Manager</h3>
                       <h4 className='item-subhead'>YOUR SCORE</h4>
                       <h6 className="item-score">775</h6>
                       <div className="shadow">
                          <img src={shadowImage} style={{width:"174px"}} alt="shadow-image"/>  
                        </div>

                        <p> <b>As of</b> <br/> 10/24/2021</p>
                        <div className="item-block-link">
                          <a className="link" style={{"marginTop": "0px"}} href="/credit-manager">View Credit Manager</a>
                         </div>
                   </div>
                </Col>

                <Col md="4">
                   <div className='dash-item dash-identity'>
                       <h3 className='item-heading'><i className='fa fa-shield'></i> Identity Protector</h3>
                       <h4 className='item-subhead'>ALERT SETTINGS</h4>
                       <Row>
                          <Col xs="6">
                            <img src={phoneIcon} className='phone-image' alt="dashbaord-home"/>
                            <div className="shadow">
                               <img src={shadowImage} style={{width:"110px"}}  alt="shadow-image"/>  
                            </div>
                            <h4>Linked to Phone</h4>
                            <p>(989) 942-4454</p>
                          </Col>
                          <Col xs="6">
                            <img src={emailIcon} className='email-image' alt="dashbaord-home"/>
                            <div className="shadow">
                               <img src={shadowImage} style={{width:"137px"}} alt="shadow-image"/>  
                            </div>
                            <h4>Linked to Email</h4>
                            <p>brianbew00@yahoo.com</p>
                          </Col>
                       </Row>

                        <div className="item-block-link">
                          <a className="link" href="/identity-protector">View Identity Protector</a>
                        </div>
                   </div>
                </Col>
             </Row>
             <div className="content-divider">
               <div className="gradient-left"></div> 
               <div className="gradient-right"></div>
            </div>
            <p className="foot-note"> Data from
               <img src={transUnionLogo} alt='trans-union-image' />
            </p>
         </Container>
         </div>
         <Footer />
     </div>
      
    )
}

export default Dashboard;
