import React, { Component } from 'react'
import './App.css'
import books from '../../books.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        {console.log(books)}
      </div>
    )
  }
}

export default App
