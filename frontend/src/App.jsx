import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserCrud from "./components/UserCrud";
import Users from "./components/Userreaddeleteupdate";
import Login from "./components/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/usercrud" element={<UserCrud />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
