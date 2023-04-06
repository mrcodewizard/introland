import React, { Component } from 'react';
import {  BrowserRouter as Router, Route,  NavLink } from "react-router-dom";
import {Navbar, Nav, Row, Col} from 'react-bootstrap';
import introLogo from '../assets/img/freebridge-logo.png';
import '../assets/css/sidebar.css';

class Sidebar extends Component {  
  constructor(props) {
    super(props)

  }

  render(props) {
    return (
        <div className="sidebar" id="sidebar">
            <button onClick={this.props.hidemenu} className="close-sidebar">
                <i className="fa fa-close"></i>
            </button>
            <div className="sidebar-container">
                <div className="login-welcome">
                    <div className="row top-padding-xlarge">
                        <div className="col-3">
                            <div className="member" title="">
                                <span className="memberInitial">B</span>
                            </div>
                        </div>
                        <div className="col-9">
                            <h4>Welcome back Brian</h4>
                            <div className="member-profile-type">
                                <a href="/membership-selection">Upgrade</a> <span className="pipe">&nbsp;|&nbsp;</span>
                                Essential Member
                            </div>
                        </div>
                    </div>
                </div>
                <h4>Simple tools to master your financial life.</h4>
                <header className='sidebar-menu'>
                    <Row>
                        <Col md="12">
                            <div className="sidebar-main">
                                <ul className="nav flex-column">
                                    <li>
                                        <a href="" to="/"> 
                                        <i className='fa fa-dashboard'></i> Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="" to="/credit-manager">
                                        <i className='fa fa-credit-card'></i> Credit Manager</a>
                                    </li>
                                    <li>
                                        <a href="/">
                                        <i className='fa fa-scissors'></i> Debt Optimizer</a>
                                    </li>
                                    <li>
                                        <a href="/identity-protector">
                                        <i className='fa fa-shield'></i> ID Protector</a>
                                    </li>
                                    <li>
                                        <a href="/home-purchaser"> 
                                        <i className='fa fa-home'></i> Home Purchaser</a>
                                    </li>
                                    <li>
                                        <a href="/mortage-refinancer">
                                        <i className='fa fa-dollar'></i> Mortage Refinancer</a>
                                    </li>
                                    <li>
                                        <a href="/retirement-planner">
                                        <i className='fa fa-flag'></i> Retirement Planner</a>
                                    </li>
                                    <li>
                                        <a href="/personal-loans">
                                        <i className='fa fa-money'></i> Personal Loans</a>
                                    </li>
                                    <li>
                                        <a href="/">
                                        <i className='fa fa-heartbeat'></i> Life Insurance</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-links top-margin-large">
                                <ul className="nav flex-column no-border">
                                    <li><a href="/about">About Freebridge</a></li>
                                    <li><a href="/contact-us">Contact Us</a></li>
                                    <li><a href="/privacy">Privacy Policy</a></li>
                                    <li><a href="/terms-of-use">Terms of Use</a></li>
                                    <li className="no-border"><a href="/community-guidelines">Community Guidelines</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </header>
           </div>
           <div className="sidebar-footer-logo animated fadeIn hidden-xs">
                <img src={introLogo} alt="intro-logo" />
                <p>Copyright © 2022 Freebridge. <br />All rights reserved.</p>
            </div>
        </div>
      );
  }
}

export default Sidebar;
