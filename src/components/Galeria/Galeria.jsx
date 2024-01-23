import React from 'react'
import './Galeria.css'

import {motion} from 'framer-motion'


import foto1 from '../../assets/galeria/1.jpeg'
import foto2 from '../../assets/galeria/2.jpeg'
import foto3 from '../../assets/galeria/3.jpeg'
import foto4 from '../../assets/galeria/4.jpeg'
import foto5 from '../../assets/galeria/5.jpeg'
import foto6 from '../../assets/galeria/6.jpeg'
import foto7 from '../../assets/galeria/7.jpeg'
import foto8 from '../../assets/galeria/8.jpeg'
import foto9 from '../../assets/galeria/9.jpeg'
import foto10 from '../../assets/galeria/10.jpeg'
import foto11 from '../../assets/galeria/11.jpeg'
import foto12 from '../../assets/galeria/12.jpeg'
import foto13 from '../../assets/galeria/13.jpeg'
import foto14 from '../../assets/galeria/14.jpeg'
import foto15 from '../../assets/galeria/15.jpeg'
import foto16 from '../../assets/galeria/16.jpeg'
import foto17 from '../../assets/galeria/17.jpeg'




const Galeria = () => {
  return (
    <>

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
        <img src={foto17} alt='recorridos' />
        </motion.div> 
      <motion.div className='historia__contenedor__texto'
      initial={{opacity:0, x:'100vw'}}
      animate={{opacity:1, x:0}}
      transition={{duration:1}} >
        <p>
        Su recorrido es muy antiguo: se acerca al siglo de vida. Encontramos la referencia más lejana en el tiempo en el año 1926, cuando ya hay registros de una línea perteneciente a la empresa de ómnibus Ciudad de Buenos Aires Ltda. S.A. que unía a Plaza Italia con Plaza Constitución pasando por Plaza Miserere. En 1929 recibió el número 3. 
        </p>
        <p>
        El 11 de octubre de 1930 se autorizó su transferencia a la empresa Constitución – Botánica, que le impuso a la línea el número 2. Hacia diciembre de 1932 fue autorizada a prolongar su recorrido desde Plaza Italia a Barrancas de Belgrano y el 5 de abril de 1935 la Municipalidad de la Capital organiza las líneas de ómnibus bajo su jurisdicción, renumerándolas. La 2 pasó a ser 58.
        </p>
        <p>
        El 23 o el 27 de febrero de 1943 la línea se entregó a la Corporación de Transportes de la Ciudad de Buenos Aires que la mantuvo como ómnibus hasta enero de 1945, cuando cambió sus vehículos por colectivos y recibió el número 258. Se estableció su domicilio en la Playa Cabildo, ubicada en la avenida San Isidro Labrador al 4800, el mismo lugar cercano a Puente Saavedra en donde la línea 151 internó sus vehículos hasta hace poco.
        </p>
        <p>
        Con la Corporación ya nacionalizada y en manos del Ministerio de Transportes de la Nación, el 25 de mayo de 1951 se inauguró el colectivo 202, con Bedford OB ingleses armados en el país sobre el piso de la 258, que ese día fue eliminada. 
        </p>
        <p>
        Pero no duró mucho: tras dos alargues de recorrido cumplidos durante el año 1952 (en el primero abandonó su cabecera de Constitución para reubicarla en Parque Patricios, exactamente a Patagones y Monteagudo y poco después su recorrido llegó a la cancha de Huracán, a la esquina de Luna y Amancio Alcorta) el 30 de diciembre de 1953 se inauguró el trolebús 318 entre Patagones y Monteagudo y Barrancas de Belgrano.
        </p>
        <p>
        Fue equipada con los primeros trolebuses Henschel alemanes arribados al país que guardaban en la estación Demaría (ubicada en la calle Demaría 4553, en Palermo).
        </p>
        <p>
        En enero de 1963 se autorizó el traspaso de las estaciones Centenario y Demaría, muy cercanas entre sí, a la a Cía. Avellaneda de Transporte S.A. (C.A.T.S.A.), subsidiaria de la empresa de alimentos Sasetru S.A., que ya operaba líneas de ómnibus ex Transportes de Buenos Aires privatizadas en 1961 y que también obtuvo las líneas de trolebús de las estaciones Matheu (311, 312 y 323) y Álvarez Thomas (310 y 325). Junto a las estaciones en donde guardaba la 318 recibió las líneas 302, 303, 304 y 317.
        </p>
        <p>
        Finalmente, el 24 de noviembre de 1965 se otorgó la autorización a la Cooperativa de Transportes y Trabajo Centenario Ltda. (C.T.T.C.) formada por ex agentes de Transportes de Buenos Aires afectados a las estaciones Centenario y Demaría, para la explotación de cuatro de las cinco líneas que explotaba (la 317 se suprimió). Se comenzaron a intercalar ómnibus y colectivos con los trolebuses, que finalmente el 30 de abril de 1966 dejaron de circular.
        </p>
        <p>
        El 2 de enero de 1969 se reordenó la numeración de las líneas del Area Metropolitana. En ese momento la 318 recibió el 118 que hasta hoy la distingue. 
        </p>
        <p>
        A fines de los ’70 la Cooperativa se disolvió y cada una de las líneas que la integraban (34, 118 y 152) formaron sociedades anónimas para continuar. En 1979 La 118 se conformó como Micro Omnibus Barrancas de Belgrano S.A., con administración en Juramento 1694. 
        </p>
        <p>
        La 118 mantuvo hasta 1986 ó 1987 el esquema cromático de la Cooperativa, mientras que en la 34 y la 152 las nuevas empresas hicieron ligeras modificaciones. Los coches de la 118, numerados dentro de la cooperativa del 125 al 160, pasaron a numerarse desde el 1.
        </p>
        <p>
        En 1988 modificó su recorrido para pasar por el nuevo Hospital Garrahan y en 1995 se estableció un fraccionado entre Barrancas de Belgrano y Plaza Miserere. Finalmente, el 27 de noviembre de 2019 recibió la autorización para desdoblar su recorrido pasando por el nuevo barrio Procrear y por la estación Buenos Aires (Línea Belgrano Sur) como recorrido C. Esta modificación comenzó el 26 de diciembre siguiente.
        </p>
        <p>
        Y llegamos a la actualidad. Mientras redactábamos este resumen nos llegó información que indica que la línea pintó un coche con el primer esquema de pintura utilizado por esta empresa luego de su separación de la Cooperativa Centenario. Y queda fantástico. Los amantes de los transportes del ayer quedamos agradecidos con este gesto.
        </p>

      </motion.div>


        </div>     
  </div>

    <div className="galeria">
      <h3>Galeria</h3>
      <div className="galeria__contenedor">
        <img src={foto1} alt="foto1" />
        <img src={foto2} alt="foto2" />
        <img src={foto3} alt="foto3" />
        <img src={foto4} alt="foto4" />
        <img src={foto5} alt="foto5" />
        <img src={foto6} alt="foto6" />
        <img src={foto7} alt="foto7" />
        <img src={foto8} alt="foto8" />
        <img src={foto9} alt="foto9" />
        <img src={foto10} alt="foto10" />
        <img src={foto11} alt="foto11" />
        <img src={foto12} alt="foto12" />
        <img src={foto13} alt="foto13" />
        <img src={foto14} alt="foto14" />
        <img src={foto15} alt="foto15" />
        <img src={foto16} alt="foto16" />
        <img src={foto17} alt="foto17" />
      </div>
    </div>
    </>
  )
}

export default Galeria
