import React from "react";
import CambioclimaticoImg from '../../assets/img/Tematicas/cambioclimatico.jpg';

export const CambioClimatico = () => {
  return (
    <div className="container lineas" >
      <div className="row">
        <div className="col">
          <h4>Cambio climático </h4>
          <p>
            Desde hace algunas décadas, el cambio climático se ha consolidado como el
            desafío más importante al que se enfrenta la humanidad, no solo por ser
            un fenómeno con causas netamente antrópicas sino también en razón de
            estar a prueba, hoy más que nunca, nuestro sentido de la
            responsabilidad, conciencia y capacidad de actuar para redefinir
            nuestros modos de vida, patrones de producción y consumo, así como
            también nuestra forma de relacionarnos con la naturaleza y la madre
            tierra.
          </p>

        </div>        
        <div className="col">
          <img src={ CambioclimaticoImg } alt="imagen de cambio climático" className="img-fluid"/>

        </div>

      </div>
    </div>
  );
};
