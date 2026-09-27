import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Dashboard from "./Dashboard";
import Applications from "./Applications";
import AddApplication from "./AddApplication";
import About from "./About";

function App() {
  const [applications, setApplications] = useState([]);

  const addApplication = (newApplication) => {
    setApplications((oldApplications) => [
      ...oldApplications,
      newApplication
    ]);
  };

  return (
    <>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/applications">Applications</Link>
        <Link to="/add-application">Add Application</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Dashboard applications={applications} />}
        />

        <Route
          path="/applications"
          element={<Applications applications={applications} />}
        />

        <Route
          path="/add-application"
          element={
            <AddApplication
              addApplication={addApplication}
            />
          }
        />

        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
    </>
  );
}

export default App;