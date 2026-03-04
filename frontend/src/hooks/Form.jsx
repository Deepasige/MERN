import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Submitted");
  };

  return (
    <div>
      <h1>Form using useState</h1>

      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="department">Department</label>
        <input
          id="department"
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Submit</button>

      </form>
    </div>
  );
};

export default Form;