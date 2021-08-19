import React, { useState } from "react";
import * as profileApi from "../../utilities/profile-api";
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";

export default function EditProfile({ user }) {
  const [Bio, setBio] = useState({});
  let history = useHistory()
  const changeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setBio({ bio: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(user);
    const formData = {
      bio: Bio,
    };
    try {
      profileApi.create(formData, user._id)
      Swal.fire('You have updated your profile!')
      history.push("/user/profile");
    } catch(err) {
      console.log("error")
    }
  };

  return (
    <div>
      <h1> Edit ProfilePage</h1>
      <form onSubmit={submitHandler}>
        <p>Enter your bio info</p>
        <textarea
          style={{resize:"none"}}
          type="text"
          name="bio"
          onChange={changeHandler}
          placeholder="Introduce yourself..."
          rows="4"
          cols="50"
        ></textarea>
        <br></br>
        {/* <input type="text" /> */}
        <input className="editProfileFormInput" type="submit" />
      </form>
    </div>
  );
}