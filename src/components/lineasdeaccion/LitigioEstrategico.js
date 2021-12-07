import React from "react";
import LitigioImg from '../../assets/img/Accion/litigioestrategico.jpg';

export const LitigioEstrategico = () => {
  return (
    <div className="container lineas">
      <div className="row">
        <div className="col">
          <img src={ LitigioImg } alt="imagen de litigio estretegico" className="img-fluid"/>

        </div>
        <div className="col">
          <h4>Litigio estratégico</h4>
          <p>
            {" "}
            Contribuimos al acceso a la justicia mediante la interposición de
            acciones judiciales y/o administrativas en miras a la defensa del
            derecho humano a un ambiente sano en armonía con los derechos de la
            naturaleza, con el objeto de fortalecer tanto la justicia ambiental como
            la ecológica.
          </p>

        </div>
      </div>
      
    </div>
  );
};
