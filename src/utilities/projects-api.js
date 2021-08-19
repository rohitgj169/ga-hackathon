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

export async function getAllProjects() {
  const res = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Unable to retrieve projects");
  }
}

export async function getOneProject(id) {
  console.log(id);
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "GET",
    header: {
      
      Authorization: "Bearer " + getToken(),
    },
  });
  console.log(res);
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Unable to retrieve project info.");
  }
}
