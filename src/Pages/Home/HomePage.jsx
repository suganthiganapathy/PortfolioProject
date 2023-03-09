import React from "react";
import home from "./home.module.css";

function Homepage(){
    return(
        <div className={home.container}>
            <div className={home.innercontainer}>
            <h2 className={home.firstname}>Suganthi</h2>
            <h2 className={home.lastname}>Ganapathy</h2>
            <h5 className={home.develop}>-frontend  developer</h5>
            </div>

        </div>
    )
}
export default Homepage;