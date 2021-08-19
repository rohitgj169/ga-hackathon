import { getToken } from "./users-service";

const BASE_URL = "/api/projects";

export async function create(projectData, userId) {
  const payload = {
    title: projectData.title,
  };

  const res = await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    },
    body: JSON.stringify(payload),
  });
  
  if (res.ok) {
    return "Project created";
  } else {
    throw new Error("unable to create project");
  }
}
