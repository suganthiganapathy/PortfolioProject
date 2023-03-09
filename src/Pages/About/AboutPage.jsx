import React from "react";
import about from "./about.module.css";
import Profile from "../../Images/prof.png";
import html from "../../Images/html.png"
import css from "../../Images/css.png"
import javascript from "../../Images/js.png"
import reactjs from "../../Images/react.png"

function AboutPage() {
  return (
    <div className={about.container} id="aboutpage">
          
      <div className={about.innercontainer}>
      
        <div className={about.aboutcontaier}>
          <p>
            I am 34 years old, studying frontend development in order to get IT
            releated Job. I like coding which is a creative work and it gives
            life to my ideas.
            <br />
            <br />
            In my spare time, I work as a frivillig to teach my mother tounge to
            the kids.
            <br />
            My dream is to become a fullstack developer where I can participate
            in large groups which help to grow my learning skills. I always like
            to do new things
          </p>
          
       
         </div>

         <div className={about.image}>
          <img src={Profile} className={about.prof}/>
        </div>
        </div>
    
        
        <section className={about.skills}>
              <img src={html} className={about.tools}/> 
               <img src={css} className={about.tools} />
              <img src={javascript} className={about.tools}/>
              <img src={reactjs} className={about.tools}/>
         </section>
         
         </div>
    
  );
}

export default AboutPage;
