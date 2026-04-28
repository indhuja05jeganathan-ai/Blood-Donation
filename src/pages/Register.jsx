import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "DONOR"
  });

  const navigate = useNavigate();

  const register = async () => {
    await API.post("/users/register", form);
    alert("Registered Successfully");
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Register</h2>

        <input placeholder="Name"
          onChange={e => setForm({...form, name: e.target.value})} />

        <input placeholder="Email"
          onChange={e => setForm({...form, email: e.target.value})} />

        <input type="password"
          placeholder="Password"
          onChange={e => setForm({...form, password: e.target.value})} />

        <button onClick={register}>Register</button>
      </div>
    </>
  );
}