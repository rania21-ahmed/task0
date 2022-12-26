import React from "react"
import './App.css';
import NavBar from "./components/Navbar/index";
import Install from "./components/Install/index"
import Services from "./components/Services/index.js";
import Proveder from "./components/Providers/index"
import Footer from "./components/Footer";


function App() {

  return (
    <div className="App">
      
      <NavBar />
      <Install />
     <Services />
     <Proveder />
     <Footer />
    </div>
  );
}

export default App;
