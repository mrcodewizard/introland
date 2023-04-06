import React, {Component } from 'react';
import { Col, Container, Row, Modal, Card, Button } from 'react-bootstrap';
import Switch from "react-switch";
import '../assets/css/home-purchaser.css';
import Footer from './Footer';

class HomePurchaser extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       purchaseval: '250,000',
       checked: false,
       isTooltipshow: false,
       isHomeShow: false,
       isOpen: false,
       isChecked: false,
       isRowAdded: false,
       isAddModalOpen: false,
       secondarTextShow: true
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
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
        <div className="section-home">
          <div className="home-outer">    
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
            <div className="home-main">
                <Container>
                  <Row>
                    <Col sm={8}>
                        <h1>Home Purchaser <span className="beta">Beta</span></h1>
                        <p className="sub-heading">Find your realtor, home and financing-right here.</p>
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

                  <div className="content-divider">
                    <div className="gradient-left"></div> 
                    <div className="gradient-right"></div>
                  </div>

                  <div className="home-features">
                    <Row>
                      <Col md={4}>
                          <div className="purchase-column">
                            <div className="purchase-step">
                                <h3 className="purchase-step-header">Get a Mortgage</h3>
                            </div>
                            <div className="purchase-image">
                              <img src="//cdn.introlend.com/assets/images/mortgageplanner/mortgage__vprod_Release-159-HF3_v1.svg"/>
                              <img className="arrows hidden-sm hidden-xs" src="//cdn.introlend.com/assets/images/mortgageplanner/arrows_full__vprod_Release-159-HF3_v1.svg"/> 
                              <img className="arrows visible-sm" src="//cdn.introlend.com/assets/images/mortgageplanner/h_arrow__vprod_Release-159-HF3_v1.svg"/>
                            </div>
                            <div className="purchase-value-container">
                              <input className="width-dynamic" type="tel" value={this.state.purchaseval} maxLength="9" placeholder="0"/>
                              <span className="duplicate">250,000</span> 
                              <span className="duplicate zero">0</span> 
                              <span className="loader fade"></span>
                            </div>
                            <div className="purchase-value">Enter purchase value</div>
                            <div className="mortgage-application-button"></div>
                          </div>
                      </Col>
      
                      <Col md={4}>
                        <div className="purchase-column">
                            <div className="purchase-step">
                                <h3 className="purchase-step-header">Get a Realtor</h3>
                            </div>
                            <div className="purchase-image">
                            <img src="//cdn.introlend.com/assets/images/mortgageplanner/realtor__vprod_Release-159-HF3_v1.svg"/>
                              <img className="arrows hidden-sm hidden-xs" src="//cdn.introlend.com/assets/images/mortgageplanner/arrows_full__vprod_Release-159-HF3_v1.svg"/> 
                              <img className="arrows visible-sm" src="//cdn.introlend.com/assets/images/mortgageplanner/h_arrow__vprod_Release-159-HF3_v1.svg"/>
                            </div>
                            <p>Do you have an agent?</p>
                            <div className="d-flex justify-content-center toggle-switch">
                               <Switch onChange={this.handleChange} checked={this.state.checked} />
                            </div>
                          </div>
                      </Col>
      
                      <Col md={4}>
                        <div className="purchase-column">
                          <div className="purchase-step">
                              <h3 className="purchase-step-header">Get a Home</h3> 
                                <div className="row">
                                  <div className="col-xs-12 purchase-image">
                                    <img src="//cdn.introlend.com/assets/images/mortgageplanner/get_home__vprod_Release-159-HF3_v1.svg" alt="" />
                                  </div>
                                </div>
                              <div className="home-process-select">
                                <h3>Where are you in the process?</h3>
                                <div className="process-select-container">
                                  <select className="form-control" id="get-a-home-select" title="Looking but still haven't found a home">
                                    <option>Looking but still haven't found a home</option>
                                    <option>Found a home and want to make an offer</option>
                                    <option>Offer accepted and ready to close</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <section id="rates" className="rates">
                    <Row>
                      <Col xs={12}>
                          <p className="home-journey-txt">Your new home journey begins with your home approval</p>
                          <p className="home-sellers-txt">Home sellers are more likely to choose buyers who are pre-approved</p>

                          <div className="military-container">
                            <div className="military-txt">Have you served in the military?</div> 
                              <div className="military-toggle">
                                <div className="toggle-switch">
                                  <div className="toggle-label">No</div>
                                  <div className="scrubber"></div> 
                                    <span className="toggle-loader fade"></span>
                                </div>
                              </div>
                          </div>
                      </Col>
                    </Row>

                    <div className="rates-section">
                      <div className="rate-block">
                        <div className="rate-block-inner">
                          <div className="row">
                            <div className="col-xs-6 col-md-7 term">5/1 ARM</div> 
                            <div className="col-xs-6 col-md-5 rate">3.75%</div>
                          </div> 
                          <div className="row">
                            <div className="col-xs-12 monthly-payment">926</div>
                          </div>
                        </div>
                      </div>

                      <div className="rate-block">
                        <div className="rate-block-inner">
                          <div className="row">
                            <div className="col-xs-6 col-md-7 term">5/1 ARM</div> 
                            <div className="col-xs-6 col-md-5 rate">3.75%</div>
                          </div> 
                          <div className="row">
                            <div className="col-xs-12 monthly-payment">969</div>
                          </div>
                        </div>
                      </div>

                      <div className="rate-block">
                        <div className="rate-block-inner">
                          <div className="row">
                            <div className="col-xs-6 col-md-7 term">5/1 ARM</div> 
                            <div className="col-xs-6 col-md-5 rate">3.75%</div>
                          </div> 
                          <div className="row">
                            <div className="col-xs-12 monthly-payment">1,058</div>
                          </div>
                        </div>
                      </div>

                      <div className="rate-block">
                        <div className="rate-block-inner">
                          <div className="row">
                            <div className="col-xs-6 col-md-7 term">5/1 ARM</div> 
                            <div className="col-xs-6 col-md-5 rate">3.75%</div>
                          </div> 
                          <div className="row">
                            <div className="col-xs-12 monthly-payment">1,492</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="credit-score" className="credit-score">
                    <div className="gauge-container">
                      <div className="gauge">
                        <div className="gauge-pointer"></div>
                        <img className="bureau-logo transunion" src="//cdn.introlend.com/assets/images/consumertools/lgo-transunion__vprod_Release-159-HF3_v1.svg" alt="TransUnion"/>
                        <div className="credit-score" id="credit-score">775</div> 
                        <div className="refresh-text col-xs-12">  
                          <span className="loader fade"></span>
                        </div>
                      </div>
                    </div>
                    <p className="credit-score-txt">Rates are based on your current <span class="blue">775 CREDIT SCORE</span> as of 10/24/2021. IntroLend can help you get <br/>a better loan by giving you tips on how to raise your credit score.
                    <a href="/credit-manager"> Learn More</a></p>
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

export default HomePurchaser;
