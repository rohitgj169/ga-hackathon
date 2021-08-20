import React from 'react';
import { Link } from "react-router-dom";
import "./NotificationCard.css";


export default function NotificationCard({project, fromUser}) {
  console.log(project);
  console.log(fromUser);
  return (
    <div className="notification-container">
      <h5 className="notification-title">{project.title}</h5>
      <p className="notification-info">{`${fromUser} joined the project`}</p>
      <Link
          style={{ textDecoration: "none" }}
          to={`/projects/${project._id}`}
        >
          <div className="">
            <button>GO TO PROJECT</button>
          </div>
        </Link>
    </div>
  )
}
