import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

import foto from '../../assets/foto.jpg'

const Home = () => {
  return (
    <div className='home__contenedor'>
        <div className='home__contenedor__card' >
          <div className='box'> <Link className='box' to='/'>  <img src={foto} alt='foto' className='home__contenedor__card__img' />   </Link></div> 
          <div className='box'> <Link className='box' to='/'>  <img src={foto} alt='foto' className='home__contenedor__card__img' />   </Link></div> 
          <div className='box'> <Link className='box' to='/'>  <img src={foto} alt='foto' className='home__contenedor__card__img' />   </Link></div> 
          <div className='box'> <Link className='box' to='/'>  <img src={foto} alt='foto' className='home__contenedor__card__img' />   </Link></div> 
          <div className='box'> <Link className='box' to='/'>  <img src={foto} alt='foto' className='home__contenedor__card__img' />   </Link></div> 
          <div className='box'> <Link className='box' to='/'>  <img src={foto} alt='foto' className='home__contenedor__card__img' />   </Link></div> 








        </div>
      
    </div>
  )
}

export default Home
