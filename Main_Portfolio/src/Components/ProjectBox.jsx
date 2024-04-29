import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";

const ProjectBox = ({projectPhoto, projectName}) => {
    const desc = {
        FinderDesc:
            "This website is for a people who want to find github username of a particular person by using their username or name.",
        FinderFile: "https://github.com/GSingh2432002/Github-Finder",
        FinderWebsite: "https://githubfinderbygks.netlify.app/",

        MovieDesc:
            "This web app  is for helping you find your desired movie.The project helped me with understanding the working of API.",
        MovieGithub: "https://github.com/GSingh2432002/Movie-Recommendation-System",
        MovieWebsite: "https://castandco.netlify.app/",
    };

  return (
    <div className='projectBox'>
        <img className='projectPhoto' src={projectPhoto} alt='Project display'/>
        <div>
            <br />
                <br />
                <h3>{projectName}</h3>
                <br />
                {desc[projectName + "Desc"]}
                <br />
                
            <a href={desc[projectName + "Github"]} target='_blank'>
                <button className='projectbtn'>
                    <FaGithub /> Github
                </button>
            </a>

            <a href={desc[projectName + "Website"]} target='_blank'>
                <button className='projectbtn'>
                    <CgFileDocument /> Site
                </button>
            </a>
        </div>
    </div>
  );
};

export default ProjectBox;
