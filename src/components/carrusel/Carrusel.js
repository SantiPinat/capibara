import React from 'react'
import capis from '../../assets/img/capis.jpg'
import flor from '../../assets/img/imgflor.jpg'
import totora from '../../assets/img/imgtoto.jpg'

export const Carrusel = () => {
    return (
        <div>
            <section className="main ">
                <div> 
                    <div className="containerimg container">
                      <h1>Capibara</h1>
                      <h2>Naturaleza, Derecho y Sociedad</h2>
                    </div>
                    <div id="carouselFirst" className=" carousel slide carousel-fade"  data-bs-ride="carousel">
                      <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselFirst" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselFirst" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselFirst" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      </div>
                        <div className="carousel-inner" >
                            <div className="carousel-item active" data-bs-pause="hover" data-bs-interval="3000">
                              <img src={totora} className="d-block w-100" alt="Totora"/>
                            </div>
                            <div className="carousel-item " data-bs-pause="hover" data-bs-interval="3000">
                              <img src={capis} className="d-block w-100" alt="Capibara"/>
                            </div>
                            <div className="carousel-item" data-bs-pause="hover" data-bs-interval="3000">
                              <img src={flor} className="d-block w-100" alt="Humedal"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
