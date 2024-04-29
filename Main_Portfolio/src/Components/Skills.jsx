import React from "react";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaBootstrap,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { SiNumpy } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    Bootstrap: <FaBootstrap />,
    Tailwind: <SiTailwindcss />,
    React: <FaReact />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Python: <FaPython />,
    Numpy: <SiNumpy />,
    MongoDB: <SiMongodb />
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
