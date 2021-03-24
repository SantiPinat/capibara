import React from 'react'
import { Link } from 'react-router-dom'
import berta from '../../assets/img/bertacaceres.png'

export const Bertacaceres = () => {
    return (
        <section className="berta">
            <div className="container">
                <h2>Te invitamos a conocer nuestro centro de estudios</h2>
                <Link to="/centroestudios"><img src={berta} alt="Logo Centro de estudios Berta Caceres"/></Link>
            </div>
        </section>
    )
}
