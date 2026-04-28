import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const login = async () => {
    const res = await API.post("/users/login", form);

    localStorage.setItem("userId", res.data.id);

    alert("Login Success");
    navigate("/dashboard");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Login</h2>

        <input placeholder="Email"
          onChange={e => setForm({...form, email: e.target.value})} />

        <input type="password"
          placeholder="Password"
          onChange={e => setForm({...form, password: e.target.value})} />

        <button onClick={login}>Login</button>

        <p onClick={() => navigate("/register")} style={{cursor:"pointer"}}>
          New user? Register
        </p>
      </div>
    </>
  );
}