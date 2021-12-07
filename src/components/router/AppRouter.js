import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import { Home } from '../home/Home'
import { CentroEstudios } from '../centroestudios/CentroEstudios'
import { Sumate } from '../sumate/Sumate'
import { QuieneSomos } from '../quienessomos/QuienesSomos'
import { Footer } from '../footer/Footer'
import logocapibara from '../../assets/img/logocapibara.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStream} from '@fortawesome/free-solid-svg-icons'
import { Extractivismo } from '../lineastematicas/Extractivismo';
import { CambioClimatico } from '../lineastematicas/CambioClimatico';
import { AmbienteUrbano } from '../lineastematicas/AmbienteUrbano';
import { LitigioEstrategico } from '../lineasdeaccion/LitigioEstrategico';
import { Derechos } from '../lineastematicas/Derechos';
import { Legislacion } from '../lineasdeaccion/Legislacion';
import { Vinculacion } from '../lineasdeaccion/Vinculacion';
import { Educacion } from '../lineasdeaccion/Educacion';
import { Documentos } from '../publicaciones/Documentos';
import { Memorias } from '../publicaciones/Memorias';
import { Audiovisuales } from '../publicaciones/Audiovisuales';


export const AppRouter = () => {

    return (
        <Router>
        <div>
          <div className="AppRouter__main">
            <nav className="container-fluid fixed-top navbar navbar-expand-lg" >
                    <Link className="navbar-brand" to="/">
                        <img src={logocapibara} alt="logo de capipabara nds" height="100px"/>
                    </Link>
                    <button className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="true" 
                    aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faStream} /> 
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#dropdown" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Quiénes somos
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><Link className="dropdown-item" to="/quienessomos">Quienes somos</Link></li>
                          <li><Link className="dropdown-item" to="/quienessomos#equipo">Equipo</Link></li>
                          <li><Link className="dropdown-item" to="/quienessomos#manifiesto">Nuestro manifiesto</Link></li>                        
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/centroestudios">Centro de estudios</Link>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#dropdown" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Líneas temáticas
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><Link className="dropdown-item" to="/extractivismo">Extractivismo</Link></li>
                          <li><Link className="dropdown-item" to="/cambioclimatico">Cambio climático</Link></li>
                          <li><Link className="dropdown-item" to="/ambienteurbano">Ambiente urbano</Link></li>
                          <li><Link className="dropdown-item" to="/derechos">Derechos de la naturaleza</Link></li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#dropdown" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Líneas de Acción
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><Link className="dropdown-item" to="/litigioestrategico">Litigio estratégico</Link></li>
                          <li><Link className="dropdown-item" to="/legislacion">Legislación y políticas públicas</Link></li>
                          <li><Link className="dropdown-item" to="/vinculacion">Vinculación institucional</Link></li>
                          <li><Link className="dropdown-item" to="/educacion">Educación ambiental y capacitación</Link></li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#dropdown" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Publicaciones
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><Link className="dropdown-item" to="/memorias">Memorias</Link></li>
                          <li><Link className="dropdown-item" to="/documentos">Documentos</Link></li>
                          <li><Link className="dropdown-item" to="/audiovisuales">Audiovisuales</Link></li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/sumate">¡Sumate!</Link>
                      </li>
                    </ul>
                </div>
            </nav>
          </div>
  
          <Switch>
            <Route exact path="/" component={ Home }/>  
            <Route exact path="/capibara" component={ Home }/>  
            <Route exact path="/home" component={ Home }/>  
            <Route path="/quienessomos" component={ QuieneSomos }/>
            <Route  path="/equipo#equipo" component={ QuieneSomos }/>
            <Route  path="/manifiesto#manifiesto" component={ QuieneSomos }/>
            <Route exact path="/centroestudios" component={ CentroEstudios }/>
            <Route exact path="/sumate" component={ Sumate }/>
            <Route exact path="/extractivismo" component={ Extractivismo }/>
            <Route exact path="/cambioclimatico" component={ CambioClimatico }/>
            <Route exact path="/ambienteurbano" component={ AmbienteUrbano }/>
            <Route exact path="/derechos" component={ Derechos }/>
            <Route exact path="/litigioestrategico" component={ LitigioEstrategico }/>
            <Route exact path="/legislacion" component={ Legislacion }/>
            <Route exact path="/vinculacion" component={ Vinculacion }/>
            <Route exact path="/educacion" component={ Educacion }/>
            <Route exact path="/documentos" component={ Documentos }/>
            <Route exact path="/memorias" component={ Memorias }/>
            <Route exact path="/audiovisuales" component={ Audiovisuales }/>
          </Switch>

          <Footer />
        </div>
      </Router>
    )
}
