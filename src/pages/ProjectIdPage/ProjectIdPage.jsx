import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import * as ProjectAPI from "../../utilities/projects-api";

export default function ProjectIdPage({ match }) {
  const [project,setProject] = useState({
    title:"",
    creator: {
      name: "",
    }
  })
  const loadProject = async () => {
    try {
      const projectInfo = await ProjectAPI.getOneProject(match.params.id);
      setProject(projectInfo);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    loadProject();
  }, []);

  return (
    <div>
      Project Title : {project.title}
      Project Creator : {project.creator.name}
    </div>

  )
}
