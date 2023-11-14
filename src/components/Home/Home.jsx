import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

import foto from '../../assets/foto.jpg'
import barriochino from '../../assets/barriochino.avif'
import recorridos from '../../assets/recorridos.jpg'

const Home = () => {
  return (
    <div className='home__contenedor'>
        <div className='home__contenedor__card' >
          <div className='box'> <Link className='box' to='/interes'>  <img src={barriochino} alt='foto' className='home__contenedor__card__img' /> <div className='box__text'> <p>PUNTOS DE INTERES</p></div></Link> </div> 
          <div className='box'> <Link className='box' to='/'>  <img src={barriochino} alt='foto' className='home__contenedor__card__img' />  <div className='box__text'> <p>PUNTOS DE INTERES</p></div> </Link></div> 
          <div className='box'> <Link className='box' to='/recorridos'>  <img src={recorridos} alt='foto' className='home__contenedor__card__img' />  <div className='box__text'> <p>RECORRIDOS</p></div> </Link></div> 
          <div className='box'> <Link className='box' to='/preguntas-frecuentes'>  <img src={foto} alt='foto' className='home__contenedor__card__img' />  <div className='box__text'> <p>PREGUNTAS FRECUENTES</p></div> </Link></div> 
          <div className='box'> <Link className='box' to='/historia'>  <img src={foto} alt='foto' className='home__contenedor__card__img' />  <div className='box__text'> <p>HISTORIA</p></div> </Link></div> 
          <div className='box'> <Link className='box' to='/galeria'>  <img src={foto} alt='foto' className='home__contenedor__card__img' />  <div className='box__text'> <p>GALERIA</p></div> </Link></div> 








        </div>
      
    </div>
  )
}

export default Home
