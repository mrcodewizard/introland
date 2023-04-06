import React from 'react'
import { Col, Container, Row, Accordion, ProgressBar} from 'react-bootstrap';
import "../assets/css/credit-card.css";
import luxuryCard from "../assets/img/funds-image.png";

function PersonalLoans() {
  return (
    <div className="creditcard-main personal-loans">
        <Container>
            <Row>
                <Col lg={3} sm={12}>
                    <div className="personal-form">
                        <div className="form-group">
                            <label htmlFor="">Loan Amount</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Loan Purpose</label>
                            <select name="" id="" className="form-control">
                                <option value="">Debit Card</option>
                                <option value="">Credit Card</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Credit Score</label>
                            <select name="" id="" className="form-control">
                                <option value="">5.0-4.5</option>
                                <option value="">4.0-3.5</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">ZIP</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </Col>

                <Col lg={9} sm={12}>
                    <div className="credit-content personal-content">
                        <h1>Personal Loans</h1>
                        <p>A personal loan through IntroLend could help you improve your finances. 
                           You could refinance your credit cards at a lower rate, pay for an unexpected expense,
                           or use the money for whatever you desire. Our team continuously monitors the complex personal loan market for the best loan terms available online. </p>

                        <p>Select the lender you want, and we’ll forward you to their site to complete a secure, online application. 
                           We strive to be the best personal loan resource, so our customers can search, compare, and apply for the loan that best suits
                           their needs.</p>
                        
                        <div className="card-offers-container">
                            <div className="card-offer">
                                <div className="card-info">
                                    <div className="row card-head">
                                        <div className="col-md-2">
                                            <a href="/">
                                                <img src={luxuryCard} alt="master-card-image" />
                                            </a>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="row">
                                                <div className="col-sm-4 text-center">
                                                    <div class="sub">From 4.99%</div>
                                                    <div class="main is-table-row"> APR* estimated
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 regular-apr text-center">
                                                <   div class="sub"> $445
                                                    </div>
                                                    <div class="main is-table-row">Monthly Payment* estimated
                                                    <span>1 - 24 Months</span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 text-center">
                                                    <div class="sub"> 300
                                                    </div>
                                                    <div class="main is-table-row"> Min. credit score
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
                                                    <Accordion.Header>
                                                        <div className="view-detail">
                                                            <span>View Detail</span>
                                                        </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="accordion-content">
                                                            <Row>
                                                                <Col sm={12} md={6}>
                                                                    <div className="features">
                                                                        <h3>QUALIFICATIONS</h3>
                                                                        <ul>
                                                                            <li>Patented black-PVD-coated metal card—weighing 22 grams.</li>
                                                                            <li>2% value for airfare redemptions with no blackout dates or seat restrictions. 1.5% value for cash back redemptions. Earn one point for every one dollar spent.</li>
                                                                            <li>Covers almost all 50 states.</li>
                                                                            <li>Funds deposited in your account as soon as the next business day</li>
                                                                            <li>APR varies from 4.99% up based on customer information</li>
                                                                            <li>Great for consolidating debt.</li>
                                                                            <li>Cell phone protection for eligible claims of up to $1,000 each year.</li>
                                                                            <li>No obligation fee.</li>
                                                                        </ul>
                                                                    </div>
                                                                </Col>
                                                                <Col sm={12} md={6}>
                                                                    <div className="features">
                                                                        <h3>KEY FACTS</h3>
                                                                        <ul>
                                                                            <li>No minimum credit score.</li>
                                                                            <li>Min income: n/a </li>
                                                                            <li>Min credit history: n/a</li>
                                                                            <li>Max debt to income: Varies.</li>
                                                                        </ul>
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
                                                </Accordion.Item>
                                            </Accordion>
                                        </Col>
                                    </div>
                                </div>

                                <div className="card-info">
                                    <div className="row card-head">
                                        <div className="col-md-2">
                                            <a href="/">
                                                <img src={luxuryCard} alt="master-card-image" />
                                            </a>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="row">
                                                <div className="col-sm-4 text-center">
                                                    <div class="sub">From 4.99%</div>
                                                    <div class="main is-table-row"> APR* estimated
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 regular-apr text-center">
                                                <   div class="sub"> $445
                                                    </div>
                                                    <div class="main is-table-row">Monthly Payment* estimated
                                                    <span>1 - 24 Months</span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 text-center">
                                                    <div class="sub"> 300
                                                    </div>
                                                    <div class="main is-table-row"> Min. credit score
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
                                                    <Accordion.Header>
                                                        <div className="view-detail">
                                                            <span>View Detail</span>
                                                        </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="accordion-content">
                                                            <Row>
                                                                <Col sm={12} md={6}>
                                                                    <div className="features">
                                                                        <h3>QUALIFICATIONS</h3>
                                                                        <ul>
                                                                            <li>Patented black-PVD-coated metal card—weighing 22 grams.</li>
                                                                            <li>2% value for airfare redemptions with no blackout dates or seat restrictions. 1.5% value for cash back redemptions. Earn one point for every one dollar spent.</li>
                                                                            <li>Covers almost all 50 states.</li>
                                                                            <li>Funds deposited in your account as soon as the next business day</li>
                                                                            <li>APR varies from 4.99% up based on customer information</li>
                                                                            <li>Great for consolidating debt.</li>
                                                                            <li>Cell phone protection for eligible claims of up to $1,000 each year.</li>
                                                                            <li>No obligation fee.</li>
                                                                        </ul>
                                                                    </div>
                                                                </Col>
                                                                <Col sm={12} md={6}>
                                                                    <div className="features">
                                                                        <h3>KEY FACTS</h3>
                                                                        <ul>
                                                                            <li>No minimum credit score.</li>
                                                                            <li>Min income: n/a </li>
                                                                            <li>Min credit history: n/a</li>
                                                                            <li>Max debt to income: Varies.</li>
                                                                        </ul>
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
                                                </Accordion.Item>
                                            </Accordion>
                                        </Col>
                                    </div>
                                </div>

                                <div className="card-info">
                                    <div className="row card-head">
                                        <div className="col-md-2">
                                            <a href="/">
                                                <img src={luxuryCard} alt="master-card-image" />
                                            </a>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="row">
                                                <div className="col-sm-4 text-center">
                                                    <div class="sub">From 4.99%</div>
                                                    <div class="main is-table-row"> APR* estimated
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 regular-apr text-center">
                                                <   div class="sub"> $445
                                                    </div>
                                                    <div class="main is-table-row">Monthly Payment* estimated
                                                    <span>1 - 24 Months</span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 text-center">
                                                    <div class="sub"> 300
                                                    </div>
                                                    <div class="main is-table-row"> Min. credit score
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
                                                    <Accordion.Header>
                                                        <div className="view-detail">
                                                            <span>View Detail</span>
                                                        </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="accordion-content">
                                                            <Row>
                                                                <Col sm={12} md={6}>
                                                                    <div className="features">
                                                                        <h3>QUALIFICATIONS</h3>
                                                                        <ul>
                                                                            <li>Patented black-PVD-coated metal card—weighing 22 grams.</li>
                                                                            <li>2% value for airfare redemptions with no blackout dates or seat restrictions. 1.5% value for cash back redemptions. Earn one point for every one dollar spent.</li>
                                                                            <li>Covers almost all 50 states.</li>
                                                                            <li>Funds deposited in your account as soon as the next business day</li>
                                                                            <li>APR varies from 4.99% up based on customer information</li>
                                                                            <li>Great for consolidating debt.</li>
                                                                            <li>Cell phone protection for eligible claims of up to $1,000 each year.</li>
                                                                            <li>No obligation fee.</li>
                                                                        </ul>
                                                                    </div>
                                                                </Col>
                                                                <Col sm={12} md={6}>
                                                                    <div className="features">
                                                                        <h3>KEY FACTS</h3>
                                                                        <ul>
                                                                            <li>No minimum credit score.</li>
                                                                            <li>Min income: n/a </li>
                                                                            <li>Min credit history: n/a</li>
                                                                            <li>Max debt to income: Varies.</li>
                                                                        </ul>
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
                                                </Accordion.Item>
                                            </Accordion>
                                        </Col>
                                    </div>
                                </div>

                                <div className="card-info">
                                    <div className="row card-head">
                                        <div className="col-md-2">
                                            <a href="/">
                                                <img src={luxuryCard} alt="master-card-image" />
                                            </a>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="row">
                                                <div className="col-sm-4 text-center">
                                                    <div class="sub">From 4.99%</div>
                                                    <div class="main is-table-row"> APR* estimated
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 regular-apr text-center">
                                                <   div class="sub"> $445
                                                    </div>
                                                    <div class="main is-table-row">Monthly Payment* estimated
                                                    <span>1 - 24 Months</span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 text-center">
                                                    <div class="sub"> 300
                                                    </div>
                                                    <div class="main is-table-row"> Min. credit score
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
                                                    <Accordion.Header>
                                                        <div className="view-detail">
                                                            <span>View Detail</span>
                                                        </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="accordion-content">
                                                            <Row>
                                                                <Col sm={12} md={6}>
                                                                    <div className="features">
                                                                        <h3>QUALIFICATIONS</h3>
                                                                        <ul>
                                                                            <li>Patented black-PVD-coated metal card—weighing 22 grams.</li>
                                                                            <li>2% value for airfare redemptions with no blackout dates or seat restrictions. 1.5% value for cash back redemptions. Earn one point for every one dollar spent.</li>
                                                                            <li>Covers almost all 50 states.</li>
                                                                            <li>Funds deposited in your account as soon as the next business day</li>
                                                                            <li>APR varies from 4.99% up based on customer information</li>
                                                                            <li>Great for consolidating debt.</li>
                                                                            <li>Cell phone protection for eligible claims of up to $1,000 each year.</li>
                                                                            <li>No obligation fee.</li>
                                                                        </ul>
                                                                    </div>
                                                                </Col>
                                                                <Col sm={12} md={6}>
                                                                    <div className="features">
                                                                        <h3>KEY FACTS</h3>
                                                                        <ul>
                                                                            <li>No minimum credit score.</li>
                                                                            <li>Min income: n/a </li>
                                                                            <li>Min credit history: n/a</li>
                                                                            <li>Max debt to income: Varies.</li>
                                                                        </ul>
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
                                                </Accordion.Item>
                                            </Accordion>
                                        </Col>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default PersonalLoans