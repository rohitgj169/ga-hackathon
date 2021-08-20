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
      console.log(notification);
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
      {/* <form>
        <div>
          <label htmlFor="project-comment">Comment Section</label>
          <br/>
          <textarea 
          style={{ resize: "none" }} 
          type="text"
          rows="4"
          cols="50"
          placeholder="Enter your comment here..."
          >
          </textarea>
        </div>
      </form> */}
      <br />
      <form onSubmit={handleSubmit}>
        <button type="submit">Join Project</button>
      </form>
    </div>
  );
}
