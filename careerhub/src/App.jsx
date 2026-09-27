import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Applications from "./Applications";


import { useState } from "react";
import {  useEffect } from "react";

function App() {

  const [showForm, setShowForm] = useState(false);
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  
  const [jobs, setJobs] = useState(
  JSON.parse(localStorage.getItem("jobs")) || []
);
  const [date, setDate] = useState("");

 useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);



  function addJob(e) {
    e.preventDefault();

    const newJob = {
  company: company,
  role: role,
  location: location,
  date: date,
  status: status
};

    setJobs([...jobs, newJob]);
    setLocation("");
    setCompany("");
    setRole("");
    setShowForm(false);
    setStatus("Applied");
    setDate("");
  }
function deleteJob(index) {
  const newJobs = jobs.filter((job, i) => i !== index);

  setJobs(newJobs);
}
  return (
    <div className="app">

      {/* Sidebar */}

      <aside className="sidebar">

        <h2>💼 CareerHub</h2>
<nav>
            <Link to="/">Dashboard</Link>

            <Link to="/applications">
              Applications
            </Link>

            <Link to="/add-application">
              Add Application
            </Link>
          </nav>

      </aside>
     <Routes>

          <Route path="/" element={<Dashboard />} />

          <Route
            path="/applications"
            element={<Applications />}
          />

          <Route
            path="/add-application"
            element={<h1>Add Application</h1>}
          />

        </Routes>

      {/* Main Content */}

      <main className="main-content">

        <header>

          <div>
            <h1>Dashboard</h1>
            <p>Track your job search in one place.</p>
          </div>

          <button onClick={() => setShowForm(true)}>
            + Add Job
          </button>

        </header>


        {/* Add Job Form */}

        {showForm && (

          <div className="form-container">

            <h2>Add Job</h2>

            <form onSubmit={addJob}>

              <input
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <input
                type="text"
                placeholder="Job Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
              <input
              type="text"
               placeholder="Location"
               value={location}
               onChange={(e) => setLocation(e.target.value)}
              />
              <input
            type="date"
            value={date}
              onChange={(e) => setDate(e.target.value)}
             />
              <select
              value={status}
               onChange={(e) => setStatus(e.target.value)}
                >
               <option value="Applied">Applied</option>
               <option value="Interview">Interview</option>
                 <option value="Selected">Selected</option>
                <option value="Rejected">Rejected</option>
               </select>

              <button type="submit">
                Save
              </button>

              <button
                type="button"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

            </form>

          </div>

        )}
        


        {/* Statistics */}

        <section className="stats">
          

  <div className="stat-card">
    <h3>Total Applications</h3>
    <p>{jobs.length}</p>
  </div>

  <div className="stat-card">
    <h3>Applied</h3>
    <p>
      {jobs.filter((job) => job.status === "Applied").length}
    </p>
  </div>

  <div className="stat-card">
    <h3>Interview</h3>
    <p>
      {jobs.filter((job) => job.status === "Interview").length}
    </p>
  </div>

  <div className="stat-card">
    <h3>Selected</h3>
    <p>
      {jobs.filter((job) => job.status === "Selected").length}
    </p>
  </div>

  <div className="stat-card">
    <h3>Rejected</h3>
    <p>
      {jobs.filter((job) => job.status === "Rejected").length}
    </p>
  </div>

</section>



        {/* Applications */}

        <section className="applications">

          <h2>Recent Applications</h2>

          {jobs.map((job, index) => (

  <div className="job-card" key={index}>

    <div>
      <h3>{job.company}</h3>
    <p>
  {job.role} • {job.location} • {job.date}
</p>
    </div>
<span className="status applied">
  {job.status}
</span>
    <button onClick={() => deleteJob(index)}>
      Delete
    </button>

  </div>

))}

        </section>

      </main>

    </div>
  );
}

export default App;