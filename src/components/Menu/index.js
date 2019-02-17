import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import './Menu.css'

const MenuItem = ({ label, icon }) => (
  <div className="menuItem">
    <i className={icon} />
    <div>{label}</div>
  </div>
)

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: false
    }
  }

  render() {
    const { opened } = this.state
    return (
      <nav>
        <div id="menuToggle">
          <input
            type="checkbox"
            checked={opened}
            readOnly
            onClick={() => this.setState({
              opened: !opened,
            })
            }
          />

          { /* <!--
          Some spans to act as a hamburger.

          They are acting like a real hamburger,
          not that McDonalds stuff.
          --> */ }
          <span />
          <span />
          <span />

          <ul id="menu">
            <li>
              <Link
                to='/home'
                onClick={() => this.setState({
                  opened: false
                })}
              >
                <MenuItem icon="fa fa-home" label="Home" />
              </Link>
            </li>
            <li>
              <Link
                to='/'
                onClick={() => this.setState({
                  opened: false
                })}
              >
                <MenuItem icon="fa fa-book" label="Book List" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>)
  }
}

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default Menu

