import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import * as ProjectAPI from "../../utilities/projects-api";
import * as NotificationAPI from "../../utilities/notification-api";
import "./ProjectIdPage.css";

export default function ProjectIdPage({ match }) {
  const [project, setProject] = useState({
    title: "",
    creator: {
      name: "",
      _id: "",
    },
    members: [],
    memberProfiles: [],
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
      <div className="projIdContainer">
        <img className="appTitleProjId" src="https://i.imgur.com/kVZIj9m.png" />
        <p className="projIdTitle">{project.title}</p>
        <br />
        {/* Project Creator : {project.creator.name} */}
        <div className="projDescription">{project.description}</div>
        <div className="projReq">
          <p className="needed">Needed:</p>
          <p>{project.requiredSoftware} Software Engineer(s)</p>
          <p>{project.requiredUI} UX Designer(s)</p>
          <p>{project.requiredData} Data Scientist(s)</p>
        </div>

        <br />
        <h5>Current Group</h5>
        <div className="current-group-container">
          <div className="current-group-members">
            <h5>User</h5>
            {project.members.length > 0
              ? project.members.map((member, idx) => {
                  return (
                    <div>
                      <p>{`${member.name}`}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className="current-group-professions">
            <h5>Role</h5>

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
          <button className="joinBtn" type="submit">
            Join Project
          </button>
        </form>
      </div>
    </div>
  );
}
