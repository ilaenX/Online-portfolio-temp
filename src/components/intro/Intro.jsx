import React from 'react'
import './intro.css'
import ME from '../../assets/OM.png'
import IntroButtons from './IntroButtons.jsx'
const Intro = () => {
  return (
    <section id="intro">
      <div className="intro_contain">
        <div className="me">
          <img src={ME} alt=""/>
        </div>
        <div className="intro_text">
            <h1 className='span'>Hello</h1>
            <h3>A bit about me</h3>
            <p>Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Eaque veniam minima doloremque 
              nemo, inventore excepturi. Doloremque commodi impedit 
              laudantium.</p>
        </div>
        <IntroButtons />
      </div>
    </section>
  )
} 
export default Intro