import React from "react";
import ProjectsPage from "./ProjectComponent";
function Projects(){
  return(
    <div className="maincontainer" id="projectspage" style={{display:'flex',flexDirection:'row', alignItems:'center',textAlign:'center'}}>
      <ProjectsPage />
      <ProjectsPage />
    </div>
  )

}
export default Projects;
