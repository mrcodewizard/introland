import React, { Component } from 'react'
import { Col, Container, Row, Nav, Tabs, Tab, Accordion} from 'react-bootstrap';
import "../assets/css/id-protector.css";
import Footer from './Footer';
import shadow from "../assets/img/shadow.png";
import secureIcon from "../assets/img/secure-icon.svg";
import transUnion from "../assets/img/trans-union.svg";
import equifaxLogo from "../assets/img/equifax-logo.png";
import experianlogo from "../assets/img/experian-logo.png";
import digitalCard from "../assets/img/firstdigital-card.png";
import shadowSmall from "../assets/img/face_shadow.png";

class CreditManager extends Component {
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
                            <div className="identity-upper">
                                <h2 className="title">Credit Manager</h2>
                                <p className="sub-heading">Insights and tools to optimize your credit</p>
                            </div>

                            <div className="financial-notifications credit-section">
                                <div className="tooltip-outer">
                                    <div className="inner-row">
                                        <h2>Credit Score</h2>
                                        <div className="tooltip-wrapper">
                                        <span className="info-icon fa fa-info-circle" onClick={this.toggleTooltip}></span>
                                        {/* Show tooltip on click */}
                                        {  toolTip }

                                        </div>
                                    </div>
                                </div>

                                <div className="credit-row row">
                                    <Col md={4}>
                                        <div className="gauge">
                                            <div className="gauge-pointer"></div>
                                            <img src={transUnion} className="bureau-logo" alt="trans-union"/>
                                            <div className="credit-score" id="credit-score">807</div>
                                            <p className="refresh-text">As of <span className='date'>03/03/2022</span></p>
                                        </div>
                                    </Col> 

                                    <Col md={8}>
                                        <div className="credit-rating">
                                            <div class="sub-heading-icon">
                                                <h3>What’s Next?</h3>
                                            </div>

                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <ul className="status">
                                                        <li class="excellent">Protect Your Credit</li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-4 text-right">
                                                    <button className="btn btn-take-action">
                                                        Take Action
                                                    </button>
                                                </div>

                                                <div class="col-sm-12">
                                                    <ul class="list-unstyled description">
                                                        <li><span class="excellent">Take action</span> to protect your great credit against Identity Theft</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="emoji-face-container">
                                                <ul className="emoji-list">

                                                    <li className="face-container">
                                                        <div className="emoji-face">
                                                            <div className="face bad-face"></div>
                                                            <img className="shadow-bottom" src={shadowSmall} />
                                                        </div>
                                                        <div class="emoji-rating">&lt;600</div>
                                                        <div class="emoji-status">Bad</div>
                                                    </li>

                                                    <li className="face-container">
                                                        <div className="emoji-face">
                                                            <div className="face poor-face"></div>
                                                            <img className="shadow-bottom" src={shadowSmall} />
                                                        </div>
                                                        <div class="emoji-rating">&lt;500</div>
                                                        <div class="emoji-status">Poor</div>
                                                    </li>

                                                    <li className="face-container">
                                                        <div className="emoji-face">
                                                            <div className="face bad-face"></div>
                                                            <img className="shadow-bottom" src={shadowSmall} />
                                                        </div>
                                                        <div class="emoji-rating">&lt;600</div>
                                                        <div class="emoji-status">Bad</div>
                                                    </li>

                                                    <li className="face-container">
                                                        <div className="emoji-face">
                                                            <div className="face poor-face"></div>
                                                            <img className="shadow-bottom" src={shadowSmall} />
                                                        </div>
                                                        <div class="emoji-rating">&lt;500</div>
                                                        <div class="emoji-status">Poor</div>
                                                    </li>

                                                    <li className="face-container">
                                                        <div className="emoji-face">
                                                            <div className="face good-face"></div>
                                                            <img className="shadow-bottom" src={shadowSmall} />
                                                        </div>
                                                        <div class="emoji-rating">&lt;500</div>
                                                        <div class="emoji-status">Poor</div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                </div>

                            </div>

                            <div className="financial-notifications better-credit">
                                <div className="tooltip-outer">
                                    <div className="inner-row">
                                        <h2>Better Credit</h2>
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
                                                    <p className="info inquiries-view"><span className="info-val block">6%</span></p>
                                                    <div className="tab-text">Credit Card Usage</div>
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
                                        </Nav>
                                        
