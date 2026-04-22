import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/authSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    console.log("click");
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  if (user) return <h2>Welcome {user.name}!</h2>;

  return (
    <div>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>{loading ? "Loading..." : "Login"}</button>
    </div>
  );
}
