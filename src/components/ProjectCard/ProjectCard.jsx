import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <div>
      <div className="projectCardContainer">
        <p className="projTitle">
          {project.title}
          <br></br>
        </p>
        {project.requiredSoftware ? (
          <p>{project.requiredSoftware} Software Engineer(s)</p>
        ) : null}
        {project.requiredUI ? (
          <p>{project.requiredUI} User Exprience Designer(s)</p>
        ) : null}
        {project.requiredData ? (
          <p>{project.requiredData} Data Scientist(s)</p>
        ) : null}
        <Link
          style={{ textDecoration: "none" }}
          to={`/projects/${project._id}`}
        >
          <div className="moreInfo">
            <button>More Info</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

// requiredSoftware: String,
//   requiredUI: String,
//   requiredData: String,
