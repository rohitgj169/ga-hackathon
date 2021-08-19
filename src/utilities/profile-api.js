import { getToken } from "./users-service";

const BASE_URL = "/api/profile";

export async function create(profileData, userId, userProfileId) {
  const payload = {
    about: profileData.bio,
  };

  const res = await fetch(`${BASE_URL}/${userProfileId}`, {
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

export async function show(userId) {
  const res = await fetch(`${BASE_URL}/${userId}/profile/show`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Unable to retrieve profile");
  }
}
