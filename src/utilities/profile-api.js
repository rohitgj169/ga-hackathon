import { getToken } from "./users-service";

const BASE_URL = "/api/profile";

export async function create(profileData, userId) {
  const payload = {
      about: profileData.bio,
      imageUrl: profileData.imageUrl,
      profession: profileData.profession,
      portfolio: profileData.portfolio,
      linkedin: profileData.linkedin,
      twitter: profileData.twitter,
      github: profileData.github,
      skill1: profileData.skill1,
      skill2: profileData.skill2,
      skill3: profileData.skill3,
      desiredSkill1: profileData.desiredSkill1,
      desiredSkill2: profileData.desiredSkill2,
      desiredSkill3: profileData.desiredSkill3,
  };
  console.log(payload);
  const res = await fetch(`${BASE_URL}/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    },
    body: JSON.stringify(payload),
  });
  if (res.ok) {
    return res.json();
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
