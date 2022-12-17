import React from 'react'
import  './components/DarkToggle/DarkToggle.scss';
import { About, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss'
import ReactGA from 'react-ga';

  const TRACKING_ID = "UA-213987738-2"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

const App = () => {
  return (
    <div className='app'>
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Footer />
    </div>
  )
}

export default App