function About() {
  return (
    <div className="page">
      <h1>About CareerHub</h1>

      <div className="about-card">
        <h2>Your Job Application Tracker</h2>

        <p>
          CareerHub is a simple web application that helps you
          manage and track your job applications in one place.
        </p>

        <div className="about-features">
          <div>
            <h3>📋 Track Applications</h3>
            <p>Keep all your job applications organized.</p>
          </div>

          <div>
            <h3>📊 View Statistics</h3>
            <p>See your applications, interviews and rejections.</p>
          </div>

          <div>
            <h3>💾 Save Your Data</h3>
            <p>Your applications are saved in your browser.</p>
          </div>
        </div>

        <p className="about-footer">
          Built with ReactJS, JavaScript, HTML and CSS.
        </p>
      </div>
    </div>
  );
}

export default About;