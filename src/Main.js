import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import About from './About'
import Team from './Team'
import Templates from './Templates'
import NotFound from './NotFound'


export default class Main extends Component {
  render() {
    return(
      <div className="container mt-4">
        <Switch>
          <Route exact path="/" render={ () => <Redirect to="/templates" /> } />
          <Route exact path="/about" component={ About } />
          <Route path="/about/team" component={ Team } />
          <Route path="/templates" component={ Templates } />
          <Route component={ NotFound } />
          {/* <Route path="/templates" render={ () => <Templates title="Templates 2017" /> } /> */}
        </Switch>
      </div>
    )
  }
}
