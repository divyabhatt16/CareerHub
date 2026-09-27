import { Link } from "react-router-dom";

function Dashboard() {
  const applications =
    JSON.parse(localStorage.getItem("applications")) || [];

  const totalApplications = applications.length;

  const interviews = applications.filter(
    (application) => application.status === "Interview"
  ).length;

  const rejections = applications.filter(
    (application) => application.status === "Rejected"
  ).length;

  return (
    <div className="dashboard">
      <h1>Welcome to CareerHub</h1>
      <p>Track your job applications easily.</p>

      <div className="stats">

        <div className="card">
          <h2>{totalApplications}</h2>
          <p>Applications</p>
        </div>

        <div className="card">
          <h2>{interviews}</h2>
          <p>Interviews</p>
        </div>

        <div className="card">
          <h2>{rejections}</h2>
          <p>Rejections</p>
        </div>

      </div>

      <Link to="/add-application">
        <button>Add Application</button>
      </Link>
    </div>
  );
}

export default Dashboard;