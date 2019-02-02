import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Tooltip from '@material-ui/core/Tooltip'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import { withStyles } from '@material-ui/core/styles'
import toolbarStyles from './toolbarStyles'

class BookListHead extends Component {
  createSortHandler = property => event => {
    if (['edit', 'delete'].includes(property))
      return () => {}
    this.props.onRequestSort(event, property)
  }

  render() {
    const { order, orderBy } = this.props

    const { classes, columnHeaders } = this.props
    return (
      <TableHead>
        <TableRow>
          {columnHeaders.map(column => {
            return (
              <TableCell
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === column.id ? order : false}
                className={classes.tableCell}
              >
                <Tooltip
                  title="Sort"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            )
          }, this)}
        </TableRow>
      </TableHead>
    )
  }
}

BookListHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  columnHeaders: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default withStyles(toolbarStyles)(BookListHead)


