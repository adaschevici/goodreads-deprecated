import React, { Component } from 'react'
import './Quote.css'

class Quote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      heading: 'Quote of the day',
      quote: 'Do or do not there is no try',
      author: 'Yoda'
    }
  }

  componentDidMount() {
    // this is for disabling the warning for process
    /* eslint-disable no-undef */
    const options = {
      headers: {
        'X-Mashape-Key': process.env.REACT_APP_MASHAPE_API_KEY,
        'Accept': 'appication/json'
      }
    }
    /* eslint-enable no-undef */
    fetch('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1', options)
      .then(response => response.json()).then(data => this.setState({ ...data[0] }))
  }

  render() {
    const { heading, quote, author } = this.state
    return (
      <div className="quote">
        {heading}
        <div className="quote-sized">
          <figure>{`"${quote}"`}</figure>
          <p>{author}</p>
        </div>
      </div>
    )
  }
}

export default Quote
