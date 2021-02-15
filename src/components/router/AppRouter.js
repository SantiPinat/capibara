import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import { Contacto } from '../contacto/Contacto';
import { Home } from '../home/Home'
import { CentroEstudios } from '../centroestudios/CentroEstudios'
import { LineasDeAccion } from '../lineasdeaccion/LineasDeAccion'
import { LineasTematicas } from '../lineastematicas/LineasTematicas'
import { sumate } from '../sumate/Sumate'
import { QuieneSomos } from '../quienessomos/QuienesSomos'
import { Footer } from '../footer/Footer'
import logocapibara from '../../assets/img/logocapibara.png'

export const AppRouter = () => {
    return (
        <Router>
        <div className="AppRouter__main">
          <div className="container">
            <nav className="navbar navbar-expand-sm">
                    <Link className="navbar-brand" to="/home">
                        <img src={logocapibara} alt="logo de capipabara nds" height="100px"/>
                    </Link>
                    <button className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/quienessomos">Quiénes somos</Link>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#dropdown" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Nuestro trabajo
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><Link className="dropdown-item" to="/lineastematicas">Líneas temáticas</Link></li>
                          <li><Link className="dropdown-item" to="/lineasdeaccion">Líneas de acción</Link></li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/centroestudios">Centro de Estudios</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link disabled" href="#instituto" tabIndex="-1" aria-disabled="true">Instituto</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/sumate">Sumate!</Link>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#contacto">Contacto</a>
                      </li>
                    </ul>
                </div>
            </nav>
          </div>
  
          <Switch>
            <Route exact path="/" component={ Home }/>  
            <Route exact path="/quienessomos" component={ QuieneSomos }/>
            <Route exact path="/centroestudios" component={ CentroEstudios }/>
            <Route exact path="/lineasdeaccion" component={ LineasDeAccion }/>
            <Route exact path="/lineastematicas" component={ LineasTematicas }/>
            <Route exact path="/sumate" component={ sumate }/>
            <Route exact path="/contacto" component={ Contacto }/>
            <Route exact path="/home" component={ Home }/>
          </Switch>

          <Contacto />
          <Footer />
        </div>
      </Router>
    )
}
