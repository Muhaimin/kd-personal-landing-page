import './App.css'

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section data-testid="hero" className="hero">
        <h1>Your Name</h1>
        <h2>Software Developer & Designer</h2>
        <p>Welcome to my personal landing page!</p>
      </section>

      {/* About Section */}
      <section data-testid="about" className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate software developer with expertise in web development,
          mobile applications, and cloud technologies. I love creating innovative
          solutions that make a difference in people's lives and contribute to
          meaningful projects that solve real-world problems.
        </p>
      </section>

      {/* Projects Section */}
      <section data-testid="projects" className="projects">
        <h2>My Projects</h2>
        <article className="project">
          <h3>Project One</h3>
          <p>A modern web application built with React and TypeScript.</p>
        </article>
        <article className="project">
          <h3>Project Two</h3>
          <p>An innovative mobile app using React Native.</p>
        </article>
        <article className="project">
          <h3>Project Three</h3>
          <p>A cloud-based solution for data analytics.</p>
        </article>
      </section>

      {/* Contact Section */}
      <section data-testid="contact" className="contact">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me through the following channels:</p>
        <ul>
          <li><a href="mailto:your.email@example.com">Email</a></li>
          <li><a href="https://github.com/yourusername">GitHub</a></li>
          <li><a href="https://linkedin.com/in/yourusername">LinkedIn</a></li>
        </ul>
      </section>
    </div>
  )
}

export default App