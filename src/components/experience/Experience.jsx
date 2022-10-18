import React from 'react'
import './experience.css'
import { AiFillCheckCircle } from "react-icons/ai";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Parlons Tech'</h5>
      <h2>Mes compétences</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Développement Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'  />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'  />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'  />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'  />
              <div>
                <h4>Vue</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'  />
              <div>
                <h4>React</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'  />
              <div>
                <h4>Web3</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'  />
              <div>
                <h4>Figma</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'  />
              <div>
                <h4>Photoshop</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONT END */}
        <div className="experience__backend">
        <h3>Développement Logiciel</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'  />
              <div>
                <h4>C</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'  />
              <div>
                <h4>C++</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'  />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'  />
              <div>
                <h4>Nest JS</h4>
                <small className='text-light'>Débutant</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'  />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'  />
              <div>
                <h4>Docker</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'  />
              <div>
                <h4>Solidity</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'  />
              <div>
                <h4>Kubernetes</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience