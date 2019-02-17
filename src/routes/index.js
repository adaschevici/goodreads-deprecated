import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import App from '../components/App/App'
import Header from '../components/Header'
import Home from '../components/Home'

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <App />} />
          <Route path="/home" render={() => <Home />} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
)

Routes.propTypes = {
  store: PropTypes.shape({}).isRequired
}

export default Routes
