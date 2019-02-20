import React, { Component } from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TablePagination from '@material-ui/core/TablePagination'
import CircularProgress from '@material-ui/core/CircularProgress'


import Paper from '@material-ui/core/Paper'

import Book from '../Book/Book'
import BookListHead from './components/BookListHead'
import BookListToolbar from './components/BookListToolbar'
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

  handleAddBook = history => () => history.push('/edit-book')

  render() {
    const { classes, books, columnHeaders, loading, history } = this.props
    const { order, orderBy, rowsPerPage, page } = this.state

    return (
      <Paper className={classes.root}>
        <BookListToolbar handleAddBook={this.handleAddBook(history)} />
        <div className={classes.tableWrapper}>
          {loading ?
            <CircularProgress style={{ height: '80px', width: '80px', marginLeft: '5%' }} />
            : (
              <Table className={classes.table} aria-labelledby="tableTitle">
                <BookListHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={this.handleRequestSort}
                  rowCount={books.length}
                  columnHeaders={columnHeaders}
                />
                <TableBody>
                  {books
                    .sort(getSorting(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(book => <Book key={book.book_id} {...book} history={history} />)}
                </TableBody>
              </Table>
            )
          }
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

BookList.defaultProps = {
  loading: true
}

BookList.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    table: PropTypes.string,
    tableWrapper: PropTypes.string
  }).isRequired,
  columnHeaders: PropTypes.arrayOf(PropTypes.object).isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool
}

const mapStateToProps = state => ({
  loading: state.appReducer.loading
})

export default withStyles(styles)(connect(mapStateToProps)(BookList))

