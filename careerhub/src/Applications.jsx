import { useState } from "react";

function Applications() {
  const [applications, setApplications] = useState(
    JSON.parse(localStorage.getItem("applications")) || []
  );

  const deleteApplication = (index) => {
    const updatedApplications = applications.filter(
      (application, i) => i !== index
    );

    setApplications(updatedApplications);

    localStorage.setItem(
      "applications",
      JSON.stringify(updatedApplications)
    );
  };

  return (
    <div className="page">
      <h1>My Applications</h1>

      {applications.length === 0 ? (
        <p>No applications added yet.</p>
      ) : (
        applications.map((application, index) => (
          <div className="application-card" key={index}>
            <h2>{application.company}</h2>

            <p>
              <strong>Role:</strong> {application.role}
            </p>

            <p>
              <strong>Location:</strong> {application.location}
            </p>

            <p>
              <strong>Status:</strong> {application.status}
            </p>

            <button onClick={() => deleteApplication(index)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Applications;