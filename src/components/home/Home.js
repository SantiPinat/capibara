import React from 'react'

import capis from '../../assets/img/capis.jpg'

import flor from '../../assets/img/imgflor.jpg'

import totora from '../../assets/img/imgtoto.jpg'

import aguacapi from '../../assets/img/aguacapi.JPG'

import humedales from '../../assets/img/humedales.jpeg'

import humedalescapi from '../../assets/img/humedalescapi.jpeg'


export const Home = () => {
    return (
        <main>
            <section className="container-fluid mt-4 mb-4">
                <h1>Capibara <span>Naturaleza, derecho y sociedad</span></h1>
                <div id="carouselFirst" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={capis} class="d-block w-100" alt="Capibara"/>
                        </div>
                        <div class="carousel-item">
                        <img src={totora} class="d-block w-100" alt="Totora"/>
                        </div>
                        <div class="carousel-item">
                        <img src={flor} class="d-block w-100" alt="Humedal"/>
                        </div>
                        <div class="carousel-item">
                        <img src={aguacapi} class="d-block w-100" alt="Humedal"/>
                        </div>                        
                        <div class="carousel-item">
                        <img src={humedales} class="d-block w-100" alt="Humedal"/>
                        </div>                       
                        <div class="carousel-item">
                        <img src={humedalescapi} class="d-block w-100" alt="Humedal"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselFirst" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselFirst" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </a>
                </div>
            </section>
            <article className="container mt-4 pt-4">
                <h2>Nuestra historia</h2>
                    <p>Existe una pregunta por la solidaridad entre lo vivo que, formulada por cada uno de los integrantes de CAPIBARA NDS, luego, no sólo nos permitió encontrarnos sino que se convirtió en el núcleo de un espacio de intercambio colectivo.
                    Primero, a través de la conformación de un taller de lecturas generales sobre el problema ambiental que se inicia en el año 2010 al que se fueron sumando personas con parecidos intereses: hoy somos las personas que conformamos este colectivo. 
                    Luego, el foco de atención pasó cada vez con mayor profundidad a diferentes reflexiones, traducciones jurídicas, referencias, sobre la necesaria recreación del lazo solidario entre lo humano y no humano. En ese trayecto construimos un doble interrogante que inspira buena parte de las actividades que hemos llevado a cabo y las que proyectamos:

                    ¿El derecho podría efectuar aportes en esa recreación solidaria?
                    ¿Lo existente y disponible en el mundo jurídico podría contribuir a un proyecto emancipador que recree el vínculo entre naturaleza y sociedad o deberíamos postular nuevas herramientas inspiradas en una ética más solidaria y alternativa al antropocentrismo?
                    </p>
                    <hr/>
            </article>

            <div id="carouselSecond" class="carousel slide mt-4 mb-4" data-bs-ride="carousel">
              <div class="carousel-inner container">
                <div class="carousel-item active">
                  <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                      <div class="card h-100">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card h-100">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="card-footer">
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card h-100">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class="card-footer">
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                      <div class="card h-100">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card h-100">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="card-footer">
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card h-100">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class="card-footer">
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                      <div class="card h-100">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card h-100">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="card-footer">
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card h-100">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class="card-footer">
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselSecond" role="button" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselSecond" role="button" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
              </a>
            </div>

            <section className="container mt-4 mb-4">
              <h3 className="container mt-4 mb-4"> Nuestros Acuerdos </h3>
              <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
              </div>
            </section>
        </main>
    )
}
