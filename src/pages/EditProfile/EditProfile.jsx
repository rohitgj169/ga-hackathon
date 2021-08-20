import React, { useState } from "react";
import * as profileApi from "../../utilities/profile-api";
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";
import "./EditProfile.css"

import { Form } from 'react-bootstrap'

export default function EditProfile({ user, setUserProfile }) {


  const [inputValues, setInputValues] = useState({
    bio: "",
    imageUrl: "",
    profession: "",
    portfolio: "",
    linkedin: "",
    twitter: "",
    github: "",
    skills: [],
    desiredSkills: [],
  });

  let history = useHistory();
  const changeHandler = (evt) => {
    evt.preventDefault();
    setInputValues({ ...inputValues, [evt.target.name]: evt.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(user);
    const formData = {
      bio: inputValues.bio,
      imageUrl: inputValues.imageUrl,
      profession: inputValues.profession,
      portfolio: inputValues.portfolio,
      linkedin: inputValues.linkedin,
      twitter: inputValues.twitter,
      github: inputValues.github,
      skill1: inputValues.skill1,
      skill2: inputValues.skill2,
      skill3: inputValues.skill3,
      desiredSkill1: inputValues.desiredSkill1,
      desiredSkill2: inputValues.desiredSkill2,
      desiredSkill3: inputValues.desiredSkill3,
    };
    console.log(formData);
    try {
      const newProfile = await profileApi.create(formData, user._id);
      setUserProfile(newProfile);
      console.log(newProfile);
      Swal.fire('You have updated your profile!')
      history.push("/user/profile");
    } catch(err) {
      console.log("error")
      console.log(err)
    }
  };

  return (
    <div className="EditProfile">
      <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" style={{backgroundImage: "contain", height: "10vh", width: "20vw"}}/>
      <form onSubmit={submitHandler}>
        <p>Profile Photo</p>
      <input
      style={{width: "89vw", height: "3vh"}}
            type="text"
            name="imageUrl"
            placeholder="Enter Image URL..."
            value={inputValues.imageUrl}
            onChange={changeHandler}
          />
        <p>Bio</p>
        <textarea
          style={{resize:"none", width:"88vw"}}
          type="text"
          name="bio"
          onChange={changeHandler}
          placeholder="Introduce yourself..."
          rows="4"
          cols="50"
        ></textarea>
        <br></br>
        <p>Profession</p>
        <Form.Select
        style={{width: "89vw", height: "3vh"}}
              name="profession"
              value={inputValues.profession}
              onChange={changeHandler}
            >
              <option value="Software Engineer">Software Engineer</option>
              <option value="User Experience Designer">User Experience Designer</option>
              <option value="Data Scientist">Data Scientist</option>
              
            </Form.Select>
            <p>Social Media Links</p>
            <input
            style={{width: "86vw", height: "3vh"}}
            type="text"
            name="portfolio"
            placeholder="Portfolio"
            value={inputValues.portfolio}
            onChange={changeHandler}
          /><br></br>
          <input
          style={{width: "86vw", height: "3vh"}}
            type="text"
            name="linkedin"
            placeholder="Linkedin"
            value={inputValues.linkedin}
            onChange={changeHandler}
          /><br></br>
          <input
          style={{width: "86vw", height: "3vh"}}
            type="text"
            name="twitter"
            placeholder="Twitter"
            value={inputValues.twitter}
            onChange={changeHandler}
          /><br></br>
          <input
          style={{width: "86vw", height: "3vh"}}
            type="text"
            name="github"
            placeholder="Github"
            value={inputValues.github}
            onChange={changeHandler}
          /><br></br>

          
          <p>Top 3 Current Skills</p>
            <Form.Select
            style={{width: "89vw", height: "3vh", marginBottom: "5px"}}
              name="skill1"
              value={inputValues.skill1}
              onChange={changeHandler}
              placeholder="Select Skill"
            >
              <option value="WireFraming">WireFraming</option>
              <option value="Research">Research</option>
              <option value="User Testing">User Testing</option>
              <option value="UI Design">UI Design</option>
              <option value="Mobile Design">Mobile Design</option>
              <option value="Interviewing">Interviewing</option>
              <option value="Copy Writing">Copy Writing</option>
              <option value="Prototyping">Prototyping</option>
              <option value="Information Architecture">Information Architecture</option>
              <option value="User Flows">User Flows</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JavaScript">JavaScript</option>
              <option value="MongoDB/MongooseJS">MongoDB/MongooseJS</option>
              <option value="NodeJS/ExpressJS">NodeJS/ExpressJS</option>
              <option value="Python">Python</option>
              <option value="Django">Django</option>
              <option value="PostgreSQL">PostgreSQL</option>
              <option value="ReactJS">ReactJS</option>
              <option value="Java">Java</option>
            </Form.Select><br></br>
            <Form.Select
            style={{width: "89vw", height: "3vh", marginBottom: "5px"}}
              name="skill2"
              value={inputValues.skill2}
              onChange={changeHandler}
            >  
              <option value="Research">Research</option>
              <option value="WireFraming">WireFraming</option>
              <option value="User Testing">User Testing</option>
              <option value="UI Design">UI Design</option>
              <option value="Mobile Design">Mobile Design</option>
              <option value="Interviewing">Interviewing</option>
              <option value="Copy Writing">Copy Writing</option>
              <option value="Prototyping">Prototyping</option>
              <option value="Information Architecture">Information Architecture</option>
              <option value="User Flows">User Flows</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JavaScript">JavaScript</option>
              <option value="MongoDB/MongooseJS">MongoDB/MongooseJS</option>
              <option value="NodeJS/ExpressJS">NodeJS/ExpressJS</option>
              <option value="Python">Python</option>
              <option value="Django">Django</option>
              <option value="PostgreSQL">PostgreSQL</option>
              <option value="ReactJS">ReactJS</option>
              <option value="Java">Java</option>
            </Form.Select><br></br>
            <Form.Select
            style={{width: "89vw", height: "3vh", marginBottom: "5px"}}
              name="skill3"
              value={inputValues.skill3}
              onChange={changeHandler}
            >
              
              <option value="User Testing">User Testing</option>
              <option value="WireFraming">WireFraming</option>
              <option value="Research">Research</option>
              <option value="UI Design">UI Design</option>
              <option value="Mobile Design">Mobile Design</option>
              <option value="Interviewing">Interviewing</option>
              <option value="Copy Writing">Copy Writing</option>
              <option value="Prototyping">Prototyping</option>
              <option value="Information Architecture">Information Architecture</option>
              <option value="User Flows">User Flows</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JavaScript">JavaScript</option>
              <option value="MongoDB/MongooseJS">MongoDB/MongooseJS</option>
              <option value="NodeJS/ExpressJS">NodeJS/ExpressJS</option>
              <option value="Python">Python</option>
              <option value="Django">Django</option>
              <option value="PostgreSQL">PostgreSQL</option>
              <option value="ReactJS">ReactJS</option>
              <option value="Java">Java</option>
            </Form.Select><br></br>
            
            <p>Top 3 Desired Skills</p>
            <Form.Select
            
            style={{width: "89vw", height: "3vh", marginBottom: "5px"}}
              name="desiredSkills"
              value={inputValues.desiredSkill1}
              onChange={changeHandler}
            >
              
              <option value="UI Design">UI Design</option>
              <option value="WireFraming">WireFraming</option>
              <option value="Research">Research</option>
              <option value="User Testing">User Testing</option>
              <option value="Mobile Design">Mobile Design</option>
              <option value="Interviewing">Interviewing</option>
              <option value="Copy Writing">Copy Writing</option>
              <option value="Prototyping">Prototyping</option>
              <option value="Information Architecture">Information Architecture</option>
              <option value="User Flows">User Flows</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JavaScript">JavaScript</option>
              <option value="MongoDB/MongooseJS">MongoDB/MongooseJS</option>
              <option value="NodeJS/ExpressJS">NodeJS/ExpressJS</option>
              <option value="Python">Python</option>
              <option value="Django">Django</option>
              <option value="PostgreSQL">PostgreSQL</option>
              <option value="ReactJS">ReactJS</option>
              <option value="Java">Java</option>
            </Form.Select><br></br>
            <Form.Select
            style={{width: "89vw", height: "3vh", marginBottom: "5px"}}
              name="desiredSkill2"
              value={inputValues.desiredSkill2}
              onChange={changeHandler}
            >
           
              <option value="Information Architecture">Information Architecture</option>
              <option value="WireFraming">WireFraming</option>
              <option value="Research">Research</option>
              <option value="User Testing">User Testing</option>
              <option value="UI Design">UI Design</option>
              <option value="Mobile Design">Mobile Design</option>
              <option value="Interviewing">Interviewing</option>
              <option value="Copy Writing">Copy Writing</option>
              <option value="Prototyping">Prototyping</option>
              <option value="User Flows">User Flows</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JavaScript">JavaScript</option>
              <option value="MongoDB/MongooseJS">MongoDB/MongooseJS</option>
              <option value="NodeJS/ExpressJS">NodeJS/ExpressJS</option>
              <option value="Python">Python</option>
              <option value="Django">Django</option>
              <option value="PostgreSQL">PostgreSQL</option>
              <option value="ReactJS">ReactJS</option>
              <option value="Java">Java</option>
            </Form.Select><br></br>
            <Form.Select
            style={{width: "89vw", height: "3vh", marginBottom: "5px"}}
              name="desiredSkill3"
              value={inputValues.desiredSkill3}
              onChange={changeHandler}
            >
              
              <option value="JavaScript">JavaScript</option>
              <option value="WireFraming">WireFraming</option>
              <option value="Research">Research</option>
              <option value="User Testing">User Testing</option>
              <option value="UI Design">UI Design</option>
              <option value="Mobile Design">Mobile Design</option>
              <option value="Interviewing">Interviewing</option>
              <option value="Copy Writing">Copy Writing</option>
              <option value="Prototyping">Prototyping</option>
              <option value="Information Architecture">Information Architecture</option>
              <option value="User Flows">User Flows</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="MongoDB/MongooseJS">MongoDB/MongooseJS</option>
              <option value="NodeJS/ExpressJS">NodeJS/ExpressJS</option>
              <option value="Python">Python</option>
              <option value="Django">Django</option>
              <option value="PostgreSQL">PostgreSQL</option>
              <option value="ReactJS">ReactJS</option>
              <option value="Java">Java</option>
            </Form.Select><br></br>

        {/* <input type="text" /> */}
        {/* <button><input style={{position: "relative", right: "35vw"}} className="editProfileFormInput" name="Done" type="submit" />Done</button> */}
        <button type="submit" className="editProfileFormSubmit" name="Done">Done</button>
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
        
