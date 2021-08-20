import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import * as ProjectAPI from "../../utilities/projects-api";
import './MyProjects.css'
import {Link} from 'react-router-dom'

export default function MyProjects({ user }) {
    const [userProj, setUserProj] = useState([])

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
      {/* <p className="welcomeProject">My Projects</p> */}
      {/* <div className="btnDiv"> */}
      {/* <button className="newProjectBtn">
         <Link style={{textDecoration: "none", fontSize: "16px", fontFamily: "Inter"}} to="/project/new">CREATE A PROJECT!</Link>
      </button></div> */}
      {/* <p className="recommendedProj">Recommended Projects</p> */}
     
      {userProj.length
        ? userProj.slice(0).reverse().map((project) => {
            return <ProjectCard key={project._id} project={project}/>;
          })
        : null}
    </div></div>
  );
}


{/* Project Card 
  <div>
      <p> Owner: {project.creator.name}</p>

      Project Title :{project.title}

      <Link to={`/projects/${project._id}`}>

        <div>View More</div>

      </Link>

      
    </div> */}