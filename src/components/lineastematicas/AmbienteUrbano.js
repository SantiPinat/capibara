import React from "react";
import AmbienteImg from '../../assets/img/Tematicas/ambienteurbano.jpg';

export const AmbienteUrbano = () => {
  return (
    <div className="container lineas">
      <div className="row  mb-3">
        <div className="col-sm-12 col-md-6" >
          <h4>Ambiente urbano</h4>
          <p>
            El ambiente urbano intenta construir una mirada de la ciudad en la que
            ésta deje de ser percibida como un espacio en el que simplemente
            habitamos las personas, para pasar a ser visibilizada y considerada como
            el ambiente que compartimos con otros habitantes no humanos que componen
            la biodiversidad así como el patrimonio natural y cultural.
          </p>
          
        </div>
        <div className="col-sm-12 col-md-6">
          <img src={ AmbienteImg } alt="imagen de ambiente urbano" className="img-fluid img-thumbnail"/>

        </div>

      </div>
      
    </div>
  );
};
