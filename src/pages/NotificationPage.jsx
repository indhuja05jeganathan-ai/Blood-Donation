import { useEffect, useState } from "react";
import API from "../services/api";

export default function NotificationPage() {

  const [data, setData] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    API.get(`/notifications/${userId}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [userId]);

  return (
    <div className="container">

      <h2 className="page-title">Notifications 🔔</h2>

      <div className="notification-container">

        {data.length === 0 ? (
          <div className="notification-empty">No notifications</div>
        ) : (
          data.map((n, i) => {

            const parts = (n.message || "").split("|");

            const name = parts[0] || "Unknown";
            const blood = parts[1] || "-";
            const location = parts[2] || "-";
            const contact = parts[3] || "";

            return (
              <div key={i} className="notification-card">

                {/* HEADER */}
                <div className="notif-header">
                  🧑 {name}
                </div>

                {/* BODY DETAILS */}
                <div className="notif-body">

                  <div className="notif-item">
                    <span>🩸 Blood Group</span>
                    <b>{blood}</b>
                  </div>

                  <div className="notif-item">
                    <span>📍 Location</span>
                    <b>{location}</b>
                  </div>

                  <div className="notif-item">
                    <span>📌 Status</span>
                    <b>{n.status}</b>
                  </div>

                </div>

                {/* ACTION */}
                <div className="notif-footer">

                  {contact && (
                    <a href={`tel:${contact}`} className="btn">
                      Call 📞
                    </a>
                  )}

                </div>

              </div>
            );
          })
        )}

      </div>

    </div>
  );
}