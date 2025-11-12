function Contact() {
  return (
    <main>
      <section className="contact-section section" id="contact">
        <h2 className="section-title">Contact Me!</h2>
        <div className="section-content">
          <ul className="contact-info-list">
            <li className="contact-info">
              <h2>Location</h2>
              <p>Columbia, Maryland</p>
            </li>
            <li className="contact-info">
              <h2>Email</h2>
              <p>brunson_dana@yahoo.com</p>
            </li>
            <li className="contact-info">
              <h2>Phone Number</h2>
              <p>443-561-5789</p>
            </li>
            <li className="contact-info linkedin-button"> {/* TODO: change link from text to LinkedIn icon */}
              <a href="https://www.linkedin.com/in/dana-brunson">
                <h2>LinkedIn</h2>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Contact


