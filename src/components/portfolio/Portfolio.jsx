import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/kah.jpg'

const Portfolio = () => {
  return (
    <section id= "portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      
      <div className='container portfolio__container'>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='portfolio'/>
          </div>
          <h3>My Portfolio</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/jospen-kah/portfolio' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://jospenportfolio.netlify.app/' className='btn btn-primary'target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}


export default Portfolio