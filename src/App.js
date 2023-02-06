import "./App.css";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Header from "./components/header";
import Footer from "./components/footer";



function App() {
  
  return (

    <div className="App" >
      <Header/>
      <AboutMe/>
      <Projects/>
      <Footer/>
  
    </div>
  );
}

export default App;
