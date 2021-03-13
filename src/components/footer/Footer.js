import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
  

export const Footer = () => {
    return (
        <footer className="container-fluid">
            <div className="social">
                <a href="https://www.facebook.com/Capibara.NDS" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="iconfb" icon={faFacebook}  /></a>
                <a href="https://twitter.com/capibarands" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icontw" icon={faTwitter}  /></a>
                <a href="https://www.instagram.com/capibarands" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="iconig" icon={faInstagram}  /></a>
                <a href="https://www.youtube.com/channel/UCMUTKoy7YgS_bEAEKmPV70g" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="iconyt" icon={faYoutube}  /></a>
            </div>
            <div className="titles">
                <h3>Copyright © Asociación Civil CAPIBARA Naturaleza, Derecho y Sociedad 2021</h3> 
                <p>Santa Fe - Argentina</p>
                <p>info@capibara.org.ar</p>
                <p>Developed with <FontAwesomeIcon icon={faHeart} /> by <a href="https://www.linkedin.com/in/santiagopinat/" target="_blank" rel="noopener noreferrer" className="milink">Santi Pinat</a></p>
            </div>
        </footer>
    )
}
