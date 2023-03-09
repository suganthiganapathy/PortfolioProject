import React from "react";
import Navbar from "./Components/Nav/Nav";
import "./App.css";
import Homepage from "./Pages/Home/HomePage";
import AboutPage from "./Pages/About/AboutPage";
import Projects from "./Pages/Projects/Projects";
import Footer from "./Components/Footer/Footer";
// import OnepageDisplay from "./Pages/Singleproject/Onedisplay";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Homepage />
      <AboutPage />
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;
