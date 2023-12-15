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


import barriochino from "../../assets/turisticos/barriochino.avif";
import botanico from "../../assets/turisticos/botanico.jpg";
import ecoparque from "../../assets/turisticos/ecoparque.jpg";
import lasheras from "../../assets/turisticos/lasheras.jpg";
import rural from "../../assets/turisticos/rural.jpg";
import solar from "../../assets/turisticos/solar.jpg";


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
          <Heading className="card-titulo">Barrio Chino</Heading>
          <Divider />
          <Stack mt="1" spacing="3">
            <Image className="img-card" src={barriochino} width={300} />
          </Stack>
        </CardBody>
        <CardFooter className="card-footer">
          <Button className="btn-ver" onClick={openModal}>
            VER MAS
          </Button>

          <Modal isOpen={isOpenModal} closeModal={closeModal}>
            <h1 className="titulo-modal">Barrio Chino</h1>
            <img className="img-modal" src={barriochino} alt="" />

            <p className="parrafo-modal">
              El Barrio Chino de Buenos Aires es un barrio ubicado en el barrio
              de Belgrano, en la ciudad de Buenos Aires, Argentina. Se
              encuentra delimitado por las calles Juramento, Arribeños,
              Montañeses y Olazábal.​
            </p>
          </Modal>
        </CardFooter>
      </Card>

      <Card className="card">
        <CardBody className="CardBody">
          <Heading className="card-titulo">Jardin Botanico</Heading>
          <Divider />
          <Stack mt="1" spacing="3">
            <Image className="img-card" src={botanico} width={300} />
          </Stack>
        </CardBody>
        <CardFooter className="card-footer">
          <Button className="btn-ver" onClick={openModal1}>
            VER MAS
          </Button>

          <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            <h1 className="titulo-modal">Jardin Botanico</h1>
            <img className="img-modal" src={botanico} alt="" />

            <p className="parrafo-modal">
              El Jardín Botánico Carlos Thays es un jardín botánico de la ciudad
              de Buenos Aires, Argentina. Se encuentra ubicado en el barrio de
              Palermo, frente al Zoológico de Buenos Aires, en la avenida Santa
              Fe y avenida Las Heras.​
            </p>
          </Modal>
        </CardFooter>
      </Card>


      <Card className="card">
        <CardBody className="CardBody">
          <Heading className="card-titulo">Ecoparque</Heading>
          <Divider />
          <Stack mt="1" spacing="3">
            <Image className="img-card" src={ecoparque} width={300} />
          </Stack>
        </CardBody>
        <CardFooter className="card-footer">
          <Button className="btn-ver" onClick={openModal2}>
            VER MAS
          </Button>

          <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
            <h1 className="titulo-modal">Ecoparque</h1>
            <img className="img-modal" src={ecoparque} alt="" />

            <p className="parrafo-modal">
              El Ecoparque Interactivo de Buenos Aires, anteriormente llamado
              Jardín Zoológico de la Ciudad de Buenos Aires, es un parque
              zoológico y botánico de 17 hectáreas ubicado en el barrio de
              Palermo de la ciudad de Buenos Aires, Argentina.​
            </p>
          </Modal>
        </CardFooter>
      </Card>


      <Card className="card">
        <CardBody className="CardBody">
          <Heading className="card-titulo">Paruqe las Heras</Heading>
          <Divider />
          <Stack mt="1" spacing="3">
            <Image className="img-card" src={lasheras} width={300} />
          </Stack>
        </CardBody>
        <CardFooter className="card-footer">
          <Button className="btn-ver" onClick={openModal3}>
            VER MAS
          </Button>

          <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
            <h1 className="titulo-modal">Paruqe las Heras</h1>
            <img className="img-modal" src={lasheras} alt="" />

            <p className="parrafo-modal">
              El Parque General Las Heras es un parque público ubicado en el
              barrio de Palermo de la ciudad de Buenos Aires, Argentina.​
            </p>
          </Modal>
        </CardFooter>
      </Card>


      <Card className="card">
        <CardBody className="CardBody">
          <Heading className="card-titulo">La Rural</Heading>
          <Divider />
          <Stack mt="1" spacing="3">
            <Image className="img-card" src={rural} width={300} />
          </Stack>
        </CardBody>
        <CardFooter className="card-footer">
          <Button className="btn-ver" onClick={openModal3}>
            VER MAS
          </Button>

          <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
            <h1 className="titulo-modal">La Rural</h1>
            <img className="img-modal" src={rural} alt="" />

            <p className="parrafo-modal">
              La Sociedad Rural Argentina es una asociación civil sin fines de
              lucro, fundada el 10 de julio de 1866 en la ciudad de Buenos
              Aires, Argentina.​
            </p>
          </Modal>
        </CardFooter>
      </Card>


      <Card className="card">
        <CardBody className="CardBody">
          <Heading className="card-titulo">Shopping El Solar de la Abadia</Heading>
          <Divider />
          <Stack mt="1" spacing="3">
            <Image className="img-card" src={solar} width={300} />
          </Stack>
        </CardBody>
        <CardFooter className="card-footer">
          <Button className="btn-ver" onClick={openModal4}>
            VER MAS
          </Button>

          <Modal isOpen={isOpenModal4} closeModal={closeModal4}>
            <h1 className="titulo-modal">Shopping El Solar de la Abadia</h1>
            <img className="img-modal" src={solar} alt="" />

            <p className="parrafo-modal">
              El Solar de la Abadía es un centro comercial ubicado en el barrio
              de Palermo, en la Ciudad de Buenos Aires, Argentina.​
            </p>
          </Modal>
        </CardFooter>
      </Card>






    </motion.div>
  </section>
  )
}

export default Turismo