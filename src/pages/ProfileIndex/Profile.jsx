import React, { useState, useEffect } from "react";
import "./Profile.css";
import { ImTwitter, ImGithub, ImLinkedin } from "react-icons/im";
import { AiFillEdit } from "react-icons/ai";
import { Redirect, Route, Switch, Link } from "react-router-dom";
import * as profileAPI from "../../utilities/profile-api";

export default function Profile({ user }) {
  const [userProfile, setUserProfile] = useState(null)
  console.log(userProfile);

  const getProfile = async() => {
    try{
      const profile = await profileAPI.show(user._id);
      console.log(profile);
      setUserProfile(profile);
    } catch(err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
      setUserProfile({
          about: ""
      })
    getProfile();
  },[])

  return (
    <div className="profileContainer">
      <div className="profileTopHalf">
        <div className="profileStrip">
          {/* <img className="profilePhoto" src={props.userObj.imageUrl} alt="profile-pic"/> */}
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
          <ImTwitter style={{ fontSize: "40px", margin: "10px" }} />

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
            <span>Wireframing</span>
            <span>Front End Development</span>
            <span>Interaction Design</span>
          </p>
        </div>
        <div className="profileDesired">
          <h3>Desired Skills</h3>
          <p className="profileDesired">
            <span>Wireframing</span>
            <span>Front End Development</span>
            <span>Interaction Design</span>
          </p>
        </div>
      </div>
    </div>
  );
}
