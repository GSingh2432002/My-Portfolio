import React from "react";
import ProjectBox from "./ProjectBox";
import FilmImage from "../images/Film.png";
import Finder from '../images/Finder.png';

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={Finder} projectName="Finder" />
        <ProjectBox projectPhoto={FilmImage} projectName="Movie" />
      </div>
    </div>
  );
};

export default Projects;
