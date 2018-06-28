import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const NavBar = ({ expanded }) => (
  <aside className={!expanded ? 'menu' : 'menu offscreen'}>
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
    <ul className="socials">
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/davidcreador" alt="github">
          <i className="fa fa-github" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/DaveCreador" alt="faceboook">
          <i className="fa fa-facebook-official" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/daveCodes_" alt="twitter">
          <i className="fa fa-twitter" />
        </a>
      </li>
      <li>
        <a href="mailto:davidcreador@gmail.com" alt="email">
          <i className="fa fa-envelope" />
        </a>
      </li>
    </ul>
  </aside>
)

NavBar.propTypes = {
  expanded: PropTypes.bool.isRequired
}

export default NavBar
