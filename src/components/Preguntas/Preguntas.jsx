import React from "react";
import "./Preguntas.css";

const Preguntas = () => {
  return (
    <div className="preguntas_frecuentes_contenedor">
      <div className="preguntas_frecuentes_contenedor__preguntas">
        <details open>
          <summary>¿Donde puedo realizar un reclamo?</summary>
          <h5>Línea de atención gratuita</h5>
          <p>
            Para realizar un reclamo, comunicate con nuestra línea telefónica
            gratuita 0800-333-0300 de lunes a viernes de 8 a 20 hs.
          </p>
        </details>
        <details>
          <summary>
            ¿Puedo subir o bajar del colectivo en un lugar distinto al de la
            parada?
          </summary>
          <p>
            Sólo podés subir o bajar en un lugar distinto al de la parada entre
            las 22 hs y las 6 de la mañana o cuando llueve. Fuera de esos casos,
            tenés que subir o bajar en la parada.
          </p>
        </details>
        <details>
          <summary>
            ¿El conductor del colectivo puede venderme un pasaje si olvidé mi
            tarjeta SUBE?
          </summary>
          <p>No.</p>
        </details>
        <details>
          <summary>
            ¿Qué debo hacer si tengo una duda respecto a mi tarjeta SUBE?
          </summary>
          <p>
            El teléfono de contacto del Sistema Único de Boleto Eléctronico es
            0800 777 7823 y su página web <a href="https://argentina.gob.ar/sube"> argentina.gob.ar/sube </a>
          </p>
        </details>
        <details>
          <summary>
            ¿Dónde puedo obtener información sobre el Boleto Estudiantil?
          </summary>
          <p>
            Podés informarte en los siguientes enlaces, de acuerdo a la
            ubicación del Establecimiento Educativo al que concurrís, ya sea en
            la <a href="https://boletoestudiantil.buenosaires.gob.ar/"> Ciudad </a>o
            en la <a href="https://portal.gba.gob.ar/"> Provincia </a> de Buenos
            Aires.
          </p>
        </details>
      </div>
    </div>
  );
};

export default Preguntas;
