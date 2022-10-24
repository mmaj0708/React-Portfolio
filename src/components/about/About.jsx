import React from 'react'
import './about.css'
import ME from '../../assets/about.jpg'
import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Je me présente</h5>
      <h2>Mon Parcours</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Expérience</h5>
              <small>+3 ans de formation</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projets</h5>
              <small>+20 accomplis</small>
            </article>
          </div>

          <p>
            Jeune développeur efficace sortant de l'école 42 Paris, je vois la programmation comme un outil avec le pouvoir de créer de grandes choses.
            Je cherche ma première expérience comme Software Engineer au sein d'une entreprise dont je partage les valeurs.
            Mes affinités vont principalement vers les domaines scientifiques ou la création.
            <br /> <br />
            Au plaisir de discuter avec vous de vive voix !
          </p>

        </div>
      </div>
    </section>
  )
}

export default About