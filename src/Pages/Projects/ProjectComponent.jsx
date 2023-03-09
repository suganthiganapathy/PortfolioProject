import React from "react";
import { useState } from "react";
//import image from "./calculator.png";
import projects from "./projects.module.css";
import {

  AiOutlineArrowDown,
  AiFillGithub,
} from "react-icons/ai";


import { MdWebAsset } from "react-icons/md";

function ProjectsPage(props) {
  const [isExpand, setIsExpand] = useState(false);

  function handleClick() {
    setIsExpand(!isExpand);
  }

  // function webpageClick(){
  //   return window.open("https://suganthiganapathy.github.io/calculator-project/")
  // }
  // function githubClick() {
  //   return window.open("https://github.com/H3X-C0DE/The-Dark-Galaxy");
  // }
  return (
    <div className={projects.container}>
      <div className={projects.outercontainer}>
        <p className={projects.title}>{props.title}</p>
        <img className={projects.imagecontainer} src={props.image}></img>
        <div className={projects.projecticon}>
          <p className={projects.icons}>
            Languages used in this project
            <br /><br/>{props.Languages}</p>
           
            <button className={projects.arrowbtn} onClick={handleClick}>
              <AiOutlineArrowDown />
            </button>
           
          {isExpand && (
            <p className={projects.description}>
             {props.description}
            </p>
          )}
          
          </div>
        
        <div className="butttons" style={{display:"flex", flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <a href={props.github} target="_blank"><AiFillGithub/></a>
          <a href={props.weblink} target="_blank"><MdWebAsset/></a>
        </div>
      </div>
    </div>
  );
}
export default ProjectsPage;
