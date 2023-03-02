import React from "react";
import { AiOutlineArrowDown, AiFillGithub } from "react-icons/ai";
import calculator from "../../Images/calculator.png";
import projects from "./projects.module.css";
function Projectcomponent(props) {
  return (
    <div className={projects.outercontainer}>
      <div className={projects.innercontainer}>
        <img src={calculator} className={projects.image}></img>
        <p className={projects.title}>{props.name}</p>
        <div className={projects.describe}>
          <p>{props.description}</p>

          <div className={projects.icons}>
            <button
              className={projects.github}
              onClick={() =>
                window.open(
                  "https://github.com/suganthiganapathy/SinglePageApplication",
                  "_blank"
                )
              }
            >
              <AiOutlineArrowDown />
            </button>
            <button
              className={projects.webpage}
              onClick={() =>
                window.open(
                  "https://github.com/suganthiganapathy/SinglePageApplication",
                  "_blank"
                )
              }
            >
              <AiFillGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectcomponent;
