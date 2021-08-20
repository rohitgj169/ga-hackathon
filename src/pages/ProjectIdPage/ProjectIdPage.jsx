import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import * as ProjectAPI from "../../utilities/projects-api";
import * as NotificationAPI from "../../utilities/notification-api";

export default function ProjectIdPage({ match }) {
  const [project, setProject] = useState({
    title: "",
    creator: {
      name: "",
      _id: "",
    },
    members: [],
  });
  const loadProject = async () => {
    try {
      const projectInfo = await ProjectAPI.getOneProject(match.params.id);
      console.log(projectInfo);
      setProject(projectInfo);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const notification = await NotificationAPI.create(project);
    } catch (err) {
      console.log(err.message);
    }
    try {
      const addToProject = await ProjectAPI.addToProject(project._id);
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
      <br />
      Project Creator : {project.creator.name}
      Project Description : {project.description}
      Project reqsoftware : {project.requiredSoftware}
      Project reqUI : {project.requiredUI}
      Project reqData : {project.requiredData}
      <form>
        <div>
          <label htmlFor="project-comment">Comment Section</label>
          <br />
          <textarea
            style={{ resize: "none" }}
            type="text"
            rows="4"
            cols="50"
            placeholder="Enter your comment here..."
          ></textarea>
        </div>
      </form>
      <br />
      <h5>Current Group</h5>
      <div className="current-group-container">
        <div className="current-group-members">
          {project.members.length > 0
            ? project.members.map((member) => {
                return (
                  <div>
                    <p>{member.name}</p>
                  </div>
                );
              })
            : null}
        </div>
        <div className="current-group-professions">
          {project.memberProfiles.length > 0
            ? project.memberProfiles.map((member) => {
                return (
                  <div>
                    <p>{member.role}</p>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Join Project</button>
      </form>
    </div>
  );
}
