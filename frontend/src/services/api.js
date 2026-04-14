import axios from "axios";

export const createApi = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/user`,
  headers: { "Content-Type": "application/json" },
});
export const getAllUsersApi = () => createApi.get("/allusers");
export const createUserApi = (data) => createApi.post("/register", data);
export const updateUserApi = (id, data) => createApi.put(`/update/${id}`, data);
export const deleteUserApi = (id) => createApi.delete(`/delete/${id}`);
