import { useState } from "react";
import API from "../services/api";

export default function AddDonor() {

  const [form, setForm] = useState({
    name: "",
    bloodGroup: "",
    location: "",
    contactNumber: ""
  });

  const userId = localStorage.getItem("userId");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {

    API.post(`/donors/${userId}`, {
      ...form,
      available: true
    })
    .then(() => {

      alert("Donor Added Successfully");

      // reset form
      setForm({
        name: "",
        bloodGroup: "",
        location: "",
        contactNumber: ""
      });

    })
    .catch(err => {
      console.log(err.response?.data || err.message);
      alert("Error saving donor");
    });

  };

  return (
    <div className="container">

      <h2>Add Donor</h2>

      {/* 🔥 CENTER FORM */}
      <div className="form-container">

        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

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

        <button onClick={handleSubmit}>
          Save Donor
        </button>

      </div>

    </div>
  );
}