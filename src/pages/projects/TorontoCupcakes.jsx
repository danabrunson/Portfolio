import { Link } from 'react-router-dom'

export default function TorontoCupcakes() {
  return (
    <main>
      <section className="project-detail-section section">
        <div className="section-content">
          <Link to="/projects" className="back-link">← Back to Projects</Link>

          <div className="project-detail-header">
            <span className="project-category">Case Study</span>
            <h1 className="project-detail-title">Toronto Cupcakes</h1>
          </div>

          <div className="project-detail-content">
            <h3>Problem Statement</h3>
            <p>The objective of the Interaction Design assignment was to find areas for improvement or the design principles of affordances, 
              signifiers, and mapping and create a redesign of the page that shows those improvements. The website that I was given to focus on for 
              this assignment was torontocupcakes.com.
            </p>

            <h3>Design Process</h3>
            <p>
              I began by analyzing the existing website to identify issues related to affordances, signifiers, and mapping.
            </p>

            <h4>Affordances and Signifiers</h4>
            <img className='case-study-image' src="/case-study-1-issue-1.png" alt="Affordance and Signifier Issue" />
            <p>The first issue that I focused on was the website's navigation menu, however it was 
                not visible on any page unless the hamburger icon was clicked or the user scrolls to 
                look at the site footer. The afforded capabilities of the user were not known because 
                the menu was not visible. I created a clear navigation menu that 
                stayed at the top of the page with all of the pages listed and clickable.
            </p>
            <img className ='case-study-image' src="/case-study-1-redesign-1.png" alt=" AF Redesign 1" />
            <p>My second issue was with the bar at the top of the screen that appears clickable and 
              has a message for users to look at a certain page of the site. The bar that contains the 
              message and the content could let the user believe that clicking this bar would redirect 
              them to the page mentioned. I included the navigation bar from the previous 
              redesign and also turned this bar into a button that does redirect the user to the page 
              mentioned. It is also styled in the same way as their existing link to read their statement 
              regarding the US Tariffs.</p>
               <img className='case-study-image' src="/case-study-1-redesign-2.png" alt="Redesign example 2" />
            
            <h4>Mapping</h4>
            <img src="/case-study-1-issue-2-1.png" alt="Mapping issue" className="case-study-image" />
            <div className="project-images">
              <img src="/case-study-1-issue-2-2.png" alt="Mapping issue" />
              <p>A mapping issue I spotted was that the action of clicking "Add to Cart" from the cupcake page 
                takes you directly to the cart and interrupts the shopping experience. This can be annoying 
                for the user if trying to order multiple different flavors and being directed back and forth 
                between the cart and the cupcake order page. This action resulting from the button is unexpected 
                and does not reflect the button label. This redesign is better than the original because it clearly 
                states that the item has been added to the cart and gives the option to view the cart without automatically 
                redirecting the user to it. The resulting action from the button matches the user's expectation of adding 
                the item to their cart and does not force them to take any other unwanted action as the original does.</p>
              <img src="/case-study-1-redesign-3.png" alt="Redesign example 3" />
              <img src="/case-study-1-redesign-4.png" alt="Redesign example 4" />
              <p>The second issue is that there is no clear page for ordering. To order cupcakes, the user must click on a 
                section under "Cupcakes" and then click their desired flavors from there. It is not immediately clear how to 
                order from the site before clicking around. The "Cupcakes" label doesn't reflect the action of ordering from 
                the site, and the tab itself is not even clickable. This can cause confusion or frustration from the user not 
                being able to click the link despite it having the same clickable attributes as the rest of the menu. This 
                redesign is better than the original because it is a clearly laid out ordering page that is available from 
                the main menu. I added the same navigation bar I created for the other redesigns and added an "Order Now" 
                page to it that has options on the page for looking at the different cupcake options offered. Adding this 
                page to the navigation makes it clear to the user where to go to order from the site. I also made the page 
                bold at the top to highlight the current page being shown, as well as the underline under the cupcake section 
                to show the current section being shown.</p>
            </div>

            <h3>Final Outcome</h3>
            <p>The final redesign of the Toronto Cupcakes website presents a more intuitive and user-friendly interface. 
                The navigation bar is now clearly visible on every page, allowing the users to always be aware of their possible interactions with the site. 
                Elements such as the promotional button and "Add to Cart" button now match user expectations through clear signifiers and logical mapping. 
                The new "Order Now" page provides a more direct and understandable path for customers, reducing confusion during the ordering process. 
                Overall, my redesign enhances usability and creates a smoother, more enjoyable shopping experience for the site's users.
              
            </p>

            <h3>Reflection</h3>
            <p>
              With this assignment, I further learned and got the opportunity to understand the importance of applying these design 
              principles when creating designs. The application of these principles can greatly affect the user's experience and usability. 
              I was also able to practice evaluating interfaces and creating designs that follow the Interaction Design Principles.
            </p>

            <h3>Skills</h3>
            <ul>
              <li>Visual Design</li>
              <li>Design Principles</li>
            </ul>
          </div>
          <p>A link to the full assignment can be found <a href="/629 Interaction Design Rules Part 2.pdf" target='_blank' style={{textDecoration:'underline'}}>here</a></p>
        </div>
      </section>
    </main>
  )
}
