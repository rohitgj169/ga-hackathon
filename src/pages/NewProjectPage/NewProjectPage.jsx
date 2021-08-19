import "./NewProjectPage.css";
import React from "react";
import { useState } from "react";
import * as ProjectAPI from "../../utilities/projects-api";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Form from "react-bootstrap/Form";

export default function NewProjectPage() {
  const [inputValues, setInputValues] = useState({
    title: "",
    time: "",
    description: "",
    requiredSoftware: 0,
    requiredUI: 0,
    requiredData: 0,
  });
  let history = useHistory();
  const handleChange = (evt) => {
    evt.preventDefault();
    setInputValues({ ...inputValues, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const formData = {
      title: inputValues.title,
      time: inputValues.time,
      description: inputValues.description,
      requiredSoftware: inputValues.requiredSoftware,
      requiredUI: inputValues.requiredUI,
      requiredData: inputValues.requiredData,
    };
    console.log(formData);

    try {
      await ProjectAPI.create(formData);
      Swal.fire("New Project Created!!");
      history.push("/projects");
    } catch (err) {
      console.log("error");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Project Title</label>
          <br />

          <input
            id="title"
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
          <textarea
            style={{resize:"none"}}
            id="description"
            type="text"
            name="description"
            placeholder="Give an overview of your project"
            rows="4"
            cols="50"
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
        </div>
        <div>
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
}
