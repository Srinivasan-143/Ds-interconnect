import React from "react";
import { assests } from "../../../assets/assests";
import "./Projects.css";

const Category = () => {
  return (
    <div className="project">
      <h1>Final Year Projects For Students</h1>
       <div className="project-content">
        <div className="project-img">
        <img src={assests.Project} alt="ProjectImage"  />
        </div>
        <div className="description">
        <h2 className="content">
          Hands On Projects
        </h2>   
        <h2>Fully Embedded Projects</h2>
        <h3>Building Skills</h3>
        <ul>
          <li>IOT</li>
          <li>Trone</li>
          <li>Embedded</li>
          <li>PCB</li>
          <li>Telemetry</li>
        </ul>
        <div className="features">
          Currently IOT Projects are More Enhanced Version
        </div>
        <div className="project-deliver">
          From Scratch to create a entire project for College Student
        </div>
        </div>
       </div>
    </div>
  );
};

export default Category;
