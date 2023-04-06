import React, {Component} from 'react';
import { Col, Container, Row, Button, Modal, Card} from 'react-bootstrap';
import "../assets/css/mortgage.css";
import iconAlert from '../assets/img/warning-icon-one.svg';
import iconWarning from '../assets/img/icon-warning-two.svg';
import shadow from '../assets/img/shadow.png';
import greatText from '../assets/img/great-text.svg';
import iconGear from "../assets/img/icon-gear.svg";
import Footer from './Footer'; 

class MortageRefinancer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       mortgageScore: 950000,
       debtValue: 0,
       isTooltipshow: false,
       isHomeShow: false,
       isOpen: false,
       isChecked: false,
       isRowAdded: false,
       isAddModalOpen: false,
       secondarTextShow: true,
    }
  }

  openModal = () => {
    this.setState({ isOpen: true, isHomeShow: !this.state.isHomeShow });
  }
  closeModal = () => this.setState({ isOpen: false });

  openAddModal = () => {
    this.setState({ isAddModalOpen: true, isHomeShow: !this.state.isHomeShow });
  }
  closeAddModal = () => this.setState({ isAddModalOpen: false });

  toggleTooltip = () => {
    this.setState({
      isTooltipshow: !this.state.isTooltipshow
    })
  }

  toggleHomeModal = () => {
    this.setState({
      isHomeShow: !this.state.isHomeShow
    })
  }
  
  closeTooltip = () => {
    this.setState({
      isTooltipshow: false,
    })
  }

  closeHomeModal = () => {
    this.setState({
      isHomeShow: false,
    })
  }

  addSecondaryRow = () => {
    this.setState({
      isRowAdded: true,
      secondarTextShow: false
    })
  }

  removeSecondaryRow = () => {
    this.setState({
      isRowAdded: false,
      secondarTextShow: true
    })
  }


  render() {
    let toolTip = (this.state.isTooltipshow) ? <Tooltip closeTooltip={this.closeTooltip} /> : "";
    let homeModal = (this.state.isHomeShow) 
    ? <HomeModal showModal={this.openModal} addModalVisible={this.openAddModal} isChecked={this.state.isChecked}  closeHomeModal={this.closeHomeModal} /> 
    : "";
    let secondaryRow = (this.state.isRowAdded) ? <SecondaryRow removeRow={this.removeSecondaryRow} /> : "";
    return (
      <>
        <div className="section-mortgage">
          <div className="mortgage-outer">    
            <div className="sidebar-nav">
              <div className="navbar navbar-fixed-left">
                <ul className="list-unstyled nav navbar-nav" id="side-navbar">
                  <li>
                    <a className="section1 active" href="#"> <span className="fa fa-home"></span> 
                    Get Quotes</a>
                  </li>
                  <li><a className="section2" href="#"><span className="fa fa-clipboard"></span> Receive and Manage Your Quotes</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mortgage-main">
                <Container>
                  <Row>
                    <Col sm={8}>
                        <h1>Mortgage Planner <span className="beta">Beta</span></h1>
                        <p className="sub-heading">Your shortest path to the perfect loan</p>
                    </Col>
                    <Col sm={4}>
                      <div className="home-selector-outer">
                        <div className="homes-select-container">
                          <p className="your-homes">Your Homes (1)</p> 
                          <div className="homes-select" onClick={this.toggleHomeModal}>Add Home To Purchase</div>
                        </div>
                        {/* Popup box to show */ }
                        {   
                            homeModal
                        }
                      </div>
                    </Col>
                  </Row>

                  <section id="mortgage-refinance">
                      <div className="inner-row">
                        <h2>Is it Time to Refinance? </h2>
                        <div className="tooltip-wrapper">
                          <span className="info-icon fa fa-info-circle" onClick={this.toggleTooltip}></span>
                          {/* Show tooltip on click */}
                          {  toolTip }

                        </div>
                        <a className="btn btn-default btn-add-home" href="">Add Home</a>
                      </div>
                  </section>

                  <section id="refinance-score">
                      <Row>
                        <Col md={6}>
                           <div className="refinance-column">
                                <div className="financial-header">
                                  <img src="//cdn.introlend.com/assets/images/mortgageplanner/ql-ahm-active__vprod_master_v38.svg"  alt='refinance-home'/>
                                  <h3>Home Value</h3>
                                </div>
                                <div className="home-value">
                                  <div className="enter-home-value"> 
                                    <span className="loader fade"></span> 
                                    <div className="input-group">
                                      <input className="width-dynamic" value={this.state.mortgageScore} /> 
                                    </div>
                                    <span className="duplicate">{this.state.mortgageScore}</span>
                                  </div> 
                                  <p className="enter-value">Enter Home Value</p>  </div>
                           </div>
                        </Col>

                        <Col md={6}>
                            <div className="refinance-column">
                                <div className="financial-header">
                                  <img src="//cdn.introlend.com/assets/images/mortgageplanner/mp-loan-balance__vprod_master_v38.svg" alt="loan-score-image" /> 
                                  <h3>Current Loan Balance</h3>
                                </div>
                                <div className="home-value">
                                  <div className="enter-home-value total-loan-balance"><p>0</p>
                                </div>
                              </div>

                              <ul className="list-unstyled financial-list"> 
                                <li>
                                  <div className="finance-item-left">Loan Type</div> 
                                  <div className="finance-item-right">
                                    <span className="loan-type-display">30 
                                      <span className="post-val-text"> YR Fixed </span>
                                    </span>
                                  </div>
                                </li>
                                <li>
                                  <div className="finance-item-left">Interest Rate</div>
                                  <div className="finance-item-right interest-rate">
                                    <span className="input-container">
                                      <span className="perc">3.13%</span>
                                    </span>
                                  </div>
                                </li>
                                <li>
                                  <div className="finance-item-left">Payment</div> 
                                  <div className="finance-item-right">
                                    <span className="payment">$2,600</span>
                                  </div>
                                </li> 
                              </ul>
                            </div>
                        </Col>

                      </Row>
                  </section>

                  <section className="loan-validation">
                    <div className="shadow-top">
                      <div className="left-shadow"></div>
                      <div className="right-shadow"></div>
                    </div>
                    <div className="loan-warning">
                      <img src={iconAlert} alt="loan-warning"/>
                      <img src={shadow} alt="shadow"/>
                    </div>
                    <p className="warning-text">Your loan balance does not meet the minimum requirement of $50,000 to receive a quote.</p>
                    <div className="shadow-bottom">
                      <div className="left-shadow"></div>
                      <div className="right-shadow"></div>
                    </div>
                  </section>

                  <section className="time-to-refinance">
                      <Row>
                        <Col sm={6}>
                            <h2 className="credit-situation-heading">Your Current Credit Situation</h2>
                        </Col>

                        <Col md={6}>
                            <div className="military-container">
                              <div className="served-military-q">Have you served in the military?</div>
                              <div className="toggle-switch">
                                <div className="toggle-label">No</div>
                                <div className="scrubber"></div>
                                <span className="toggle-loader fade"></span>
                              </div>
                            </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={4}>
                           <div className="credit-sitation-item equity-home">
                              <h3>Equity in Home</h3>
                              <div className="credit-situation-info" style={{color: "#ed1c24"}}>0
                              </div>
                              <img className="shadow-inner" src="//cdn.introlend.com/assets/images/creditmanager/bc-no-shadow__vprod_master_v38.png" alt=""/>
                              <div className="available-equity-down-payment-amount mt-5" style={{color: "#ed1c24"}}>$0</div>
                              <div className="available-equity-down-payment">Available Equity</div>
                           </div>
                        </Col>

                        <Col md={4}>
                          <div className="credit-sitation-item debt-to-income">
                              <h3>Debt to Income</h3>
                              <div className="income-warning">
                                <img className="warning" src={iconWarning} alt="" />
                              </div>
                              <img className="shadow-inner" src="//cdn.introlend.com/assets/images/creditmanager/bc-no-shadow__vprod_master_v38.png" alt=""/>

                              <div className="annual-income-container mt-5">
                                <input className="width-dynamic" type="tel" maxLength="9" placeholder="0" value={this.state.debtValue} style={{width:"13px"}}/>
                                <span className="duplicate">0</span> 
                              </div>
                              <div className="annual-income">Enter Annual Income</div>
                              <div className="annual-error">Income insufficient to cover monthly debt payments</div>
                          </div>
                        </Col>

                        <Col md={4}>
                            <div className="credit-sitation-item  credit-score">
                              <h3>Credit Score</h3>
                              <div className="credit-situation-info" style={{color:"rgb(0, 156, 71)"}}>808</div>
                              <img className="shadow-inner" src="//cdn.introlend.com/assets/images/creditmanager/bc-no-shadow__vprod_master_v38.png" alt=""/>
                              <div className="refresh-text col-xs-12 mt-5">As of 
                                  <span id="refresh-date"> 02/05/2022</span> <br /> <span className="loader fade"></span>
                              </div>
                            
                            </div>
                        </Col>

                      </Row>

                      <div className="assessment-result">
                        <div className="top"></div>
                        <div className="left"></div> 
                          <div className="great">
                            <img className="great" src={greatText} alt="great-text" />
                            <p>Based on your <span>credit situation</span> and <span>current mortgage</span> it looks like a <span>GREAT</span> time to refinance your mortgage.</p>
                          </div> 
                          <div className="right"></div>
                          <div className="bottom"></div>
                      </div>
                  </section>

                  <section className="todays-mortgage-rates">
                      <p className="rates-header-text">Check out Today's Rates to see which Mortgage is right for you.</p>
                      <a className="advertising-disclosure">Advertising Disclosure</a>

                      <Row>
                        <Col xs={12} sm={3} lg={4}>
                          <div className="left-container">
                            <div className="col-xs-12 hidden-sm hidden-md hidden-lg mortgage-rate-select-box-container">
                              <select className="mortgage-rate-select-box">
                                <option>5/1 ARM - $0 a month</option>
                                <option>7/1 ARM - $0 a month</option>
                                <option>15 YR Fixed - $0 a month</option>
                                <option>30 YR Fixed - $0 a month</option>
                              </select>
                            </div>
                            <div className="left-nav-container hidden-xs">
                                <div className="gradient-border">
                                    <ul className="nav left-nav">
                                       <li className="active">
                                          <div className="mortgage-type">5/1 ARM</div>
                                          <div className="monthly-payment">0 <span className="month">a month</span></div>
                                       </li>
                                       <li>
                                          <div className="mortgage-type">7/1 ARM</div>
                                          <div className="monthly-payment">0 <span className="month">a month</span></div>
                                       </li>
                                       <li>
                                          <div className="mortgage-type">15 Year</div>
                                          <div className="monthly-payment">0 <span className="month">a month</span></div>
                                       </li>
                                       <li>
                                          <div className="mortgage-type">30 Year</div>
                                          <div className="monthly-payment">0 <span className="month">a month</span></div>
                                       </li>
                                        <div className="side-dots" style={{top: "46.5px"}}>
                                            <div className="side-dot side-dot-row-0 highlight" style={{left:"-16px", top: "0px"}}></div>
                                            <div className="side-dot side-dot-row-0 side-dot-index-0 highlight" style={{left:"-8px", top: "0px"}}></div>
                                            
                                            
                                            <div className="dot dot-0" style={{top: "0px"}}></div>
                                            <div className="dot dot-1" style={{top: "9px"}}></div>
                                            <div className="dot dot-2" style={{top: "18px"}}></div>
                                            <div className="dot dot-3" style={{top: "27px"}}></div>
                                            <div className="dot dot-4" style={{top: "36px"}}></div>
                                            <div className="dot dot-5" style={{top: "45px"}}></div>
                                            <div className="dot dot-6" style={{top: "54px"}}></div>
                                            <div className="dot dot-7" style={{top: "63px"}}></div>
                                            <div className="dot dot-8" style={{top: "72px"}}></div>
                                            <div className="dot dot-9" style={{top: "81px"}}></div>

                                            <div className="side-dot side-dot-row-9" style={{left:"-16px",top: "81px"}}></div>
                                            <div className="side-dot side-dot-row-9" style={{left:"-8px",top: "81px"}}></div>
                                            
                                            <div className="dot dot-10" style={{top: "90px"}}></div>
                                            <div className="dot dot-11" style={{top: "99px"}}></div>
                                            <div className="dot dot-12" style={{top: "108px"}}></div>
                                            <div className="dot dot-13" style={{top: "117px"}}></div>
                                            <div className="dot dot-14" style={{top: "126px"}}></div>
                                            <div className="dot dot-15" style={{top: "135px"}}></div>
                                            <div className="dot dot-16" style={{top: "144px"}}></div>
                                            <div className="dot dot-17" style={{top: "153px"}}></div>
                                            <div className="dot dot-18" style={{top: "162px"}}></div>

                                            <div className="side-dot side-dot-row-3" style={{left:"-16px", top: "162px"}}></div>
                                            <div className="side-dot side-dot-row-3" style={{left:"-8px", top: "162px"}}></div>

                                            <div className="dot dot-19" style={{top: "171px"}}></div>
                                            <div className="dot dot-20" style={{top: "180px"}}></div>
                                            <div className="dot dot-21" style={{top: "189px"}}></div>
                                            <div className="dot dot-22" style={{top: "198px"}}></div>
                                            <div className="dot dot-23" style={{top: "207px"}}></div>
                                            <div className="dot dot-22" style={{top: "216px"}}></div>
                                            <div className="dot dot-23" style={{top: "225px"}}></div>
                                            <div className="dot dot-24" style={{top: "234px"}}></div>

                                            <div className="side-dot side-dot-row-4" style={{left:"-16px", top: "234px"}}></div>
                                            <div className="side-dot side-dot-row-4" style={{left: "-8px", top: "234px"}}></div>
                                        </div>
                                    </ul>
                                </div>

                                <div className="home-gear-inner" style={{"top":"172.5px"}}>
                                  <div className="home-gear-inner-container">
                                    <div className="dots-left">
                                        <div className="dot dot-0 highlight" style={{left:"9px"}}></div>
                                        <div className="dot dot-1 highlight" style={{left:"18px"}}></div>
                                    </div>
                        
                                    <img className="home-gear" src={iconGear} alt="icon-gear"/>
                                    <div className="dots-right">
                                        <div className="dot dot-0" style={{left:"0px"}}></div>
                                        <div className="dot dot-1" style={{left:"9px"}}></div>
                                        <div className="dot dot-2" style={{left:"18px"}}></div>
                                    </div>
                                    <div className="dots-y" style={{top:"-114px"}}>
                                        <div className="dot dot-0" style={{top: "0px"}}></div>
                                        <div className="dot dot-1" style={{top: "9px"}}></div>
                                        <div className="dot dot-2" style={{top: "18px"}}></div>
                                        <div className="dot dot-3" style={{top: "27px"}}></div>
                                        <div className="dot dot-4" style={{top: "36px"}}></div>
                                        <div className="dot dot-5" style={{top: "45px"}}></div>
                                        <div className="dot dot-6" style={{top: "54px"}}></div>
                                        <div className="dot dot-7" style={{top: "63px"}}></div>
                                        <div className="dot dot-8" style={{top: "72px"}}></div>
                                        <div className="dot dot-9" style={{top: "81px"}}></div>
                        
                                        <div className="dot dot-10" style={{top: "90px"}}></div>
                                        <div className="dot dot-11" style={{top: "99px"}}></div>
                                        <div className="dot dot-12" style={{top: "108px"}}></div>
                                        <div className="dot dot-13" style={{top: "117px"}}></div>
                                        <div className="dot dot-14" style={{top: "126px"}}></div>
                                        <div className="dot dot-15" style={{top: "135px"}}></div>
                                    </div>
                                    <div className="dots-x-top">
                                        <div className="dot dot-0" style={{right:"-9px"}}></div>
                                        <div className="dot dot-1" style={{right:"-18px"}}></div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                          
                        </Col>

                        <Col xs={12} sm={9} lg={8}>
                          <div className="rates-block">
                             <h4 className="mortgage-type-heading mortgage">Mortgage Type: 
                              <span className="heading-loan-type"> 5/1 ARM</span>
                             </h4>
                            
                            <Row>
                              <Col xs={12} sm={4}>
                                <div className="monthly-payment value-block">
                                    <p className="mortgage-type-value-heading">Monthly Payment</p>
                                    <div className="mortgage-type-value">0</div>
                                    <div className="shadow">
                                      <img src={shadow} alt="shadow"/>
                                    </div>
                                </div>
                              </Col> 

                              <Col xs={12} sm={4}>
                                 <div className="interest-rate value-block">
                                    <p className="mortgage-type-value-heading">Interest Rate</p>
                                    <div className="mortgage-type-value">3.75</div>
                                    <div className="shadow">
                                      <img src={shadow} alt="shadow"/>
                                    </div>
                                 </div>
                              </Col>

                              <Col xs={12} sm={4}>
                                <div className="apr value-block">
                                  <p className="mortgage-type-value-heading">APR</p>
                                  <div className="mortgage-type-value">3.82</div>
                                  <div className="shadow">
                                    <img src={shadow} alt="shadow"/>
                                  </div>
                                </div>
                              </Col>
                            </Row>

                            <h4 className="mortgage-type-heading savings mt-3">Savings</h4>
                            <div className="progress-bar-gauge">

                              <div className="data-row">
                                <div className="progressbar-container">
                                    <p>Monthly Saving</p>
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-success" role="progressbar" style={{"width":"80%"}}></div>
                                    </div>
                                </div>
                                <div className="data-amount">
                                  <span>2,600</span>
                                </div>
                              </div>

                              <div className="data-row">
                                <div className="progressbar-container">
                                    <p>Lifetime Savings</p>
                                    <div className="progress">
                                      <div className="progress-bar progress-bar-danger" role="progressbar" style={{"width":"10%"}}></div>
                                    </div>
                                </div>
                                <div className="data-amount red">
                                  - <span>697,50</span>
                                </div>
                              </div>

                            </div>

                          </div>
                        </Col>

                      </Row>

                  </section>

                  <section className="mp-footer">
                      <Row>
                        <Col xs={12}>
                          <p><span>Advertising Disclosure:</span> The offers that appear on this site are from companies from which the owner of this website receives compensation.
                          This compensation may impact how and where products appear on this site (including for example, the order in which they appear).
                          introlend.com does not include all companies or all offers available in the marketplace.</p>

                          <p><span>Disclaimer:</span> introlend.com is not a lender, not a credit card issuer, does not broker loans to lenders, and does not make lending or credit decisions.
                          This website does not constitute an offer or solicitation to lend. We make every effort to maintain accurate information. 
                          However, all offer information is presented without warranty. 
                          See the terms and conditions on the financial institution's website for complete details on any loan or credit card product.</p>

                          <p className="foot-note">Data from <img src="//cdn.introlend.com/assets/images/consumertools/transunion__vprod_master_v38.svg" alt="union-master"/></p>
                        </Col>
                      </Row>
                  </section>

                </Container>
            </div>
          </div>
          <Footer />
        </div>


        {/* Modal for Home Add and Delete */}
        <Modal className="modal-home modal-edit" size="xl" show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Home to Refinance</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className='form-control' />
                </div>
              </div>

              <div className="col-md-3">
                <div className="form-group">
                    <label>Home Type</label>
                    <select className="form-control">
                        <option>Primary</option>
                        <option>Secondary</option>
                    </select>
                </div>
              </div>

              <div className="col-md-3">
                <div className="form-group">
                    <label>Property Type</label>
                    <select className="form-control">
                        <option>Single Family</option>
                        <option>Cooperative</option>
                    </select>
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                    <label>Home Value</label>
                    <input type="text" className='form-control' />
                </div>
              </div>

              <div className="col-md-3">
                <div className="form-group">
                    <label>Mortgage Balance</label>
                    <select className="form-control">
                        <option>Primary</option>
                        <option>Secondary</option>
                    </select>
                </div>
              </div>

              <div className="col-md-2">
                <div className="form-group">
                    <label>Mortgage Type</label>
                    <select className="form-control">
                        <option>Single Family</option>
                        <option>Cooperative</option>
                    </select>
                </div>
              </div>
              
              <div className="col-md-2">
                <div className="form-group">
                    <label>Interest rate</label>
                    <input type="text" className='form-control' />
                </div>
              </div>

              <div className="col-md-2">
                <div className="form-group">
                    <label>Monthly Payment</label>
                    <input type="text" className='form-control' />
                </div>
              </div>
              
              { this.state.secondarTextShow ? <a className='add-secondary' onClick={this.addSecondaryRow}>Add Secondary Mortgage</a>:""}:
              { secondaryRow }

              <hr />

              <div className="row">
                 <div className="col-md-3">
                    <div className="form-group">
                        <label>Cashout Amount</label>
                        <input type="text" className='form-control' />
                    </div>
                 </div>
              </div>

            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-save" variant="info" onClick={this.closeModal}>
              Save
            </Button>
            <Button className="btn-cancel" variant="default" onClick={this.closeModal}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
        
        <Modal className="modal-home modal-add" size="xl" show={this.state.isAddModalOpen} onHide={this.closeAddModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Home to Purchase</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card>
              <Card.Header>
                <div className="row">
                    <div className="col-4">
                        <h5>Address</h5>
                    </div>
                    <div className="col-2">
                        <h5>Purchase Price</h5>
                    </div>
                    <div className="col-2">
                        <h5>Down Payment</h5>
                    </div>
                    <div className="col-2">
                        <h5>Home Type</h5>
                    </div>
                    <div className="col-2">
                        <h5>Property Type</h5>
                    </div>
                </div>
              </Card.Header>
              <Card.Body>
                <div className="row">
                  <div className="col-4">
                      <input className="form-control"/>
                  </div>
                  <div className="col-2">
                      <input className="form-control"/>
                  </div>
                  <div className="col-2">
                      <input className="form-control"/>
                  </div>

                  <div className="col-2">
                      <select className="form-control">
                          <option>All</option>
                      </select>
                  </div>
                  <div className="col-2">
                      <select className="form-control">
                        <option>All</option>
                      </select>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-save" variant="info" onClick={this.closeAddModal}>
              Save
            </Button>
            <Button className="btn-cancel" variant="default" onClick={this.closeAddModal}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>


      </>
    );
  }
}

