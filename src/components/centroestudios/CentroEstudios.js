import React from 'react'
import berta from '../../assets/img/bertacaceres.png'

export const CentroEstudios = () => {
    return (
        <section className="container-fluid institutomain">
            <div className=" instituto">
                <h3>
                    Centro de estudios Berta Cáceres
                    <hr/>
                </h3>
                <p>
                    El Centro de Estudios Berta Cáceres se crea en el seno de la Asociación Civil “Capibara. Naturaleza, Derecho y Sociedad” en el año 2021 con el objetivo de configurar un espacio de debate público en el que se articulen diferentes formas de conocimiento para pensar problemáticas asociadas con la cuestión ecológica. 
                    Para ello, nos basamos en la idea de investigación de coyuntura que nos permite trabajar con conceptos y debates de diversos orígenes que poseen derivas importantes para el tratamiento de cuestiones coyunturales. 
                    La modalidad de trabajo es de carácter anual mediante una propuesta que articule ejes conceptuales con problemas de actualidad que van a depender del contexto en el que se transite. 
                    La creación de este Centro de Estudios se enrola dentro del marco del objeto de la asociación y se focaliza en algunas de las actividades que propone su estatuto entre las que se destacan:
                </p>
            </div>
            <div className="institutolist">

                <ol type="A">
                    <li>
                        La generación de documentos de difusión y publicaciones sobre temas de derecho ambiental y derechos de la naturaleza, 
                        así como sus fundamentos éticos y su vínculo con cosmovisiones alternativas al capitalismo global; 
                    </li>
                    <li>
                        La participación en los procesos de debate y generación de proyectos de ley, resoluciones, ordenanzas; 
                    </li>
                    <li>
                        La generación de un espacio permanente para la investigación para la incidencia desde una perspectiva
                        socio-jurídica que permita ampliar la mirada sobre las problemáticas en las que se identifiquen necesidades de protección, resguardo, cuidado de la naturaleza; 
                    </li>
                    <li>
                    La realización de jornadas, talleres, capacitaciones, charlas, seminarios de discusión, ciclos de cine y/o documentales, muestras fotográficas, debates públicos.
                    </li>
                </ol>  
            </div>
            <div className="container imgcont">
                <img src={berta} alt="Logo Centro de estudios Berta Caceres"/>
            </div>
        </section>
    )
}
