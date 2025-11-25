import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  
  // Get the pathname without the basename for comparison
  const pathname = location.pathname.replace(/^\/Portfolio/, '') || '/'
  
  return (
    <header>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className={`nav-link ${pathname === '/projects' || pathname.startsWith('/projects/') ? 'active' : ''}`}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar


