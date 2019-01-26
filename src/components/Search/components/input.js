import React from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
})

const Input = (props) => {
  const { classes } = props
  return (
    <TextField
      id="outlined-search"
      label="Search field"
      type="search"
      className={classes.textField}
      margin="normal"
      variant="outlined"
      onChange={() => console.log('Hello from change handler')}
    />
  )
}

Input.defaultProps = {}

Input.propTypes = {}

export default withStyles(styles)(Input)