                                        <Tab.Content>
                                            <Tab.Pane eventKey="firstTab">
                                                <div className="tab-pane-content inquires-cotent">
                                                    <div className="tab-inner">
                                                        <h3 class="tab-heading">All Good</h3>
                                                    </div>
                                                    <div class="tab-description mb-3">
                                                        <p class="content">Impressive! Your account balances are less than 10% of your credit limits, which is ideal. Continue keeping your account balances under 10%.
                                                            Getting more credit could lower your credit card usage even further.</p>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <div className="bar-column">
                                                                <div class="colour-bar">
                                                                    <div class="grade-selector"></div> 
                                                                    <div class="segments">
                                                                        <div class="segment" style={{"backgroundColor": "rgb(237, 28, 36)","width": "25%"}}>75%+</div>
                                                                        <div class="segment" style={{"backgroundColor": "rgb(242, 101, 34)","width": "25%"}}>40-74%</div>
                                                                        <div class="segment" style={{"backgroundColor": "rgb(255, 210, 0)","width": "25%"}}>10-39%</div>
                                                                        <div class="segment" style={{"backgroundColor": "rgb(0, 166, 81)","width": "25%"}}>0-9%</div>  
                                                                    </div> 
                                                                    <div class="clearfix"></div>
                                                                </div>
                                                                <div className="list-component">
                                                                    <p class="list-heading">Credit Card Utilization</p>
                                                                
                                                                    <div className="list scroll">
                                                                        <ul className="nav-list">
                                                                            <li class="credit-card-util-item">
                                                                                <div class="item-details">
                                                                                    <p><i class="fa fa-credit-card"></i> 
                                                                                    <a href="/" className="pl-2" title="MSU FED CU"><strong>MSU FED CU</strong></a> 
                                                                                    <span class="pipe hidden-xs">|</span> 
                                                                                    <span class="reported hidden-xs">Reported 03/01/2022</span></p> 
                                                                                    <p class="report-perc-mobile"><span class="reported visible-xs">Reported 03/01/2022</span> <span class="percentage">Utilization: 0%</span>
                                                                                    </p>
                                                                                </div> 
                                                                                <div class="progress-track"><div class="progress-visual">
                                                                                </div>
                                                                            </div>
                                                                            <div class="balance-limit"><p>Balance: $0</p> <p>Limit: $27,500</p></div>
                                                                            </li>

                                                                            <li class="credit-card-util-item">
                                                                                <div class="item-details">
                                                                                    <p><i class="fa fa-credit-card"></i> 
                                                                                    <a href="/" className="pl-2" title="MSU FED CU"><strong>MSU FED CU</strong></a> 
                                                                                    <span class="pipe hidden-xs">|</span> 
                                                                                    <span class="reported hidden-xs">Reported 03/01/2022</span></p> 
                                                                                    <p class="report-perc-mobile"><span class="reported visible-xs">Reported 03/01/2022</span> <span class="percentage">Utilization: 0%</span>
                                                                                    </p>
                                                                                </div> 
                                                                                <div class="progress-track"><div class="progress-visual">
                                                                                </div>
                                                                            </div>
                                                                            <div class="balance-limit"><p>Balance: $0</p> <p>Limit: $27,500</p></div>
                                                                            </li>

                                                                            <li class="credit-card-util-item">
                                                                                <div class="item-details">
                                                                                    <p><i class="fa fa-credit-card"></i> 
                                                                                    <a href="/" className="pl-2" title="MSU FED CU"><strong>MSU FED CU</strong></a> 
                                                                                    <span class="pipe hidden-xs">|</span> 
                                                                                    <span class="reported hidden-xs">Reported 03/01/2022</span></p> 
                                                                                    <p class="report-perc-mobile"><span class="reported visible-xs">Reported 03/01/2022</span> <span class="percentage">Utilization: 0%</span>
                                                                                    </p>
                                                                                </div> 
                                                                                <div class="progress-track"><div class="progress-visual">
                                                                                </div>
                                                                            </div>
                                                                            <div class="balance-limit"><p>Balance: $0</p> <p>Limit: $27,500</p></div>
                                                                            </li>
                                                                            <li class="credit-card-util-item">
                                                                                <div class="item-details">
                                                                                    <p><i class="fa fa-credit-card"></i> 
                                                                                    <a href="/" className="pl-2" title="MSU FED CU"><strong>MSU FED CU</strong></a> 
                                                                                    <span class="pipe hidden-xs">|</span> 
                                                                                    <span class="reported hidden-xs">Reported 03/01/2022</span></p> 
                                                                                    <p class="report-perc-mobile"><span class="reported visible-xs">Reported 03/01/2022</span> <span class="percentage">Utilization: 0%</span>
                                                                                    </p>
                                                                                </div> 
                                                                                <div class="progress-track"><div class="progress-visual">
                                                                                </div>
                                                                            </div>
                                                                            <div class="balance-limit"><p>Balance: $0</p> <p>Limit: $27,500</p></div>
                                                                            </li>

                                                                            <li class="credit-card-util-item">
                                                                                <div class="item-details">
                                                                                    <p><i class="fa fa-credit-card"></i> 
                                                                                    <a href="/" className="pl-2" title="MSU FED CU"><strong>MSU FED CU</strong></a> 
                                                                                    <span class="pipe hidden-xs">|</span> 
                                                                                    <span class="reported hidden-xs">Reported 03/01/2022</span></p> 
                                                                                    <p class="report-perc-mobile"><span class="reported visible-xs">Reported 03/01/2022</span> <span class="percentage">Utilization: 0%</span>
                                                                                    </p>
                                                                                </div> 
                                                                                <div class="progress-track"><div class="progress-visual">
                                                                                </div>
                                                                            </div>
                                                                            <div class="balance-limit"><p>Balance: $0</p> <p>Limit: $27,500</p></div>
                                                                        </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6 flex-center">
                                                            <div class="circle-anim" id="cont" style={{"width":"300px","height":"300px"}}>
                                                                <svg id="svg" viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <circle class="rail" cx="150" cy="150" r="150" stroke-dashoffset="0"></circle>
                                                                    <circle class="progress" cx="150" cy="150" r="150" id="bar" style={{"stroke": "rgb(0, 166, 81)", "stroke-dashoffset": "-967.599px"}} stroke-dasharray="911.06" stroke-dashoffset="0"></circle>
                                                                </svg> 
                                                                <div class="perc" style={{"color":"rgb(0, 166, 81)"}}>6</div> 
                                                                <img class="shadow-inner" src="//cdn.introlend.com/assets/images/creditmanager/shadow_circle__vprod_master_v42.png" alt="" />
                                                                <div class="section">Credit Card Usage</div>
                                                            </div>

                                                            <div className="info-container">
                                                                <div className="info-icon">
                                                                    <i className="fa fa-credit-card"></i>    
                                                                </div>
                                                                <div className="info-text currency">
                                                                    <span className="info-text-val">7,049</span>
                                                                    <span class="info-type">Total Balance</span>
                                                                </div>                                                                      
                                                            </div>

                                                            <div className="info-container">
                                                                <div className="info-icon">
                                                                    <i className="fa fa-tachometer"></i>    
                                                                </div>
                                                                <div className="info-text currency">
                                                                    <span className="info-text-val">7,049</span>
                                                                    <span class="info-type">Total Balance</span>
                                                                </div>                                                                      
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="secondTab">
                                                <div className="tab-pane-content inquires-cotent">
                                                    <div className="tab-inner">
                                                        <h3 class="tab-heading">All Good</h3>
                                                    </div>
                                                    <div class="tab-description mb-3">
                                                        <p class="content">Impressive! Your account balances are less than 10% of your credit limits, which is ideal. Continue keeping your account balances under 10%.
                                                            Getting more credit could lower your credit card usage even further.</p>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <div className="bar-column">
                                                                <div class="colour-bar">
                                                                    <div class="grade-selector"></div> 
                                                                    <div class="segments">
                                                                        <div class="segment" style={{"backgroundColor": "rgb(237, 28, 36)","width": "25%"}}>75%+</div>
                                                                        <div class="segment" style={{"backgroundColor": "rgb(242, 101, 34)","width": "25%"}}>40-74%</div>
                                                                        <div class="segment" style={{"backgroundColor": "rgb(255, 210, 0)","width": "25%"}}>10-39%</div>
                                                                        <div class="segment" style={{"backgroundColor": "rgb(0, 166, 81)","width": "25%"}}>0-9%</div>  
                                                                    </div> 
                                                                    <div class="clearfix"></div>
                                                                </div>
                                                                <div className="list-component">
                                                                    <p class="list-heading">Credit Card Utilization</p>
                                                                
