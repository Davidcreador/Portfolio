import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <aside className="menu">
        <i
          onClick={this.props.toogleNav}
          className="fa fa-chevron-left close-btn"
        />
        <ul className="menu-list">
          <NavLink exact to="/" className="menu-item">
            Home
          </NavLink>
          <NavLink to="/about" className="menu-item">
            About
          </NavLink>
          <NavLink to="/projects" className="menu-item">
            Projects
          </NavLink>
          <NavLink to="/contact" className="menu-item">
            Contact
          </NavLink>
        </ul>
      </aside>
    );
  }
}
