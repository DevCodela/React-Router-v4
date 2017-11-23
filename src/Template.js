import React, { Component } from 'react'
import axios from 'axios'


export default class Template extends Component {
  constructor() {
    super()
    this.state = {
      source: ''
    }
  }

  componentDidMount() {
    const { name } = this.props.match.params
    this.getTemplate(name)
  }

  componentWillReceiveProps(nextProps) {
    const { name } = nextProps.match.params
    this.getTemplate(name)
  }

  getTemplate(name) {
    const url = `https://api.github.com/gitignore/templates/${name}`

    axios
      .get(url)
      .then(response => {
        const source = response.data.source
        this.setState({ source })
      })
  }

  render() {
    const { name } = this.props.match.params
    const { source } = this.state
    return(
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{ name }</h4>
          <h6 className="card-subtitle mb-2 text-muted">gitignore template</h6>
          <pre>{ source }</pre>
        </div>
      </div>
    )
  }
}
