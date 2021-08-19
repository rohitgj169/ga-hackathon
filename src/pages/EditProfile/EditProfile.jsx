import React, { useState } from "react";
import * as profileApi from "../../utilities/profile-api";
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";
import "./EditProfile.css"
import { Form } from 'react-bootstrap'

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
      console.log(err)
    }
  };

  return (
    <div className="EditProfile">
      <h1> Edit Profile Page</h1>
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
        <Form.Select
              name="requiredSoftware"
              value={"1"}
              onChange={submitHandler}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Form.Select>

        {/* <input type="text" /> */}
        <input className="editProfileFormInput" type="submit" />
      </form>
    </div>
  );

}


{/* <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Project Title</label>
          <br />

          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            value={inputValues.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Project Brief</label>
          <br />
          <input
            type="text"
            name="description"
            placeholder="Give an overview of your project"
            value={inputValues.description}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <label htmlFor="title">Members Required</label>
        <div className="new-project-members-container">
          <div>
            <h5>Software Engineer</h5>
          </div>
          <div>
            <Form.Select
              name="requiredSoftware"
              value={inputValues.requiredSoftware}
              onChange={handleChange}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Form.Select>
          </div>
        </div>
        <div className="new-project-members-container">
          <div>
            <h5>User Experience Design</h5>
          </div>
          <div>
            <Form.Select
              name="requiredUI"
              value={inputValues.requiredUI}
              onChange={handleChange}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Form.Select>
          </div>
        </div>
        <div className="new-project-members-container">
          <div>
            <h5>Data Science</h5>
          </div>
          <div>
            <Form.Select
              name="requiredData"
              value={inputValues.requiredData}
              onChange={handleChange}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Form.Select>
          </div>
        </div>
        <div>
          <label htmlFor="time">Time Commitment</label>
          <br />
          <input
            type="text"
            name="time"
            placeholder="Enter number of hours"
            value={inputValues.time}
            onChange={handleChange}
          />
        </div> */}
        



{// import React ,{useState,useEffect} from "react";
// import axios from "axios"
// import './Profile.css'
// import { ImTwitter, ImGithub, ImLinkedin } from 'react-icons/im'
// import { AiFillEdit } from 'react-icons/ai'

// export default function Profile(props) {
//     const [userObj, setUserObj] = useState({props})
//     const userObject = props.userObj
//     console.log(props.userObj)

//     useEffect(() => {
//         setUserObj(props);
//       }, [props]);

//       useEffect((userObj) => {
//           async function axiosCreateProfile() {
//             const res = await axios.post('http://localhost:3001/users/createProfile', {user: userObject})
//             console.log(res)
//             // .then((res) => console.log(res))
//           }
//           axiosCreateProfile()
//       }, [])

//     return (

//         <div className="profileContainer">
//             <div className="profileTopHalf">
//                 <div className="profileStrip">

//                     <img className="profilePhoto" src={props.userObj.imageUrl}/>

//                     </div>
//                     <div className="profileEditIcon">
//                         <a href="/">
//                           <AiFillEdit style={{ fontSize: "20px", margin: "10px",}}/>
//                           </a>
//                     </div>

//                 <div className="profileDetails">
//                     <p className="profileName">{props.userObj.name}</p>
//                 </div>
//                 <div className="profileIcons">
//                     <ImTwitter style={{ fontSize: "40px", margin: "10px" }}/>

//                     <ImGithub style={{ fontSize: "40px", margin: "10px" }}/>

//                     <ImLinkedin style={{ fontSize: "40px", margin: "10px" }}/>
//                 </div>
//                 <div className="profileJob">
//                     Software Engineer
//                 </div>
//             </div>

//             <div className="profileBottomHalf">
//                 <div className="profileBio">
//                 <form onSubmit={}>
//                 <p>Enter your bio</p>
//                  <input
//                     type='text'
//                     onChange={
//                     />
//                 <input
//                     type='submit'
//                     />
//                 </form>
//                 <h3>Bio</h3>
//                 <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
//                 </div>
//                 <div className="profileSkills">
//                     <h3>Current Skills</h3>
//                     <p className="profileSkills">
//                         <span>Wireframing</span>
//                         <span>Front End Development</span>
//                         <span>Interaction Design</span>
//                     </p>
//                 </div>
//                 <div className="profileDesired">
//                     <h3>Desired Skills</h3>
//                     <p className="profileDesired">
//                         <span>Wireframing</span>
//                         <span>Front End Development</span>
//                         <span>Interaction Design</span>
//                     </p>
//                 </div>
//             </div>

//         </div>
//     )
// }

// import React from 'react'

// export default function EditProfile() {
//     return (
//         <div>

//         </div>
//     )
// 
//

}