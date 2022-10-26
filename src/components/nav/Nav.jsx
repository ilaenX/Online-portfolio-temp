import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {useState} from 'react'
import {SiScrollreveal} from 'react-icons/si'
import { BiMessageAltDots } from 'react-icons/bi'

const Nav = () => {
    const[activeNav, setActiveNav] = useState('#')
  return (
    //Fucking malaka 
    //Not fucking working
    <nav>
	//fucked up nav
        <a href="#intro" onClick={() => setActiveNav('#intro')} className={activeNav === '#intro' ? 'active' : ''}><AiOutlineHome/></a>
        <a href="#resume" onClick={() => setActiveNav('#resume')} className={activeNav === '#resume' ? 'active' : ''}><AiOutlineUser/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookAlt/></a>
        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><SiScrollreveal/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageAltDots/></a>
    </nav>
  )
}

export default Nav
