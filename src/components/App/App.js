import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchBooksAction } from '../../actions/appActions'
import BookList from '../BookList/BookList'
import Search from '../Search'
import './App.css'

const columnData = [
  { id: 'edit', align: false, disablePadding: false, label: 'Edit' },
  { id: 'delete', align: false, disablePadding: false, label: 'Delete' },
  { id: 'isbn', align: false, disablePadding: false, label: 'ISBN' },
  { id: 'isbn13', align: false, disablePadding: false, label: 'ISBN 13' },
  { id: 'authors', align: false, disablePadding: false, label: 'Author' },
  { id: 'original_title', align: false, disablePadding: false, label: 'Title' },
  { id: 'original_publication_year', align: true, disablePadding: false, label: 'Year' },
  { id: 'average_rating', align: false, disablePadding: false, label: 'Star Rating' },
  { id: 'language_code', align: false, disablePadding: false, label: 'Language' },
  { id: 'thumbnail', align: false, disablePadding: false, label: 'Thumbnail' },
]

class App extends Component {
  static defaultProps = {
    books: []
  }

  static propTypes = {
    fetchBooks: PropTypes.func.isRequired,
    books: PropTypes.arrayOf(PropTypes.object),
    history: PropTypes.shape({}).isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      filter: ''
    }
  }

  componentDidMount() {
    const { fetchBooks } = this.props
    fetchBooks('/books')
  }

  search = term => {
    this.setState({
      filter: term
    })
  }

  render() {
    const { books, history } = this.props
    const { filter } = this.state
    const filteredBooks =  books ? books.filter(book => book.title.includes(filter)) : []
    return (
      <div className="App">
        <Search search={term => this.search(term)} />
        <BookList books={filteredBooks} columnHeaders={columnData} history={history} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  books: state.appReducer.books
})

const mapDispatchToProps = dispatch => ({
  fetchBooks: url => dispatch(fetchBooksAction(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
