import { Link } from 'react-router-dom'

export default function DesignSprint() {
    return (
        <main>
            <section className="project-detail-section section">
                <div className="section-content">
                    <Link to="/projects" className="back-link">← Back to Projects</Link>

                    <div className="project-detail-header">
                        <span className="project-category">Case Study</span>
                        <h1 className="project-detail-title">Process of Interaction Design</h1>
                    </div>
                    </div>
                    <div className="project-detail-content">
                        <h6>Skills</h6>
                        <p>role and dates here</p>
                        <h6>Team Members</h6>
                        <h4>Problem Statement</h4>
                        <p>How might we make HCC 629 students feel prepared and confident for exams using NotebookLM? </p>
                        <h4>Overview of Design Process</h4>
                        <p>For this design sprint we used the Agile method to perform the process of interaction design through 7 stages. </p>
                            <h6>Stage 1 : Empathize with your users</h6>
                            <p>ur given user group for this assingnment was students in the Human Centered Computing graduate program at UMBC.
                            We chose to redesign NotebookLM, a note-taking application that helps students organize and study their course materials.
                            During this stage, we defined our problem statement and three concepts of design that we wanted to focus on in our redesign.
                            We chose visibility, attention, and the gulf of execution. </p>
                            <h6>Stage 2 : Ideate by employing divergent thinking</h6>
                            <p>
                            During this stage, we created paper sketches of our ideas for redesigning our two required screens of NotebookLM. Each sketched addressed
                            a different concept that we wanted to include in our redesign. Each team member created two sketches per concept, so we all had six sketches in total. </p>
                            <h6>Stage 3 : Employ convergent thinking</h6>
                            <p>After creating the sketches we came together and discussed the ideas that we liked from each sketch and how we could add the different ideas into 
                            our prototype. </p>
                            <h6>Stage 4 : Prototype your solution</h6>
                            <p>We created our prototype using Figma. Our prototype included redesigns of the landing and notebook screen of NotebookLM. With our prototype, users are able to open an existing notebook
                            on the interface, click the help button, and click back to the landing page from the notebook page. </p>
                            <h6>Stage 5 : Test your prototyped solution with users</h6>
                            <p>For this stage, we created a task for our users to complete using our prototype. The task that we gave our users was a test of learnability, where they had to navigate through
                            the prototype and comprehend how easy the website was to learn to use. Along with testing our prototype, they were also testing the original NotebookLM website and comparing
                            the two in terms of learnability.</p>
                            <h6>Stage 6 : Compile user testing results and prototype your revised design</h6>
                            <p>The results from our user testing were very clear in the sense that our prototype was much easier to navigate compared to the actual NotebookLM site. We were able to record the timing of one of our user's
                            interactions with both the original site and our prototype. The user was able to complete the task in 2 minutes and 9 seconds on the original site, while they were able to complete the same task on
                            our prototype in just 40 seconds. Based on the feedback we received from our users, we made some revisions to our prototype to improve the design even further. <br />
                            Some of the changes we made included adding a back button from the notebook page, changing the language associated with the progress bars, and adding a timer for the quiz. </p>
                            <h6>Stage 7 : Explain how your team collaborated to achieve the assignment</h6>
                            <p>To complete this design sprint, our team utilized Google Calendar to schedule meetings, Google Docs to exchange files and collaborate on our written work, Figma to create our prototype,
                            Google Meet for virtual meetings, and Google Chat for communications and planning.</p>
                        <h4>Final Outcome</h4>
                        <h4>Reflection and Lessons Learned</h4>
                        <p>Original prototype<a href=""></a></p>
                        <p>Revised prototype <a href=""></a></p>
                    </div>
            </section>
        </main>  
    )
}