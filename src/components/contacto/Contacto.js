import React from 'react'

export const Contacto = () => {

    const handleSubmit = () => {

    };

    return (
        <div className="container">
            <section className="row" id="contacto">
                <div className="col">
                    <h2>Capibara NDS</h2>
                    <hr/>
                    <p>Telefono:</p>
                    <p>Email:</p>
                    <p>Dirección:</p>
                    <div className="container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54358.327677591165!2d-60.73063578012973!3d-31.623020488720293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a9adc40888e1%3A0xdcf7761e8d02804a!2sSanta%20Fe!5e0!3m2!1ses-419!2sar!4v1612109817523!5m2!1ses-419!2sar" aria-hidden="false" tabIndex="0"></iframe>                    
                    </div>
                    <hr/>
                </div>
                <form className="col" onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input className="form-control" id="floatingInput" type="text" placeholder="Nombre"/>
                        <label htmlFor="floatingInput">Nombre</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input className="form-control" id="floatingInput" type="text" placeholder="Apellido"/>
                        <label htmlFor="floatingInput">Apellido</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input className="form-control" id="floatingInput" type="email" placeholder="email@ejemplo.com"/>
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" id="floatingInput" type="text-area" placeholder="Escribinos"></textarea>
                        <label htmlFor="floatingInput">Escribinos...</label>
                    </div>
                    <button className="btn btn-success" >
                        Enviar
                    </button>
                </form>
            </section>
        </div>
    )
}
