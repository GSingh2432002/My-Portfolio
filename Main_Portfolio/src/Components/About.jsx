import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload }  from "react-icons/fa";
const About = () => {
    return (
        <>
            <div className="AboutPage">
                <div className="AboutText">
                    <h1 className="AboutTextHeading">
                    Get to <b>know</b> me!
                    </h1>
                    <p>
                        Hi, my name is <b>Gaurav Kumar Singh</b> and I am from West Bengal, India. I'm a <b>Full Stack Developer and Python programmer</b> and with that an final year university student pursuing <b>BTech in Computer Science and Engineering</b>. <br />
                        <br />
                        I love to create projects with some beautiful design and add some features to it, you can check out some of my work in the projects sections.
                        <br />
                        <br />Feel free to connect with me, links are in the footer section.
                    </p>
                    <a href="https://drive.google.com/file/d/1tgPFZxRbf2vZojvK75HJ-wu00xPm6_Ue/view?usp=sharing" download className="resume-btn">
                        <button>
                            Download Resume <FaFileDownload></FaFileDownload>
                        </button>
                    </a>
                </div>

                <div></div>
            </div>

            <h1 className="SkillsHeading"> Skillset</h1>
            <div className="skills">
                <Skills skill="HTML"/>
                <Skills skill="CSS"/>
                <Skills skill="Tailwind"/>
                <Skills skill="Javascript"/>
                <Skills skill="React"/>
                <Skills skill="Git"/>
                <Skills skill="Github"/>                
                <Skills skill="Python"/>                
                <Skills skill="Numpy"/>                
                <Skills skill="FlowCV"/>
            </div>
        </>
    );
};

export default About;