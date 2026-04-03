function About() {
  return (
    <div>
      <div className="container-fluid p-0">
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Gokul <span className="text-primary ms-1">Mori</span>
            </h1>
            <div className="subheading mb-5">
              Indore · 8435237630 ·{" "}
              <a
                className="lowercase ms-1"
                href="mailto:gokulmori234@email.com?subject=Job Opportunity&body=Hello Gokul,"
              >
                gokulmori234@email.com
              </a>
            </div>
            <p className="lead mb-5 text-muted">
              Frontend Developer with 3 years of experience in developing
              dynamic and user-focused web applications. Hands-on experience in
              implementing RBAC systems, LMS platforms, and networking-based
              modules. Known for creating clean, responsive interfaces and
              improving overall user experience. Strong problem-solving skills
              with the ability to adapt quickly to new challenges. Committed to
              delivering high-quality and efficient solutions.
            </p>
            <div className="social-icons">
              <a
                className="social-icon"
                href="https://www.linkedin.com/in/gokul-mori"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="social-icon" href="#!">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
