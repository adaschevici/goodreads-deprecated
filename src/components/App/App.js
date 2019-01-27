import React, { Component } from 'react'
import BookIcon from '@material-ui/icons/Book'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import TextField from '@material-ui/core/TextField'

import './App.css'
import { books } from '../../books.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.books = books.slice(0, 20)
    this.state = {
      books: books.slice(0, 20),
      searchTerm: ''
    }
  }

  renderButton = () => (
    <Button
      variant="contained"
      size="medium"
      color="primary"
      onClick={this.onClick}
    >
      Search
    </Button>
  )

  search = term => {
    this.setState({
      books: this.books.filter(book => book.title.includes(term))
    })
  }

  onClick = () => this.search(this.state.searchTerm)

  onChange = (event) => this.setState({ searchTerm: event.target.value })

  render() {
    console.log(books)
    const dense = true
    return (
      <div className="App">
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          margin="normal"
          variant="outlined"
          onChange={this.onChange}
        />
        {this.renderButton()}
        <List dense={dense}>
          {this.state.books.map((book, index) => (<ListItem key={index}>
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary={`${book.title} - ${book.author}`} />
          </ListItem>))}
        </List>
      </div>
    )
  }
}

export default App
