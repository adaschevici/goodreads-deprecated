import React, { Component } from 'react'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
// import ListItemText from '@material-ui/core/ListItemText'
// import BookIcon from '@material-ui/icons/Book'

import BookList from '../BookList/BookList'
import Search from '../Search'
import './App.css'

const columnData = [
  { id: 'edit', numeric: false, disablePadding: false, label: 'Edit' },
  { id: 'delete', numeric: false, disablePadding: false, label: 'Delete' },
  { id: 'isbn', numeric: false, disablePadding: false, label: 'ISBN' },
  { id: 'isbn13', numeric: false, disablePadding: false, label: 'ISBN 13' },
  { id: 'authors', numeric: false, disablePadding: false, label: 'Author' },
  { id: 'original_title', numeric: false, disablePadding: false, label: 'Title' },
  { id: 'original_publication_year', numeric: true, disablePadding: false, label: 'Year' },
  { id: 'average_rating', numeric: false, disablePadding: false, label: 'Star Rating' },
  { id: 'language_code', numeric: false, disablePadding: false, label: 'Language' },
  { id: 'thumbnail', numeric: false, disablePadding: false, label: 'Thumbnail' },
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      filter: ''
    }
  }

  componentDidMount() {
    fetch('/books')
      .then(response => response.json())
      .then(json => this.setState({
        books: json
      }))
  }

  search = term => {
    this.setState({
      filter: term
    })
  }

  render() {
    const { books, filter } = this.state
    const filteredBooks =  books.filter(book => book.title.includes(filter))
    return (
      <div className="App">
        <Search search={term => this.search(term)} />
        <BookList books={filteredBooks} columnHeaders={columnData} />
      </div>
    )
  }
}

export default App
