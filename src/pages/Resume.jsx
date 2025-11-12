function Resume() {
  return (
    <main>
      <section className="resume-section section" id="resume">
        <h2 className="section-title">Resume</h2>
        <div className="section-content">
          <div className="resume-section">
            <ul className="education-list">
              <h2 className="resume-section-title">Education</h2>
              <li>
                <h3>University of Maryland Baltimore County</h3>
                <p>Master of Science in Human Centered Computing, May 2027</p>
              </li>
              <li>
                <h3>North Carolina A&T State University</h3>
                <p>Bachelor of Science in Computer Science, May 2025</p>
                <p>GPA: 3.34</p>
              </li>
            </ul>
          </div>
          <div className="resume-section">
            <ul className="skills-list">
              <h2 className="resume-section-title">Skills</h2>
              <li>Figma</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>C++</li>
              <li>React</li>
              <li>Git</li>
            </ul>
          </div>
          <div className="resume-section">
            <ul className="project-list">
              <h2 className="resume-section-title">Projects</h2>
              <li>
                <h3>Bakery Website</h3>
                <ul>
                  <li>Create a responsive bakery website using HTML, CSS, and JavaScript to ensure seamless display across devices.</li>
                  <li>Customized website design and features including consistent styling, intuitive navigation, and a mobile-friendly layout.</li>
                </ul>
              </li>
              <li>
                <h3>Girls Who Code Leadership Academy</h3>
                <ul>
                  <li>Embodied and practiced leadership through participation in Girls Who Code's four-month leadership development and career readiness program with leaders and engineers at RTX.</li>
                  <li>Developed an application using React Native and Expo Go frameworks to allow users to respond to journal prompts and practice mindfulness activities to address mental health struggles.</li>
                </ul>
              </li>
              <li>
                <h3>Computer Program Design Project</h3>
                <ul>
                  <li>Developed a functional calculator application in Java, enabling accurate calculations based on user inputs.</li>
                  <li>Implemented intuitive graphical user interfaces using Java Swing, enhancing user interaction and input management.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="resume-section">
            <ul className="experience-list">
              <h2 className="resume-section-title">Experience</h2>
              <li>
                <h3>Task Associate</h3>
                <h4>Ulta Beauty</h4>
                <ul>
                  <li>Organized products in backroom and maintained displays ensuring they were stocked with merchandise.</li>
                  <li>Assisted customers with brand knowledge and product selection</li>
                  <li>Served as the lead associate in the fulfillment and shipping of high volumes of online customer orders.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="resume-section">
            <ul className="involvement-list">
              <h2 className="resume-section-title">Involvement</h2>
              <li>
                <h4>Girls Who Code - College Loop at NC A&T State University  |   September 2024 - May 2025</h4>
                <p>Vice President</p>
              </li>
              <li>
                <h4>Just Thirty Minutes Mentoring  | August 2023 - May 2025</h4>
                <p>Social Media Chair</p>
              </li>
              <li>
                <h4>Upsilon Pi Epsilon Honorary Society  | October 2024 - May 2025</h4>
                <p>General Member</p>
              </li>
            </ul>
          </div>
          <div className="resume-section">
            <a className="download-button" href="/Dana Brunson Resume 0925 (1).pdf" download="Dana Brunson Resume">Download</a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Resume

