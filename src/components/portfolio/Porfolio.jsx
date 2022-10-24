import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/react-portfolio.png'
import IMG2 from '../../assets/banana_pong.png'
import IMG3 from '../../assets/webserv.png'
import IMG4 from '../../assets/HeadOrTails.png'
import IMG5 from '../../assets/kubernetes.png'

const data = [
  {
    id: 2,
    image: IMG2,
    title: 'Transcendance',
    github: 'https://github.com/mmaj0708/ft_transcendence',
    demo: 'https://github.com/mmaj0708', 
  },
  {
    id: 3,
    image: IMG3,
    title: 'Webserv',
    github: 'https://github.com/mmaj0708/Webserv',
    demo: 'https://github.com/mmaj0708', 
  },
  {
    id: 5,
    image: IMG5,
    title: 'Ft_services',
    github: 'https://github.com/mmaj0708/ft_services',
    demo: 'https://github.com/mmaj0708', 
  },
  {
    id: 1,
    image: IMG1,
    title: 'React Portfolio',
    github: 'https://github.com/mmaj0708/React-Portfolio',
    demo: 'https://github.com/mmaj0708', 
  },
  {
    id: 4,
    image: IMG4,
    title: 'Head Or Tails',
    github: 'https://github.com/mmaj0708/HotGame',
    demo: 'https://github.com/mmaj0708', 
  },
]

const Porfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mes Derniers Projets</h5>
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
              <a href={github} className='btn btn-primary' target='_blank' rel='noreferrer'>Github</a>
              {/* <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Github</a> */}
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