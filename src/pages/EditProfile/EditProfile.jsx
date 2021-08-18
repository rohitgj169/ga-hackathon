import React, { useState } from "react";
import * as profileApi from "../../utilities/profile-api";

export default function EditProfile({ user }) {
  const [Bio, setBio] = useState({});

  const changeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setBio({ bio: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("this is the user")
    console.log(user);
    const formData = {
      bio: Bio,
    };
    try {
      profileApi.create(formData, user._id)

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
          type="text"
          name="bio"
          onChange={changeHandler}
          placeholder="Introduce yourself..."
          rows="4"
          cols="50"
        ></textarea>
        <br></br>
        <input type="text" />
        <input className="editProfileFormInput" type="submit" />
      </form>
    </div>
  );
}

// import React ,{useState,useEffect} from "react";
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
// }
