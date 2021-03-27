import React from 'react'
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

export const Equipo = () => {
    return (
        <div>      <article id="equipo" className="equipo container-fluid">
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
              <h5 className="card-title">Dabel Leando Franco</h5>
            </div>
          </li>
          <li className="card">
            <img className="card-img-top" src={Gretel} alt="Foto de Gretel Feljenmeyer"/>
            <div className="card-body">
              <h5 className="card-title">Gretel Feljenmeyer</h5>
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
            
        </div>
    )
}
