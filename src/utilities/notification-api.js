import { getToken } from "./users-service";

const BASE_URL = "/api/notifications";

export async function create(project) {
  const payload = {
    toUser: project.creator._id,
    projectId: project._id,
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
    return "Notification Sent";
  } else {
    throw new Error("umable to send notification");
  }
}