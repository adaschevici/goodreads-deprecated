import React from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'

const Input = (props) => {
  return (
    <TextField
      id="outlined-search"
      label="Search field"
      type="search"
      margin="normal"
      variant="outlined"
      onChange={props.onChange}
    />
  )
}

Input.defaultProps = {}

Input.propTypes = {}

export default Input
