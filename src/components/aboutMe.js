import "../css/aboutMe.css";
import imagenes from "../assets/img/imagenes";
import Google from "../assets/google";
import React, { useState } from "react";
import EducacionIT from "../assets/educacionIT";
import CvGabrielAyala from "../assets/CvGabrielAyala2023.pdf";
import Fondo from '../assets/fondo.jpg'

const AboutMe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  return (
    <div className="home-aboutme" style={{ backgroundImage: `url(${Fondo})`, backgroundRepeat: 'no-repeat' }}>
      <div className="text-center textos-home">
        <h4 className="py-1">BIENVENIDOS</h4>
        <h1 className="py-5">
          Soy <span className="span-nombre">Gabriel Ayala Gimenez</span> ,
          Desarrollador Web Full Stack.
        </h1>
        <div className="descargar-cv">
      <h4 className="text-center ">Descargar CV</h4>
        <a className="mt-4" href={CvGabrielAyala}download="CvGabrielAyala2023.pdf">
          <i className="fa-solid fa-download"></i>
        </a>
      </div>
     
      </div>
          
    

      <section id="about-me" >
        <div className="contAboutMe">
        <div className="perfil-img">
          <img
            src={imagenes.imagensPerfil.perfil}
            alt="perfil"
            className="perfil"
          ></img>
        </div>

        <div className="about-me">
          <h2 className="py-4 text-dark" >Acerca de mi</h2>
          <p>
            Mi nombre es Gabriel Ayala Gimenez, tengo 25 años. 
            Actualmente estoy
            viviendo en Buenos Aires. <br></br>
            Me capacite como Desarrollador Web Full Stack gracias al Bootcamp de
            Educación IT. <br></br> Actualmente cuento con conocimientos en lo que es
            HTML, CSS, JavaScript, NodeJS, React.
          </p>
          
        </div>
       
        </div>
  
    <article className="contactame">
       <h2 className="text-center mt-5 text-dark">Contactame</h2>
  <div className="contacto-redes py-5">    
      <a href="https://github.com/Gabriel-Ayala20"  target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
      <a href="https://www.linkedin.com/in/gabriel-ayala-gimenez-1b17bb1a9/"  target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
      </div>
    </article>
    
     



      </section>
      <section className="habilidades">
      <article className="habilidades-tecnicas">
        <h2 className="py-5 text-center">Habilidades</h2>
        <h3 className="py-5 text-center">Habilidades Técnicas</h3>
        <div className="icons-stack">

          <img src={imagenes.tecnologias.css} alt="css"></img>
          <img src={imagenes.tecnologias.bootstrap} alt="bootstrap"></img>
          <img src={imagenes.tecnologias.github} alt="github"></img>
          <img src={imagenes.tecnologias.html} alt="html"></img>
          <img src={imagenes.tecnologias.javascript} alt="javascript"></img>
          <img src={imagenes.tecnologias.mongodb} alt="mongoDB"></img>
          <img src={imagenes.tecnologias.nodejs} alt="nodejs"></img>
          <img src={imagenes.tecnologias.bootstrap} alt="bootstrap"></img>
        </div>
      </article>

      <article>
      
      <h3 className="py-5 text-center">Habilidades Blandas</h3>
      <div className="soft-skill">
      <h4>
          Proactivo
        </h4>
        <h4>
          Organizado
        </h4>
        <h4>
          Constante
        </h4>
        <h4>
          Trabajo en equipo
        </h4>
      </div>
       
      </article>
    </section>
      
    <section className="certificados-general">
      
    <article className="certificados-container">
        <h2 className="text-center">Certificados</h2>
        <div className="cert-btn">
          <button
            id="btn"
            className="btn-btn certificados-btn"
            onClick={() => setIsOpen1(!isOpen1)}
          >
            Certificados Educacion IT
          </button>
          <button
            id="btn-dos"
            className="btn-btn certificados-btn "
            onClick={() => setIsOpen(!isOpen)}
          >
            Certificados Google
          </button>
        </div>

        <div className="container-educacionIT">
          <div
            id="cont"
            className={`certificado-container ${isOpen1 && "cert-container"} `}
          >
            <div className="certificados" id="certificados">
              {EducacionIT.map((educacioniT) => (
                <div class="card card-c">
                  <div class="card-body">
                    <h5 class="card-title text-center titulo">
                      {educacioniT.nombre}
                    </h5>
                  </div>

                  <div class="btn-card"></div>
                  <img src={educacioniT.image} alt={educacioniT.nombre}></img>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container-google">
          <div
            id="cont-dos"
            className={`google-container ${isOpen && "cert-google"}`}
          >
            <div className="google" id="google">
              {Google.map((google) => (
                <div class="card card-c">
                  <div class="card-body">
                    <h5 class="card-title text-center titulo">
                      {google.titulo}
                    </h5>
                  </div>

                  <div class="btn-card">
                    <img src={google.imagen} alt={google.titulo}></img>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>

     
      <div className="swipe-up">
        <a href="#header">
          <i className="fa-sharp fa-solid fa-arrow-up"></i>
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
