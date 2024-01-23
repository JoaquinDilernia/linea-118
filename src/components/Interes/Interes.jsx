import { useState } from "react";

import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Divider,
  Button,
  Center,
  Flex,
} from "@chakra-ui/react";
import "./Interes.css";
import { motion } from "framer-motion";

import Modal from "../Modal/Modal";
import useModal from "../hooks/useModal";


import alemania from "../../assets/interes/alemania.jpg";
import arcos from "../../assets/interes/arcos.jpg";
import belgrano from "../../assets/interes/belgrano.jpg";
import cardio from "../../assets/interes/cardio.jpg";
import eeuu from "../../assets/interes/eeuu.jpg";
import evita  from "../../assets/interes/evita.jpg";
import familia from "../../assets/interes/familia.jpg";
import feni from "../../assets/interes/feni.jpg";
import hipodromo from "../../assets/interes/hipodromo.jpg";
import militar from "../../assets/interes/militar.png";
import pacifico from "../../assets/interes/pacifico.jpg";





const Interes = () => {

  const [isOpenModal, openModal, closeModal] = useModal()
  const [isOpenModal1, openModal1, closeModal1] = useModal()
  const [isOpenModal2, openModal2, closeModal2] = useModal()
  const [isOpenModal3, openModal3, closeModal3] = useModal()
  const [isOpenModal4, openModal4, closeModal4] = useModal()
  const [isOpenModal5, openModal5, closeModal5] = useModal()
  const [isOpenModal6, openModal6, closeModal6] = useModal()
  const [isOpenModal7, openModal7, closeModal7] = useModal()
  const [isOpenModal8, openModal8, closeModal8] = useModal()
  const [isOpenModal9, openModal9, closeModal9] = useModal()
  const [isOpenModal10, openModal10, closeModal10] = useModal()
  const [isOpenModal11, openModal11, closeModal11] = useModal()
 

  return (
    <section className="interes">
      <motion.h1
        initial={{ scale: 0.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="titulo-interes"
      >
        Puntos de Interes
      </motion.h1>
      <motion.div
        initial={{ scale: 0.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="contenedor-card"
      >
        <Card className="card">
          <CardBody className="CardBody">
            <Heading className="card-titulo">Clinica Feni</Heading>
            <Divider />
            <Stack mt="1" spacing="3">
              <Image className="img-card" src={feni} width={300} />
            </Stack>
          </CardBody>
          <CardFooter className="card-footer">
            <Button className="btn-ver" onClick={openModal}>
              VER MAS
            </Button>

            <Modal isOpen={isOpenModal} closeModal={closeModal}>
              <h1 className="titulo-modal">Clinica Feni</h1>
              <img className="img-modal" src={feni} alt="" />
              <p className="parrafo-modal">
                <b>PARADA:</b>
               BARRANCAS DE BELGRANO
              </p>
              <br />
              <p className="parrafo-modal">
                La Clínica FEMI es una institución de salud privada, que brinda
                servicios de atención médica de alta complejidad, con una
                trayectoria de más de 40 años en el mercado. 
              </p>
            </Modal>
          </CardFooter>
        </Card>

        <Card className="card">
          <CardBody className="CardBody">
            <Heading className="card-titulo">Instituto Cardiovascular</Heading>
            <Divider />
            <Stack mt="1" spacing="3">
              <Image className="img-card" src={cardio} width={300} />
            </Stack>
          </CardBody>
          <CardFooter className="card-footer">
            <Button className="btn-ver" onClick={openModal1}>
              VER MAS
            </Button>

            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
              <h1 className="titulo-modal">Instituto Cardiovascular</h1>
              <img className="img-modal" src={cardio} alt="" />

              <p className="parrafo-modal">
                <b>PARADA:</b>
                BARRANCAS DE BELGRANO
              </p>


              <p className="parrafo-modal">
                El Instituto Cardiovascular de Buenos Aires es una institución
                médica privada, que brinda servicios de atención médica de alta
                complejidad, con una trayectoria de más de 40 años en el
                mercado.
              </p>
            </Modal>
          </CardFooter>
        </Card>


        <Card className="card">
          <CardBody className="CardBody">
            <Heading className="card-titulo">Clinica Sagrada Familia</Heading>
            <Divider />
            <Stack mt="1" spacing="3">
              <Image className="img-card" src={familia} width={300} />
            </Stack>
          </CardBody>
          <CardFooter className="card-footer">
            <Button className="btn-ver" onClick={openModal2}>
              VER MAS
            </Button>

            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
              <h1 className="titulo-modal">Clinica Sagrada Familia</h1>
              <img className="img-modal" src={familia} alt="" />
              <p className="parrafo-modal">
                <b>PARADA:</b>
                JOSE HERNANDEZ
              </p>
              <p className="parrafo-modal">
                La Clínica Sagrada Familia es una institución de salud privada,
                que brinda servicios de atención médica de alta complejidad,
                con una trayectoria de más de 40 años en el mercado.

              </p>
            </Modal>
          </CardFooter>
        </Card>


        <Card className="card">
          <CardBody className="CardBody">
            <Heading className="card-titulo">Universidad de Belgrano</Heading>
            <Divider />
            <Stack mt="1" spacing="3">
              <Image className="img-card" src={belgrano} width={300} />
            </Stack>
          </CardBody>
          <CardFooter className="card-footer">
            <Button className="btn-ver" onClick={openModal3}>
              VER MAS
            </Button>

            <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
              <h1 className="titulo-modal">Universidad de Belgrano</h1>
              <img className="img-modal" src={belgrano} alt="" />

              <p className="parrafo-modal">
                <b>PARADA:</b>
                ZAVALA
              </p>


              <p className="parrafo-modal">
                La Universidad de Belgrano es una universidad privada argentina,
                fundada en 1964. Su sede principal se encuentra en el barrio de
                Belgrano, en la ciudad de Buenos Aires.
              </p>
            </Modal>
          </CardFooter>
        </Card>


        <Card className="card">
          <CardBody className="CardBody">
            <Heading className="card-titulo">Embajada de Alemania</Heading>
            <Divider />
            <Stack mt="1" spacing="3">
              <Image className="img-card" src={alemania} width={300} />
            </Stack>
          </CardBody>
          <CardFooter className="card-footer">
            <Button className="btn-ver" onClick={openModal4}>
              VER MAS
            </Button>

            <Modal isOpen={isOpenModal4} closeModal={closeModal4}>
              <h1 className="titulo-modal">Embajada de Alemania</h1>
              <img className="img-modal" src={alemania} alt="" />
              <p className="parrafo-modal">
                <b>PARADA:</b>
                GOROSTIAGA
              </p>
              <p className="parrafo-modal">
                La Embajada de Alemania en Buenos Aires es la misión diplomática
                de la República Federal de Alemania en la República Argentina.    

              </p>
            </Modal>
          </CardFooter>
        </Card>


        <Card className="card">
          <CardBody className="CardBody">
            <Heading className="card-titulo">Hospital Militar</Heading>
            <Divider />
            <Stack mt="1" spacing="3">
              <Image className="img-card" src={militar} width={300} />
            </Stack>
          </CardBody>
          <CardFooter className="card-footer">
            <Button className="btn-ver" onClick={openModal5}>
              VER MAS
            </Button>

            <Modal isOpen={isOpenModal5} closeModal={closeModal5}>
              <h1 className="titulo-modal">Hospital Militar</h1>
              <img className="img-modal" src={militar} alt="" />
              <p className="parrafo-modal">
                <b>PARADA:</b>
                MATIENZO
              </p>
              <p className="parrafo-modal">
                El Hospital Militar Central Cirujano Mayor Dr. Cosme Argerich
                es un hospital militar de la República Argentina, ubicado en la
                ciudad de Buenos Aires.
              </p>
            </Modal>
          </CardFooter>
        </Card>

        <Card className="card">
          <CardBody className="CardBody">
            <Heading className="card-titulo">Hipodromo Argentino</Heading>
            <Divider />
            <Stack mt="1" spacing="3">
              <Image className="img-card" src={hipodromo} width={300} />
            </Stack>
          </CardBody>
          <CardFooter className="card-footer">
            <Button className="btn-ver" onClick={openModal6}>
              VER MAS
            </Button>

            <Modal isOpen={isOpenModal6} closeModal={closeModal6}>
              <h1 className="titulo-modal">Hipodromo Argentino</h1>
              <img className="img-modal" src={hipodromo} alt="" />
              <p className="parrafo-modal">
                <b>PARADA:</b>
                ORTEGA Y GASSET
              </p>
              <p className="parrafo-modal">
                El Hipódromo Argentino de Palermo es un hipódromo de carreras
                de caballos ubicado en el barrio de Palermo de la ciudad de
                Buenos Aires, Argentina.​
              </p>
            </Modal>
          </CardFooter>
        </Card>


        <Card className="card">
          <CardBody className="CardBody">
            <Heading className="card-titulo">Estacion de Tren Pacifico</Heading>
            <Divider />
            <Stack mt="1" spacing="3">
              <Image className="img-card" src={pacifico} width={300} />
            </Stack>
          </CardBody>
          <CardFooter className="card-footer">
            <Button className="btn-ver" onClick={openModal7}>
              VER MAS
            </Button>

            <Modal isOpen={isOpenModal7} closeModal={closeModal7}>
              <h1 className="titulo-modal">Estacion de Tren Pacifico</h1>
              <img className="img-modal" src={pacifico} alt="" />
              <p className="parrafo-modal">
                <b>PARADA:</b>
                DARRAGUEYRA
              </p>
              <p className="parrafo-modal">
                La estación Palermo del Ferrocarril General San Martín se
                encuentra en el barrio de Palermo de la Ciudad de Buenos Aires,
                Argentina.​
              </p>
            </Modal>
          </CardFooter>
        </Card>

        <Card className="card">
          <CardBody className="CardBody">
            <Heading className="card-titulo">Embajada EEUU</Heading>
            <Divider />
            <Stack mt="1" spacing="3">
              <Image className="img-card" src={eeuu} width={300} />
            </Stack>
          </CardBody>
          <CardFooter className="card-footer">
            <Button className="btn-ver" onClick={openModal8}>
              VER MAS
            </Button>

            <Modal isOpen={isOpenModal8} closeModal={closeModal8}>
              <h1 className="titulo-modal">Embajada EEUU</h1>
              <img className="img-modal" src={eeuu} alt="" />
              <p className="parrafo-modal">
                <b>PARADA:</b>
                DARRAGUEYRA
              </p>
              <p className="parrafo-modal">
                La embajada de Estados Unidos en Buenos Aires es la misión
                diplomática de los Estados Unidos en la República Argentina.​
              </p>
            </Modal>
          </CardFooter>
        </Card>



        <Card className="card">
          <CardBody className="CardBody">
            <Heading className="card-titulo">Clinica los Arcos</Heading>
            <Divider />
            <Stack mt="1" spacing="3">
              <Image className="img-card" src={arcos} width={300} />
            </Stack>
          </CardBody>
          <CardFooter className="card-footer">
            <Button className="btn-ver" onClick={openModal9}>
              VER MAS
            </Button>

            <Modal isOpen={isOpenModal9} closeModal={closeModal9}>
              <h1 className="titulo-modal">Clinica los Arcos</h1>
              <img className="img-modal" src={arcos} alt="" />
              <p className="parrafo-modal">
                <b>PARADA:</b>
                DARRAGUEYRA
              </p>
              <p className="parrafo-modal">
                La Clínica Los Arcos es una institución de salud privada, que
                brinda servicios de atención médica de alta complejidad, con
                una trayectoria de más de 40 años en el mercado.​
              </p>
            </Modal>
          </CardFooter>
        </Card>


        <Card className="card">
          <CardBody className="CardBody">
            <Heading className="card-titulo">Museo Evita</Heading>
            <Divider />
            <Stack mt="1" spacing="3">
              <Image className="img-card" src={evita} width={300} />
            </Stack>
          </CardBody>
          <CardFooter className="card-footer">
            <Button className="btn-ver" onClick={openModal10}>
              VER MAS
            </Button>

            <Modal isOpen={isOpenModal10} closeModal={closeModal10}>
              <h1 className="titulo-modal">Museo Evita</h1>
              <img className="img-modal" src={evita} alt="" />
              <p className="parrafo-modal">
                <b>PARADA:</b>
                SCALABRINI ORTIZ
              </p>
              <p className="parrafo-modal">
                El Museo Evita es un museo biográfico dedicado a Eva Perón,
                ubicado en el barrio de Palermo de la ciudad de Buenos Aires,
                Argentina.​
              </p>
            </Modal>
          </CardFooter>
        </Card>

      </motion.div>
    </section>
  );
};

export default Interes;
