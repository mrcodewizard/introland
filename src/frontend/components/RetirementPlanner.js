import React, { Component, useState } from 'react'
import { Col, Container, Row, Nav, Tabs, Tab, Accordion} from 'react-bootstrap';
import "../assets/css/common.css";
import "../assets/css/retirement-planner.css";
import Footer from './Footer';
import shadow from "../assets/img/shadow.png";
import coinFlowers from "../assets/img/flower-coins.png";
import coinPig from "../assets/img/coin-pig.png";
import coinBuilding from "../assets/img/icon-building.png";
import transUnion from "../assets/img/trans-union.svg";
import shadowSmall from "../assets/img/face_shadow.png";
import goodBadge from "../assets/img/good_badge.png";
import userIcon from "../assets/img/profile-one.png";
import SectionSidebar from './SectionSidebar';

function RetirementPlanner() {
 const [isTooltipshow , toggleTooltip] = useState(false);
 const [age, setAge] = useState(40);
 const [rAge, setrAge] = useState(40);
 const [slide, setSlider] = useState({
     "sliderOne" : 16300,
     "sliderTwo" : 20000,
     "sliderThree": 1200,
     "sliderFour" : 600,
     "sliderFive" : 20000,
     "sliderSix"  : 10000,
     "sliderSeven": 10000
 });
 const [income, setIncome] = useState(0);

 const onUpdate = (e) => {
     setSlider({
        ...slide,
        [e.target.name]: e.target.value
     });
 }

 let toolTip = (isTooltipshow) ? <Tooltip closeInfo={() => toggleTooltip(false)} /> : "";
 const sidebarArray = [
    {
        isActive: true,
        id: "sectionOne",
        icon : "fa fa-user",
        text : "Current Status"
    },
    {
        isActive: false,
        id: "sectionTwo",
        icon : "fa fa-shield",
        text : "Retirement Savings"
    },
    {
        isActive: false,
        id: "sectionThree",
        icon : "fa fa-money",
        text : "Retirement Income"
    },
    {
        isActive: false,
        id: "sectionFour",
        icon : "fa fa-money",
        text : "Retirement Outlook"
    }
]
const sliderMax = [32000,50000,2500,10000,1000000, 1000000, 1000000];
    return (
        <>
            <div className='section-identity'>
                <div className='identity-outer'>
                        <SectionSidebar listItems={sidebarArray} />

                        <div className="identity-main retirement-main">
                            <div className="identity-upper">
                                <h2 className="title">Retirement Planner</h2>
                                <p className="sub-heading">Don't hunt for a number. Gain a perspective.</p>
                            </div>

                            <div className="financial-notifications credit-section">
                                <div className="tooltip-outer">
                                    <div className="inner-row">
                                        <h2>Current Status</h2>
                                        <div className="tooltip-wrapper">
                                        <span className="info-icon fa fa-info-circle" onClick={() => toggleTooltip(!isTooltipshow) }></span>
                                        {/* Show tooltip on click */}
                                        {  toolTip }

                                        </div>
                                    </div>
                                </div>

                                <div className="retirement-section current-status">
                                    <Container>
                                         <Row>
                                             <Col sm={5}>
                                                 <div className="user-column">
                                                    <div className="age-container">
                                                        <div className="user-image">
                                                            <img src={userIcon} className="img-fluid" alt="user" />
                                                        </div>
                                                        <div className="age-info text-center">
                                                            <p className="age-title">Current Age</p>
                                                            <div className="age-count">
                                                                <span className="text">
                                                                    <span className="age-number">{age}</span>
                                                                    <span className="icon fa fa-chevron-up age-up" onClick={() => { setAge( prev => prev+ 1) }}></span>
                                                                    <span className="icon fa fa-chevron-down age-down" onClick={() => { setAge( prev => prev - 1) }}></span>
                                                                </span>
                                                            </div>
                                                            <p className="description">Years Old</p>
                                                        </div>
                                                    </div>
                                                 </div>
                                             </Col>
                                             <Col sm={7}>
                                                <div className="detail-column">
                                                    <p className="income-title">Income</p>

                                                    <div className="form-group">
                                                        <div className="slider-item row">
                                                            <div className="col-sm-8">
                                                                <p className="income-text">Current Monthly Salary</p>
                                                                <div className="slider-wrapper">
                                                                    <div className="slider">
                                                                        <input type="range" name="sliderOne" min="0" max={sliderMax[0]} step="100"  onChange={ onUpdate } value={slide.sliderOne}  /> 
                                                                        <div className="slider-range" style={{"min-width": ((slide.sliderOne/sliderMax[0]) * 100)+"%"}}></div> 
                                                                        <div className="slider-track"></div>  
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <p className="income-amount">{slide.sliderOne}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="slider-item row">
                                                            <div className="col-sm-8">
                                                                <p className="income-text">Expected monthly salary at 50</p>
                                                                <div className="slider-wrapper">
                                                                    <div className="slider">
                                                                        <input type="range" name="sliderTwo" min="0" max={sliderMax[1]} step="100" onChange={ onUpdate } value={slide.sliderTwo}  /> 
                                                                        <div className="slider-range" style={{"min-width": ((slide.sliderTwo/sliderMax[1]) * 100)+"%"}}></div> 
                                                                        <div className="slider-track"></div>  
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <p className="income-amount">{slide.sliderTwo}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="slider-item row">
                                                            <div className="col-sm-8">
                                                                <p className="income-text">Monthly contribution towards 401k</p>
                                                                <div className="slider-wrapper">
                                                                    <div className="slider">
                                                                        <input type="range" name="sliderThree" min="0" max={sliderMax[2]} step="100" onChange={ onUpdate } value={slide.sliderThree}  /> 
                                                                        <div className="slider-range" style={{"min-width": ((slide.sliderThree/sliderMax[2]) * 100)+"%"}}></div> 
                                                                        <div className="slider-track"></div>  
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <p className="income-amount">{slide.sliderThree}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="slider-item row">
                                                            <div className="col-sm-8">
                                                                <p className="income-text">Other Income</p>
                                                                <div className="slider-wrapper">
                                                                    <div className="slider">
                                                                        <input type="range" name="sliderFour" min="0" max={sliderMax[3]} step="100" onChange={ onUpdate } value={slide.sliderFour}  /> 
                                                                        <div className="slider-range" style={{"min-width": ((slide.sliderFour/sliderMax[3]) * 100)+"%"}}></div> 
                                                                        <div className="slider-track"></div>  
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <p className="income-amount">{slide.sliderFour}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                             </Col>
                                         </Row>
                                    </Container>
                                </div>
                            </div>

                            <div className="section-divider"></div>

                            <div className="financial-notifications saving-section">
                                <div className="tooltip-outer">
                                    <div className="inner-row">
                                        <h2>Retirement Savings</h2>
                                        <div className="tooltip-wrapper">
                                        <span className="info-icon fa fa-info-circle" onClick={() => toggleTooltip(!isTooltipshow) }></span>
                                        {/* Show tooltip on click */}
                                        {  toolTip }

                                        </div>
                                    </div>
                                </div>

                                <div className="savings-inner">
                                    <div className="total-savings">Total Savings</div>
                                    <div className="total-savings-amount">{Number(slide.sliderFive)+Number(slide.sliderSix)+Number(slide.sliderSeven)}</div>
                                    <p className="shadow-inner text-center">
                                        <img src={shadow} alt="shadow-image" />
                                    </p>
                                    
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="slider-pie">
                                                <div className="animated-pie-container">
                                                    <img className="pie-image" src={coinFlowers} /> 
                                                    <div className="circle-anim">
                                                        <svg id="svg" viewBox="0 0 150 150" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                            <circle class="rail" cx="75" cy="75" r="75" stroke-dashoffset="0" />
                                                            <circle class="progress" cx="75" cy="75" r="75" id="bar" stroke-dasharray="1000" stroke-dashoffset="0" style={{"stroke": "#ff7767" , "stroke-dashoffset": (-1000-((slide.sliderFive/sliderMax[4]) * 1000))+"px"}} />
                                                        </svg>
                                                    </div>
                                                </div> 

                                                <div className="form-group bottom-group saving-info">
                                                    <div className="row">
                                                        <div className="col-xs-12">
                                                            <p className="savings-amount">{slide.sliderFive}</p> 
                                                            <p className="savings-text">Investment Account</p> 
                                                            <div className="slider-wrapper">
                                                                <div className="slider">
                                                                    <input type="range" name="sliderFive" min="0" max={sliderMax[4]} step="100"  onChange={ onUpdate } value={slide.sliderFive} /> 
                                                                    <div className="slider-range" style={{"min-width": ((slide.sliderFive/sliderMax[4]) * 100)+"%"}}></div> 
                                                                    <div className="slider-track"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="slider-pie">
                                                <div className="animated-pie-container">
                                                    <img className="pie-image" src={coinPig} /> 
                                                    <div className="circle-anim">
                                                        <svg id="svg" viewBox="0 0 150 150" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                            <circle class="rail" cx="75" cy="75" r="75" stroke-dashoffset="0" />
                                                            <circle class="progress" cx="75" cy="75" r="75" id="bar" stroke-dasharray="1000" stroke-dashoffset="0" style={{"stroke": "#ff7767" , "stroke-dashoffset": (-1000-((slide.sliderSix/sliderMax[5]) * 1000))+"px"}} />
                                                        </svg>
                                                    </div>
                                                </div> 

                                                <div className="form-group bottom-group saving-info">
                                                    <div className="row">
                                                        <div className="col-xs-12">
                                                            <p className="savings-amount">{slide.sliderSix}</p> 
                                                            <p className="savings-text">401k Balance</p> 
                                                            <div className="slider-wrapper">
                                                                <div className="slider">
                                                                    <input type="range" name="sliderSix" min="0" max={sliderMax[5]} step="100"  onChange={ onUpdate } value={slide.sliderSix} /> 
                                                                    <div className="slider-range" style={{"min-width": ((slide.sliderSix/sliderMax[5]) * 100)+"%"}}></div> 
                                                                    <div className="slider-track"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="slider-pie">
                                                <div className="animated-pie-container">
                                                    <img className="pie-image" src={coinBuilding} /> 
                                                    <div className="circle-anim">
                                                        <svg id="svg" viewBox="0 0 150 150" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                            <circle class="rail" cx="75" cy="75" r="75" stroke-dashoffset="0" />
                                                            <circle class="progress" cx="75" cy="75" r="75" id="bar" stroke-dasharray="1000" stroke-dashoffset="0" style={{"stroke": "#ff7767" , "stroke-dashoffset": (-1000-((slide.sliderSeven/sliderMax[6]) * 1000))+"px"}} />
                                                        </svg>
                                                    </div>
                                                </div> 

                                                <div className="form-group bottom-group saving-info">
                                                    <div className="row">
                                                        <div className="col-xs-12">
                                                            <p className="savings-amount">{slide.sliderSeven}</p> 
                                                            <p className="savings-text">Investment Account</p> 
                                                            <div className="slider-wrapper">
                                                                <div className="slider">
                                                                    <input type="range" name="sliderSeven" min="0" max={sliderMax[6]} step="100"  onChange={ onUpdate } value={slide.sliderSeven} /> 
                                                                    <div className="slider-range" style={{"min-width": ((slide.sliderSeven/sliderMax[6]) * 100)+"%"}}></div> 
                                                                    <div className="slider-track"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="section-divider"></div>

                            <div className="financial-notifications retirement-income">
                                <div className="tooltip-outer">
                                    <div className="inner-row">
                                        <h2>Retiremenent Income</h2>
                                        <div className="tooltip-wrapper">
                                        <span className="info-icon fa fa-info-circle" onClick={() => toggleTooltip(!isTooltipshow) }></span>
                                        {/* Show tooltip on click */}
                                        {  toolTip }

                                        </div>
                                    </div>
                                </div>

                                <div className="retirement-section current-status">
                                    <Container>
                                         <Row>
                                             <Col sm={5}>
                                                 <div className="user-column">
                                                    <div className="age-container">
                                                        <div className="age-info text-center">
                                                            <p class="current-income">% OF CURRENT INCOME</p>
                                                            <div className="age-count">
                                                                <span className="text">
                                                                    <span className="age-number">{income}%</span>
                                                                    <span className="icon fa fa-chevron-up age-up" onClick={() => { setIncome( prev => prev+ 1) }}></span>
                                                                    <span className="icon fa fa-chevron-down age-down" onClick={() => { setIncome( prev => prev - 1) }}></span>
                                                                </span>
                                                            </div>
                                                            <p className="current-income-text">We recommend <strong>75% of current income.</strong></p>
                                                        </div>
                                                    </div>
                                                 </div>
                                             </Col>
                                             <Col sm={7}>
                                                <div className="detail-column">
                                                    <p className="income-title"> Required Income</p>
                                                    <div class="required-income-val">{(income/100) * slide.sliderOne}</div>
                                                    <div className="shadow-inner">
                                                        <img src={shadow} alt="shadow"/>
                                                    </div>
                                                </div>
                                             </Col>
                                         </Row>
                                    </Container>
                                </div>
                                
                                <Row>
                                    <Col sm={12}>
                                        <div class="drag-text">Drag slider to adjust Social Security allocation.</div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col sm={12} className="drag-slider">
                                        <div className="slider">
                                            <input type="range" min="0" max="2600" step="10" value="0" />

                                            <div class="social-security" style={{"width":"33.33%"}}>
                                                <div class="drag-slider-amount social-amount">2,600</div>
                                                <div class="drag-slider-text">Social Security</div>
                                            </div>

                                            <div class="savings-investments" style={{"width":"33.33%","margin-left":"33.33%"}}>
                                                <div class="drag-slider-amount other-amount">13,100</div>
                                                <div class="drag-slider-text">Investments &amp; Savings</div>
                                            </div>

                                            <div class="other-income" style={{"width":"33.33%","margin-left":"66.66%"}}>
                                                <div class="drag-slider-amount investment-amount">600</div>
                                                <div class="drag-slider-text">Other Income</div>
                                            </div>

                                        </div>
                                    </Col>
                                </Row>
                                
                            </div>

                            <div className="section-divider"></div>

                            <div className="financial-notifications credit-section">
                                <div className="tooltip-outer">
                                    <div className="inner-row">
                                        <h2>Retirement Outlook</h2>
                                        <div className="tooltip-wrapper">
                                        <span className="info-icon fa fa-info-circle" onClick={() => toggleTooltip(!isTooltipshow) }></span>
                                        {/* Show tooltip on click */}
                                        {  toolTip }

                                        </div>
                                    </div>
                                </div>

                                <div className="retirement-section current-status">
                                    <Container>
                                         <Row>
                                             <Col sm={5}>
                                                 <div className="user-column">
                                                    <div className="age-container">
                                                        <div className="user-image">
                                                            <img src={userIcon} className="img-fluid" alt="user" />
                                                        </div>
                                                        <div className="age-info text-center">
                                                            <p className="age-title">Retirement Age</p>
                                                            <div className="age-count">
                                                                <span className="text">
                                                                    <span className="age-number">{rAge}</span>
                                                                    <span className="icon fa fa-chevron-up age-up" onClick={() => { setrAge( prev => prev+ 1) }}></span>
                                                                    <span className="icon fa fa-chevron-down age-down" onClick={() => { setrAge( prev => prev - 1) }}></span>
                                                                </span>
                                                            </div>
                                                            <p className="description">Years Old</p>
                                                        </div>
                                                    </div>
                                                    <p className="age-to-profile">We recommend that you retire at <strong>67 years old</strong>.
                                                    </p>
                                                 </div>
                                             </Col>
                                             <Col sm={7}>
                                                <div className="detail-column retirement-outlook">
                                                    <p className="retirement-title">Retirement Summary</p>
                                                    <p className="retirement-image">
                                                        <img className="img-responsive" src={goodBadge} alt="Good" />
                                                    </p>
                                                    <p className="retirement-description">Your savings should be enough to last you through <span>average life expectancy of 87</span>. 
                                                    Our <a className="find-pro-link" href="/">financial consultants</a> could help you increase your retirement income.</p>
                                                </div>
                                             </Col>
                                         </Row>

                                         <Row>
                                             <Col sm={12} className="money-at-age">
                                                <p className="money-at-age-title">How much money will you have at age:</p>

                                                 <div className="row age-retirement-bar">
                                                    <div className="col-sm-2">
                                                        <div className="age-number">65</div>
                                                        <div className="age-text">YRS <br/> OLD</div>
                                                        <div class="clearfix"></div>
                                                    </div>

                                                    <div className="col-sm-6 col-md-7">
                                                        <div className="age-track">
                                                            <div className="age-bar" style={{ "width": "80.7651%"}}></div>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-4 col-md-3 col-amount">
                                                        <p className="income-amount">2,282,732</p>
                                                    </div>
                                                 </div>
                                                
                                                 <div className="row age-retirement-bar">
                                                    <div className="col-sm-2">
                                                        <div className="age-number">70</div>
                                                        <div className="age-text">YRS <br/> OLD</div>
                                                        <div class="clearfix"></div>
                                                    </div>

                                                    <div className="col-sm-6 col-md-7">
                                                        <div className="age-track">
                                                            <div className="age-bar" style={{ "width": "65.7651%"}}></div>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-4 col-md-3 col-amount">
                                                        <p className="income-amount">2,282,732</p>
                                                    </div>
                                                 </div>

                                                 <div className="row age-retirement-bar">
                                                    <div className="col-sm-2">
                                                        <div className="age-number">75</div>
                                                        <div className="age-text">YRS <br/> OLD</div>
                                                        <div class="clearfix"></div>
                                                    </div>

                                                    <div className="col-sm-6 col-md-7">
                                                        <div className="age-track">
                                                            <div className="age-bar" style={{ "width": "65.7651%"}}></div>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-4 col-md-3 col-amount">
                                                        <p className="income-amount">2,289,722</p>
                                                    </div>
                                                 </div>

                                                 <div className="row age-retirement-bar">
                                                    <div className="col-sm-2">
                                                        <div className="age-number">80</div>
                                                        <div className="age-text">YRS <br/> OLD</div>
                                                        <div class="clearfix"></div>
                                                    </div>

                                                    <div className="col-sm-6 col-md-7">
                                                        <div className="age-track">
                                                            <div className="age-bar" style={{ "width": "65.7651%"}}></div>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-4 col-md-3 col-amount">
                                                        <p className="income-amount">22,82,767</p>
                                                    </div>
                                                 </div>

                                                 <div className="row age-retirement-bar">
                                                    <div className="col-sm-2">
                                                        <div className="age-number">85</div>
                                                        <div className="age-text">YRS <br/> OLD</div>
                                                        <div class="clearfix"></div>
                                                    </div>

                                                    <div className="col-sm-6 col-md-7">
                                                        <div className="age-track">
                                                            <div className="age-bar" style={{ "width": "65.7651%"}}></div>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-4 col-md-3 col-amount">
                                                        <p className="income-amount">25,82,760</p>
                                                    </div>
                                                 </div>

                                                 <p class="bottom-button">
                                                    <a class="retirement-call find-pro-link" href="/">Get Further Analysis and Private Consultation</a>
                                                 </p>

                                             </Col>
                                         </Row>
                                    </Container>
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

const Tooltip = (props) => {
    return(
      <div className="tooltip-body">
          <span className="pointer"></span>
          <span className="close-icon fa fa-times" onClick={props.closeInfo}></span>
          <h3 className="info-heading">Retirement Income</h3>
  
          <span className="info-description">The following assume an annual inflation rate of 3%, pre-retirement returns of 7% and post-retirement returns of 5%. Use the buttons if you want to change the default rate of what you will need as retirement income. 
           Use the slider to estimate your Social Security income.
          </span>
      </div>
    )
}

export default RetirementPlanner