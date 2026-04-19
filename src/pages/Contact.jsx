import { FaLinkedin } from "react-icons/fa";
function Contact() {
  return (
    <main>
      <section className="contact-section section" id="contact">
        <h2 className="section-title">Contact Me!</h2>
        <div className="section-content">
          <ul className="contact-info-list">
            <li className="contact-info">
              <h2>Email</h2>
            </li>
            <li className="contact-info">
              <h2>Phone Number</h2>
            </li>
            <li className="contact-info linkedin-button">
              <a href="https://www.linkedin.com/in/dana-brunson">
                <FaLinkedin size={36} />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Contact


