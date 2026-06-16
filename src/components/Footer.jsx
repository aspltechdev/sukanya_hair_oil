import React, { useState, useEffect, useRef } from 'react'
import { 
  Leaf, 
  Phone, 
  Mail, 
  MapPin, 
  Heart,
  ChevronRight,
  Shield,
  Trophy,
  Clock,
  Sparkles,
  ArrowUp,
  Send,
  Star,
  Zap
} from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const footerRef = useRef(null)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const handleScroll = () => {
      setIsBackToTopVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = footerRef.current?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5
        })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'How to Use', href: '#how-to-use' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' }
  ]

  const contactInfo = [
    { icon: Phone, text: '+91 7624920239', href: 'tel:7624920239' },
    { icon: Mail, text: 'info@sukanyahairoil.com', href: 'mailto:info@sukanyahairoil.com' },
    { icon: MapPin, text: 'Mumbai, Maharashtra, India' }
  ]

  return (
    <footer className="footer" ref={footerRef}>
      
      {/* Top Decorative Line */}
      <div className="footer-top-line">
        <div className="footer-line-glow" />
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            
            {/* Brand Column */}
            <div className="footer-col footer-col-brand">
              <div className="footer-brand">
                <div className="footer-logo">
                  <div className="footer-logo-icon">
                    <Leaf size={28} />
                  </div>
                  <div className="footer-logo-text">
                    <span className="footer-logo-name">Sukanya</span>
                    <span className="footer-logo-sub">Hair Oil</span>
                  </div>
                </div>
              </div>
              
              <p className="footer-desc">
                Experience the luxury of nature with our traditionally crafted, 
                100% natural Ayurvedic hair oil. Made with love, passed down 
                through generations.
              </p>

              <div className="footer-badges">
                <div className="footer-badge">
                  <Shield size={14} />
                  <span>100% Natural</span>
                </div>
                <div className="footer-badge">
                  <Trophy size={14} />
                  <span>Trusted Brand</span>
                </div>
                <div className="footer-badge">
                  <Clock size={14} />
                  <span>50+ Years</span>
                </div>
              </div>

              {/* Rating */}
              <div className="footer-rating">
                <div className="footer-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#B8944B" color="#B8944B" />
                  ))}
                </div>
                <span className="footer-rating-text">4.9 from 5,000+ reviews</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="footer-heading">
                <span className="footer-heading-line" />
                Quick Links
              </h4>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="footer-link">
                      <ChevronRight size={13} className="footer-link-icon" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-col">
              <h4 className="footer-heading">
                <span className="footer-heading-line" />
                Contact Us
              </h4>
              <ul className="footer-contact">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <li key={index}>
                      {item.href ? (
                        <a href={item.href} className="footer-contact-link">
                          <div className="footer-contact-icon">
                            <IconComponent size={16} />
                          </div>
                          <span>{item.text}</span>
                        </a>
                      ) : (
                        <span className="footer-contact-link">
                          <div className="footer-contact-icon">
                            <IconComponent size={16} />
                          </div>
                          <span>{item.text}</span>
                        </span>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="footer-col footer-col-newsletter">
              <h4 className="footer-heading">
                <span className="footer-heading-line" />
                Stay Connected
              </h4>
              <p className="footer-newsletter-text">
                Subscribe for exclusive offers, hair care tips, and updates.
              </p>
              
              <form className="footer-form" onSubmit={handleSubscribe}>
                <div className="footer-input-wrapper">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="footer-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="footer-submit">
                    {isSubscribed ? (
                      <Sparkles size={18} />
                    ) : (
                      <Send size={18} />
                    )}
                  </button>
                </div>
                {isSubscribed && (
                  <span className="footer-subscribe-success">
                    ✨ Welcome to the family!
                  </span>
                )}
              </form>

              {/* Offer Badge */}
              <div className="footer-offer">
                <Zap size={14} />
                <span>Get 10% off your first order!</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Sukanya Hair Oil. All Rights Reserved.
            </p>
            
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="footer-dot">•</span>
              <a href="#terms">Terms of Service</a>
              <span className="footer-dot">•</span>
              <a href="#return">Return Policy</a>
            </div>

            <p className="footer-made">
              Made with <Heart size={12} fill="#B8944B" color="#B8944B" className="footer-heart" /> in India
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button 
        className={`footer-back-top ${isBackToTopVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  )
}

export default Footer