                                                                    <div className="list scroll">
                                                                        <ul className="nav-list">
                                                                            <li class="credit-card-util-item">
                                                                                <div class="item-details">
                                                                                    <p><i class="fa fa-credit-card"></i> 
                                                                                    <a href="/" className="pl-2" title="MSU FED CU"><strong>MSU FED CU</strong></a> 
                                                                                    <span class="pipe hidden-xs">|</span> 
                                                                                    <span class="reported hidden-xs">Reported 03/01/2022</span></p> 
                                                                                    <p class="report-perc-mobile"><span class="reported visible-xs">Reported 03/01/2022</span> <span class="percentage">Utilization: 0%</span>
                                                                                    </p>
                                                                                </div> 
                                                                                <div class="progress-track"><div class="progress-visual">
                                                                                </div>
                                                                            </div>
                                                                            <div class="balance-limit"><p>Balance: $0</p> <p>Limit: $27,500</p></div>
                                                                            </li>

                                                                            <li class="credit-card-util-item">
                                                                                <div class="item-details">
                                                                                    <p><i class="fa fa-credit-card"></i> 
                                                                                    <a href="/" className="pl-2" title="MSU FED CU"><strong>MSU FED CU</strong></a> 
                                                                                    <span class="pipe hidden-xs">|</span> 
                                                                                    <span class="reported hidden-xs">Reported 03/01/2022</span></p> 
                                                                                    <p class="report-perc-mobile"><span class="reported visible-xs">Reported 03/01/2022</span> <span class="percentage">Utilization: 0%</span>
                                                                                    </p>
                                                                                </div> 
                                                                                <div class="progress-track"><div class="progress-visual">
                                                                                </div>
                                                                            </div>
                                                                            <div class="balance-limit"><p>Balance: $0</p> <p>Limit: $27,500</p></div>
                                                                            </li>

                                                                            <li class="credit-card-util-item">
                                                                                <div class="item-details">
                                                                                    <p><i class="fa fa-credit-card"></i> 
                                                                                    <a href="/" className="pl-2" title="MSU FED CU"><strong>MSU FED CU</strong></a> 
                                                                                    <span class="pipe hidden-xs">|</span> 
                                                                                    <span class="reported hidden-xs">Reported 03/01/2022</span></p> 
                                                                                    <p class="report-perc-mobile"><span class="reported visible-xs">Reported 03/01/2022</span> <span class="percentage">Utilization: 0%</span>
                                                                                    </p>
                                                                                </div> 
                                                                                <div class="progress-track"><div class="progress-visual">
                                                                                </div>
                                                                            </div>
                                                                            <div class="balance-limit"><p>Balance: $0</p> <p>Limit: $27,500</p></div>
                                                                            </li>
                                                                            <li class="credit-card-util-item">
                                                                                <div class="item-details">
                                                                                    <p><i class="fa fa-credit-card"></i> 
                                                                                    <a href="/" className="pl-2" title="MSU FED CU"><strong>MSU FED CU</strong></a> 
                                                                                    <span class="pipe hidden-xs">|</span> 
                                                                                    <span class="reported hidden-xs">Reported 03/01/2022</span></p> 
                                                                                    <p class="report-perc-mobile"><span class="reported visible-xs">Reported 03/01/2022</span> <span class="percentage">Utilization: 0%</span>
                                                                                    </p>
                                                                                </div> 
                                                                                <div class="progress-track"><div class="progress-visual">
                                                                                </div>
                                                                            </div>
                                                                            <div class="balance-limit"><p>Balance: $0</p> <p>Limit: $27,500</p></div>
                                                                            </li>

