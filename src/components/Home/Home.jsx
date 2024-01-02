import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { SiGooglemaps } from "react-icons/si";
import { BsHospital } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa";
import { MdBusAlert } from "react-icons/md";
import { BsQuestionLg } from "react-icons/bs";

import {motion} from 'framer-motion'

import fondo from '../../assets/fondo.jpeg'

const Home = () => {
  return (
    <div className='home__contenedor'>
      <div className='home__contenedor__titulo'>
        <h1>Microomnibus Barrancas de Belgrano S.A</h1>
        <h2>LINEA 118</h2>
      </div>
      <motion.div className='home__contenedor__card'  
        initial={{ y:'-100vw'}}
        animate={{y:0}}
        transition={{duration:1.2}} >
          <div className='box'> <Link className='box' to='/turismo'>  <div className='box__contenedor'> <div className='icon'><SiGooglemaps /> </div> <div className='box__text'><p >PUNTOS DE TURISTICOS</p></div></div></Link> </div> 
          <div className='box'> <Link className='box' to='/interes'> <div className='box__contenedor'> <div className='icon'><BsHospital /> </div> <div className='box__text'><p >PUNTOS DE INTERES</p></div></div> </Link></div> 
          <div className='box'> <Link className='box' to='/recorridos'>   <div className='box__contenedor'> <div className='icon'><FaMapMarkedAlt /> </div> <div className='box__text'><p >RECORRIDOS</p></div></div></Link></div> 
          <div className='box'> <Link className='box' to='/preguntas-frecuentes'><div className='box__contenedor'> <div className='icon'><BsQuestionLg /> </div> <div className='box__text'><p >PREGUNTAS FRECUENTES</p></div></div></Link></div> 
          <div className='box'> <Link className='box' to='/galeria'> <div className='box__contenedor'> <div className='icon'><FaRegImage /> </div> <div className='box__text'><p >GALERIA</p></div></div> </Link></div> 
          <div className='box'> <a className='box' href='https://www.argentina.gob.ar/sube/cuandosubo' target='blank' > <div className='box__contenedor'> <div className='icon'><MdBusAlert /> </div> <div className='box__text'><p>¿CUANDO SUBO?</p></div></div> </a></div> 

        </motion.div>
      
    </div>
  )
}

export default Home
