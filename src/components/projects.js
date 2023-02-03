import "../css/projects.css";

const Projects = () => {
  return (
    <div className="project-container" id="projects">
       <section className="text-proyecto">
          <h2 className="text-center">Proyectos</h2>
          <p className="h4 text-center mb-5">
            Sección donde vas a encontrar mis proyectos web que estoy realizando
            actualmente.
          </p>
        </section>
     
        <div className="cards-proyectos mb-5">
          <div className="card cardf">
            <h3 className="text-center ">Proyecto Web: ¿Donde me atiendo? </h3>
        
            <div className="card-body">
              <p className="card-text">
  
                Proyecto creado con el grupo dev formado por compañeros de
                Fundacion Pescar
              </p>
              <p className="card-text">
        
                <strong> Herramientas y lenguajes utilizados:</strong> HTML,
                CSS, JS, Canva para el diseño
              </p>
              <div className="redes">
                <a
                  className
                  href="https://github.com/esv343/donde_me_atiendo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  className
                  href="https://dondemeatiendo.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="card cardf">
            <h3 className="text-center ">Proyecto Web: Estilo RG </h3>
            {/* <img src="/img/img-proyects/Logo-RG.svg" className="card-img-top" alt="Logo donde me atiendo"> */}
            <div className="card-body">
              <p className="card-text">
                Proyecto de cursos de peluqueria(En proceso)
              </p>
              <p className="card-text">
                <strong> Herramientas y lenguajes utilizados:</strong> NodeJS,
                EJS, JS, Figma para el diseño
              </p>
              <div className="redes">
                <a
                  className="git-hub"
                  href="https://github.com/Gabriel-Ayala20/estiloRG"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Projects;
