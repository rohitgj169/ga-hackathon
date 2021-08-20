import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import * as ProjectAPI from "../../utilities/projects-api";
import "./MyProjects.css";
import { Link } from "react-router-dom";

export default function MyProjects({ user }) {
  const [userProj, setUserProj] = useState([]);
  console.log(user);

  const getProjectList = async () => {
    try {
      const projectList = await ProjectAPI.getUserProjects();
      setUserProj(projectList);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getProjectList();
  }, []);

  return (
    <div>
      <div className="myProjectsContainer">
        <img className="appTitle" src="https://i.imgur.com/kVZIj9m.png" />
        {userProj.length
          ? userProj
              .slice(0)
              .reverse()
              .map((project) => {
                return <ProjectCard key={project._id} project={project} />;
              })
          : null}
      </div>
    </div>
  );
}
