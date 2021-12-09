import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";

export const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="social">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/Capibara.NDS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="fbicon" icon={faFacebook} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/capibarands"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="twicon" icon={faTwitter} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/capibarands"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="igicon" icon={faInstagram} />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCMUTKoy7YgS_bEAEKmPV70g"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="yticon" icon={faYoutube} />
            </a>
          </li>
        </ul>
      </div>
      <div className="titles">
        <h3>
          Copyright © Asociación Civil CAPIBARA Naturaleza, Derecho y Sociedad
          2021
        </h3>
        <p>Santa Fe - Argentina</p>
        <a className="milink" href="mailto:info@capibara.org.ar">info@capibara.org.ar</a>
        <p>
          Developed with <FontAwesomeIcon icon={faHeart} /> by{" "}
          <a
            href="https://www.linkedin.com/in/santiagopinat/"
            target="_blank"
            rel="noopener noreferrer"
            className="milink"
          >
            Santi Pinat
          </a>
        </p>
      </div>
    </footer>
  );
};
