import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <div>
          <article className='services'><div className='service__head'>
            <h3>Web development</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Responsive Development</p>
            </li>
          </ul>
          </article>
        </div>


        <div>
          <article className='services'><div className='service__head'>
            <h3>Programming</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Implementation of ciphers</p>
            </li>
          </ul><ul className='services__list'>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Data structures and algorithms</p>
            </li>
          </ul>

          </article>
        </div>


      </div>
    </section>
  )
}


export default services