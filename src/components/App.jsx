import "../assets/css/App.css";
import Card from "../common/Card";

import Navbar from "./Navbar";
import Header from "./Header";
import ContactMe from "./ContactMe";
import Proyects from "./Proyects";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import { useEffect } from "react";

function App() {
  return (
    <>
      <Navbar />
      <div className="App ">
        {/* <div className="miHeader"> */}
          <Header />
        {/* </div> */}

        <div id="aboutMe" className="aboutMe">
          <AboutMe />
        </div>

        <div className="container">
          <h3 id="proyects">Proyectos</h3>
          <div className="misProyects">
            <Proyects />
          </div>
        </div>

        <div id="contactMe" className="contactMe container">
        <div>
            
          </div>
          <div className="contactComponent">
            <ContactMe />
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
