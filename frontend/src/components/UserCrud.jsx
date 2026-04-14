import React, { useState } from "react";
import { createApi } from "../services/api";
import { useNavigate } from "react-router-dom";
const UserCrud = () => {
  const [users, setUsers] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    Gender: "",
    role: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(" Create Form Change:", e.target.name, e.target.value);

    setUsers({
      ...users,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(" Submitting User Data:", users);

    try {
      const res = await createApi.post("/register", users);

      console.log(" Create Response:", res);
      console.log(" Created User:", res.data);

      setUsers({
        FirstName: "",
        LastName: "",
        Email: "",
        Password: "",
        Gender: "",
        role: "",
      });
    } catch (error) {
      console.log(" Create Error:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create User</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="FirstName"
          placeholder="First Name"
          value={users.FirstName}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="LastName"
          placeholder="Last Name"
          value={users.LastName}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="email"
          name="Email"
          placeholder="Email"
          value={users.Email}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="password"
          name="Password"
          placeholder="Password"
          value={users.Password}
          onChange={handleChange}
        />

        <br />
        <br />

        <select name="Gender" value={users.Gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <br />
        <br />

        <select name="role" value={users.role} onChange={handleChange}>
          <option value="">Select Role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
        </select>

        <br />
        <br />

        <button type="submit">Create User</button>
        <button type="button" onClick={() => navigate("/users")}>
          Go to Users Page
        </button>
      </form>
    </div>
  );
};

export default UserCrud;
