import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <h2 className="site-title">Dana Brunson</h2>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className="nav-link">Resume</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

