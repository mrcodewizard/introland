import React, { Component } from 'react';
import {  BrowserRouter as Router, Route,  NavLink } from "react-router-dom";
import {Navbar, Nav, Row, Col, NavDropdown} from 'react-bootstrap'
import Dashboard from './Dashboard';
import HomePurchaser from "./HomePurchaser";
import MortageRefinancer from "./MortageRefinancer";
import IdentityProtector from "./IdentityProtector";
import '../assets/css/main-menu.css';
import Sidebar from './Sidebar';
import CreditCard from './CreditCard';
import PersonalLoans from './PersonalLoans';
import CreditManager from './CreditManager';
import RetirementPlanner from './RetirementPlanner';
class MainMenu extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           showSidebar: false,
        }
    }
    
    render() {
        return (
            <div>
                <Router>
                    <header className='main-menu'>
                        <Navbar collapseOnSelect expand="lg" bg="white">
                            <Row>
                                <Col md="12">
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav className="navbar-main">
                                            <ul className="nav">
                                                <li>
                                                    <Nav.Link as={NavLink} exact activeClassName="active" to="/home-purchaser"> 
                                                    <i className='fa fa-home'></i> Home Purchaser</Nav.Link>
                                                </li>
                                                <li>
                                                    <Nav.Link as={NavLink} exact activeClassName="active" to="/mortage-refinancer">
                                                    <i className='fa fa-dollar'></i> Mortage Refinancer</Nav.Link>
                                                </li>
                                                <li>
                                                    <Nav.Link as={NavLink} exact activeClassName="active" to="/credit-manager">
                                                    <i className='fa fa-credit-card'></i> Credit Manager</Nav.Link>
                                                </li>
                                                <li>
                                                    <Nav.Link as={NavLink} exact activeClassName="active" to="/identity-protector">
                                                    <i className='fa fa-shield'></i> ID Protector</Nav.Link>
                                                </li>
                                                <NavDropdown title="Rate Compare" data-icon="&#xf0e4;" id="nav-dropdown">
                                                    <NavDropdown.Item as={NavLink} exact activeClassName="active" to="/credit-card">
                                                        <i className='fa fa-credit-card'></i>
                                                        <span> Credit Card </span>
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Item as={NavLink} exact activeClassName="active" to="/personal-loans">
                                                        <i className='fa fa-money'></i>
                                                        <span> Personal Loans </span>
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Item as={NavLink} exact activeClassName="active" to="/">
                                                        <i className='fa fa-heartbeat'></i>
                                                        <span> Life Insurance</span>
                                                    </NavDropdown.Item>
                                                </NavDropdown>
                                                <li>
                                                    <Nav.Link as={NavLink} exact activeClassName="active" to="/contact">
                                                    <i className='fa fa-users'></i>Agents: <span className="color-primary"> Find your Local Chapter</span>
                                                    </Nav.Link>
                                                </li>
                                            </ul>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Col>
                            </Row>
                        </Navbar>
                    </header>
            
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/home-purchaser" component={HomePurchaser} />
                    <Route path="/mortage-refinancer" component={MortageRefinancer} />
                    <Route path="/identity-protector" component={IdentityProtector} />
                    <Route path="/credit-card" component={CreditCard} />
                    <Route path="/credit-manager" component={CreditManager} />
                    <Route path="/personal-loans" component={PersonalLoans} />
                    <Route path="/retirement-planner" component={RetirementPlanner} />
                </Router> 
            </div>
        )
    }
}

export default MainMenu;

