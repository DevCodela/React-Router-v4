import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import About from './About'
import Team from './Team'
import Templates from './Templates'


export default class Main extends Component {
  render() {
    return(
      <div>
        <Route exact path="/about" component={ About } />
        <Route path="/about/team" component={ Team } />
        {/* <Route path="/templates" component={ Templates } /> */}
        <Route path="/templates" render={ () => <Templates title="Templates 2017" /> } />
      </div>
    )
  }
}
