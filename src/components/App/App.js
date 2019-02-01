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
    fetch(`${process.env.REACT_APP_API_URL}/?_page=1`)
      .then(response => response.json())
      .then(json => this.setState({
        books: json
      }))
  }

  search = term => {
    const { books } = this.state
    this.setState({
      books: books.filter(book => book.title.includes(term))
    })
  }

  render() {
    const dense = true
    const { books } = this.state
    return (
      <div className="App">
        <Search search={term => this.search(term, books)} />
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