                                                                            <li class="credit-card-util-item">
                                                                                <div class="item-details">
                                                                                    <p><i class="fa fa-credit-card"></i> 
                                                                                    <a href="/" className="pl-2" title="MSU FED CU"><strong>MSU FED CU</strong></a> 
                                                                                    <span class="pipe hidden-xs">|</span> 
                                                                                    <span class="reported hidden-xs">Reported 03/01/2022</span></p> 
                                                                                    <p class="report-perc-mobile"><span class="reported visible-xs">Reported 03/01/2022</span> <span class="percentage">Utilization: 0%</span>
                                                                                    </p>
                                                                                </div> 
                                                                                <div class="progress-track"><div class="progress-visual">
                                                                                </div>
                                                                            </div>
                                                                            <div class="balance-limit"><p>Balance: $0</p> <p>Limit: $27,500</p></div>
                                                                        </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6 flex-center">
                                                            <div class="circle-anim" id="cont" style={{"width":"300px","height":"300px"}}>
                                                                <svg id="svg" viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <circle class="rail" cx="150" cy="150" r="150" stroke-dashoffset="0"></circle>
                                                                    <circle class="progress" cx="150" cy="150" r="150" id="bar" style={{"stroke": "rgb(0, 166, 81)", "stroke-dashoffset": "-967.599px"}} stroke-dasharray="911.06" stroke-dashoffset="0"></circle>
                                                                </svg> 
                                                                <div class="perc" style={{"color":"rgb(0, 166, 81)"}}>6</div> 
                                                                <img class="shadow-inner" src="//cdn.introlend.com/assets/images/creditmanager/shadow_circle__vprod_master_v42.png" alt="" />
                                                                <div class="section">Credit Card Usage</div>
                                                            </div>

                                                            <div className="info-container">
                                                                <div className="info-icon">
                                                                    <i className="fa fa-credit-card"></i>    
                                                                </div>
                                                                <div className="info-text currency">
                                                                    <span className="info-text-val">7,049</span>
                                                                    <span class="info-type">Total Balance</span>
                                                                </div>                                                                      
                                                            </div>

                                                            <div className="info-container">
                                                                <div className="info-icon">
                                                                    <i className="fa fa-tachometer"></i>    
                                                                </div>
                                                                <div className="info-text currency">
                                                                    <span className="info-text-val">7,049</span>
                                                                    <span class="info-type">Total Balance</span>
                                                                </div>                                                                      
                                                            </div>
                                                        </div>
                                                    </div>
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
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            </div>

                            <div className="content-offers">
                                <h4 class="personalized-offers"><i className="fa fa-tags"></i> Take a look at your personalized offers</h4>
                                
                                <div className="flip-container">
                                    <div className="row flip-row">
                                        <div className="col-sm-4 flip-column">
                                            <div className="flip-item">
                                                <div className="flip-item-inner">
                                                    <div className="tile-head">
                                                        <img src={digitalCard} alt="" />   
                                                        <h4 class="card-name">First Digital NextGen Mastercard® Credit Card</h4>
                                                    </div>
                                                    <div className="tile-body">
                                                        <div className="offers-container">
                                                            <div class="offer-details">
                                                                <p>Intro APR Purchase</p> 
                                                                <p class="value">N/A</p>
                                                            </div>
                                                            <div class="offer-details">
                                                                <p>Intro APR Purchase</p> 
                                                                <p class="value">N/A</p>
                                                            </div>
                                                            <p>
                                                                <a href="/" className="btn btn-offer">Apply for Offer</a>
                                                            </p>
                                                        </div>    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4 flip-column">
                                            <div className="flip-item internal-offer">         
                                            </div>
                                        </div>    
                                    </div> 
                                </div>
                            </div>

                            <div className="section-divider"></div>

                            <div className="financial-notifications better-credit">
                                <div className="tooltip-outer">
                                    <div className="inner-row">
                                        <h2>Accounts</h2>
                                        <div className="tooltip-wrapper">
                                        <span className="info-icon fa fa-info-circle" onClick={this.toggleTooltip}></span>
                                        {/* Show tooltip on click */}
                                        {  toolTip }

                                        </div>
                                    </div>
                                </div>

                                <div className="tab-component">
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="tabTwoOne">
                                        
