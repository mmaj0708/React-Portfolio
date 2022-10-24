import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import './header.css'
import ME from '../../assets/ppblack.png'
import { SiCplusplus } from "react-icons/si";
// import { RiVuejsFill } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      <div id='header' className="container header__container">
        <h5 className='text-light'>Ravi de faire votre connaissance,</h5>
        <h1>Melchior MAJ</h1>
        <h5>Développeur C/C++ <SiCplusplus className='header__logo' style={{color : "#4db5ff"}}/></h5>
        <CTA />
        <HeaderSocials />
        
        {/* <div className="me"> */}
          <img className="me" src={ME} alt="me" />
        {/* </div> */}
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header