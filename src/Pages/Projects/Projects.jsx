import React from "react";
import ProjectsPage from "./ProjectComponent";
import calculator from"../../Images/calculator.png";
import drumkit from "../../Images/drumkit.png";
import christmas from "../../Images/christmas.png"
import Darkgalaxy from "../../Images/Darkgalaxy.png"
import Parallax from "../../Images/project1.png"

function Projects(){
  return(
    <div className="maincontainer" id="projectspage" style={{display:'flex',flexWrap:'wrap', justifyContent:"space-evenly", alignItems:'center', textAlign:'center', width:'100%', height:'100vh',padding:'20px'}}>
      
      <ProjectsPage className="projects" style={{width: '50%'}}
      title='Parallax'
      description='I got this project while i was Learning Html and Css. Here I used Parallex effect to show some south-Indian touriest sports and historical Places.'
      image={Parallax}
      Languages='HTML & CSS'
      github='https://github.com/suganthiganapathy/parallaxtask'
      weblink='https://sweet-scone-3c4697.netlify.app/'
      />
           
      <ProjectsPage className="projects" style={{width: '50%'}}
      title='Dark Galaxy'
      description = ' This is my first group project. I created a contact page. In this project I used github to share the code with the group members. '
      image={Darkgalaxy} 
      Languages='HTML & CSS'
      github='https://github.com/suganthiganapathy/Solar-System'
      weblink='https://splendid-cat-fd3380.netlify.app/'
      />
      
      <ProjectsPage className="projects" style={{width: '50%'}}
      title='Drumkit'
      description='I  have done this task while learning Javascript. It was very intresting while connecting the keybord event to the Audio.' image={drumkit}
      Languages='HTMl,CSS & Javascript'
      github='https://github.com/suganthiganapathy/drumkit'
      weblink='https://eloquent-pothos-6e22fe.netlify.app/'
      />
      
      <ProjectsPage className="projects" style={{width: '50%'}}
      title='Christmas Wish'
      description='I got this project during christmas. In this projects I used local storage to store and displayed the data.'
      image={christmas} 
      Languages='HTMl,CSS & Javascript'
      github='https://github.com/suganthiganapathy/christmasProject'
      weblink='https://lovely-meringue-80e476.netlify.app'
      />

      
    </div>
  )

}
export default Projects;
