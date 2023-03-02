import React from 'react';
import { useState } from 'react';
import {AiOutlineArrowDown} from 'react-icons/ai';
import Nature from '../../Images/nature.jpg';
import './onedisplay.css';

function OnepageDisplay(){
    
    const [arrow,setCount] =useState(0);

    function handleClick(){
        setCount( "This is the Group Project i have done each divided one page here i created a contact page " );
    }
    return(
        <>
            <div className="bigcontainer">
            <div className="innercontainer">
                <img  className="image" src={Nature}></img>
                <p className="title">SolarSystem</p>
                <p className="description">{arrow}</p>

                <div className="tools">
                    <p>Html and css</p>
                </div>
                <div className="arrowbtn" >
                    <button className="arrowBtn" onClick={handleClick}><AiOutlineArrowDown /></button>
                </div>
                <div className="links">
                    <p>githublink</p>
                    <p>webpage link</p>
                </div>
            </div>


        </div>
        </>

    )
}

export default OnepageDisplay;