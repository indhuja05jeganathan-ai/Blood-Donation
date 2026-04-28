import { useState } from "react";
import API from "../services/api";

export default function RequestPage() {

  const [form, setForm] = useState({
    bloodGroup: "",
    location: "",
    contactNumber: "",
    units: ""
  });

  const userId = localStorage.getItem("userId");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    API.post(`/requests/${userId}`, form)
      .then(() => {
        alert("Request Sent Successfully");

        setForm({
          bloodGroup: "",
          location: "",
          contactNumber: "",
          units: ""
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container">

      <h2 className="page-title">Blood Request 🩸</h2>

      {/* 🔥 CARD STYLE FORM */}
      <div className="request-form">

        <input
          name="bloodGroup"
          placeholder="Blood Group"
          value={form.bloodGroup}
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
        />

        <input
          name="contactNumber"
          placeholder="Contact Number"
          value={form.contactNumber}
          onChange={handleChange}
        />

        <input
          name="units"
          placeholder="Units"
          value={form.units}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>
          Send Request
        </button>

      </div>

    </div>
  );
}