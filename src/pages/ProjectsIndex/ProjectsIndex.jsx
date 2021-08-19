import React, { useEffect } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import * as ProjectAPI from "../../utilities/projects-api";

export default function ProjectsIndex({ projectList, setProjectList }) {
  const getProjectList = async () => {
    try {
      const projectList = await ProjectAPI.getAllProjects();
      setProjectList(projectList);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getProjectList();
  }, []);

  return (
    <div>
      {projectList.length
        ? projectList.map((project) => {
            return <ProjectCard key={project._id} project={project}/>;
          })
        : null}
    </div>
  );
}
