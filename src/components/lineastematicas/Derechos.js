import React from "react";
import DerNatImg from '../../assets/img/Tematicas/dchosnatybiodiversidad.jpg';

export const Derechos = () => {
  return (
    <div className="container lineas">
      <div className="row">
 
        <div className="col">
          <h4>Derechos de la Naturaleza</h4>
          <p>
            El emergente proceso de reconocimiento de derechos de la naturaleza en
            diferentes latitudes del mundo muestra la pluralidad de cosmovisiones
            que están permitiendo repensar el vínculo entre naturaleza y sociedad y,
            por tanto, facilitan la construcción de formas novedosas para su tutela.
          </p>

        </div>
        <div className="col">
          <img src={ DerNatImg } alt="imagen de derecho natural y biodiversidad" className="img-fluid"/>

        </div>
      </div>
    </div>
  );
};
