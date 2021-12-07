import React from "react";
import VinculacionImg from '../../assets/img/Accion/vinculacioninstitucional.jpg';
import { Practicas } from "../practicas/Practicas";

export const Vinculacion = () => {
  return (
    <section>
      <div className="container lineas">
        <div className="row">
          <div className="col">
            <img src={ VinculacionImg } alt="imagen de educacion ambiental" className="img-fluid"/>

          </div>
          <div className="col">

            <h4>Vinculación institucional</h4>
            <p>
              Participamos en actividades con instituciones educativas, organizaciones
              no gubernamentales, organismos del Estados en sus tres poderes,
              comunidades de pueblos indígenas, agrupaciones de vecinos y vecinas.
              Asimismo, poseemos vinculación con organismos de financiamiento a partir
              de convocatorias de entidades internacionales, nacionales y provinciales
              que se relacionan con nuestras áreas temáticas.{" "}
            </p>
          </div>
        </div>
        
      </div>
        <Practicas />
    </section>
  );
};
