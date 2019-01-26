import React, { Component } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import BookIcon from '@material-ui/icons/Book'

import Search from '../Search'
import './App.css'
import { books } from '../../books.json'

class App extends Component {
  render() {
    console.log(books)
    const localBooks = books.slice(0, 20)
    const dense = true
    return (
      <div className="App">
        <Search />
        <List dense={dense}>
          {localBooks.map((book, index) => (<ListItem key={index}>
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary={book.title} />
          </ListItem>))}
        </List>
      </div>
    )
  }
}

export default App
