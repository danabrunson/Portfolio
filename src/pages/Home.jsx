import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { getAssetPath } from '../utils/paths'

function Home() {
  const titleRef = useRef(null)
  const taglineRef = useRef(null)
  const buttonsRef = useRef(null)

  useEffect(() => {
    // Trigger animations on mount
    if (titleRef.current) {
      titleRef.current.classList.add('animate-in')
    }
    if (taglineRef.current) {
      setTimeout(() => {
        taglineRef.current.classList.add('animate-in')
      }, 200)
    }
    if (buttonsRef.current) {
      setTimeout(() => {
        buttonsRef.current.classList.add('animate-in')
      }, 400)
    }
  }, [])

  return (
    <main>
      <section className="home-section" id="home">
        <div className="section-content">
          <div className="home-details">
            <h1 ref={titleRef} className="home-title">Dana Brunson</h1>
            <p ref={taglineRef} className="home-tagline">Developer and Designer.</p>
            <div ref={buttonsRef} className="home-buttons">
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


