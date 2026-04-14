import React, { useEffect, useState } from "react";
import { getAllUsersApi, deleteUserApi, updateUserApi } from "../services/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  // READ USERS
  const fetchUsers = async () => {
    try {
      console.log(" Fetching users from backend");

      const res = await getAllUsersApi();

      console.log(" API Response:", res);
      console.log(" Users Data:", res.data.data);

      setUsers(res.data.data);
    } catch (error) {
      console.log(" Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // DELETE USER
  const handleDelete = async (id) => {
    try {
      console.log(" Deleting user with ID:", id);

      const res = await deleteUserApi(id);

      console.log(" Delete Response:", res);

      fetchUsers();
    } catch (error) {
      console.log("Delete Error:", error);
    }
  };

  // EDIT CLICK
  const handleEditClick = (user) => {
    console.log(" Edit clicked user:", user);
    setEditUser(user);
  };

  // INPUT CHANGE
  const handleChange = (e) => {
    console.log(" Field changed:", e.target.name, e.target.value);

    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      console.log("🟣 Updating user ID:", editUser._id);
      console.log("🟣 Updated Data:", editUser);

      const res = await updateUserApi(editUser._id, editUser);

      console.log(" Update Response:", res);

      setEditUser(null);
      fetchUsers();
    } catch (error) {
      console.log(" Update Error:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Users</h2>

      {users.map((user) => (
        <div key={user._id} style={{ border: "1px solid black", marginBottom: 10, padding: 10 }}>
          <p>{user.FirstName} {user.LastName}</p>
          <p>{user.Email}</p>
          <p>{user.Gender}</p>
          <p>{user.role}</p>

          <button onClick={() => handleEditClick(user)}>Edit</button>
          <button onClick={() => handleDelete(user._id)}>Delete</button>
        </div>
      ))}

      {editUser && (
        <div style={{ marginTop: 20 }}>
          <h3>Update User</h3>

          <form onSubmit={handleUpdate}>
            <input
              name="FirstName"
              value={editUser.FirstName}
              onChange={handleChange}
            />

            <input
              name="LastName"
              value={editUser.LastName}
              onChange={handleChange}
            />

            <input
              name="Email"
              value={editUser.Email}
              onChange={handleChange}
            />

            <select name="Gender" value={editUser.Gender} onChange={handleChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <select name="role" value={editUser.role} onChange={handleChange}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
            </select>

            <button type="submit">Update</button>
            <button type="button" onClick={() => setEditUser(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Users;