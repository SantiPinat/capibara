import React from "react";
import { Link } from "react-router-dom";
import { useSpring , animated } from 'react-spring';
import Angelina from "../../assets/img/Equipo/AngelinaRodriguez.jpeg";
import Cintia from "../../assets/img/Equipo/CintiaBalaudo.jpeg";
import Dabel from "../../assets/img/Equipo/DabelLeandroFranco.jpeg";
import Gretel from "../../assets/img/Equipo/GretelFaljenmeyer.jpeg";
import Luciana from "../../assets/img/Equipo/LucianaMalatesta.jpeg";
import Natalia from "../../assets/img/Equipo/NataliaBarrilis.jpeg";
import Nicolas from "../../assets/img/Equipo/NicolasFerrucci.jpeg";
import Pablo from "../../assets/img/Equipo/PabloSlavin.jpeg";
import Rafael from "../../assets/img/Equipo/RafaelColombo.jpeg";
import Valeria from "../../assets/img/Equipo/ValeriaBerros.jpeg";

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
      <article id="equipo" className="equipo container-fluid">
        <h2>
          Equipo de <span>capibara</span>{" "}
        </h2>
        <ul className="imgcontainer">
          <li className="card">
            <img className="card-img-top" src={Angelina} alt="Foto de Angelina Rodriguez"/>
            <div className="card-body">
              <h5 className="card-title">Angelina Rodríguez</h5>
            </div>
          </li>
          <li className="card">
            <img className="card-img-top" src={Cintia} alt="Foto de Cintia Balaudo"/>
            <div className="card-body">
              <h5 className="card-title">Cintia Balaudo</h5>
            </div>
          </li>
          <li className="card">
            <img className="card-img-top" src={Dabel} alt="Foto de Dabel Leandro Franco"/>
            <div className="card-body">
              <h5 className="card-title">Dabel Leandro Franco</h5>
            </div>
          </li>
          <li className="card">
            <img className="card-img-top" src={Gretel} alt="Foto de Gretel Feljenmeyer"/>
            <div className="card-body">
              <h5 className="card-title">Gretel Falkenmeyer</h5>
            </div>
          </li>
          <li className="card">
            <img className="card-img-top" src={Luciana} alt="Foto de Luciana Malatesta"/>
            <div className="card-body">
              <h5 className="card-title">Luciana Malatesta</h5>
            </div>
          </li>
          <li className="card">
            <img className="card-img-top" src={Natalia} alt="Foto de Natalia Barrilis"/>
            <div className="card-body">
              <h5 className="card-title">Natalia Barrilis</h5>
            </div>
          </li>
          <li className="card">
            <img className="card-img-top" src={Pablo} alt="Foto de Pablo Slavin"/>
            <div className="card-body">
              <h5 className="card-title">Pablo Slavin</h5>
            </div>
          </li>
          <li className="card">
            <img className="card-img-top" src={Valeria} alt="Foto de Valeria Berros"/>
            <div className="card-body">
              <h5 className="card-title">Valeria Berros</h5>
            </div>
          </li>
          <li className="card">
            <img className="card-img-top" src={Nicolas} alt="Foto de Nicolas Ferrucci"/>
            <div className="card-body">
              <h5 className="card-title">Nicolas Ferrucci</h5>
            </div>
          </li>
          <li className="card">
            <img className="card-img-top" src={Rafael} alt="Foto de Rafael Colombo"/>
            <div className="card-body">
              <h5 className="card-title">Rafael Colombo</h5>
            </div>
          </li>
        </ul>
      </article>
            
      <article className="manifiesto container" id="manifiesto">
          <div className="textomanifiesto row">
            <h3>Nuestro Manifiesto</h3>
            <p className="col-sm">
              En <span className="capi">CAPIBARA</span> hemos construido y
              consolidado algunos acuerdos que son la base subyacente e
              inspiradora de nuestras propuestas. En primer lugar, la necesidad de
              revisar, discutir, visibilizar la línea que segmenta y divide, desde
              hace años, la dupla naturaleza/sociedad. Es necesario que ese trazo
              que divide y separa sea coloreado de manera tal que se desdibuje e
              inspire lazos que apunten a una nueva solidaridad entre lo humano y
              lo no humano. En segundo término, somos conscientes que el derecho
              sólo puede considerarse como un color de entre la enorme gama
              necesaria para reinventar ese vínculo segmentado y fracturado. A
              partir de estos acuerdos es nuestro objetivo activar propuestas a
              través de diferentes actividades. Aquí realizamos una enumeración de
              las acciones que hemos realizado y proyectamos hacia el futuro, con
              la aclaración de que se trata de una enumeración abierta dado que,
              como todo proyecto en construcción, es imprescindible no cerrarlo,
              ni cristalizarlo:
            </p>
            <ul className="col-sm">
              <li>
                Construir documentos de difusión y publicaciones sobre el tema de
                los derechos de la naturaleza y de los animales no humanos así
                como sus fundamentos éticos y su vínculo con cosmovisiones
                alternativas al capitalismo global.
              </li>
              <li>
                Realizar propuestas de proyectos de ley, resoluciones, ordenanzas
                inspiradas desde una ética que considere al mundo natural por su
                valor propio y no por sus diferentes utilidades para el hombre.
                Esta acción requiere de una labor de inventividad y creatividad
                importante a los efectos de tornar disponibles herramientas
                jurídicas novedosas que se alejen de la inspiración
                antropocéntrica.
              </li>
              <li>
                Contribuir al acceso a la justicia en miras a la defensa de los
                derechos de la naturaleza y en armonía con el derecho a un
                ambiente sano con el objeto de fortalecer tanto la justicia
                ecológica como la ambiental. Aquí se torna medular el litigio
                estratégico.{" "}
              </li>
              <li>
                Potenciar la investigación para la incidencia desde una
                perspectiva socio-jurídica que permita ampliar la mirada sobre las
                problemáticas en las que se identifiquen necesidades de
                protección, resguardo, cuidado de lo no humano.{" "}
              </li>
              <li>
                Monitorear las políticas públicas sobre lo no humano que se vayan
                implementando y confeccionar informes sobre el resultado del
                monitoreo.
              </li>
              <li>
                Realizar jornadas, charlas, seminarios de discusión, ciclos de
                cine, debates públicos.
              </li>
              <li>
                Realizar campañas de difusión y concienciación así como
                actividades de divulgación.{" "}
              </li>
              <li>
                Coordinar actividades con otros colectivos interesados en la tarea
                de desdibujar la separación entre lo humano y lo no humano.{" "}
              </li>
            </ul>
          </div>
        </article>

    </animated.section>
  );
};
