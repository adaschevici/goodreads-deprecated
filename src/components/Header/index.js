import React from 'react'
import PropTypes from 'prop-types'

import Menu from '../Menu'
import './Header.css'
import logo from '../../assets/bookclub_logo.png'

const Header = () => (
  <header className="header">
    <Menu />
    <h1 className="title">Welcome to Good Reads</h1>
    <img src={logo} className="logo" alt="logo" />
  </header>
)

export default Header

