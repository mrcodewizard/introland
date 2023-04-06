import React, { Component } from 'react';
import { Col, Container, Row, Accordion, ProgressBar} from 'react-bootstrap';
import "../assets/css/credit-card.css";
import luxuryCard from "../assets/img/luxury-master-card.png";

class CreditCard extends Component {
  render() {
    return (
      <div className="creditcard-main">
          <div className="row">
              <div className="col-sm-7 col-md-9 mx-auto">
                <ul className="nav credit-top-nav">
                    <li>
                        <a href="#">
                            <span>Card Category</span> <i className="fa fa-caret-down"></i> 
                        </a>
                    </li>
                    <li>
                        <a href="#">
                         <span>Card Issuer</span> <i className="fa fa-caret-down"></i> 
                        </a>
                    </li>
                    <li>
                        <a href="#">
                         <span>Card Type</span> <i className="fa fa-caret-down"></i> 
                         </a>
                    </li>
                    <li>
                        <a href="#">
                         <span>Credit Range</span > <i className="fa fa-caret-down"></i> 
                        </a>
                    </li>
                </ul>
              </div>
          </div>

          <div className="credit-content">
                <h1>Rewards</h1>
                <p>Rewards cards allow consumers to earn rewards on qualified purchases. 
                   These often include free hotel nights, extra points, cashback, or various other incentives. 
                   The following are the leading rewards credit card offers from our partners </p>

                 <div className="card-offers-container">
                     <div className="card-offer">
                         <div className="card-info">
                           <h3 class="mb-3">
                              <a itemprop="itemreviewed" href="/">Luxury Card™ Mastercard® Black Card™</a>
                           </h3>
                           <div className="row card-head">
                               <div className="col-md-2">
                                  <a href="/">
                                      <img src={luxuryCard} alt="master-card-image" />
                                  </a>
                               </div>
                               <div className="col-md-8">
                                   <div className="row">
                                       <div className="col-sm-4 text-center">
                                            <div class="main is-table-row"> Credit Needed
                                            </div>
                                            <div class="sub">Excellent </div>
                                       </div>
                                       <div className="col-sm-4 regular-apr text-center">
                                            <div class="main is-table-row">Regular APR
                                            </div>
                                            <div class="sub">14.99% </div>
                                       </div>
                                       <div className="col-sm-4 text-center">
                                            <div class="main is-table-row"> Annual Fee
                                            </div>
                                            <div class="sub"> $495 ($195 for each Authorized User added to the account)
                                            </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-md-2 apply-container">
                                   <button className="btn btn-apply">
                                       <i className="fa fa-lock"></i> Apply Now
                                   </button>
                               </div>
                           </div>
                           <div className="row card-bottom">
                                <Col xs={12}>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Body>
                                                <div className="accordion-content">
                                                    <Row>
                                                        <Col sm={12} md={6}>
                                                            <div className="features">
                                                                <h3>BENEFITS & KEY FEATURES</h3>
                                                                <ul>
                                                                    <li>Patented black-PVD-coated metal card—weighing 22 grams.</li>
                                                                    <li>2% value for airfare redemptions with no blackout dates or seat restrictions. 1.5% value for cash back redemptions. Earn one point for every one dollar spent.</li>
                                                                    <li>Annual Airline Credit—up to $100 in statement credits toward flight-related purchases including airline tickets, baggage fees, upgrades and more. 
                                                                        Up to a $100 application fee credit for the cost of TSA Pre✓® or Global Entry.</li>
                                                                    <li>Enrollment in Priority Pass™ Select with access to 1,300+ airport lounges worldwide with no guest limit. Includes credits at select airport restaurants for cardholder and one guest.</li>
                                                                    <li>24/7 Luxury Card Concierge®—available by phone, email and live mobile chat. Around-the-clock service to help you save time and manage tasks big and small.</li>
                                                                    <li>Exclusive Luxury Card Travel® benefits—average value of $500 per stay (e.g., resort credits, room upgrades, free wifi, breakfast for two and more) at over 3,000 properties.</li>
                                                                    <li>Cell phone protection for eligible claims of up to $1,000 each year. Plus additional World Elite Mastercard® benefits.</li>
                                                                    <li>Annual Fee: $495 ($195 for each Authorized User). Terms and conditions apply.</li>
                                                                </ul>
                                                            </div>
                                                        </Col>
                                                        <Col sm={12} md={6}>
                                                            <div className="specifications">
                                                                <h2>Excellent </h2>
                                                                <div className="credit-needed mb-4">
                                                                    CREDIT NEEDED
                                                                </div>
                                                                
                                                                <div className="task-progress progress-right">
                                                                    <ProgressBar now={60} />
                                                                </div>
                                                                <div className="divider"></div>
                                                                
                                                                <Row className="detail-row">
                                                                    <Col md={5}>
                                                                        <div className="main">Intro APR (Purchases)</div>
                                                                    </Col>
                                                                    <Col md={7}>
                                                                        <div className="value">N/A</div>
                                                                    </Col>
                                                                    <Col md={5}>
                                                                        <div className="main"> Intro APR (Balance Transfer)</div>
                                                                    </Col>
                                                                    <Col md={7}>
                                                                        <div className="value">0% introductory APR for the first fifteen billing cycles following each 
                                                                        balance transfer that posts to your account within 45 days of account opening.</div>
                                                                    </Col>
                                                                    <Col md={5}>
                                                                        <div className="main">Ongoing APR</div>
                                                                    </Col>
                                                                    <Col md={7}>
                                                                        <div className="value">14.99%</div>
                                                                    </Col>
                                                                    <Col md={5}>
                                                                        <div className="main">Annual Fee</div>
                                                                    </Col>
                                                                    <Col md={7}>
                                                                        <div className="value">$495 ($195 for each Authorized User added to the account)</div>
                                                                    </Col>
                                                                </Row>

                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col sm={12}>
                                                            <div className="apply-center button-bottom">
                                                                <button className="btn btn-apply">
                                                                    <i className="fa fa-lock"></i> Apply Now
                                                                </button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Accordion.Body>
                                            <Accordion.Header>
                                                <div className="view-detail">
                                                    <span>View Detail</span>
                                                </div>
                                            </Accordion.Header>
                                        </Accordion.Item>
                                    </Accordion>
                                </Col>
                           </div>
                         </div>

                         <div className="card-info">
                           <h3 class="mb-3">
                              <a itemprop="itemreviewed" href="/">Luxury Card™ Mastercard® Black Card™</a>
                           </h3>
                           <div className="row card-head">
                               <div className="col-md-2">
                                  <a href="/">
                                      <img src={luxuryCard} alt="master-card-image" />
                                  </a>
                               </div>
                               <div className="col-md-8">
                                   <div className="row">
                                       <div className="col-sm-4 text-center">
                                            <div class="main is-table-row"> Credit Needed
                                            </div>
                                            <div class="sub">Excellent </div>
                                       </div>
                                       <div className="col-sm-4 regular-apr text-center">
                                            <div class="main is-table-row">Regular APR
                                            </div>
                                            <div class="sub">14.99% </div>
                                       </div>
                                       <div className="col-sm-4 text-center">
                                            <div class="main is-table-row"> Annual Fee
                                            </div>
                                            <div class="sub"> $495 ($195 for each Authorized User added to the account)
                                            </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-md-2 apply-container">
                                   <button className="btn btn-apply">
                                       <i className="fa fa-lock"></i> Apply Now
                                   </button>
                               </div>
                           </div>
                           <div className="row card-bottom">
                                <Col xs={12}>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Body>
                                                <div className="accordion-content">
                                                    <Row>
                                                        <Col sm={12} md={6}>
                                                            <div className="features">
                                                                <h3>BENEFITS & KEY FEATURES</h3>
                                                                <ul>
                                                                    <li>Patented black-PVD-coated metal card—weighing 22 grams.</li>
                                                                    <li>2% value for airfare redemptions with no blackout dates or seat restrictions. 1.5% value for cash back redemptions. Earn one point for every one dollar spent.</li>
                                                                    <li>Annual Airline Credit—up to $100 in statement credits toward flight-related purchases including airline tickets, baggage fees, upgrades and more. 
                                                                        Up to a $100 application fee credit for the cost of TSA Pre✓® or Global Entry.</li>
                                                                    <li>Enrollment in Priority Pass™ Select with access to 1,300+ airport lounges worldwide with no guest limit. Includes credits at select airport restaurants for cardholder and one guest.</li>
                                                                    <li>24/7 Luxury Card Concierge®—available by phone, email and live mobile chat. Around-the-clock service to help you save time and manage tasks big and small.</li>
                                                                    <li>Exclusive Luxury Card Travel® benefits—average value of $500 per stay (e.g., resort credits, room upgrades, free wifi, breakfast for two and more) at over 3,000 properties.</li>
                                                                    <li>Cell phone protection for eligible claims of up to $1,000 each year. Plus additional World Elite Mastercard® benefits.</li>
                                                                    <li>Annual Fee: $495 ($195 for each Authorized User). Terms and conditions apply.</li>
                                                                </ul>
                                                            </div>
                                                        </Col>
                                                        <Col sm={12} md={6}>
                                                            <div className="specifications">
                                                                <h2>Excellent </h2>
                                                                <div className="credit-needed mb-4">
                                                                    CREDIT NEEDED
                                                                </div>
                                                                
                                                                <div className="task-progress progress-right">
                                                                    <ProgressBar now={60} />
                                                                </div>
                                                                <div className="divider"></div>
                                                                
                                                                <Row className="detail-row">
                                                                    <Col md={5}>
                                                                        <div className="main">Intro APR (Purchases)</div>
                                                                    </Col>
                                                                    <Col md={7}>
                                                                        <div className="value">N/A</div>
                                                                    </Col>
                                                                    <Col md={5}>
                                                                        <div className="main"> Intro APR (Balance Transfer)</div>
                                                                    </Col>
                                                                    <Col md={7}>
                                                                        <div className="value">0% introductory APR for the first fifteen billing cycles following each 
                                                                        balance transfer that posts to your account within 45 days of account opening.</div>
                                                                    </Col>
                                                                    <Col md={5}>
                                                                        <div className="main">Ongoing APR</div>
                                                                    </Col>
                                                                    <Col md={7}>
                                                                        <div className="value">14.99%</div>
                                                                    </Col>
                                                                    <Col md={5}>
                                                                        <div className="main">Annual Fee</div>
                                                                    </Col>
                                                                    <Col md={7}>
                                                                        <div className="value">$495 ($195 for each Authorized User added to the account)</div>
                                                                    </Col>
                                                                </Row>

                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col sm={12}>
                                                            <div className="apply-center button-bottom">
                                                                <button className="btn btn-apply">
                                                                    <i className="fa fa-lock"></i> Apply Now
                                                                </button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Accordion.Body>
                                            <Accordion.Header>
                                                <div className="view-detail">
                                                    <span>View Detail</span>
                                                </div>
                                            </Accordion.Header>
                                        </Accordion.Item>
                                    </Accordion>
                                </Col>
                           </div>
                         </div>

                         <div className="card-info">
                           <h3 class="mb-3">
                              <a itemprop="itemreviewed" href="/">Luxury Card™ Mastercard® Black Card™</a>
                           </h3>
                           <div className="row card-head">
                               <div className="col-md-2">
                                  <a href="/">
                                      <img src={luxuryCard} alt="master-card-image" />
                                  </a>
                               </div>
                               <div className="col-md-8">
                                   <div className="row">
                                       <div className="col-sm-4 text-center">
                                            <div class="main is-table-row"> Credit Needed
                                            </div>
                                            <div class="sub">Excellent </div>
                                       </div>
                                       <div className="col-sm-4 regular-apr text-center">
                                            <div class="main is-table-row">Regular APR
                                            </div>
                                            <div class="sub">14.99% </div>
                                       </div>
                                       <div className="col-sm-4 text-center">
                                            <div class="main is-table-row"> Annual Fee
                                            </div>
                                            <div class="sub"> $495 ($195 for each Authorized User added to the account)
                                            </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-md-2 apply-container">
                                   <button className="btn btn-apply">
                                       <i className="fa fa-lock"></i> Apply Now
                                   </button>
                               </div>
                           </div>
                           <div className="row card-bottom">
                                <Col xs={12}>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Body>
                                                <div className="accordion-content">
                                                    <Row>
                                                        <Col sm={12} md={6}>
                                                            <div className="features">
                                                                <h3>BENEFITS & KEY FEATURES</h3>
                                                                <ul>
                                                                    <li>Patented black-PVD-coated metal card—weighing 22 grams.</li>
                                                                    <li>2% value for airfare redemptions with no blackout dates or seat restrictions. 1.5% value for cash back redemptions. Earn one point for every one dollar spent.</li>
                                                                    <li>Annual Airline Credit—up to $100 in statement credits toward flight-related purchases including airline tickets, baggage fees, upgrades and more. 
                                                                        Up to a $100 application fee credit for the cost of TSA Pre✓® or Global Entry.</li>
                                                                    <li>Enrollment in Priority Pass™ Select with access to 1,300+ airport lounges worldwide with no guest limit. Includes credits at select airport restaurants for cardholder and one guest.</li>
                                                                    <li>24/7 Luxury Card Concierge®—available by phone, email and live mobile chat. Around-the-clock service to help you save time and manage tasks big and small.</li>
                                                                    <li>Exclusive Luxury Card Travel® benefits—average value of $500 per stay (e.g., resort credits, room upgrades, free wifi, breakfast for two and more) at over 3,000 properties.</li>
                                                                    <li>Cell phone protection for eligible claims of up to $1,000 each year. Plus additional World Elite Mastercard® benefits.</li>
                                                                    <li>Annual Fee: $495 ($195 for each Authorized User). Terms and conditions apply.</li>
                                                                </ul>
                                                            </div>
                                                        </Col>
                                                        <Col sm={12} md={6}>
                                                            <div className="specifications">
                                                                <h2>Excellent </h2>
                                                                <div className="credit-needed mb-4">
                                                                    CREDIT NEEDED
                                                                </div>
                                                                
                                                                <div className="task-progress progress-right">
                                                                    <ProgressBar now={60} />
                                                                </div>
                                                                <div className="divider"></div>
                                                                
                                                                <Row className="detail-row">
                                                                    <Col md={5}>
                                                                        <div className="main">Intro APR (Purchases)</div>
                                                                    </Col>
                                                                    <Col md={7}>
                                                                        <div className="value">N/A</div>
                                                                    </Col>
                                                                    <Col md={5}>
                                                                        <div className="main"> Intro APR (Balance Transfer)</div>
                                                                    </Col>
                                                                    <Col md={7}>
                                                                        <div className="value">0% introductory APR for the first fifteen billing cycles following each 
                                                                        balance transfer that posts to your account within 45 days of account opening.</div>
                                                                    </Col>
                                                                    <Col md={5}>
                                                                        <div className="main">Ongoing APR</div>
                                                                    </Col>
                                                                    <Col md={7}>
                                                                        <div className="value">14.99%</div>
                                                                    </Col>
                                                                    <Col md={5}>
                                                                        <div className="main">Annual Fee</div>
                                                                    </Col>
                                                                    <Col md={7}>
                                                                        <div className="value">$495 ($195 for each Authorized User added to the account)</div>
                                                                    </Col>
                                                                </Row>

                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col sm={12}>
                                                            <div className="apply-center button-bottom">
                                                                <button className="btn btn-apply">
                                                                    <i className="fa fa-lock"></i> Apply Now
                                                                </button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Accordion.Body>
                                            <Accordion.Header>
                                                <div className="view-detail">
                                                    <span>View Detail</span>
                                                </div>
                                            </Accordion.Header>
                                        </Accordion.Item>
                                    </Accordion>
                                </Col>
                           </div>
                         </div>
                         
                     </div>
                 </div>
          </div>
          
      </div>
    )
  }
}

export default CreditCard