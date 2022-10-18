import React from 'react'
import './about.css'
import ME from '../../assets/about.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
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
              <small>+1 ans en freelance</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>+10 en France</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projets</h5>
              <small>+20 accomplis</small>
            </article>
          </div>

          <p>
            Baigné dans l'informatique depuis mes jeunes années, je me suis d'abord orienté dans des études généralistes en sciences physiques. Après l'obtention de mon DUT en Mesures Physiques, j'ai terminé l'école 42 Paris début 2022. Je me suis ensuite spécialisé dans les technologies du Web, bien que mes compétences s'étendent jusque dans le développement logiciel.
            Je suis aujourd'hui à la recherche d'un poste en tant développeur frontend, en télétravail uniquement.
            <br /><br /> Au plaisir de discuter avec vous de vive voix!
          </p>

        </div>
      </div>
    </section>
  )
}

export default About