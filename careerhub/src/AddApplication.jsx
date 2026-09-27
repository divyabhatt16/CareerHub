import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddApplication() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("Applied");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newApplication = {
      company,
      role,
      location,
      status
    };

    const oldApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    const updatedApplications = [
      ...oldApplications,
      newApplication
    ];

    localStorage.setItem(
      "applications",
      JSON.stringify(updatedApplications)
    );

    alert("Application Added!");

    navigate("/applications");
  };

  return (
    <div className="page">
      <h1>Add New Application</h1>

      <form onSubmit={handleSubmit} className="application-form">

        <label>Company Name</label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />

        <label>Job Role</label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />

        <label>Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <label>Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Rejected">Rejected</option>
        </select>

        <button type="submit">Add Application</button>

      </form>
    </div>
  );
}

export default AddApplication;