import React from "react";
import ProjectsPage from "./ProjectComponent";
function Projects(){
  return(
    <div className="maincontainer" id="projectspage" style={{display:'flex',flexDirection:'row', alignItems:'center',textAlign:'center', position:'inherit'}}>
      <ProjectsPage 
      title='SolarSystem'
      description = ' This is my first group project. I got a chance to create a contact page.'
      />
      <ProjectsPage title='calculator'
      description='This is My first react project used with react hooks'/>
    </div>
  )

}
export default Projects;
