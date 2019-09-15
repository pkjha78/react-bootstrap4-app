import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import NavLink from './NavLink';

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      links: [
        {path: "/2", text: "Page 2", isActive: false},
        {path: "/3", text: "Page 3", isActive: false},
        {path: "/4", text: "Page 4", isActive: false},
      ]
    }
  }

  handleClick(i) {
    const links = this.state.links.slice();
    for (const j in links) {
      links[j].isActive = i == j ;
    }
    this.setState({links: links});
  }


  render() {
    return (
      <nav className="main-menu navbar-fixed-left">
          <ul>
            <li className="nav-item">
                <div className="menucontainer">
                    <button type="button" className="MenuButton">
                        <div>
                            <em className="menuicon fa fa-bars"></em>
                        </div>
                    </button>
                </div>
            </li>
          </ul>
          <ul>
            <li className="nav-item">
               <Link className="nav-link" to="/"><i className="fa fa-home"></i>
                      <span className="nav-text">Home</span>
               </Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/dashboard"><i className="fa fa-dashboard"></i>
                      <span className="nav-text">Dashboard</span>
               </Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/tsu"><i className="fa fa-get-pocket"></i>
                      <span className="nav-text">TSU</span>
               </Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/sku"><i className="fa fa-barcode"></i>
                      <span className="nav-text">SKU</span>
               </Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/blog"><i className="fa fa-newspaper-o"></i>
                      <span className="nav-text">Blog</span>
               </Link>
            </li>

            {this.state.links.map((link, i) =>
              <NavLink
                path={link.path}
                text={link.text}
                isActive={link.isActive}
                key={link.path}
                onClick={() => this.handleClick(i)}
              />
              )}
          </ul>
          <ul className="StatusIcons">
            <li className="BottomNav">
                <a > <i className="fa fa-user"></i>
                    <span className="nav-text">Hello Users!</span>
                </a>
            </li>
            <li className="menu-settings">
                <a href="logout.php" > <i className="fa fa-sign-out"></i>
                    <span className="nav-text"> Log Out</span>
                </a>
            </li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
          </ul>
      </nav>
    );
  }
}

export default NavBar;
