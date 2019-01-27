import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

const SearchButton = (props) => {
  return (
    <div style={{ margin: 'auto 0' }}>
      <Button
        variant="contained"
        size="medium"
        color="primary"
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

export default SearchButton
