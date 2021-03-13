import React from 'react'
import is12gg from '../../assets/img/convenios/is12gg.png'
import mpf from '../../assets/img/convenios/mpf.jpg'
import unl from '../../assets/img/convenios/unl.jpg'
import uner from '../../assets/img/convenios/uner.png'

export const Convenios = () => {
    return (
        <div>
            <section className="agreements container-fluid">
              <h3 className="container"> Convenios de Colaboración </h3>
              <div className="container imgcontainer">
                <img src={is12gg}  alt="Logo Instituto Superior N°12 Gaston Goni" ></img>
                <img src={unl} alt="Logo Universidad Nacional del Litoral" ></img>
                <img src={uner}  alt="Logo Universidad Nacional de Entre Rios" ></img>
                <img src={mpf}  alt="Logo Ministerio Publico Fiscal" ></img>
              </div>
            </section>
        </div>
    )
}
