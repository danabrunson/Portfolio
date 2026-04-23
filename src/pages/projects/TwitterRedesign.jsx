import { Link } from 'react-router-dom';
import { getAssetPath } from '../../utils/paths';
import { BiUnderline } from 'react-icons/bi';

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
                <br></br>
                <h6>SWOT Analysis</h6>
                <br />
                <p>The SWOT analysis describes the strengths and weaknesses of the current app's design, and the opportunities and threats. </p>
                <a href={getAssetPath('images/SWOT Diagram.jpg')} target="_blank" rel="noopener noreferrer">
                    <img className="case-study-image" src={getAssetPath('images/SWOT Diagram.jpg')} alt="SWOT Analysis for Twitter Redesign"/>
                </a>
                <h6>User Personas</h6>
                <p>After creating the SWOT analysis, I created three user personas. The personas describe three different user groups and their needs, behaviours, wants, and experiences with the app.</p>
                <div className="prototype-images">
                    <a href={getAssetPath('/images/User Persona 1.png')} target="_blank" rel="noopener noreferrer">
                        <img className='case-study-image' src={getAssetPath('/images/User Persona 1.png')} alt="User Persona 1" />
                    </a>
                    <a href={getAssetPath('/images/User Persona 2.png')} target="_blank" rel="noopener noreferrer">
                        <img className='case-study-image' src={getAssetPath('/images/User Persona 2.png')} alt="User Persona 2" />
                    </a>
                    <a href={getAssetPath('/images/User Persona 3.png')} target="_blank" rel="noopener noreferrer">
                        <img className='case-study-image' src={getAssetPath('/images/User Persona 3.png')} alt="User Persona 3" />
                    </a>
                </div>
                <h6>Logo Revision</h6>
                <p>The process of redesigning the logo involved starting a word dump to come up with as many words possible that were related to the app and its values, attributes, emotions,
                    attitudes, adjectives, etc. The words also decribed the features of the app such as security and affordability. After the word dump, I then chose five words that best described the application. From those five words, I then expanded
                    each one into a list of ten words that described them and also had image associations. </p>
                <p> Each word list was then turned into a black and whiteimage for a logo idea. The idea was to combine different elements and imagery ideas from the lists to form a basis for the logos.
                    My process for creating the logo involved many different iterations and revisions to my ideas.
                    The finished result was a modern and simplified version of the original logo that maintained a sense of familiarity for users while incorporating ideas from my brainstorming process.
                </p>
                <p>My final logo can be seen below as styled on the front of a business card.</p>
                <img className='case-study-image' src={getAssetPath('/images/Card-Front.png')} alt="Logo Idea 3" />

                <h6>Color Palette</h6>
                <p>For the color palette of the app, I decided to make the color palette a monbochromatic blue. The palette worked best for the app to maintain the use and more serious tone of the app. 
                    Based on the research I conducted during the creation of my SWOT analysis, I learned that the app is used as a source of news for many users and where serious conversations take place and wanted to reflect that in the colors chosen.
                    The blues also give a sense of calm and positivity, which is important for maintaining a positive user experience.</p>
                <h6>Sitemap</h6>
                <p>The sitemap created for the application reflects the structure of the application and the connections between different pages of the application. After creating the sitemap, I finalized which pages of the application I wanted to focus on in my redesign.</p>
                <img className='case-study-image' src={getAssetPath('/images/Sitemap.png')} alt="Sitemap for Twitter Redesign"/>
                <h6>Wireframes</h6>
                <p>Getting into the final stages of the design process, I created wireframes for three of the pages I wanted to redesign. The first was the Search page, which is seen when the user clicks the seach icon at the bottom of the screen, allowing them to search for posts,
                    users, hashtags, or explore trending content. Another page was the Account page, which displays a user's profile information. The third page was the Post page, which allows users to view another user's post and comments, and create their own comment on the post.</p>
                <h6>High-Fidelity Prototype</h6>
                <p>After creating the wireframes, I created a high-fidelity prototype for five screens of the redesigned app. The prototype was created in Figma and included the Search, Account, and Post pages that I redesigned, as well as the Home and Messages pages.</p>
                <p>The final deliverable for this project can be viewed <a href={getAssetPath('/710 Final Deliverable.pdf')} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}><strong>here</strong></a></p>
            </div>
        </section>
    </main>
    )
}