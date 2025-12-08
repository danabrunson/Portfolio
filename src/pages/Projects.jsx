import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

function Projects() {
  return (
    <main>
      <section className="projects-section section" id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="section-content">
          <div className="projects-grid">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                to={`/projects/${project.id}`}
                className="project-card"
              >
                <div className="project-card-image">
                  <img src={project.thumbnail} alt={project.title} />
                </div>
                <div className="project-card-content">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-card-title">{project.title}</h3>
                  <div className="project-card-skills">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="project-skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Projects
