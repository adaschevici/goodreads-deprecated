import React from 'react'
import PropTypes from 'prop-types'
import Input from './components/input'
import Button from './components/button'
import './index.css'

const Search = ({...props}) => {
  return (
    <div className="search">
      <Input />
      <Button />
    </div>
  )
}

Search.defaultProps = {}

Search.propTypes = {}

export default Search
