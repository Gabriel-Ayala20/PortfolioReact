import "../css/projects.css";
import dma from "../assets/img/img-proyects/logo-dma.svg";

const Projects = () => {
  return (
    <div className="project-container">
      <section className="text-proyecto">
        <h2 className="text-center">Proyectos</h2>
        <p className="h4 text-center ">
          Sección donde vas a encontrar mis proyectos web que estoy realizando
          actualmente.
        </p>
      </section>

      <div className="cards-proyectos">

        <div className="card cardf">
          <h3 className="text-center ">Proyecto Web: ¿Donde me atiendo? </h3>
          <img className="logoDma" src={dma} alt="Donde Me Atiendo"></img>         
          <div className="card-body">
            <p className="card-text">Proyecto creado con el grupo dev formado por compañeros de Fundacion Pescar </p>
            <p className="card-text"><strong> Herramientas y lenguajes utilizados:</strong> HTML, CSS, JS, Canva para el diseño</p>
            <div className="redes"> 
            <a href="https://github.com/esv343/donde_me_atiendo"target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
            <a href="https://dondemeatiendo.netlify.app/" target="_blank"rel="noopener noreferrer" ><i className="fa-solid fa-globe"></i></a>
            </div>
          </div>
        </div>

    {/*     <div className="card cardf"> 
          <h3 className="text-center ">Proyecto Web: Estilo RG </h3>
          <img className="logoRg" src={rg} alt="Estilo RG"></img>
          <div className="card-body">
            <p className="card-text">Pagina web de peluquería(En proceso)</p>
            <p className="card-text"><strong> Herramientas y lenguajes utilizados:</strong> NodeJS,EJS, JS, Figma para el diseño</p>
            <div className="redes">
              <a href="https://github.com/Gabriel-Ayala20/estiloRG" target="_blank"rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default Projects;
