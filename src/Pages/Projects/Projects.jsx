import React from "react";
import ProjectsPage from "./ProjectComponent";
import calculator from"../../Images/calculator.png";
import drumkit from "../../Images/drumkit.png";
import christmas from "../../Images/christmas.png"
function Projects(){
  return(
    <div className="maincontainer" id="projectspage" style={{display:'flex',flexDirection:'row', justifyContent:"space-around", alignItems:'center',textAlign:'center', position:'inherit',margin:'20px',padding:'30px',width:'100vw'}}>
      <ProjectsPage 
      title='Calculator'
      description = ' This is my first group project. I got a chance to create a contact page.'
      image={calculator} />
      <ProjectsPage title='Drumkit'
      description='This is My first react project used with react hooks' image={drumkit}/>
      <ProjectsPage 
      title='Christmas Wish'
      description='I got this project during christmas. In this projects i used local storage to store and displayed the data.'
      image={christmas}/>
    </div>
  )

}
export default Projects;
