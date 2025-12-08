import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  
  // Get the pathname without the basename for comparison
  const pathname = location.pathname.replace(/^\/Portfolio/, '') || '/'
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show navbar at the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true)
      } 
      // Hide navbar when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])
  
  return (
    <header className={isVisible ? 'navbar-visible' : 'navbar-hidden'}>
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


