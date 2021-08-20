import React, { useState, useEffect } from "react";
import "./Profile.css";
import { ImTwitter, ImGithub, ImLinkedin } from "react-icons/im";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import * as profileAPI from "../../utilities/profile-api";
import * as userService from "../../utilities/users-service";

export default function Profile({ user, userProfile, setUserProfile }) {
  const getProfile = async () => {
    try {
      const profile = await profileAPI.show(user._id);
      // console.log(profile);
      setUserProfile(profile);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="profileContainer">
      <div className="profileTopHalf">
        <div className="profileStrip">
          <img
            className="profilePhoto"
            src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
            alt="profile-pic"
          />
        </div>
        <div className="profileEditIcon">
          <Link style={{ margin: "10px" }} to="/EditProfile">
            <AiFillEdit style={{ fontSize: "20px", margin: "10px" }} />
          </Link>
        </div>

        <div className="profileDetails">
          <p className="profileName">{user.name}</p>
        </div>
        <div className="profileIcons">
          {/* <a href={`//${userProfile.github}`}> */}
          <ImTwitter style={{ fontSize: "40px", margin: "10px" }} />
          {/* </a> */}
          {/* <a href={`//${userProfile.github}`}> */}
          <ImGithub style={{ fontSize: "40px", margin: "10px" }} />
          {/* </a> */}
          {/* <a href={`//${userProfile.linkedin}`}> */}
          <ImLinkedin style={{ fontSize: "40px", margin: "10px" }} />
          {/* </a> */}
        </div>
        {userProfile ? (
          <div className="profileJob">{userProfile.profession}</div>
        ) : (
          null
        )}
      </div>

      <div className="profileBottomHalf">
        <div className="profileBio">
          <h3>Bio</h3>
          {userProfile ? (
            <p>{userProfile.about}</p>
          ) : (
            <p>Please enter your bio</p>
          )}
        </div>
        <div className="profileSkills">
          <h3>Current Skills</h3>
          <p className="profileSkills">
            {userProfile ? <span>{userProfile.skill1}</span> : null}
            {userProfile ? <span>{userProfile.skill2}</span> : null}
            {userProfile ? <span>{userProfile.skill3}</span> : null}
          </p>
        </div>
        <div className="profileDesired">
          <h3>Desired Skills</h3>
          <p className="profileDesired">
            {userProfile ? <span>{userProfile.desiredSkill1}</span> : null}
            {userProfile ? <span>{userProfile.desiredSkill2}</span> : null}
            {userProfile ? <span>{userProfile.desiredSkill3}</span> : null}
          </p>
        </div>
      </div> 
    </div>
  );
}



   
