import React from 'react'
import HeroImage from '../Assets/asset 2.png';
import '../Style/Header.css'

function Header() {
  return (
    <header>
        <div className='container header-section flex'>
            <div className='header-left'>
                <h1>Design confidently.</h1>
                <p>UsabilityHub is a remote user research platform that takes the guesswork out of design decisions by validating them with real users.</p>
                <a href='#' className='primary-btn get-started-btn'>Get Started</a>
            </div>
            <div className='header-right'>
                <img src={HeroImage} alt='hero-image' />
            </div>
        </div>
    </header>
  )
}

export default Header
