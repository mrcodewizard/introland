import React, { Component } from 'react'
import { Col, Container, Row, Nav, Tabs, Tab, Accordion} from 'react-bootstrap';
import "../assets/css/common.css";
import "../assets/css/id-protector.css";
import Footer from './Footer';
import shadow from "../assets/img/shadow.png";
import secureIcon from "../assets/img/secure-icon.svg";
import transUnion from "../assets/img/trans-union.svg";
import equifaxLogo from "../assets/img/equifax-logo.png";
import experianlogo from "../assets/img/experian-logo.png";

class IdentityProtector extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        isTooltipshow: false,
        activeKey: 1,
    }
  }

  toggleTooltip = () => {
    this.setState({
      isTooltipshow: !this.state.isTooltipshow
    })
  }
  
  closeTooltip = () => {
    this.setState({
      isTooltipshow: false,
    })
  }

  switchNextTab = (prevState) => {
    this.setState({
        activeKey: this.state.activeKey+1
    })
  }
  switchPrevTab = (prevState) => {
    this.setState({
        activeKey: this.state.activeKey-1
    })
  }

  render() {
    let toolTip = (this.state.isTooltipshow) ? <Tooltip closeTooltip={this.closeTooltip} /> : "";
    let nextTab = (this.state.activeKey < 5) ? <button className='btn btn-slide btn-next' onClick={this.switchNextTab}>Next Step <i className="fa fa-arrow-right"></i></button> : "";
    let prevTab = (this.state.activeKey > 1) ? <button className='btn btn-slide btn-prev' onClick={this.switchPrevTab}><i className="fa fa-arrow-left"></i> Prev Step</button> : "";
    return (
        <>
            <div className='section-identity'>
                <div className='identity-outer'>
                    <div className="sidebar-nav">
                        <div className="navbar navbar-fixed-left">
                            <ul className="list-unstyled nav navbar-nav" id="side-navbar">
                            <li>
                                <a className="section1 active" href="#"> <span className="fa fa-bullhorn"></span> 
                                Financial Account Notifications</a>
                            </li>
                            <li><a className="section2" href="#"><span className="fa fa-shield"></span> Identity Notifications</a>
                            </li>
                            <li><a className="section2" href="#"><span className="fa fa-shield"></span> Protection Overview</a>
                            </li>
                            <li><a className="section2" href="#"><span className="fa fa-binoculars"></span> Theft Resolution</a>
                            </li>
                            </ul>
                        </div>
                    </div>

                    <div className="identity-main">
                        <div className='identity-upper'>
                            <h2 className="title">Identity Protector</h2>
                            <p className="sub-heading">Working 24/7 in real time to guard against Identity Theft</p>
                        </div>

                        <div className="financial-notifications">
                            <div className="tooltip-outer">
                                <div className="inner-row">
                                    <h2>Financial Account Notifications</h2>
                                    <div className="tooltip-wrapper">
                                    <span className="info-icon fa fa-info-circle" onClick={this.toggleTooltip}></span>
                                    {/* Show tooltip on click */}
                                    {  toolTip }

                                    </div>
                                </div>
                            </div>

                            <div className="tab-component">
                                <Tab.Container id="left-tabs-example" defaultActiveKey="firstTab">
                                    
                                    <Nav variant="tabs">
                                        <Nav.Item>
                                            <Nav.Link eventKey="firstTab">
                                                <p className="info inquiries-view"><span className="info-val block">2</span></p>
                                                <div className="tab-text">Inquiries</div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="secondTab">
                                                <p className="info accounts-view">  <span className="info-val block">1</span></p>
                                                <div className="tab-text">New Accounts</div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="thirdTab">
                                                <p className="info delinquent-view">  <span className="info-val block">0</span></p>
                                                <div className="tab-text">Delinquent Accounts</div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fourthTab">
                                                <p className="info improved-view">  <span className="info-val block">0</span></p>
                                                <div className="tab-text">Improved Accounts</div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fifthTab">
                                                <p className="info bankrupt-view">  <span className="info-val block">0</span></p>
                                                <div className="tab-text">Account in Bankruptcy</div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="sixthTab">
                                                <p className="info takeover-view">  <span className="info-val block">0</span></p>
                                                <div className="tab-text">Financial Account Takeover</div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="seventhTab">
                                                <p className="info monitoring-view">  <span className="info-val block">0</span></p>
                                                <div className="tab-text">Pay-Day Monitoring</div>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    
                                    <Tab.Content>
                                        <Tab.Pane eventKey="firstTab">
                                            <div className="tab-pane-content inquires-cotent">
                                                <div className="alert-header">
                                                    <div className='row accordion-item'>
                                                        <div className='col-xs-6 col-sm-8'>
                                                            <h4>Subject</h4>
                                                        </div>
                                                        <div className="col-xs-3 col-sm-2">
                                                            <h4>Date</h4>
                                                        </div>
                                                        <div className="col-xs-3 col-sm-2 text-center">
                                                            <h4>Actions</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            <Accordion>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>
                                                        <div className='row'>
                                                            <div className='col-xs-6 col-sm-8'>
                                                                <div className="item-heading"><span className="text">DATAFACTS</span> </div>
                                                            </div>
                                                            <div className="col-xs-3 col-sm-2">
                                                                <div className="date">06/25/2021</div>
                                                            </div>
                                                            <div className="col-xs-3 col-sm-2 text-center">
                                                                <i className="fa fa-trash"></i>
                                                            </div>
                                                        </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="accordion-content">
                                                            <p className="type">Type: Miscellaneous</p>
                                                            <p className="name">DATAFACTS</p>
                                                            <p><i className="fa fa-phone mr-1" title="Phone Number"></i> (901) 685-7599 
                                                            <span className="pipe">|</span> <i className="fa fa-map-marker mr-1" title="Address"></i> 8000 CENTERVIEW PR STE 400, CORDOVA, TN, 38018</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>
                                                        <div className='row'>
                                                            <div className='col-xs-6 col-sm-8'>
                                                                <div className="item-heading"><span className="text">DATAFACTS</span> </div>
                                                            </div>
                                                            <div className="col-xs-3 col-sm-2">
                                                                <div className="date">06/25/2021</div>
                                                            </div>
                                                            <div className="col-xs-3 col-sm-2 text-center">
                                                                <i className="fa fa-trash"></i>
                                                            </div>
                                                        </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="accordion-content">
                                                            <p className="type">Type: Miscellaneous</p>
                                                            <p className="name">DATAFACTS</p>
                                                            <p><i className="fa fa-phone mr-1" title="Phone Number"></i> (901) 685-7599 
                                                            <span className="pipe">|</span> <i className="fa fa-map-marker mr-1" title="Address"></i> 8000 CENTERVIEW PR STE 400, CORDOVA, TN, 38018</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                               
                                        </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="secondTab">
                                          <div className="tab-pane-content inquires-cotent"> 
                                            <div className="alert-header">
                                                <div className='row accordion-item'>
                                                    <div className='col-xs-6 col-sm-8'>
                                                        <h4>Subject</h4>
                                                    </div>
                                                    <div className="col-xs-3 col-sm-2">
                                                        <h4>Date</h4>
                                                    </div>
                                                    <div className="col-xs-3 col-sm-2 text-center">
                                                        <h4>Actions</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <Accordion>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>
                                                        <div className='row'>
                                                            <div className='col-xs-6 col-sm-8'>
                                                                <div className="item-heading"><span className="text">FIRST HORIZON BANK/DOVEN</span> </div>
                                                            </div>
                                                            <div className="col-xs-3 col-sm-2">
                                                                <div className="date">06/25/2021</div>
                                                            </div>
                                                            <div className="col-xs-3 col-sm-2 text-center">
                                                                <i className="fa fa-trash"></i>
                                                            </div>
                                                        </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="accordion-content">
                                                            <p className="type">Type: Miscellaneous <span className="pipe">|</span>  ACCOUNT NUMBER: <b>ENDING 310148*******</b></p>
                                                            <p className="name">FIRST HORIZON BANK/DOVEN</p>
                                                            <p><i className="fa fa-phone mr-1" title="Phone Number"></i> (901) 685-7599 
                                                            <span className="pipe">|</span> <i className="fa fa-map-marker mr-1" title="Address"></i> 8000 CENTERVIEW PR STE 400, CORDOVA, TN, 38018</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                          </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="thirdTab">
                                            <div className="tab-pane-content employment-content">
                                                <div className="good-news-icon">
                                                    <img src={secureIcon} alt="good-news-icon" />
                                                </div>
                                                <p className="shadow-inner">
                                                    <img src={shadow} alt="shadow-image" />
                                                </p>
                                                <h3 className="good-news">Good News!</h3>
                                                <p>There’s not much to see here, since we only post suspicious activity,
                                                    so no news is good news! To ensure you’re getting your alerts, update your 
                                                    <a href="#"> alert settings</a>.
                                                </p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourthTab">
                                            <div className="tab-pane-content employment-content">
                                                <div className="good-news-icon">
                                                    <img src={secureIcon} alt="good-news-icon" />
                                                </div>
                                                <p className="shadow-inner">
                                                    <img src={shadow} alt="shadow-image" />
                                                </p>
                                                <h3 className="good-news">Good News!</h3>
                                                <p>There’s not much to see here, since we only post suspicious activity,
                                                    so no news is good news! To ensure you’re getting your alerts, update your 
                                                    <a href="#"> alert settings</a>.
                                                </p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fifthTab">
                                            <div className="tab-pane-content employment-content">
                                                <div className="good-news-icon">
                                                    <img src={secureIcon} alt="good-news-icon" />
                                                </div>
                                                <p className="shadow-inner">
                                                    <img src={shadow} alt="shadow-image" />
                                                </p>
                                                <h3 className="good-news">Good News!</h3>
                                                <p>There’s not much to see here, since we only post suspicious activity,
                                                    so no news is good news! To ensure you’re getting your alerts, update your 
                                                    <a href="#"> alert settings</a>.
                                                </p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="sixthTab">
                                            <div className="tab-pane-content">
                                                <div className="row justify-content-center">
                                                    <div className="col-xs-12 col-lg-8">
                                                        <div className="upgrade-membership">
                                                            <h3>Add pay-day monitoring to your notifications!</h3>
                                                            <p className="description">For the ultimate in ID Protection, upgrade to <span>Elite Membership</span>
                                                            to get all the notifications available to protect your finances and your family.</p>
                                                            <a className="disabled btn btn-yellow" href="#">Coming Soon</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="seventhTab">
                                            <div className="row justify-content-center">
                                                <div className="col-xs-12 col-lg-8">
                                                    <div className="upgrade-membership">
                                                        <h3>Add financial account takeover to your notifications!</h3>
                                                        <p className="description">For the ultimate in ID Protection, upgrade to <span>Elite Membership</span>
                                                        to get all the notifications available to protect your finances and your family.</p>

                                                        <a className="disabled btn btn-yellow" href="#">Coming Soon</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>

                        <div className="financial-notifications identity-notifications">
                            <div className="tooltip-outer">
                                <div className="inner-row">
                                    <h2>Identity Notifications</h2>
                                    <div className="tooltip-wrapper">
                                    <span className="info-icon fa fa-info-circle" onClick={this.toggleTooltip}></span>
                                    {/* Show tooltip on click */}
                                    {  toolTip }

                                    </div>
                                </div>
                            </div>

                            <div className="tab-component">
                                <Tab.Container id="left-tabs-example" defaultActiveKey="setTwoTabOne">
                                    
                                    <Nav variant="tabs">
                                        <Nav.Item>
                                            <Nav.Link eventKey="setTwoTabOne">
                                                <p className="info inquiries-view"><span className="info-val block">2</span></p>
                                                <div className="tab-text">New Public Record</div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="setTwoTabTwo">
                                                <p className="info accounts-view">  <span className="info-val block">1</span></p>
                                                <div className="tab-text">New Address</div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="setTwoTabThree">
                                                <p className="info delinquent-view">  <span className="info-val block">0</span></p>
                                                <div className="tab-text">New Employment</div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="setTwoTabFour">
                                                <p className="info improved-view">  <span className="info-val block">0</span></p>
                                                <div className="tab-text">Change of Address</div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="setTwoTabFive">
                                                <p className="info bankrupt-view">  <span className="info-val block">0</span></p>
                                                <div className="tab-text">Social Security Trace Monitoring</div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="setTwoTabSix">
                                                <p className="info takeover-view">  <span className="info-val block">0</span></p>
                                                <div className="tab-text">Court Monitoring</div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="setTwoTabSeven">
                                                <p className="info monitoring-view">  <span className="info-val block">0</span></p>
                                                <div className="tab-text">Sex Offender Monitoring</div>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    
                                    <Tab.Content>
                                        <Tab.Pane eventKey="setTwoTabOne">
                                            <div className="tab-pane-content employment-content">
                                                <div className="good-news-icon">
                                                    <img src={secureIcon} alt="good-news-icon" />
                                                </div>
                                                <p className="shadow-inner">
                                                    <img src={shadow} alt="shadow-image" />
                                                </p>
                                                <h3 className="good-news">Good News!</h3>
                                                <p>There’s not much to see here, since we only post suspicious activity,
                                                    so no news is good news! To ensure you’re getting your alerts, update your 
                                                    <a href="#"> alert settings</a>.
                                                </p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="setTwoTabTwo">
                                            <div className="tab-pane-content employment-content">
                                                <div className="good-news-icon">
                                                    <img src={secureIcon} alt="good-news-icon" />
                                                </div>
                                                <p className="shadow-inner">
                                                    <img src={shadow} alt="shadow-image" />
                                                </p>
                                                <h3 className="good-news">Good News!</h3>
                                                <p>There’s not much to see here, since we only post suspicious activity,
                                                    so no news is good news! To ensure you’re getting your alerts, update your 
                                                    <a href="#"> alert settings</a>.
                                                </p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="setTwoTabThree">
                                            <div className="tab-pane-content employment-content">
                                                <div className="good-news-icon">
                                                    <img src={secureIcon} alt="good-news-icon" />
                                                </div>
                                                <p className="shadow-inner">
                                                    <img src={shadow} alt="shadow-image" />
                                                </p>
                                                <h3 className="good-news">Good News!</h3>
                                                <p>There’s not much to see here, since we only post suspicious activity,
                                                    so no news is good news! To ensure you’re getting your alerts, update your 
                                                    <a href="#"> alert settings</a>.
                                                </p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="setTwoTabFour">
                                            <div className="tab-pane-content employment-content">
                                                <div className="good-news-icon">
                                                    <img src={secureIcon} alt="good-news-icon" />
                                                </div>
                                                <p className="shadow-inner">
                                                    <img src={shadow} alt="shadow-image" />
                                                </p>
                                                <h3 className="good-news">Good News!</h3>
                                                <p>There’s not much to see here, since we only post suspicious activity,
                                                    so no news is good news! To ensure you’re getting your alerts, update your 
                                                    <a href="#"> alert settings</a>.
                                                </p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="setTwoTabFive">
                                            <div className="tab-pane-content employment-content">
                                                <div className="good-news-icon">
                                                    <img src={secureIcon} alt="good-news-icon" />
                                                </div>
                                                <p className="shadow-inner">
                                                    <img src={shadow} alt="shadow-image" />
                                                </p>
                                                <h3 className="good-news">Good News!</h3>
                                                <p>There’s not much to see here, since we only post suspicious activity,
                                                    so no news is good news! To ensure you’re getting your alerts, update your 
                                                    <a href="#"> alert settings</a>.
                                                </p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="setTwoTabSix">
                                            <div className="tab-pane-content">
                                                <div className="row justify-content-center">
                                                    <div className="col-xs-12 col-lg-8">
                                                        <div className="upgrade-membership">
                                                            <h3>Add pay-day monitoring to your notifications!</h3>
                                                            <p className="description">For the ultimate in ID Protection, upgrade to <span>Elite Membership</span>
                                                            to get all the notifications available to protect your finances and your family.</p>
                                                            <a className="disabled btn btn-yellow" href="#">Coming Soon</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="setTwoTabSeven">
                                            <div className="row justify-content-center">
                                                <div className="col-xs-12 col-lg-8">
                                                    <div className="upgrade-membership">
                                                        <h3>Add financial account takeover to your notifications!</h3>
                                                        <p class="description">For the ultimate in ID Protection, upgrade to <span>Elite Membership</span>
                                                        to get all the notifications available to protect your finances and your family.</p>

                                                        <a class="disabled btn btn-yellow" href="#">Coming Soon</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>

                        <div className="financial-notifications protection-overview">
                            <div className="tooltip-outer">
                                <div className="inner-row">
                                    <h2>Protection Overview</h2>
                                    <div className="tooltip-wrapper">
                                        <span className="info-icon fa fa-info-circle" onClick={this.toggleTooltip}></span>
                                        {/* Show tooltip on click */}
                                        {  toolTip }
                                    </div>
                                </div>
                            </div>

                            <div className="overview-content">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="inner-content left">
                                            <div className="row">
                                                <div className="col-sm-12 col-md-6">
                                                    <h4 class="alert-settings">Alert Settings</h4>
                                                </div>
                                                <div className="col-sm-12 col-md-6">
                                                    <a href="/secure/alert-settings">Change Alert Settings</a>
                                                </div>
                                            </div>

                                            <p className="protection-para">
                                                Connect your mobile phone and email account to receive alerts of changes made by creditors. 
                                                It is important to promptly respond to fraud.
                                            </p>

                                            <div className="row">
                                                <div className="col-xs-12 col-md-6">
                                                    <div className="icon-text-container phone">
                                                        <div class="icon-info-container phone">
                                                            <p class="verification-link phone">Linked Phone</p>
                                                            <p class="phone-email" id="mobile">(989) 942-4454</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xs-12 col-md-6">
                                                    <div className="icon-text-container email">
                                                        <div class="icon-info-container email">
                                                            <p class="verification-link email">Linked Email</p>
                                                            <p class="phone-email" id="email">brianbew00@yahoo.com</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className='inner-content right'>
                                            <h4 class="protection-coverage">Protection Coverage</h4>

                                            <div className="protection-list">
                                                <ul className='nav'>
                                                    <li className="col-sm-12 col-md-6 checked">
                                                        TransUnion credit monitoring
                                                    </li>
                                                    <li className='col-sm-12 col-md-6'>
                                                        TransUnion instant inquiry analysis
                                                    </li>
                                                    <li className="col-sm-12 col-md-6 checked">
                                                        TransUnion credit monitoring
                                                    </li>
                                                    <li className='col-sm-12 col-md-6'>
                                                        TransUnion instant inquiry analysis
                                                    </li>
                                                    <li className="col-sm-12 col-md-6 checked">
                                                        TransUnion credit monitoring
                                                    </li>
                                                    <li className='col-sm-12 col-md-6'>
                                                        TransUnion instant inquiry analysis
                                                    </li>
                                                    <li className="col-sm-12 col-md-6 checked">
                                                        TransUnion credit monitoring
                                                    </li>
                                                    <li className='col-sm-12 col-md-6'>
                                                        TransUnion instant inquiry analysis
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="btn-container text-center">
                                                <a class="upgrade-btn" href="/membership-selection">Upgrade Membership</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="financial-notifications theft-resolution">
                            <div className="tooltip-outer">
                                <div className="inner-row">
                                    <h2>Theft Resolution</h2>
                                    <div className="tooltip-wrapper">
                                        <span className="info-icon fa fa-info-circle" onClick={this.toggleTooltip}></span>
                                        {/* Show tooltip on click */}
                                        {  toolTip }
                                    </div>
                                </div>
                            </div>

                            <p className="theft-para">Follow these 5 Steps if your identity or credit is compromised.</p>
                            <div className="theft-parent-tabs-container">
                                <div className="steps">
                                    <Tab.Container id="left-tabs-example" activeKey={this.state.activeKey}>
                                        <Nav variant="tabs" className="step-tabs">
                                            <Nav.Item>
                                                <Nav.Link eventKey={1}>
                                                    <div className="tab-no">1</div>
                                                    <div className="tab-text">Close Fradulent <br/> Activities</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey={2}>
                                                    <div className="tab-no">2</div>
                                                    <div className="tab-text">Place Fradulent <br/> Alert </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey={3}>
                                                    <div className="tab-no">3</div>
                                                    <div className="tab-text">Notify <br/> Authorities</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey={4}>
                                                    <div className="tab-no">4</div>
                                                    <div className="tab-text">Monitor <br/> Credit Reports</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey={5}>
                                                    <div className="tab-no">5</div>
                                                    <div className="tab-text">Take Preventive <br/> Actions</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>

                                        <Tab.Content>
                                            <Tab.Pane eventKey={1}>
                                                <div className="theft-tab-content">
                                                    <h3 className='content-title'>Select the type of fraud you suspect...</h3>
                                                    <div className="theft-child-tabs-container">
                                                        <Tab.Container id="left-tabs-example" defaultActiveKey="theftChildTabOne">
                                                            <Nav variant="tabs">
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="theftChildTabOne">
                                                                        <div className="tab-icon credit-card"></div>
                                                                        <div className="tab-text">Credit Card</div>
                                                                    </Nav.Link>
                                                                </Nav.Item>
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="theftChildTabTwo">
                                                                        <div className="tab-icon banking"></div>
                                                                        <div className="tab-text">Banking</div>
                                                                    </Nav.Link>
                                                                </Nav.Item>
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="theftChildTabThree">
                                                                        <div className="tab-icon loan"></div>
                                                                        <div className="tab-text">Loan</div>
                                                                    </Nav.Link>
                                                                </Nav.Item>
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="theftChildTabFour">
                                                                        <div className="tab-icon loan"></div>
                                                                        <div className="tab-text">Medical</div>
                                                                    </Nav.Link>
                                                                </Nav.Item>
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="theftChildTabFive">
                                                                        <div className="tab-icon credit-card"></div>
                                                                        <div className="tab-text">Employment</div>
                                                                    </Nav.Link>
                                                                </Nav.Item>
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="theftChildTabSix">
                                                                        <div className="tab-icon banking"></div>
                                                                        <div className="tab-text">Other</div>
                                                                    </Nav.Link>
                                                                </Nav.Item>
                                                            </Nav>

                                                            <Tab.Content>
                                                                <Tab.Pane eventKey="theftChildTabOne">
                                                                    <div className="bubble-content">
                                                                        <div className="type-bubble">
                                                                            <p>Contact your credit card company to close your fraudulent account &amp; open fraud case.
                                                                            The creditor may mail you an affidavit to sign and return. If desired, open a new account with the credit card company
                                                                            to continue using your card. Request new Personal Identification Numbers (PINs) and passwords.<br/>
                                                                            <br/>Start a file to keep all your information in one place. Always take notes of whom you spoke with,
                                                                            the conversation date, and what took place.</p>
                                                                        </div>
                                                                    </div>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="theftChildTabTwo">
                                                                    <div className="bubble-content">
                                                                        <div className="type-bubble">
                                                                            <p>Contact your credit card company to close your fraudulent account &amp; open fraud case.
                                                                            The creditor may mail you an affidavit to sign and return. If desired, open a new account with the credit card company
                                                                            to continue using your card. Request new Personal Identification Numbers (PINs) and passwords.<br/>
                                                                            <br/>Start a file to keep all your information in one place. Always take notes of whom you spoke with,
                                                                            the conversation date, and what took place.</p>
                                                                        </div>
                                                                    </div>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="theftChildTabThree">
                                                                    <div className="bubble-content">
                                                                        <div className="type-bubble">
                                                                            <p>Contact your credit card company to close your fraudulent account &amp; open fraud case.
                                                                            The creditor may mail you an affidavit to sign and return. If desired, open a new account with the credit card company
                                                                            to continue using your card. Request new Personal Identification Numbers (PINs) and passwords.<br/>
                                                                            <br/>Start a file to keep all your information in one place. Always take notes of whom you spoke with,
                                                                            the conversation date, and what took place.</p>
                                                                        </div>
                                                                    </div>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="theftChildTabFour">
                                                                    <div className="bubble-content">
                                                                        <div className="type-bubble">
                                                                            <p>Contact your credit card company to close your fraudulent account &amp; open fraud case.
                                                                            The creditor may mail you an affidavit to sign and return. If desired, open a new account with the credit card company
                                                                            to continue using your card. Request new Personal Identification Numbers (PINs) and passwords.<br/>
                                                                            <br/>Start a file to keep all your information in one place. Always take notes of whom you spoke with,
                                                                            the conversation date, and what took place.</p>
                                                                        </div>
                                                                    </div>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="theftChildTabFive">
                                                                    <div className="bubble-content">
                                                                        <div className="type-bubble">
                                                                            <p>Contact your credit card company to close your fraudulent account &amp; open fraud case.
                                                                            The creditor may mail you an affidavit to sign and return. If desired, open a new account with the credit card company
                                                                            to continue using your card. Request new Personal Identification Numbers (PINs) and passwords.<br/>
                                                                            <br/>Start a file to keep all your information in one place. Always take notes of whom you spoke with,
                                                                            the conversation date, and what took place.</p>
                                                                        </div>
                                                                    </div>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="theftChildTabSix">
                                                                    <div className="bubble-content">
                                                                        <div className="type-bubble">
                                                                            <p>Contact your credit card company to close your fraudulent account &amp; open fraud case.
                                                                            The creditor may mail you an affidavit to sign and return. If desired, open a new account with the credit card company
                                                                            to continue using your card. Request new Personal Identification Numbers (PINs) and passwords.<br/>
                                                                            <br/>Start a file to keep all your information in one place. Always take notes of whom you spoke with,
                                                                            the conversation date, and what took place.</p>
                                                                        </div>
                                                                    </div>
                                                                </Tab.Pane>
                                                            </Tab.Content>
                                                        </Tab.Container>
                                                    </div>
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey={2}>
                                                <div className="tab-common-content">
                                                    <h3 className="common-heading">Place a Fraud Alert with 1 of the 3 major credit bureaus.</h3>
                                                    <div className="row">
                                                        <div className="col-sm-4 text-center">
                                                            <img src={transUnion} alt="transUnion-logo" />
                                                            <p className="logo-text">Call <span>800-525-6285</span> <br/>
                                                            or <a href="https://www.equifax.com/personal/" target="_blank">click here</a></p>
                                                        </div>
                                                        <div className="col-sm-4 text-center">
                                                            <img src={equifaxLogo} alt="equifax-logo" />
                                                            <p className="logo-text">Call <span>800-525-6285</span> <br/>
                                                            or <a href="https://www.equifax.com/personal/" target="_blank">click here</a></p>
                                                        </div>
                                                        <div className="col-sm-4 text-center">
                                                            <img src={experianlogo} alt="experian-logo" />
                                                            <p className="logo-text">Call <span>800-525-6285</span> <br/>
                                                            or <a href="https://www.equifax.com/personal/" target="_blank">click here</a></p>
                                                        </div>
                                                    </div>

                                                    <div className="common-buble">
                                                        <p>Tell the bureau you are an identity theft victim. Request a "fraud alert" to be placed on your file requesting creditors
                                                            to contact you via phone prior to opening additional accounts in your name. You can set the fraud alert term to 90 days, 1 year or 7 years.
                                                            If you wish to cancel the fraud alert before this time is up, simply contact the credit bureaus.</p>
                                                    </div>
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey={3}>
                                                <div className="tab-common-content">
                                                    <h3 className="common-heading">Place a Fraud Alert with 1 of the 3 major credit bureaus.</h3>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <div className="row">
                                                                <div className="col-sm-3">
                                                                    <img src={transUnion} alt="transUnion-logo" style={{width: "100%", minWidth :"100px"}} />
                                                                </div>
                                                            
                                                                <div className="col-sm-9">
                                                                    <h5 className='title-heading-five'>Federal Trade Commission</h5>
                                                                    <p className="logo-text">Call <span>800-525-6285</span> <br/>
                                                                    or <a href="https://www.equifax.com/personal/" target="_blank">click here</a></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="row">
                                                                <div className="col-sm-3">
                                                                    <img src={transUnion} alt="transUnion-logo" style={{width: "100%", minWidth :"100px"}} />
                                                                </div>
                                                            
                                                                <div className="col-sm-9">
                                                                    <h5 className='title-heading-five'>Notify Local Police</h5>
                                                                    <p className="logo-text">Call <span>800-525-6285</span> <br/>
                                                                    or <a href="https://www.equifax.com/personal/" target="_blank">click here</a></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="common-buble">
                                                        <p>Tell the bureau you are an identity theft victim. Request a "fraud alert" to be placed on your file requesting creditors
                                                            to contact you via phone prior to opening additional accounts in your name. You can set the fraud alert term to 90 days, 1 year or 7 years.
                                                            If you wish to cancel the fraud alert before this time is up, simply contact the credit bureaus.</p>

                                                        <p>The Federal Trade Commission (FTC) enters complaints into a secure consumer fraud database, accessible only to law enforcement agencies
                                                             in their coordinate pursuit of criminals. Keep a record of your FTC login credentials.
                                                             Some local police won't take an identity theft report. If that is the case, try the county sheriff, then state police. If you are still unable to file a report,
                                                             ask to file a Miscellaneous Incident Report instead. Maintain a report number; creditors may ask for this in the future.
                                                        </p>
                                                    </div>
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey={4}>
                                                <div className="tab-common-content">
                                                    <h3 className="common-heading">Monitor your credit report frequently.</h3>

                                                    <div className="row feature-types">
                                                        <div className="col-sm-4">
                                                            <div className="tab-circle">
                                                                <div className="tab-icon setup-alert"></div>
                                                                <div className="tab-text">Set up Early <br/> Detection Alerts</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className="tab-circle">
                                                                <div className="tab-icon credit-card"></div>
                                                                <div className="tab-text">View Credit <br/> Report</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className="tab-circle">
                                                                <div className="tab-icon credit-card"></div>
                                                                <div className="tab-text">Report Suspicious <br/> Activity</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="common-buble">
                                                        <p>Immediately report any additional suspicious activity to creditors and credit bureaus. 
                                                            Also, amend your FTC case filing and police report to include additional incidents.</p>
                                                    </div>
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey={5}>
                                                <div className="theft-tab-content">
                                                    <h3 className='content-title'>Take these simple actions to prevent future ID theft:</h3>
                                                    <div className="theft-child-tabs-container">
                                                        <Tab.Container id="left-tabs-example" defaultActiveKey="theftChildTabOne">
                                                            <Nav variant="tabs">
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="theftChildTabOne">
                                                                        <div className="tab-icon credit-card"></div>
                                                                        <div className="tab-text">Credit Card</div>
                                                                    </Nav.Link>
                                                                </Nav.Item>
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="theftChildTabTwo">
                                                                        <div className="tab-icon banking"></div>
                                                                        <div className="tab-text">Banking</div>
                                                                    </Nav.Link>
                                                                </Nav.Item>
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="theftChildTabThree">
                                                                        <div className="tab-icon loan"></div>
                                                                        <div className="tab-text">Loan</div>
                                                                    </Nav.Link>
                                                                </Nav.Item>
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="theftChildTabFour">
                                                                        <div className="tab-icon loan"></div>
                                                                        <div className="tab-text">Medical</div>
                                                                    </Nav.Link>
                                                                </Nav.Item>
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="theftChildTabFive">
                                                                        <div className="tab-icon credit-card"></div>
                                                                        <div className="tab-text">Employment</div>
                                                                    </Nav.Link>
                                                                </Nav.Item>
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="theftChildTabSix">
                                                                        <div className="tab-icon banking"></div>
                                                                        <div className="tab-text">Other</div>
                                                                    </Nav.Link>
                                                                </Nav.Item>
                                                            </Nav>

                                                            <Tab.Content>
                                                                <Tab.Pane eventKey="theftChildTabOne">
                                                                    <div className="bubble-content">
                                                                        <div className="type-bubble">
                                                                            <p>Contact your credit card company to close your fraudulent account &amp; open fraud case.
                                                                            The creditor may mail you an affidavit to sign and return. If desired, open a new account with the credit card company
                                                                            to continue using your card. Request new Personal Identification Numbers (PINs) and passwords.<br/>
                                                                            <br/>Start a file to keep all your information in one place. Always take notes of whom you spoke with,
                                                                            the conversation date, and what took place.</p>
                                                                        </div>
                                                                    </div>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="theftChildTabTwo">
                                                                    <div className="bubble-content">
                                                                        <div className="type-bubble">
                                                                            <p>Contact your credit card company to close your fraudulent account &amp; open fraud case.
                                                                            The creditor may mail you an affidavit to sign and return. If desired, open a new account with the credit card company
                                                                            to continue using your card. Request new Personal Identification Numbers (PINs) and passwords.<br/>
                                                                            <br/>Start a file to keep all your information in one place. Always take notes of whom you spoke with,
                                                                            the conversation date, and what took place.</p>
                                                                        </div>
                                                                    </div>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="theftChildTabThree">
                                                                    <div className="bubble-content">
                                                                        <div className="type-bubble">
                                                                            <p>Contact your credit card company to close your fraudulent account &amp; open fraud case.
                                                                            The creditor may mail you an affidavit to sign and return. If desired, open a new account with the credit card company
                                                                            to continue using your card. Request new Personal Identification Numbers (PINs) and passwords.<br/>
                                                                            <br/>Start a file to keep all your information in one place. Always take notes of whom you spoke with,
                                                                            the conversation date, and what took place.</p>
                                                                        </div>
                                                                    </div>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="theftChildTabFour">
                                                                    <div className="bubble-content">
                                                                        <div className="type-bubble">
                                                                            <p>Contact your credit card company to close your fraudulent account &amp; open fraud case.
                                                                            The creditor may mail you an affidavit to sign and return. If desired, open a new account with the credit card company
                                                                            to continue using your card. Request new Personal Identification Numbers (PINs) and passwords.<br/>
                                                                            <br/>Start a file to keep all your information in one place. Always take notes of whom you spoke with,
                                                                            the conversation date, and what took place.</p>
                                                                        </div>
                                                                    </div>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="theftChildTabFive">
                                                                    <div className="bubble-content">
                                                                        <div className="type-bubble">
                                                                            <p>Contact your credit card company to close your fraudulent account &amp; open fraud case.
                                                                            The creditor may mail you an affidavit to sign and return. If desired, open a new account with the credit card company
                                                                            to continue using your card. Request new Personal Identification Numbers (PINs) and passwords.<br/>
                                                                            <br/>Start a file to keep all your information in one place. Always take notes of whom you spoke with,
                                                                            the conversation date, and what took place.</p>
                                                                        </div>
                                                                    </div>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="theftChildTabSix">
                                                                    <div className="bubble-content">
                                                                        <div className="type-bubble">
                                                                            <p>Contact your credit card company to close your fraudulent account &amp; open fraud case.
                                                                            The creditor may mail you an affidavit to sign and return. If desired, open a new account with the credit card company
                                                                            to continue using your card. Request new Personal Identification Numbers (PINs) and passwords.<br/>
                                                                            <br/>Start a file to keep all your information in one place. Always take notes of whom you spoke with,
                                                                            the conversation date, and what took place.</p>
                                                                        </div>
                                                                    </div>
                                                                </Tab.Pane>
                                                            </Tab.Content>
                                                        </Tab.Container>
                                                    </div>
                                                </div>
                                            </Tab.Pane>

                                            <div className="slider-buttons">
                                                { prevTab }
                                                { nextTab }
                                                
                                            </div>        

                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            </div>
                        </div>

                        <section id="ip-footer">
                            <div className="row">
                                <div className="col-xs-12">Data from 
                                    <img src={transUnion} alt="trans-union-icon" />
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
  }
}

const Tooltip = (props) => {
    return(
      <div className="tooltip-body">
          <span className="pointer"></span>
          <span className="close-icon fa fa-times" onClick={props.closeTooltip}></span>
          <h3 className="info-heading">Financial Account Notifications</h3>
  
          <span className="info-description">Identity Protector monitors your financial accounts around the clock and alerts you to activities that could indicate identity theft. 
          You can sign up to receive these alerts on your phone and/or email. Elite members receive maximum protection.
          </span>
      </div>
    )
}

export default IdentityProtector