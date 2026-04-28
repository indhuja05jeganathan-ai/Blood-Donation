import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import AddDonor from "./pages/AddDonor";
import DonorList from "./pages/DonorList";

import RequestPage from "./pages/RequestPage";
import RequestListPage from "./pages/RequestListPage";

import NotificationPage from "./pages/NotificationPage";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        {/* DONOR */}
        <Route path="/add-donor" element={<AddDonor />} />
        <Route path="/donor-list" element={<DonorList />} />

        {/* REQUEST */}
        <Route path="/request" element={<RequestPage />} />
        <Route path="/request-list" element={<RequestListPage />} />

        {/* NOTIFICATION */}
        <Route path="/notifications" element={<NotificationPage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;