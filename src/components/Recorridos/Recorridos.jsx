import React from "react";
import "./Recorridos.css";

import { motion } from "framer-motion";

const Recorridos = () => {
  return (
    <div className="Recorridos">
      <h1>Recorridos</h1>
      <div className="Recorridos__contenedor">
        <motion.div
          className="Recorridos__contenedor__map"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.9 }}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <iframe src="https://www.google.com/maps/d/embed?mid=1tB489Hlp13ZpmdBSyddKHO5M6ezNzgc&ehbc=2E312F&noprof=1"></iframe>
        </motion.div>
        <motion.div
          className="Recorridos__contenedor__info"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h5>IDA A al PREDIO DE REGULACIÓN BARRANCAS DE BELGRANO:</h5>
          <p>
            Desde PROFESOR DOCTOR PEDRO CHUTRO y MONTESQUIEU por PROFESOR DOCTOR
            PEDRO CHUTRO, ZAVALETA, SUÁREZ, MONASTERIO, USPALLATA, MANUEL
            GARCIA, ALBERTI, CATULO CASTILLO, PICHINCHA, AVENIDA JUAN DE GARAY,
            ALBERTI, HUMBERTO 1º, AVENIDA JUJUY, AVENIDA PUEYRREDÓN, AVENIDA
            GENERAL LAS HERAS, PLAZA ITALIA, PACÍFICO, AVENIDA SANTA FE, AVENIDA
            LUIS MARÍA CAMPOS, VIRREY DEL PINO, AVENIDA VIRREY VERTIZ, BARRANCAS
            DE BELGRANO.
          </p>
        </motion.div>
      </div>

      <div className="Recorridos__contenedor">
        <motion.div
          className="Recorridos__contenedor__map"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.9 }}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <iframe src="https://www.google.com/maps/d/embed?mid=1G7paB_2IIN7QrMn6gz5OTnE5GzMoFsM&ehbc=2E312F&noprof=1"></iframe>
        </motion.div>
        <motion.div
          className="Recorridos__contenedor__info"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h5> VUELTA A REGRESO A PARQUE PATRICIOS:</h5>
          <p>
            Desde BARRANCAS DE BELGRANO por AVENIDA VIRREY VÉRTIZ, AVENIDA
            VIRREY VÉRTIZ, AVENIDA LUIS MARIA CAMPOS, ARTURO ANTONIO DRESCO,
            AVENIDA SANTA FE, PACÍFICO, AVENIDA SANTA FE, PLAZA ITALIA, AVENIDA
            GENERAL LAS HERAS, AVENIDA PUEYRREDÓN, AVENIDA JUJUY, AVENIDA
            BRASIL, PICHINCHA, 15 DE NOVIEMBRE DE 1889, AVENIDA JUJUY, AVENIDA
            COLONIA, AVENIDA AMANCIO ALCORTA, LAFAYETTE, SUAREZ, LAVARDEN OESTE,
            AVENIDA AMANCIO ALCORTA, LAVARDEN, LOS PATOS, LUNA, PROFESOR DOCTOR
            PEDRO CHUTRO hasta MONTESQUIEU.
          </p>
        </motion.div>
      </div>

      <div className="Recorridos__contenedor">
        <motion.div
          className="Recorridos__contenedor__map"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.9 }}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <iframe src="https://www.google.com/maps/d/embed?mid=1zUBxwHIt9y2ne4QDS9y9G5wXuGY12LU&ehbc=2E312F&noprof=1"></iframe>
        </motion.div>
        <motion.div
          className="Recorridos__contenedor__info"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h5>IDA A al PREDIO DE REGULACIÓN BARRANCAS DE BELGRANO: </h5>

          <p>
            Desde ESTACIÓN ONCE, AVENIDA PUEYRREDÓN, AVENIDA GENERAL LAS
            HERAS, PLAZA ITALIA, CENTRO DE TRANSBORDO PACÍFICO, AVENIDA SANTA
            FE, AVENIDA LUIS MARÍA CAMPOS, VIRREY DEL PINO, AVENIDA VIRREY
            VERTIZ, BARRANCAS DE BELGRANO.
          </p>
        </motion.div>
      </div>

      <div className="Recorridos__contenedor">
        <motion.div
          className="Recorridos__contenedor__map"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.9 }}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <iframe src="https://www.google.com/maps/d/embed?mid=1sI0eaCBu-I9vt26Rz7hH17TBF1M8R8Y&ehbc=2E312F"></iframe>
        </motion.div>
        <motion.div
          className="Recorridos__contenedor__info"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h5>REGRESO A ESTACIÓN ONCE</h5>
          <p>
            Desde BARRANCAS DE BELGRANO por AVENIDA VIRREY VÉRTIZ, ingreso a
            carriles exclusivos CENTRO DE TRANSBORDO BARRANCAS DE BELGRANO, giro
            en U a la altura de AVENIDA JURAMENTO, AVENIDA VIRREY VÉRTIZ,
            AVENIDA LUIS MARIA CAMPOS, ARTURO ANTONIO DRESCO, AVENIDA SANTA FE,
            CENTRO DE TRANSBORDO PACÍFICO, salida de carriles exclusivos CENTRO,
            AVENIDA SANTA FE, PLAZA ITALIA, AVENIDA GENERAL LAS HERAS, AVENIDA
            PUEYRREDÓN hasta ESTACIÓN ONCE.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Recorridos;
