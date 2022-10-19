import React from 'react'
import CV from '../../assets/cv-MelchiorMAJ.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download="cv-melchior-maj.pdf" className='btn'>Télécharger mon CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>      
    </div>
  )
}

export default CTA