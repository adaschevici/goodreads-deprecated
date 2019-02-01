import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from './components/input'
import Button from './components/button'
import './index.css'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  handleChange = value => this.setState({ input: value })

  render() {
    const { search } = this.props
    const { input } = this.state
    return (
      <div className="search">
        <Input onChange={event => this.handleChange(event.target.value)} />
        <Button onClick={() => search(input)} />
      </div>
    )
  }
}

Search.defaultProps = {}

Search.propTypes = {
  search: PropTypes.func.isRequired
}

export default Search
