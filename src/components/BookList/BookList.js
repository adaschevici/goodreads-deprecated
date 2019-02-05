import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'


import Paper from '@material-ui/core/Paper'

import Book from '../Book/Book'
import BookListHead from './components/BookListHead'
import styles from './styles'

function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1)
}

class BookList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      order: 'asc',
      orderBy: 'original_title',
      page: 0,
      rowsPerPage: 10,
    }
  }

  handleRequestSort = (event, property) => {
    const orderBy = property
    const { order } = this.state
    let currentOrder = 'desc'

    if (orderBy === property && order === 'desc') {
      currentOrder = 'asc'
    }

    this.setState({ order: currentOrder, orderBy })
  }

  handleChangePage = (event, page) => {
    this.setState({ page })
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value })
  }

  render() {
    const { classes, books, columnHeaders, isAuthenticated } = this.props
    const { order, orderBy, rowsPerPage, page } = this.state
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, books.length - page * rowsPerPage)

    const authColumnHeaders = isAuthenticated ? columnHeaders : columnHeaders.slice(2)
    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <BookListHead
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={books.length}
              columnHeaders={authColumnHeaders}
            />
            <TableBody>
              {books
                .sort(getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(book => <Book key={book.book_id} isAuthenticated={isAuthenticated} {...book} />)}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={books.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    )
  }
}

BookList.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    table: PropTypes.string,
    tableWrapper: PropTypes.string
  }).isRequired,
  columnHeaders: PropTypes.arrayOf(PropTypes.object).isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default withStyles(styles)(BookList)

