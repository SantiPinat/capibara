import React from 'react'
import melisabanus from '../../assets/img/melisabanus.jpg'
import taniaalvarez from '../../assets/img/taniaalvarez.jpg'
import elilombardi from '../../assets/img/elilombardi.jpeg'
import nataliayrobertina from '../../assets/img/nataliayrobertina.jpg'
import nadiabernhardt from '../../assets/img/nadiabernhardt.jpg'
import diegoprimo from '../../assets/img/diegoprimo.jpg'
import practicagrupal from '../../assets/img/practicagrupal.jpg'

export const Practicas = () => {
    return (
            <article className="practices">
              <div className="container">
                <h2>Práctica profesional final en Capibara</h2>
                <div className="card-columns"> 
                  <div className="row justify-content-center row-cols-auto ">
                    <div className="col">
                      <div className="card border-dark">
                        <img src={melisabanus} className="card-img-top" alt="Melisa Banus foto"/>
                        <div className="card-body">
                          <h5 className="card-title">Melissa Romina Banús</h5>
                          <p className="card-text">Mi experiencia en Capibara fue muy buena y fructífera, ya que recibimos apoyo para investigar sobre temas que nos interesan en particular y fuimos guiadas en todas las dudas y consultas durante el transcurso del cuatrimestre. Además, nos han transmitido y ahondado el compromiso con el ambiente, algo en lo que todos, considero, deberíamos implicarnos.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card border-dark">
                        <img src={taniaalvarez} className="card-img-top" alt="Tania Alvarez"/>
                        <div className="card-body">
                          <h5 className="card-title">Tania Alvarez</h5>
                          <p className="card-text">El trabajo que se hace desde Capibara aspira a la construcción colectiva de un proyecto emancipatorio que implique un vínculo más solidario entre lo humano y lo no humano, para la consolidación de la justicia ambiental y ecológica que permita articular los derechos humanos y los derechos de la naturaleza. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card border-dark">
                        <img src={diegoprimo} className="card-img-top" alt="Diego Javier Primo"/>
                        <div className="card-body">
                          <h5 className="card-title">Diego Javier Primo</h5>
                          <p className="card-text">Este saber (la curiosidad) por muy básico que sea, transforma y nos transforma, ya que nunca más vamos a ser el mismo individuo que éramos hasta hace unos segundos antes de que supiéramos, observáramos y entendiéramos. La experiencia de la Práctica Profesional Final  en la Asociación Civil Capibara NDS me hizo comprender lo importante que es seguir siendo curioso.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card border-dark">
                        <img src={elilombardi} className="card-img-top" alt="María Elina Lombardi"/>
                        <div className="card-body">
                          <h5 className="card-title">María Elina Lombardi</h5>
                          <p className="card-text"> Mi experiencia en Capibara resulto sumamente provechosa gracias al entusiasmo transmitido por los tutores y su constante apoyo, que al adentrarnos en la temática nos comprometió aún más.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card border-dark">
                        <img src={nataliayrobertina} className="card-img-top" alt="Natalia Deraco"/>
                        <div className="card-body">
                          <h5 className="card-title">Natalia Deraco</h5>
                          <p className="card-text">Espero que más personas se interesen en participar en esta ONG que nos permitió ver el Derecho desde otra mirada, comprendiendo la importancia y responsabilidad que tenemos como actores sociales y agrademos profundamente la paciencia y ganas de enseñarnos de nuestros tutores.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card border-dark">
                        <img src={nadiabernhardt} className="card-img-top" alt="Nadia Virginia Bernhardt"/>
                        <div className="card-body">
                          <h5 className="card-title">Nadia Virginia Bernhardt</h5>
                          <p className="card-text">Esta instancia en la ONG resultó más que provechosa y edificante para dar mis primeros pasos como actora, creadora, estratega y operadora del Derecho, agradezco por el espacio y el tiempo compartidos.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card border-dark">
                          <img src={nataliayrobertina} className="card-img-top" alt="Robertina Sponton"/>
                          <div className="card-body">
                            <h5 className="card-title">Robertina Sponton</h5>
                            <p className="card-text">Esperamos que más personas se interesen en participar en esta ONG que nos permitió ver el Derecho desde otra mirada, comprendiendo la importancia y responsabilidad que tenemos como actores sociales y agrademos profundamente la paciencia y ganas de enseñarnos de nuestros tutores.</p>
                          </div>
                        </div>
                    </div>
                    <div className="col">
                      <div className="card border-dark">
                        <img src={practicagrupal} className="card-img-top" alt="Gisela Drewanz"/>
                        <div className="card-body">
                          <h5 className="card-title">Gisela Drewanz</h5>
                          <p className="card-text">Luego de haber atravezado mi práctica profesional en Capibara, puedo decir que conocí una arista de nuestra carrera que muchas veces no encontramos a lo largo del cursado; la investigación como herramienta de transformación es sumamente importante e interesante y en esta práctica tuve la posibilidad de explotar esta faceta de la profesión a la que aspiramos.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
    )
}
