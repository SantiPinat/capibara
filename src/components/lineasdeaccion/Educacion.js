import React from "react";
import EducacionImg from '../../assets/img/Accion/educacionambientalycapacitacion.jpg';

export const Educacion = () => {
  return (
    <secton>
      <div className="lineas container">
        <div className="row mb-3">
          <div className="col-sm-12 col-md-6">
            <h4>Educación ambiental y capacitaciones</h4>
            <p>
              Consideramos que la educación ambiental es un acto político, basado en
              valores para la transformación social, y una herramienta para
              desarrollar interdisciplinariamente acciones que nos permitan generar
              cambios en las conductas de los humanos respecto de la naturaleza.
              Nuestro objetivo es realizar aportes concretos para la construcción de
              una eco-ciudadanía capaz de lograr una convivencia solidaria con todo lo
              que le rodea, respetando su derecho a existir.
            </p>
          </div>
          <div className="col-sm-12 col-md-6">
            <img src={ EducacionImg } alt="imagen de educacion ambiental" className="img-fluid img-thumbnail"/>
          </div>
        </div>
        
      </div>
    </secton>

  );
};
