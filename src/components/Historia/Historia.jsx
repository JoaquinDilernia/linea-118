import React from 'react'

import './Historia.css'
import recorridos from '../../assets/recorridos.jpg'

import {motion} from 'framer-motion'

const Historia = () => {
  return (
    <div className='historia__contenedor'>

      <div className='historia__contenedor__titulo'>
        <h1>Historia</h1>
        </div>
        <div className='contenedor__historia'>
        <motion.div className='historia__contenedor__imagen' 
        initial={{opacity:0, x:'-100vw'}}
        animate={{opacity:1, x:0}}
        transition={{duration:1}}

        >
          <img src={recorridos} alt='recorridos' />
          </motion.div> 
        <motion.div className='historia__contenedor__texto'
        initial={{opacity:0, x:'100vw'}}
        animate={{opacity:1, x:0}}
        transition={{duration:1}} >
          <p>
          La empresa Microomnibus Barrancas de Belgrano S.A. fue fundada en el año 1930 por el Sr. Antonio B. Pascual, quien comenzó a prestar servicios de transporte de pasajeros en la Ciudad de Buenos Aires con una flota de 10 colectivos. 
          </p>
          <p>
          En el año 1936, la empresa fue adquirida por el Sr. José A. Pascual, quien continuó con el servicio de transporte de pasajeros en la Ciudad de Buenos Aires, con una flota de 20 colectivos. 
          </p>
          <p>
          En el año 1946, la empresa fue adquirida por el Sr. José A. Pascual y el Sr. Juan A. Pascual, quienes continuaron con el servicio de transporte de pasajeros en la Ciudad de Buenos Aires, con una flota de 30 colectivos. 
          </p>
          <p>
          En el año 1952, la empresa fue adquirida por el Sr. José A. Pascual, el Sr. Juan A. Pascual y el Sr. Antonio B. Pascual, quienes continuaron con el servicio de transporte de pasajeros en la Ciudad de Buenos
          </p>

        </motion.div>


          </div>     
    </div>
  )
}

export default Historia
