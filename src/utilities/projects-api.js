import { getToken } from "./users-service";

const BASE_URL = "/api/projects";

export async function create(projectData, userId) {
  const payload = {
    title: projectData.title,
    time: projectData.time,
    description: projectData.description,
    requiredSoftware: projectData.requiredSoftware,
    requiredUI: projectData.requiredUI,
    requiredData: projectData.requiredData,
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

export async function getUserProjects() {
  const res = await fetch(`${BASE_URL}/userproject`, {
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
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + getToken(),
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Unable to retrieve project info.");
  }
}

export async function addToProject(projectId) {
  const res = await fetch(`${BASE_URL}/${projectId}/users`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + getToken(),
    }
  });
  if (res.ok) {
    return "Added to Project";
  } else {
    throw new Error("Unable to join project at this time");
  }
}
