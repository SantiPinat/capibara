import React from 'react'
import is12gg from '../../assets/img/convenios/is12gg.png'
import mpf from '../../assets/img/convenios/mpf.jpg'
import unl from '../../assets/img/convenios/unl.jpg'
import uner from '../../assets/img/convenios/uner.png'

export const Convenios = () => {

  return (
    <>
      <div id="carouselExampleSlidesOnly" className="agreements container-fluid carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
           <div className="carousel-item active" data-bs-interval="3000" >
             <div className="container imgcontainer">
                <img src={is12gg} alt="Logo Instituto Superior N°12 Gaston Goni" ></img>
                <img src={unl} alt="Logo Universidad Nacional del Litoral" ></img>
                <img src={uner} alt="Logo Universidad Nacional de Entre Rios" ></img>
                <img src={mpf} alt="Logo Ministerio Publico Fiscal" ></img>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000" >
              <div className="container imgcontainer">
                <img src={is12gg} alt="Logo Instituto Superior N°12 Gaston Goni" ></img>
                <img src={unl} alt="Logo Universidad Nacional del Litoral" ></img>
                <img src={uner} alt="Logo Universidad Nacional de Entre Rios" ></img>
                <img src={mpf} alt="Logo Ministerio Publico Fiscal" ></img>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000" >
              <div className="container imgcontainer">
                <img src={is12gg} alt="Logo Instituto Superior N°12 Gaston Goni" ></img>
                <img src={unl} alt="Logo Universidad Nacional del Litoral" ></img>
                <img src={uner} alt="Logo Universidad Nacional de Entre Rios" ></img>
                <img src={mpf} alt="Logo Ministerio Publico Fiscal" ></img>
              </div>
            </div>
        </div>  
      </div>
    </>
    )
}
