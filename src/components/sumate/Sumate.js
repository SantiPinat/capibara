import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'

export const sumate = () => {
  return (
    <div className="container contactomain">
      <section className="container sumatemain">
        <div className="sumate">
          <h3>¡Sumate!</h3>
          <p>
            Se parte de <span className="capi">Capibara</span> con tu
            aporte. Es muy valioso para nosotros, nos ayuda a continuar
            creciendo, formando y representando el derecho ambiental en nuestro
            pais.
          </p>
          <hr />
          <em>
            <p>Titular: AC C P JUR CAPIBARA NAT DER S</p>
            <p>Nro. Cuenta: Cuenta Corriente $ 191-340-023323/0 </p>
            <p>CBU: 19103406 - 55034002332300</p>
            <p>Banco Credicop</p>
          </em>
        </div>
      </section>
      <section className="row contacto" id="contacto">
        <h3>Contacto</h3>
        <div className="col">
          <h2>Capibara NDS</h2>
          <hr />
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            Email: capibara.nds@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            Dirección: Ciudad de Santa Fe - Argentina
          </p>
          <div className="container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54358.327677591165!2d-60.73063578012973!3d-31.623020488720293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a9adc40888e1%3A0xdcf7761e8d02804a!2sSanta%20Fe!5e0!3m2!1ses-419!2sar!4v1612109817523!5m2!1ses-419!2sar"
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
        <form className="col">
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="floatingInput"
              type="text"
              placeholder="Nombre"
            />
            <label htmlFor="floatingInput">Nombre</label>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="floatingInput"
              type="text"
              placeholder="Apellido"
            />
            <label htmlFor="floatingInput">Apellido</label>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="floatingInput"
              type="email"
              placeholder="email@ejemplo.com"
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className=" form-floating mb-3">
            <textarea
              className="escribinos form-control"
              id="floatingInput"
              type="text-area"
              placeholder="Escribinos"
            ></textarea>
            <label htmlFor="floatingInput">Escribinos...</label>
          </div>
          <button className="btn btn-secondary">Enviar</button>
        </form>
      </section>
    </div>
  );
};
