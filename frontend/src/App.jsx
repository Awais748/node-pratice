import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserCrud from "./components/UserCrud";
import Users from "./components/Userreaddeleteupdate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserCrud />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
