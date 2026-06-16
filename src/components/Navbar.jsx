import React, { useState, useEffect, useRef } from 'react'
import { 
  Leaf, 
  Phone, 
  ChevronDown,
  Sparkles,
  Shield,
  Star,
  X,
  Menu
} from 'lucide-react'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show/hide navbar
      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setIsVisible(false)
        setIsOpen(false)
      } else {
        setIsVisible(true)
      }
      lastScrollY.current = currentScrollY
      
      // Scrolled state
      setIsScrolled(currentScrollY > 50)
      
      // Update active section
      const sections = ['home', 'about', 'benefits', 'how-to-use', 'ingredients', 'testimonials', 'story', 'faq']
      const scrollPosition = currentScrollY + 150

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#how-to-use', label: 'How to Use' },
    { href: '#ingredients', label: 'Ingredients' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#story', label: 'Our Story' },
    { href: '#faq', label: 'FAQ' }
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar-container">
        
        {/* Brand Logo */}
        <a href="#home" className="navbar-brand" onClick={closeMenu}>
          <div className="brand-icon">
            <Leaf size={24} />
          </div>
          <div className="brand-text">
            <span className="brand-name">Sukanya</span>
            <span className="brand-tagline">Hair Oil</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
              >
                {link.label}
                {activeSection === link.href.replace('#', '') && (
                  <span className="nav-active-dot" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="navbar-actions">
          {/* Trust Badge */}
          <div className="nav-trust">
            <div className="nav-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="#B8944B" color="#B8944B" />
              ))}
            </div>
            <span className="nav-rating">4.9</span>
          </div>

          {/* Phone CTA */}
          <a href="tel:7624920239" className="nav-cta">
            <Phone size={16} />
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-toggle ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-container">
          {/* Mobile Links */}
          <ul className="mobile-links">
            {navLinks.map((link, index) => (
              <li 
                key={link.href}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <a
                  href={link.href}
                  className={`mobile-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span className="mobile-link-number">0{index + 1}</span>
                  {link.label}
                  {activeSection === link.href.replace('#', '') && (
                    <Sparkles size={14} className="mobile-link-active" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Bottom */}
          <div className="mobile-bottom">
            <div className="mobile-trust">
              <Shield size={16} />
              <span>100% Natural • Chemical Free</span>
            </div>
            <a href="tel:7624920239" className="mobile-cta">
              <Phone size={16} />
              <span>Call Us: 7624920239</span>
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div 
        className={`mobile-overlay ${isOpen ? 'active' : ''}`} 
        onClick={closeMenu} 
      />
    </nav>
  )
}

export default Navbar