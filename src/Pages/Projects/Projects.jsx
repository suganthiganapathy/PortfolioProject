import React from "react";
import projects from "./projects.module.css";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { DiReact } from "react-icons/di";
import { AiOutlineArrowDown, AiFillGithub } from "react-icons/ai";
import Projectcomponent from "./projectcomponent";

function ProjectsPage() {
  return (
    <>
    <div className={projects.container} id="projectspage">
      <Projectcomponent
       name='paralax' 
       description="parlax Description"
       github=""
       webpage=""
       />
      <Projectcomponent name="solarsytem"
      description="solar system description"
      github=""
      webpage=""
      />
      <Projectcomponent name="calculator"
      description="calculator description"/>
      <Projectcomponent name="drum Kit" description="drum kit description"/>
    </div>
    </>

    // <div className={projects.container} id="projectspage">
    //   <div className={projects.outercontainer} >

    //     <section className={projects.innercontainer}>
    //       <div className={projects.title}>Paralax</div>
    //       <div className={projects.description}>
    //         Languages and tools used in this Project
    //       </div>
    //       <p><AiFillHtml5 /> <FaCss3Alt /></p>
    //       <div className={projects.btn}>
    //        <button onClick={() => window.open("https://github.com/suganthiganapathy/SinglePageApplication","_blank")} className={projects.arrowbutton} ><AiFillGithub/></button>
    //        <button onClick={() => window.open("https://github.com/suganthiganapathy/SinglePageApplication","_blank")} className={projects.arrowbutton} ><AiOutlineArrowDown/></button>

    //       </div>

    //     </section>

    //     <section className={projects.innercontainer}>
    //       <div className={projects.title}>Drum kit</div>
    //       <div className={projects.description}>
    //         Languages and tools used in this Project
    //       </div>
    //       <p>
    //         <AiFillHtml5 /> <TbBrandJavascript/> <FaCss3Alt />
    //       </p>
    //       <div className={projects.btn}>
    //        <button onClick={() => window.open className={projects.arrowbutton} ><AiFillGithub/></button>
    //        <button onClick={() => window.open("https://github.com/suganthiganapathy/SinglePageApplication","_blank")} className={projects.arrowbutton} ><AiOutlineArrowDown/></button>

    //       </div>

    //     </section>

    //     <section className={projects.innercontainer}>
    //       <div className={projects.title}>React calculator</div>
    //       <div className={projects.description}>
    //         Languages and tools used in this Project
    //       </div>
    //       <p>
    //         <AiFillHtml5 /> < DiReact/> <FaCss3Alt />
    //       </p>
    //       <div className={projects.btn}>
    //        <button onClick={() => window.open("https://github.com/suganthiganapathy/SinglePageApplication","_blank")} className={projects.arrowbutton} ><AiFillGithub/></button>
    //        <button onClick={() => window.open("https://suganthiganapathy.github.io/calculator-project/","_blank")} className={projects.arrowbutton} ><AiOutlineArrowDown/></button>

    //       </div>

    //     </section>

    //     <section className={projects.innercontainer}>
    //       <div className={projects.title}>Galaxy</div>
    //       <div className={projects.description}>
    //         Languages and tools used in this Project
    //       </div>
    //       <p>
    //         <AiFillHtml5 /> <FaCss3Alt />
    //       </p>
    //       <div className={projects.btn}>
    //        <button onClick={() => window.open("https://github.com/suganthiganapathy/SinglePageApplication","_blank")} className={projects.arrowbutton} ><AiFillGithub/></button>
    //        <button onClick={() => window.open("https://github.com/suganthiganapathy/SinglePageApplication","_blank")} className={projects.arrowbutton} ><AiOutlineArrowDown/></button>

    //       </div>
    //     </section>
    //   </div>
    // </div>
  );
}

export default ProjectsPage;
