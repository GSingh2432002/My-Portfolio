import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";

const ProjectBox = ({projectPhoto, projectName}) => {
    const desc = {
        DictionaryDesc:
        "Developed a dynamic and responsive dictionary application using React to allow users to search for word definition, enhancing my skills in frontend development and used DictionaryAPI intergration.",
        DictionaryGithub: "https://github.com/GSingh2432002/Dictionary-Application",
        DictionaryWebsite: "https://peaceful-wisp-c0e765.netlify.app/",

        FinderDesc:
            "This website is for a people who want to find github username of a particular person by using their username or name.",
        FinderGithub: "https://github.com/GSingh2432002/Github-Finder",
        FinderWebsite: "https://githubfinderbygks.netlify.app/",

        MovieFlixDesc:
            "This web app is for helping you find your desired movie.The project helped me with understanding the working of TMDb API.",
        MovieGithub: "https://github.com/GSingh2432002/MovieFlix",
        MovieWebsite: "https://movie-flix-one-steel.vercel.app/",
    };

    const projectDetails = desc[projectName];

  return (
    <div className='projectBox'>
        <img className='projectPhoto' src={projectPhoto} alt='Project display'/>
        <div>
            <br />
                <br />
                <h3>{projectName}</h3>
                <br />
                <p>{projectDetails.description}</p>
                <br />
                
            <a href={projectDetails.FaGithub} target='_blank'>
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
