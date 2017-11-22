import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'


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
      <div>
        <h1>Templates</h1>
        <div className="list-group">
          { templates.map( template => <NavLink className="list-group-item list-group-item-action" key={ template } to={ `/templates/${template}` }>{ template }</NavLink> ) }
        </div>
      </div>
    )
  }
}
