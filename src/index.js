import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store'
import './index.css'
import Routes from './routes'

const store = configureStore()

ReactDOM.render(
  <Routes store={store} />,
  document.getElementById('root'))
