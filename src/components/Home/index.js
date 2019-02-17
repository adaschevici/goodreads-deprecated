import React, { Fragment } from 'react'
import '../App/App.css'
import Header from '../Header'
import Carousel from '../Carousel'

const Home = () => (
  <Fragment>
    <Header />
    <div className="page-background">
      <Carousel />
    </div>
  </Fragment>
)

export default Home

