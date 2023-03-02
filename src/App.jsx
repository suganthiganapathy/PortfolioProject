import React from "react";
import Navbar from "./Components/Nav/Nav";
import "./App.css";
import Homepage from "./Pages/Home/HomePage";
import AboutPage from "./Pages/About/AboutPage";
//import ProjectsPage from "./Pages/Projects/projects";
import OnepageDisplay from "./Pages/Singleproject/Onedisplay";
function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <AboutPage />
      {/* <ProjectsPage /> */}
      <OnepageDisplay/>
    </>
  );
}

export default App;
