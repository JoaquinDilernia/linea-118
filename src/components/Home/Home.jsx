import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

import foto from '../../assets/foto.jpg'

const Home = () => {
  return (
    <div className='home__contenedor'>
        <div className='home__contenedor__card' >
            <Link to='/'> <div className='box'> <img src={foto} alt='foto' className='home__contenedor__card__img' /> </div>  </Link>
            <Link to='/'> <div className='box'> <img src={foto} alt='foto' className='home__contenedor__card__img' /> </div>  </Link>
            <Link to='/'> <div className='box'> <img src={foto} alt='foto' className='home__contenedor__card__img' /> </div>  </Link>
            <Link to='/'> <div className='box'> <img src={foto} alt='foto' className='home__contenedor__card__img' /> </div>  </Link>
            <Link to='/'> <div className='box'> <img src={foto} alt='foto' className='home__contenedor__card__img' /> </div>  </Link>
            <Link to='/'> <div className='box'> <img src={foto} alt='foto' className='home__contenedor__card__img' /> </div>  </Link>






        </div>
      
    </div>
  )
}

export default Home
