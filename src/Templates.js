import React, { Component } from 'react'
import axios from 'axios'
import { NavLink, Route } from 'react-router-dom'
import Template from './Template'


export default class Templates extends Component {
  constructor() {
    super()
    this.state = {
      templates: []
    }
  }

  componentDidMount() {
    const url = 'https://api.github.com/gitignore/templates'
    axios
      .get(url)
      .then(response => {
        const templates = response.data
        this.setState({ templates })
      })
  }

  render() {
    const { templates } = this.state
    return(
      <div className="row">
        <div className="list-group col-6">
          { templates.map( template => <NavLink className="list-group-item list-group-item-action" key={ template } to={ `/templates/${template}` }>{ template }</NavLink> ) }
        </div>
        <div className="col-6">
          <Route path="/templates/:name" component={ Template } />
        </div>
      </div>
    )
  }
}
