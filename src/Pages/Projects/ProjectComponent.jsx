import React from "react";
import { useState } from "react";
import image from "./calculator.png";
import projects from "./projects.module.css";
import {
  AiOutlineHtml5,
  AiOutlineArrowDown,
  AiFillGithub,
} from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { MdWebAsset } from "react-icons/md";

function ProjectsPage() {
  const [isExpand, setIsExpand] = useState(false);

  function handleClick() {
    setIsExpand(!isExpand);
  }

  function githubClick() {
    return window.open("https://github.com/H3X-C0DE/The-Dark-Galaxy");
  }
  return (
    <div className={projects.container}>
      <div className={projects.outercontainer}>
        <p className={projects.title}>Solarsystem</p>
        <img className={projects.imagecontainer} src={image}></img>
        <div className={projects.projecticon}>
          <p className={projects.icons}>
            Languages used in this project
            <br />
            <AiOutlineHtml5 /> <TbBrandCss3 />
            <button className={projects.arrowbtn} onClick={handleClick}>
              <AiOutlineArrowDown />
            </button>
          </p>
          {isExpand && (
            <p>
              This is my first group project. I got a chance to create a contact
              page.
            </p>
          )}
          <button onClick={githubClick} className={projects.github}>
            <AiFillGithub />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProjectsPage;
