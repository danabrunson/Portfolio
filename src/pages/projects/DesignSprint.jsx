import { Link } from 'react-router-dom'

export default function DesignSprint() {
    return (
        <main>
            <section className="project-detail-section section">
                <div className="section-content">
                    <Link to="/projects" className="back-link">← Back to Projects</Link>

                    <div className="project-detail-header">
                        <span className="project-category">Case Study</span>
                        <h1 className="project-detail-title">Design Sprint</h1>
                    </div>
                    </div>
            </section>
        </main>  
    )
}