import React from "react";
import { useState } from "react";
import * as ProjectAPI from "../../utilities/projects-api";

export default function NewProjectPage() {
  const [inputValues, setInputValues] = useState({
    title: "",
    // type: "",
    // description: "",
  });

  const handleChange = (evt) => {
    evt.preventDefault();
    setInputValues({ ...inputValues, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const formData = {
      title: inputValues.title,
    };
    console.log(formData);
    try {
      await ProjectAPI.create(formData);
    } catch (err) {
      console.log("error");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Project Title</label>
          <input
            type="text"
            name="title"
            value={inputValues.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
