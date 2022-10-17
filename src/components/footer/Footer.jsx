import React from 'react'
import './footer.css'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="header" className='footer__logo'>MELCHIOR MAJ</a>
      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#Testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/melchior-maj-470325193/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/mmaj0708" target="_blank" rel="noreferrer"><BsGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; MELCHIOR MAJ. Tous droits réservés</small>
      </div>
    </footer>
  )
}

export default Footer