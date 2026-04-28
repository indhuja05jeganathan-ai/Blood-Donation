import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const nav = useNavigate();

  return (
    <>
      <Navbar />

      <div className="container">

        <h2 className="title">Dashboard</h2>

        <div className="card-container">

          <div className="card" onClick={() => nav("/add-donor")}>
            🩸 Add Donor
          </div>

          <div className="card" onClick={() => nav("/donor-list")}>
            📋 Donor List
          </div>

          <div className="card" onClick={() => nav("/request")}>
            🚨 Add Request
          </div>

          <div className="card" onClick={() => nav("/request-list")}>
            📄 Request List
          </div>

          <div className="card" onClick={() => nav("/notifications")}>
            🔔 Notifications
          </div>

        </div>

      </div>
    </>
  );
}