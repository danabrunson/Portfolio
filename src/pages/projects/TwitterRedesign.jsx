import { Link } from 'react-router-dom';
import { getAssetPath } from '../../utils/paths';

export default function TwitterRedesign() {
  return (
    <main>
        <section className="project-detail-section section">
            <div className="section-content">
                <Link to="/projects" className="back-link">← Back to Projects</Link>
            </div>

            <div className="project-detail-header">
                <span className="project-category">Case Study</span>
                <h1 className="project-detail-title">Twitter Redesign</h1>
                <h6>UX Designer</h6>
                <p>September 2, 2025 - December 11, 2025</p>
            </div>
            <div className="project-detail-content">
                <h4>Problem Statement</h4>
                <p>This project was created as a semester-long project for the Graphic Design for Interactive Systems course at UMBC. The project objective was to choose a website or application to redesign 
                    according to the UX design process learned thoughout the course. 
                </p>
                <p>I chose Twitter or X for my topic to redesign because as a user myself, I felt the rebranding of the app to X was a large change that negatively affected the user's experience. I also noticed discourse about the 
                    rebranding online that was overall negative. My goal was to redesign the interface to improve usability and maintain a sense of familiarity for users while incorporating more modern design principles.</p>

                <h4>Design Process</h4>
                
                <h6>SWOT Analysis</h6>
                <br />
                <p>The SWOT analysis describes the strengths and weaknesses of the current app's design, and the opportunities and threats. </p>
                <img className="case-study-image" src={getAssetPath('images/SWOT Diagram.jpg')} alt="SWOT Analysis for Twitter Redesign"/>
                <h6>User Personas</h6>
                <p>After creating the SWOT analysis, I created three user personas. The personas describe three different user groups and their needs, behaviours, wants, and experiences with the app.</p>
                <div className="prototype-images">
                    <img className='case-study-image' src={getAssetPath('/images/User Persona 1.png')} alt="User Persona 1" />
                    <img className='case-study-image' src={getAssetPath('/images/User Persona 2.png')} alt="User Persona 2" />
                    <img className='case-study-image' src={getAssetPath('/images/User Persona 3.png')} alt="User Persona 3" />
                </div>
                <h6>Logo Revision</h6>
                <p>The process of redesigning the logo involved starting with brainstorming ideas that would  </p>

                <h6>Color Harmonies</h6>
                <h6>Sitemap</h6>
                <h6>Wireframes</h6>
                <h6>High-Fidelity Prototype</h6>
                <h6>Final Deliverables</h6>
            </div>
        </section>
    </main>
    )
}