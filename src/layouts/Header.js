import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import NavLink from './NavLink';
import logo from '../logo.svg';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-top navbar-expand-sm fixed-top mr-auto" >
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                  </li>
                  <li className="nav-item">
                      <div className="ui-applicationProductName">Products</div>
                  </li>
                  <li className="nav-item">
                      <div className="ui-applicationStationName">API</div>
                  </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                        <form className="input-group">
                          <input className="form-control py-2 search-item" type="search" id="example-search-input"/>
                          <span className="input-group-append">
                              <div className="input-group-text search-icon"><i className="fa fa-search"></i></div>
                          </span>
                        </form>
                    </li>
                    <li className="nav-item">
                        <img className="img-fluid ui-applicationLogo " src={logo} alt="Logo" />
                    </li>
              </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
