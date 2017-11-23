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

  search(e) {
    e.preventDefault()
    const q = this.refs.q.value
    const path = `/templates/${q}`
    this.props.history.push(path)
  }

  render() {
    const { templates } = this.state
    return(
      <div className="row">
        <div className="list-group col-6">
          <form className="mb-2" onSubmit={ this.search.bind(this) }>
            <div className="input-group">
              <input ref="q" type="text" className="form-control" placeholder="Search for..." />
              <span className="input-group-btn">
                <button className="btn btn-primary" type="submit">Go!</button>
              </span>
            </div>
          </form>
          { templates.map( template => <NavLink className="list-group-item list-group-item-action" key={ template } to={ `/templates/${template}` }>{ template }</NavLink> ) }
        </div>
        <div className="col-6">
          <Route path="/templates/:name" component={ Template } />
        </div>
      </div>
    )
  }
}
