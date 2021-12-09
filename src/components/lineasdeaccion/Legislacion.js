import React from "react";
import LegislacionImg from '../../assets/img/Accion/legislacionypolpcas.jpg';

export const Legislacion = () => {
  return (
    <div className="container lineas">
      <div className="row  mb-3">
        <div className="col-sm-12 col-md-6">

          <h4>Legislación y políticas públicas</h4>
          <p>
            {" "}
            Realizamos propuestas de proyectos de ley, resoluciones, ordenanzas,
            protocolos de actuación, documentos sobre políticas públicas de
            diferente escala, herramientas para el diagnóstico y establecimiento de
            líneas de actuación y monitoreo, inspiradas desde una perspectiva que
            considera el valor propio del mundo natural. Asimismo, participamos
            activamente en los procesos de debate legislativos en curso.{" "}
          </p>
        </div>
        <div className="col-sm-12 col-md-6" >
          <img src={ LegislacionImg } alt="imagen de legislacion y politicas" className="img-fluid img-thumbnail" />

        </div>
      </div>
      
    </div>
  );
};
