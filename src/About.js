import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class About extends Component {
  render() {
    return(
      <div>
        <h1>About</h1>
        <Link to="/about/team">Team</Link>
        <Link to="/about/company">Company</Link>
      </div>
    )
  }
}
