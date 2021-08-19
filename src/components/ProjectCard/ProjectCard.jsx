import React from 'react'

export default function ProjectCard({project}) {
  console.log(project);
  return (
    <div>
      <p> Owner: {project.creator.name}</p>
      Project Title :{project.title}
      <a href={project._id}/>
      
    </div>
  )
}
