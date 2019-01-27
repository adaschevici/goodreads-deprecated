import React, { Component } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import BookIcon from '@material-ui/icons/Book'

import Search from '../Search'
import './App.css'
import { books as globalBooks } from '../../books.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.books = globalBooks.slice(0, 20)
    this.state = {
      books: this.books.slice(0, 20)
    }
  }

  search = term => {
    this.setState({
      books: this.books.filter(book => book.title.includes(term))
    })
  }

  render() {
    const dense = true
    const { books } = this.state
    return (
      <div className="App">
        <Search search={term => this.search(term, this.books)} />
        <List dense={dense}>
          {books.map(book => (
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