                                        <Nav variant="tabs">
                                            <Nav.Item>
                                                <Nav.Link eventKey="tabTwoOne">
                                                    <p className="info inquiries-view"><span className="info-val block">$731,584</span></p>
                                                    <div className="tab-text">FRSHORBK/DMI</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="tabTwoTwo">
                                                    <p className="info accounts-view">  <span className="info-val block">$731,584</span></p>
                                                    <div className="tab-text">FRSHORBK/DMI</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="tabTwoThree">
                                                    <p className="info delinquent-view">  <span className="info-val block">$731,584</span></p>
                                                    <div className="tab-text">FRSHORBK/DMI</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="tabTwoFour">
                                                    <p className="info improved-view">  <span className="info-val block">$731,584</span></p>
                                                    <div className="tab-text">FRSHORBK/DMI</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        
                                        <Tab.Content>
                                            <Tab.Pane eventKey="tabTwoOne">
                                                <div className="tab-pane-content inquires-cotent">
                                                    <div className="account-types">
                                                        <div className="row content-head">
                                                            <div class="col-sm-6">
                                                                <h3>FRSHORBK/DMI</h3>
                                                            </div>
                                                            <div className="col-sm-6">  
                                                                <div className="text-right">
                                                                    <h4>Conventional real estate mortgage</h4>    
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row content-header">
                                                            <div className="col-sm-6">
                                                                <ul className="nav first-list">
                                                                   <li>
                                                                        <span>310148*******</span> 
                                                                    </li> 
                                                                    <li>
                                                                        Account Age <span class="account-age">0<em>YR</em> 3<em>MO</em></span>
                                                                    </li>
                                                                    <li>
                                                                        Status <span class="status open">OPEN</span>
                                                                    </li>
                                                                </ul>    
                                                            </div>

                                                            <div className="col-sm-6">
                                                                <ul className="nav second-list">
                                                                   <li> Contact 
                                                                        <span>(847) 550-7300 </span> 
                                                                    </li> 
                                                                    <li className="take-action">
                                                                        Found An Error? 
                                                                        <a href="https://dispute.transunion.com/dp/dispute/landingPage.jsp" target="_blank">Take Action</a>
                                                                    </li>
                                                                </ul>    
                                                            </div>
                                                        </div>

                                                        <div className="row content-body">
                                                            <div className="col-sm-6">
                                                                <div className="balance-column">
                                                                    <h4 class="title balance-information">Balance Information</h4>
                                                                    <h5>Balance Owed</h5>
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <p class="percentage-total balance-info" style={{"color": "rgb(237, 28, 36)"}}>100</p>
                                                                        </div> 
                                                                        <div className="col-sm-8">
                                                                            <div className="row">
                                                                                <div className="col-xxs-12 col-xs-6 col-md-6 text-center">
                                                                                    <h6>Starting Balance</h6>
                                                                                    <p class="amount">734,000</p>
                                                                                </div> 
                                                                                <div className="col-xxs-12 col-xs-6 col-md-6 text-center">
                                                                                    <h6>Current Balance</h6>
                                                                                    <p class="amount">734,000</p>
                                                                                </div>    
                                                                            </div>
                                                                        </div>    
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6">
                                                                <div className="payments-column">
                                                                    <h4 class="title payment-history">Your Payment History</h4>
                                                                    <h5>On Time Payments</h5>

                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <p class="percentage-total balance-info" style={{"color": "rgb(0, 166, 81)"}}>100</p>
                                                                        </div> 
                                                                        <div className="col-sm-8">
                                                                            <div className="row">
                                                                                <div className="col-xxs-12 col-xs-6 col-md-6 text-center">
                                                                                    <h6>Starting Balance</h6>
                                                                                    <p class="amount">734,000</p>
                                                                                </div> 
                                                                                <div className="col-xxs-12 col-xs-6 col-md-6 text-center">
                                                                                    <h6>Current Balance</h6>
                                                                                    <p class="amount">734,000</p>
                                                                                </div>    
                                                                            </div>

