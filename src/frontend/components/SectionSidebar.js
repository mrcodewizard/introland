import React, { Component } from 'react'


let sidebar,sticky, footer, footerOffset;
class SectionSidebar extends Component {

    componentDidMount() {
        sidebar = document.getElementById("sidebar-inner");
        sticky  = sidebar.offsetTop + 100;

        footer = document.getElementById("footer");
        footerOffset = footer.offsetTop - 450;
        
        window.addEventListener("scroll", this.handleSticky);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleSticky);
    }

    handleSticky = () => {
        if ( (window.pageYOffset > sticky)  && (window.pageYOffset < footerOffset) ) {
            sidebar.classList.add("sidebar-fixed");
        }
        else {
            sidebar.classList.remove("sidebar-fixed");
        }
    }


  render() {
    const { listItems } = this.props;
    return (
        <div className="sidebar-nav">
            <div className="navbar navbar-fixed-left" id="sidebar-inner">
                <ul className="list-unstyled nav navbar-nav" id="side-navbar">
                    {
                        listItems.map( item => {
                            const isActive = (item.isActive) ? "active" : "";
                            return(
                                <li key={item.id}><a className={isActive} href={`#${item.id}`}><span className={item.icon}></span> {item.text}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
  }
}

export default SectionSidebar