import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/ppblack.png'
import IMG2 from '../../assets/ppblack.png'
import IMG3 from '../../assets/ppblack.png'
import IMG4 from '../../assets/ppblack.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'SUEPR PROJET',
    github: 'https://github.com/mmaj0708',
    demo: 'https://github.com/mmaj0708', 
  },
  {
    id: 2,
    image: IMG1,
    title: 'SUEPR PROJET',
    github: 'https://github.com/mmaj0708',
    demo: 'https://github.com/mmaj0708', 
  },
  {
    id: 3,
    image: IMG1,
    title: 'SUEPR PROJET',
    github: 'https://github.com/mmaj0708',
    demo: 'https://github.com/mmaj0708', 
  },
  {
    id: 4,
    image: IMG1,
    title: 'SUEPR PROJET',
    github: 'https://github.com/mmaj0708',
    demo: 'https://github.com/mmaj0708', 
  },
  {
    id: 5,
    image: IMG1,
    title: 'SUEPR PROJET',
    github: 'https://github.com/mmaj0708',
    demo: 'https://github.com/mmaj0708', 
  },
]

const Porfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo}) => {
          return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
              <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Github</a>
            </div>
          </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Porfolio