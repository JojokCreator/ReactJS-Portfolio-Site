import React from 'react'
import  './components/DarkToggle/DarkToggle.scss';
import { About, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss'
import ReactGA from "react-ga4";

ReactGA.initialize("G-WGVTW9T3C0");
ReactGA.send("pageview");

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