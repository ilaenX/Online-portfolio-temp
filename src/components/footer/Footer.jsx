import React from 'react'
import './footer.css'
import {IoIosCall} from 'react-icons/io'
import {BsMailbox} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    //The CSS is fucked up!!!
    <footer className='foot_cont'>
      <div className="footer__socials">
        <a href="#" target="_blank"><IoIosCall /></a>
        <a href="#" target="_blank"><BsMailbox /></a>
        <a href="#" target="_blank"><FaLinkedinIn /></a>
      </div>

        <div className="footer__copyright">
          <small><a id='copyright' href="https://hiigraifix.000webhostapp.com">HiiGrafix</a>&copy;{new Date().getUTCFullYear()}. All rights reserved</small>
        </div>

    </footer>
  )
}

export default Footer
