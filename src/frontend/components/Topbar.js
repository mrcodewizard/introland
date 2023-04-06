import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css'
import '../assets/css/topbar.css';
import logo from '../assets/img/freebridge-logo.png'
import '../assets/css/main-menu.css';
import Sidebar from './Sidebar';

class Topbar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       showMenu: false,
       showSidebar: false,
    }
  }
  toggleSidebar = () => {
    this.setState({
        showSidebar : !this.state.showSidebar
    })
  }

  closeSidebar = () => {
    this.setState({
        showSidebar: false
    });
  }
  
  toggleDropdown = () => {
      this.setState({
          showMenu: !this.state.showMenu
      });
  }
  
  render() {
    let toggleMenu    = (this.state.showMenu) ? <DropdownMenu /> : "";
    let toggleSidebar = (this.state.showSidebar) ? <Sidebar hidemenu={this.closeSidebar} /> : ""; 
    return (
        <div>
            <header className="topbar">
                <Row>
                    <Col md={3}>
                        <div className='toggle-icons'>
                            <div className='icon-hamburger' onClick={this.toggleSidebar}>
                                <i className='fa fa-bars'></i>
                            </div>
                            <div className='icon-search'>
                                <i className='fa fa-search'></i>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='site-logo'>
                            <img src={logo} alt="site-logo"/>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='site-user' >
                            <div className='user-text'>
                                <h4 onClick={this.toggleDropdown}>Brian <i className='fa fa-caret-down'></i></h4>
                                <p className='user-type'>Essential User</p>
                                { toggleMenu }
                            </div>
                            <div className='user-icon'>
                                <span>B</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </header>
            { toggleSidebar }
        </div>
    )
  }
}


function DropdownMenu() {
  return (
    <div className='topbar-dropdown'>
        <ul className='nav flex-column'>
            <li><a href='#'>Personal Information <i className='fa fa-user'></i></a></li>
            <li><a href='#'>Financial Setting <i className='fa fa-money'></i></a></li>
            <li><a href='#'>Membership and Billing <i className='fa fa-recycle'></i></a></li>
            <li><a href='#'>Alert & Email Setting <i className='fa fa-bullhorn'></i></a></li>
            <li><a href='#'>Logout <i className='fa fa-sign-out'></i></a></li>
        </ul>
    </div>
  );
}


export default Topbar;
