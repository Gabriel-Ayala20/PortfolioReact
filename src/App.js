import "./App.css";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Header from "./components/header";
import Footer from "./components/footer";
import Contacto from "./components/contacto";


function App() {
  
  return (

    <div className="App" >
      <Header/>
      <AboutMe/>
      <Projects/>
      <Contacto/>
      <Footer/>
    
    </div>
  );
}

export default App;
