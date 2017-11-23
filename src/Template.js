import React, { Component } from 'react'
import axios from 'axios'


export default class Template extends Component {
  constructor() {
    super()
    this.state = {
      source: '',
      error: false
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
        this.setState({ source, error: false })
      })
      .catch(error => {
        this.setState({ error: true })
      })
  }

  render() {
    const { name } = this.props.match.params
    const { source } = this.state
    return(
      <div className="card">
        {
          this.state.error
          ?
          <div className="card-body">The template doesn't exist!</div>
          :
          <div className="card-body">
            <h4 className="card-title">{ name }</h4>
            <h6 className="card-subtitle mb-2 text-muted">gitignore template</h6>
            <pre>{ source }</pre>
          </div>
        }
      </div>
    )
  }
}
