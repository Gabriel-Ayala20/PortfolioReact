
import React, { useState } from "react";
import imagenes from "../assets/img/imagenes";


function Header () {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header id="header">
      
        <nav  className="nav-header">
         
          <div className="content-header">
          <div className="img-logo">
            <img
              src={imagenes.imagensPerfil.logo}
              alt="logo"
              className="logo"
            ></img>
          </div>
            <button
              className="hamburger"
              id="hamburger"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
            <ul className={`nav-ul ${isOpen && "show"}`} id="nav-ul">
              <li>
              <a href="#header">Home
                </a>
              </li>
              <li>
              <a href="#about-me">Acerca de mi
                </a>
              </li>
              <li>
              <a href="#projects">Proyectos
                </a>
              </li>
          
            </ul>
          </div>
        </nav>
      </header>
    )
}


export default Header;