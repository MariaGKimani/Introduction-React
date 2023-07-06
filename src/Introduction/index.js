import React from "react";
import App from "../App";
import './style.css'
import { FaCloudsmith } from "react-icons/fa";
import { FaFedora } from "react-icons/fa";


const Introduction =() =>{
    return(
        <div>
        <h1 className="text-center">Welcome to the best place for you</h1>
        <p>React is a Javascript library</p>
        <FaCloudsmith className="icon1"/><br/>
        <img className="img1" src="https://res.cloudinary.com/dgf8n3s82/image/upload/v1688097255/cld-sample-3.jpg"></img><br/>
        </div>
    )
}
export  default Introduction;
