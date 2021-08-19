import React from 'react'
import { Link } from 'react-router-dom';

export default function ProjectCard({project}) {
  console.log(project);
  return (
    <div>
      <p> Owner: {project.creator.name}</p>
      Project Title :{project.title}
      <Link to={`/projects/${project._id}`}>
        <div>View More</div>
      </Link>
      
    </div>
  )
}
