import { getToken } from "./users-service";

const BASE_URL = "api/users";

export async function create(profileData, userId) {
  const payload = {
    about: profileData.bio,
  };

  const res = await fetch(`${BASE_URL}/${userId}/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    return "Profile created";
  } else {
    throw new Error("Unable to create profile");
  }
}
