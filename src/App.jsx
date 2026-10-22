import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2 className="logo">DevLaunch 🚀</h2>

        <a href="https://github.com" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </nav>

      <main className="hero">
        <p className="tagline">BUILD. AUTOMATE. SUCCEED</p>

        <h1>
          Your journey into
          <br />
          <span>modern web development.</span>
        </h1>

        <p className="description">
          Learn React, Git, GitHub Actions, and CI/CD by building real projects.
        </p>

        <button
          className="primary-button"
          onClick={() => alert("Let's start building!")}
        >
          Start Building
        </button>

        <div className="cards">
          <div className="card">
            <h3>⚛️ React</h3>
            <p>Build interactive user interfaces.</p>
          </div>

          <div className="card">
            <h3>🐙 GitHub</h3>
            <p>Collaborate and manage your code.</p>
          </div>

          <div className="card">
            <h3>⚙️ GitHub</h3>
            <p>Automate your development workflow.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