const Tooltip = (props) => {
  return(
    <div className="tooltip-body">
        <span className="pointer"></span>
        <span className="close-icon fa fa-times" onClick={props.closeTooltip}></span>
        <h3 className="info-heading">Your Current Home &amp; Mortgage</h3>

        <span className="info-description">Enter your current home information. 
        You can also enter additional properties, such as a new home you may be purchasing,
        your second home, or investment property.</span>
    </div>
  )
}

const HomeModal = (props) => {
  return(
    <div className="popup-box choose-property-box">
        <span className="pointer"></span> 
        <span className="close-icon fa fa-times" onClick={props.closeHomeModal}></span>
        <div className="choose-property">
          <h3>Choose property</h3> 
          <div className="box">
            <div className="home-refi-container">
              <div className="box-header">
                <h4>Existing Homes</h4> 
                <a onClick={props.showModal}>Add Home</a>
              </div> 
              <div className="box-content">
                <ul className="list-unstyled">
                  <li>
                    <div className="radio-button">
                      <label>
                        <input type="radio" checked={props.isChecked} name="homeType"/>
                        <span className="radio"></span>
                      </label>
                    </div>
                  <div className="item">
                    <h5><i className="fa fa-home"></i> Primary</h5> 
                    <a onClick={props.showModal}>Edit</a>  
                    <p>3316 Bryant Falls Court, Raleigh, Bartons Creek, NC, 27613</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          <div className="home-purchase-container">
            <div className="box-header"><h4>New Home Purchase</h4> 
            <a onClick={props.addModalVisible}>Add Home</a>
          </div>
          <div className="box-content">
              <ul className="list-unstyled">
                <li>
                  <div className="item">
                    <p className="no-data">No new home purchases added.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SecondaryRow = (props) => {
  return(
    <div className="row clone-row">
      <div className="offset-md-3 col-md-3">
        <div className="form-group">
            <label>Mortgage Balance</label>
            <select className="form-control">
                <option>Primary</option>
                <option>Secondary</option>
            </select>
        </div>
      </div>

      <div className="col-md-2">
        <div className="form-group">
            <label>Mortgage Type</label>
            <select className="form-control">
                <option>Single Family</option>
                <option>Cooperative</option>
            </select>
        </div>
      </div>
      
      <div className="col-md-2">
        <div className="form-group">
            <label>Interest rate</label>
            <input type="text" className='form-control' />
        </div>
      </div>

      <div className="col-md-2">
        <div className="form-group ">
            <label>Monthly Payment</label>
            <div className='d-flex'>
              <input type="text" className='form-control' />
              <button className='btn btn-default ml-1' onClick={props.removeRow}><i className="fa fa-trash"></i></button>
            </div>
        </div>
      </div>
    </div> 
  )
}


export default MortageRefinancer;
