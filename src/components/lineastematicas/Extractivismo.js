import React from "react";
import ExtractivismoImg from '../../assets/img/Tematicas/extractivismo.jpg';

export const Extractivismo = () => {
  return (
    <div className="container lineas">
      <div className="row mb-3">

        <div className="col-sm-12 col-md-6">
          <h4>Extractivismo</h4>
          <p>
            El extractivismo consiste en la expropiación de importantes volúmenes de
            recursos naturales, en general de manera intensiva, cuyo destino
            principal es la exportación. En nuestra región litoral la actividad
            extractiva más practicada es el monocultivo de grandes superficies
            combinado con el uso de agrotóxicos.{" "}
          </p>

        </div>
        <div className="col-sm-12 col-md-6">
          <img src={ ExtractivismoImg } alt="imagen de extractivismo" className="img-fluid img-thumbnail"/>
          
        </div>
      </div>
    </div>
  );
};
