/* eslint-disable react/react-in-jsx-scope */

import '../../css/bootstrap.min.css'
import '../../css/fontawesome-all.min.css'
import '../../css/styles.scss'
import '../../css/swiper.css'

import Navbar from '../Navbar'
import Header from '../Header'
import Person from '../Person'
import Portfolio from '../Portfolio'


const Landing=() => (
  <div className="App">
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="Your description" />
      <meta name="author" content="Your name" />
      <meta name="twitter:card" content="summary_large_image" />

    <Navbar/>
    <Header/>
    <Person/>
    <Portfolio/>
  </div>
);

export default Landing;