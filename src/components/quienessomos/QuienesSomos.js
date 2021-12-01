import React from "react";
import { Link } from "react-router-dom";
import { useSpring , animated } from 'react-spring';
import { Equipo } from "./Equipo";
import { Manifiesto } from "./Manifiesto";

export const QuieneSomos = () => {

  
  const show = useSpring({
    from: { opacity : 0, marginLeft: -500},
    opacity: 1, marginLeft: 0,
    config: {delay: 1000, duration: 1000}
  });
  

  return (

    <animated.section style={show} className="quienes">
      <article className="somos">
        <div className="container textoquienes">
          <h3>Quiénes somos</h3>
          <p>
            <span className="capi">CAPIBARA</span> se conforma como
            un espacio integrado por abogadas, abogados y estudiantes de la
            carrera de abogacía de la ciudad de Santa Fe cuyo objetivo consiste
            en contribuir a la tutela de los derechos de la naturaleza en
            armonía con el derecho a un ambiente sano. Con este objetivo en
            miras proponemos una relectura, difusión y uso estratégico de
            diferentes herramientas disponibles en el campo jurídico con el fin
            de revisar, rediscutir, recrear el vínculo entre naturaleza y
            sociedad que allí se ha visto traducido. Nuestra aspiración consiste
            en construir de manera colectiva un aporte hacia un proyecto
            emancipatorio que implique un vínculo más solidario entre lo humano
            y lo no humano, consolidando así la justicia ambiental y ecológica
            que permita articular los derechos humanos y los derechos de la
            naturaleza.
          </p>
          <div className="container sumatecont">
            <Link to="/sumate" className="sumatebtn btn btn-secondary btn-lg">
              ¡Sumate!
            </Link>
          </div>
        </div>
      </article>
      <Equipo/>
      <Manifiesto/>
    </animated.section>
  );
};
