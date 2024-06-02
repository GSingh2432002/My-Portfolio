import React from "react";
import ProjectBox from "./ProjectBox";
import FilmImage from "../images/Film.png";
import Finder from '../images/Finder.png';
import Dictionary from '../images/Dictionary.png';

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={Finder} projectName="GitHub Finder" />
        <ProjectBox projectPhoto={FilmImage} projectName="MoviFlix" />
        <ProjectBox projectPhoto={Dictionary} projectName="Dictionary App" />
      </div>
    </div>
  );
};

export default Projects;
