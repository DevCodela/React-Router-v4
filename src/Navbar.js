import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'


export default class Navbar extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">GitIgnore</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/about">About</NavLink>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/templates">Templates</NavLink>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
