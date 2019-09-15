import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavLink extends Component {

  render() {
      return (
        <li className={"nav-item " + (this.props.isActive ? "active": "")}>
                  <Link
                    className="nav-link"
                    to={this.props.path}
                    onClick={() => this.props.onClick()}
                  >
                  <i className="fa fa-angle-right"></i>
                 <span className="nav-text">
              {this.props.text}</span></Link>
        </li>
      );
  }
}

export default NavLink;