                                                                            <div class="row">
                                                                                <div class="col-xs-12">
                                                                                    <p class="last-reported">Last Reported By Creditor <span>02/07/2022</span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>    
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="cta-content">
                                                            <div className="cta-container">
                                                                <div className="compare-image">
                                                                    <img className="img-compare" src="//cdn.introlend.com/assets/images/consumertools/compare__vprod_master_v42.svg" alt="Compare"/> 
                                                                </div>
                                                                <div className="cta">
                                                                    <p>Compare all <span>3 BUREAUS</span> to make sure your information is correct. The information in each of your credit reports might be different.</p>
                                                                    <div className="cta-button">
                                                                        <a className="btn btn-default btn-compare" href="/secure/member/purchase">Next</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="tabTwoTwo">
                                                <div className="tab-pane-content inquires-cotent">
                                                    
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="tabTwoThree">
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

                                            <Tab.Pane eventKey="tabTwoFour">
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

                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            </div>

                            <div className="section-divider"></div>
                            
                            <div className="financial-notifications personal-information">
                                <div className="tooltip-outer">
                                    <div className="inner-row">
                                        <h2>Personal Information</h2>
                                        <div className="tooltip-wrapper">
                                        <span className="info-icon fa fa-info-circle" onClick={this.toggleTooltip}></span>
                                        {/* Show tooltip on click */}
                                        {  toolTip }

                                        </div>
                                    </div>
                                </div>

                                <div className="info-body">
                                    <div className="row">
                                        <div className="col-md-6 first-col">
                                            <div className="info-section">
                                                <div class="head" id="head-name">
                                                    <h3 class="title name">Name</h3>
                                                </div>
                                                <div className="content">
                                                    <ul className="nav row">
                                                        <li className="col-xs-4 col-sm-6">
                                                            <h4 class="item-name">Name</h4>    
                                                        </li>
                                                        <li class="col-xs-8 col-sm-6">
                                                            <p class="item-value">BRIAN J BEWLEY</p>
                                                        </li>
                                                        <li className="col-xs-4 col-sm-6">
                                                            <h4 class="item-name">AKA</h4>    
                                                        </li>
                                                        <li class="col-xs-8 col-sm-6">
                                                            <p class="item-value">ZEHNDER,BRIAN,J</p>
                                                        </li>
                                                        <li className="col-xs-4 col-sm-6">
                                                            <h4 class="item-name">Alias</h4>    
                                                        </li>
                                                        <li class="col-xs-8 col-sm-6">
                                                            <p class="item-value">N/A</p>
                                                        </li>
                                                    </ul>    
                                                </div>
                                            </div>    
                                        </div>  

                                        <div className="col-md-6 second-col">
                                            <div className="info-section">
                                                <div class="head" id="head-name">
                                                    <h3 class="title name">CUSTOMER STATEMENT</h3>
                                                </div>
                                                <div className="content">
                                                    <ul className="nav row">
                                                        <li className="col-xs-4 col-sm-6">
                                                            <h4 class="item-name">Status</h4>    
                                                        </li>
                                                        <li class="col-xs-8 col-sm-6">
                                                            <p class="item-value">N/A</p>
                                                        </li>
                                                    </ul>    
                                                </div>
                                            </div>    
                                        </div>  

                                        <div className="col-md-6 third-col">
                                            <div className="info-section">
                                                <div class="head" id="head-name">
                                                    <h3 class="title name">Name</h3>
                                                </div>
                                                <div className="content">
                                                    <ul className="nav row">
                                                        <li className="col-xs-4 col-sm-6">
                                                            <h4 class="item-name">Current Address</h4>    
                                                        </li>
                                                        <li class="col-xs-8 col-sm-6">
                                                            <p class="item-value">3316 BRYANT FALLS</p>
                                                        </li>
                                                    </ul>    
                                                </div>
                                            </div>    
                                        </div>  

                                        <div className="col-md-6 fourth-col">
                                            <div className="info-section">
                                                <div class="head" id="head-name">
                                                    <h3 class="title name">EMPLOYER</h3>
                                                </div>
                                                <div className="content">
                                                    <ul className="nav row">
                                                        <li className="col-xs-4 col-sm-6">
                                                            <h4 class="item-name">Current Employer</h4>    
                                                        </li>
                                                        <li class="col-xs-8 col-sm-6">
                                                            <p class="item-value">BRIAN J BEWLEY</p>
                                                        </li>
                                                    </ul>    
                                                </div>
                                            </div>    
                                        </div>    
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

export default CreditManager