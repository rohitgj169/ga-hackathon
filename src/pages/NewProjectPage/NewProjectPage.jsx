import React from "react";
import { useState } from "react";

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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = {
      title:inputValues.title
    }
    console.log(formData);
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
