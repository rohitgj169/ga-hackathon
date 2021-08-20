import React, { useState, useEffect } from "react";
import "./Profile.css";
import { ImTwitter, ImGithub, ImLinkedin } from "react-icons/im";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import * as profileAPI from "../../utilities/profile-api";

export default function Profile({ user, userProfile, setUserProfile }) {

  const getProfile = async() => {
    try{
      const profile = await profileAPI.show(user._id);
      // console.log(profile);
      setUserProfile(profile);
    } catch(err) {
      console.log(err.message)
    }
  }


  useEffect(() => {
    getProfile();
  },[])

  return (
    <div className="profileContainer">
      <div className="profileTopHalf">
        <div className="profileStrip">
          <img className="profilePhoto" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="profile-pic"/>
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
          
          {/* <ImTwitter onClick={() => window.open(`${userProfile.twitter}`)} */}
          <ImTwitter onClick={() => window.open("www.google.ca")}
          
          style={{ fontSize: "40px", margin: "10px" }} />
         

          <ImGithub style={{ fontSize: "40px", margin: "10px" }} />

          <ImLinkedin style={{ fontSize: "40px", margin: "10px" }} />
        </div>
        <div className="profileJob">Software Engineer</div>
      </div>

      <div className="profileBottomHalf">
        <div className="profileBio">
          <h3>Bio</h3>
          {userProfile?<p>{userProfile.about}</p>:<p>Please enter your bio</p>}
        </div>
        <div className="profileSkills">
          <h3>Current Skills</h3>
          <p className="profileSkills">
            {/* <span>{userProfile.desiredSkill1}</span>
            {userProfile.skill1?<span>{userProfile.skill1}</span>: <span>Add Skill</span>}
            {userProfile.skill2?<span>{userProfile.skill2}</span>: <span>Add Skill</span>}
            {userProfile.skill3?<span>{userProfile.skill3}</span>: <span>Add Skill</span>} */}
          </p>
        </div>
        <div className="profileDesired">
          <h3>Desired Skills</h3>
          <p className="profileDesired">
            {/* <span>{userProfile.desiredSkill1}</span>
            <span>{userProfile.desiredSkill2}</span>
            <span>{userProfile.desiredSkill3}</span> */}
          </p>
        </div>
      </div>
    </div>
  );
}
