import { useEffect, useState } from "react";
import API from "../services/api";

export default function RequestListPage() {

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    API.get("/requests")
      .then(res => setRequests(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">

      <h2>All Blood Requests</h2>

      <div className="request-container">

        {requests.map((r, i) => (
          <div key={i} className="request-card">

            <p><b>Blood Group:</b> {r.bloodGroup}</p>
            <p><b>Location:</b> {r.location}</p>
            <p><b>Units:</b> {r.units}</p>
            <p><b>Contact:</b> {r.contactNumber}</p>

            <a className="btn" href={`tel:${r.contactNumber}`}>
              Call 📞
            </a>

          </div>
        ))}

      </div>

    </div>
  );
}