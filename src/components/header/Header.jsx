import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import './header.css'
import ME from '../../assets/ppblack.png'

const Header = () => {
  return (
    <header>
      <div id='header' className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Melchior MAJ</h1>
        <h5 className="text-light">Développer React.js | Vue.js </h5>
        <CTA />
        <HeaderSocials />
        
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header