import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <main>
        <section className="projects-section section">
          <div className="section-content">
            <h2 className="section-title">Project Not Found</h2>
            <Link to="/projects" className="back-link">← Back to Projects</Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className="project-detail-section section" id="project-detail">
        <div className="section-content">
          <Link to="/projects" className="back-link">← Back to Projects</Link>
          
          <div className="project-detail-header">
            <span className="project-category">{project.category}</span>
            <h1 className="project-detail-title">{project.title}</h1>
          </div>

          <div className="project-detail-content">
            <div className="case-study-content">
              <h4>Problem Statement</h4>
              <p>{project.problemStatement}</p>

              <h4>Overview of Design Process</h4>
              
              <h5>Affordances and Signifiers</h5>
              {project.designProcess.affordances.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              
              {project.images && project.images.length > 0 && (
                <img src={project.images[0]} alt="Design process" />
              )}

              <h5>Mapping</h5>
              {project.designProcess.mapping.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <h4>Final Outcome</h4>
              <p>{project.finalOutcome}</p>

              <h4>Reflection</h4>
              <p>{project.reflection}</p>

              <h4>Skills</h4>
              <ul>
                {project.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProjectDetail

