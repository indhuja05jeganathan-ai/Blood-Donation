import { useEffect, useState } from "react";
import API from "../services/api";

export default function DonorList() {

  const [donors, setDonors] = useState([]);

  useEffect(() => {
    API.get("/donors")
      .then(res => setDonors(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">

      <h2 style={{ textAlign: "center" }}>Donor List</h2>

      <div className="card-container">

        {donors.map((d, i) => (
          <div key={i} className="donor-card">

            <p><b>Name:</b> {d.name}</p>
            <p><b>Blood Group:</b> {d.bloodGroup}</p>
            <p><b>Location:</b> {d.location}</p>
            <p><b>Contact:</b> {d.contactNumber}</p>

            <a href={`tel:${d.contactNumber}`} className="btn">
              Call 📞
            </a>

          </div>
        ))}

      </div>
    </div>
  );
}