import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
})

const SearchButton = (props) => {
  const classes = props
  return (
    <div style={{ margin: 'auto 0' }}>
      <Button
        variant="contained"
        size="medium"
        color="primary"
        className={classes.button}
        onClick={props.onClick}
      >
        Search
      </Button>
    </div>
  )
}

SearchButton.defaultProps = {}

SearchButton.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SearchButton)
