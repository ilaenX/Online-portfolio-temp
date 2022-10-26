import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Intro from './components/intro/Intro'
import Resume from './components/resume/Resume'
import Nav from './components/nav/Nav'


const App = () => {
    return (
      <div>
          <Header />
          {/* <Nav /> */}
          <Intro />
          <Resume />
          <Footer />
      </div>
    )
  }
export default App
