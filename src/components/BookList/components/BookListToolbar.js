import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'

import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Icon from '@material-ui/core/Icon'
import { withStyles } from '@material-ui/core/styles'
import toolbarStyles from './toolbarStyles'

const BookListToolbar = ({ numSelected, classes }) => {

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        <Button variant="contained" color="primary" className={classes.button}>
          Add New Book
          <Icon className={classes.iconHover} color="inherit" style={{ fontSize: 30 }}>
            add_circle
          </Icon>
        </Button>
      </div>
      <div className={classes.spacer} />
    </Toolbar>
  )
}

BookListToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
}

export default withStyles(toolbarStyles)(BookListToolbar)


