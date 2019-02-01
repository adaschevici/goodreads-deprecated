import React, { Component } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import BookIcon from '@material-ui/icons/Book'

import Search from '../Search'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    fetch('/books/?_page=1')
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
    const dense = true
    const { books, filter } = this.state
    const filteredBooks =  books.filter(book => book.title.includes(filter))
    return (
      <div className="App">
        <Search search={term => this.search(term)} />
        <List dense={dense}>
          {filteredBooks.map(book => (
            <ListItem key={book.id}>
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary={book.title} />
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}

export default App
