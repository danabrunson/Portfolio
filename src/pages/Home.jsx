import { Link } from 'react-router-dom'
import { getAssetPath } from '../utils/paths'

function Home() {
  return (
    <main>
      <section className="home-section" id="home">
        <div className="section-content">
          <div className="home-details">
            <h1 className="home-title">Dana Brunson</h1>
            <p className="home-tagline">Developer and Designer.</p>
            <div className="home-buttons">
              <a href={getAssetPath('/Dana Brunson Resume 0925 (1).pdf')} target="_blank" rel="noopener noreferrer" className="home-resume-link"> View Resume</a>
              <Link to="/projects" className="home-projects-link">View Projects</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home


