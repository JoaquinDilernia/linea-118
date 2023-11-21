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

import { motion } from "framer-motion";

import Modal from "../Modal/Modal";
import useModal from "../hooks/useModal";
import './Turismo.css'


import huracan from "../../assets/huracan.jpg";


const Turismo = () => {


  const [isOpenModal, openModal, closeModal] = useModal()
  const [isOpenModal1, openModal1, closeModal1] = useModal()
  const [isOpenModal2, openModal2, closeModal2] = useModal()
  const [isOpenModal3, openModal3, closeModal3] = useModal()
  const [isOpenModal4, openModal4, closeModal4] = useModal()
  const [isOpenModal5, openModal5, closeModal5] = useModal()
  
  return (
    <section className="interes">
    <motion.h1
      initial={{ scale: 0.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="titulo-interes"
    >
      Puntos Turisticos
    </motion.h1>
    <motion.div
      initial={{ scale: 0.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8 }}
      className="contenedor-card"
    >
      <Card className="card">
        <CardBody className="CardBody">
          <Heading className="card-titulo">Estadio Huracan</Heading>
          <Divider />
          <Stack mt="1" spacing="3">
            <Image className="img-card" src={huracan} width={300} />
          </Stack>
        </CardBody>
        <CardFooter className="card-footer">
          <Button className="btn-ver" onClick={openModal}>
            VER MAS
          </Button>

          <Modal isOpen={isOpenModal} closeModal={closeModal}>
            <h1 className="titulo-modal">Estadio Huracan</h1>
            <img className="img-modal" src={huracan} alt="" />

            <p className="parrafo-modal">
              El Estadio Tomás Adolfo Ducó es un estadio de fútbol ubicado en
              el barrio porteño de Parque Patricios, en la ciudad de Buenos
              Aires, Argentina. Es propiedad del Club Atlético Huracán y fue
              inaugurado el 7 de octubre de 1949. Su capacidad es de 48 314
              espectadores, siendo el sexto estadio de fútbol más grande de la
              Argentina.
            </p>
          </Modal>
        </CardFooter>
      </Card>

      <Card className="card">
        <CardBody className="CardBody">
          <Heading className="card-titulo">Estadio Huracan</Heading>
          <Divider />
          <Stack mt="1" spacing="3">
            <Image className="img-card" src={huracan} width={300} />
          </Stack>
        </CardBody>
        <CardFooter className="card-footer">
          <Button className="btn-ver" onClick={openModal1}>
            VER MAS
          </Button>

          <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            <h1 className="titulo-modal">Estadio Huracan</h1>
            <img className="img-modal" src={huracan} alt="" />

            <p className="parrafo-modal">
              El Estadio Tomás Adolfo Ducó es un estadio de fútbol ubicado en
              el barrio porteño de Parque Patricios, en la ciudad de Buenos
              Aires, Argentina. Es propiedad del Club Atlético Huracán y fue
              inaugurado el 7 de octubre de 1949. Su capacidad es de 48 314
              espectadores, siendo el sexto estadio de fútbol más grande de la
              Argentina.
            </p>
          </Modal>
        </CardFooter>
      </Card>


      <Card className="card">
        <CardBody className="CardBody">
          <Heading className="card-titulo">Estadio Huracan</Heading>
          <Divider />
          <Stack mt="1" spacing="3">
            <Image className="img-card" src={huracan} width={300} />
          </Stack>
        </CardBody>
        <CardFooter className="card-footer">
          <Button className="btn-ver" onClick={openModal2}>
            VER MAS
          </Button>

          <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
            <h1 className="titulo-modal">Estadio Huracan</h1>
            <img className="img-modal" src={huracan} alt="" />

            <p className="parrafo-modal">
              El Estadio Tomás Adolfo Ducó es un estadio de fútbol ubicado en
              el barrio porteño de Parque Patricios, en la ciudad de Buenos
              Aires, Argentina. Es propiedad del Club Atlético Huracán y fue
              inaugurado el 7 de octubre de 1949. Su capacidad es de 48 314
              espectadores, siendo el sexto estadio de fútbol más grande de la
              Argentina.
            </p>
          </Modal>
        </CardFooter>
      </Card>


      <Card className="card">
        <CardBody className="CardBody">
          <Heading className="card-titulo">Estadio Huracan</Heading>
          <Divider />
          <Stack mt="1" spacing="3">
            <Image className="img-card" src={huracan} width={300} />
          </Stack>
        </CardBody>
        <CardFooter className="card-footer">
          <Button className="btn-ver" onClick={openModal3}>
            VER MAS
          </Button>

          <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
            <h1 className="titulo-modal">Estadio Huracan</h1>
            <img className="img-modal" src={huracan} alt="" />

            <p className="parrafo-modal">
              El Estadio Tomás Adolfo Ducó es un estadio de fútbol ubicado en
              el barrio porteño de Parque Patricios, en la ciudad de Buenos
              Aires, Argentina. Es propiedad del Club Atlético Huracán y fue
              inaugurado el 7 de octubre de 1949. Su capacidad es de 48 314
              espectadores, siendo el sexto estadio de fútbol más grande de la
              Argentina.
            </p>
          </Modal>
        </CardFooter>
      </Card>


      <Card className="card">
        <CardBody className="CardBody">
          <Heading className="card-titulo">Estadio Huracan</Heading>
          <Divider />
          <Stack mt="1" spacing="3">
            <Image className="img-card" src={huracan} width={300} />
          </Stack>
        </CardBody>
        <CardFooter className="card-footer">
          <Button className="btn-ver" onClick={openModal3}>
            VER MAS
          </Button>

          <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
            <h1 className="titulo-modal">Estadio Huracan</h1>
            <img className="img-modal" src={huracan} alt="" />

            <p className="parrafo-modal">
              El Estadio Tomás Adolfo Ducó es un estadio de fútbol ubicado en
              el barrio porteño de Parque Patricios, en la ciudad de Buenos
              Aires, Argentina. Es propiedad del Club Atlético Huracán y fue
              inaugurado el 7 de octubre de 1949. Su capacidad es de 48 314
              espectadores, siendo el sexto estadio de fútbol más grande de la
              Argentina.
            </p>
          </Modal>
        </CardFooter>
      </Card>


      <Card className="card">
        <CardBody className="CardBody">
          <Heading className="card-titulo">Estadio Huracan</Heading>
          <Divider />
          <Stack mt="1" spacing="3">
            <Image className="img-card" src={huracan} width={300} />
          </Stack>
        </CardBody>
        <CardFooter className="card-footer">
          <Button className="btn-ver" onClick={openModal4}>
            VER MAS
          </Button>

          <Modal isOpen={isOpenModal4} closeModal={closeModal4}>
            <h1 className="titulo-modal">Estadio Huracan</h1>
            <img className="img-modal" src={huracan} alt="" />

            <p className="parrafo-modal">
              El Estadio Tomás Adolfo Ducó es un estadio de fútbol ubicado en
              el barrio porteño de Parque Patricios, en la ciudad de Buenos
              Aires, Argentina. Es propiedad del Club Atlético Huracán y fue
              inaugurado el 7 de octubre de 1949. Su capacidad es de 48 314
              espectadores, siendo el sexto estadio de fútbol más grande de la
              Argentina.
            </p>
          </Modal>
        </CardFooter>
      </Card>






    </motion.div>
  </section>
  )
}

export default Turismo