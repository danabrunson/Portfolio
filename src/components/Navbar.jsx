import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  
  return (
    <header>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar


