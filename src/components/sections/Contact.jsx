import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  User, 
  MessageSquare,
  CheckCircle2,
  Clock,
  Sparkles,
  Leaf,
  Shield,
  ArrowRight
} from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const sectionRef = useRef(null)
  const formRef = useRef(null)

  const contactInfo = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '+91 7624920239',
      href: 'tel:7624920239',
      color: '#7A9B5A'
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: 'info@sukanyahairoil.com',
      href: 'mailto:info@sukanyahairoil.com',
      color: '#B8944B'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, Maharashtra, India',
      color: '#5C7A3E'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setIsVisible(true)
        })
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect()
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <>
      <Helmet>
        <title>Contact Sukanya Hair Oil - Get in Touch</title>
        <meta name="description" content="Contact Sukanya Hair Oil for inquiries, orders, or support. Call us or fill out the form and we'll get back to you within 24 hours." />
      </Helmet>

      <section className="contact" ref={sectionRef} id="contact">
        
        {/* Background Ambient */}
        <div className="ct-bg-ambient">
          <div className="ct-orb ct-orb-1" style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }} />
          <div className="ct-orb ct-orb-2" style={{
            transform: `translate(${-mousePosition.x * 15}px, ${-mousePosition.y * 15}px)`
          }} />
        </div>

        {/* Floating Elements */}
        <div className="ct-floating">
          <div className="ct-float ct-float-1"><Leaf size={16} /></div>
          <div className="ct-float ct-float-2"><Sparkles size={14} /></div>
          <div className="ct-float ct-float-3"><MessageSquare size={14} /></div>
        </div>

        <div className="contact-container">
          
          {/* Header */}
          <div className={`ct-header ${isVisible ? 'visible' : ''}`}>
            <div className="ct-badge">
              <MessageSquare size={13} />
              <span>Get in Touch</span>
            </div>

            <h2 className="ct-title">
              Let's Start a
              <span className="ct-title-highlight"> Conversation</span>
            </h2>

            <p className="ct-subtitle">
              Have questions about our product? Want to place an order? 
              We're here to help. Reach out and we'll respond within 24 hours.
            </p>
          </div>

          {/* Main Content */}
          <div className={`ct-main ${isVisible ? 'visible' : ''}`}>
            
            {/* Left - Contact Info Cards */}
            <div className="ct-info">
              {contactInfo.map((item, index) => {
                const InfoIcon = item.icon
                return (
                  <div 
                    key={index}
                    className="ct-info-card"
                    style={{ 
                      transitionDelay: `${0.2 + index * 0.1}s`,
                      '--accent': item.color
                    }}
                  >
                    <div className="ct-info-icon">
                      <InfoIcon size={22} />
                    </div>
                    <div className="ct-info-content">
                      <span className="ct-info-label">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="ct-info-value ct-info-link">
                          {item.value}
                        </a>
                      ) : (
                        <span className="ct-info-value">{item.value}</span>
                      )}
                    </div>
                    <div className="ct-info-glow" />
                  </div>
                )
              })}

              {/* Quick Response Badge */}
              <div className="ct-response-badge">
                <Clock size={16} />
                <span>We respond within 24 hours</span>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="ct-form-wrapper">
              <div className="ct-form-card">
                
                {/* Success Message */}
                {isSubmitted && (
                  <div className="ct-success">
                    <div className="ct-success-icon">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="ct-success-title">Message Sent!</h3>
                    <p className="ct-success-text">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {/* Form */}
                <form 
                  ref={formRef}
                  className={`ct-form ${isSubmitted ? 'hidden' : ''}`}
                  onSubmit={handleSubmit}
                >
                  <div className="ct-form-grid">
                    {/* Name */}
                    <div className="ct-form-group">
                      <label className="ct-form-label">
                        <User size={14} />
                        <span>Full Name</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="ct-form-input"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="ct-form-group">
                      <label className="ct-form-label">
                        <Mail size={14} />
                        <span>Email Address</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="ct-form-input"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="ct-form-group ct-form-full">
                      <label className="ct-form-label">
                        <Phone size={14} />
                        <span>Phone Number</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="ct-form-input"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div className="ct-form-group ct-form-full">
                      <label className="ct-form-label">
                        <MessageSquare size={14} />
                        <span>Your Message</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you..."
                        className="ct-form-textarea"
                        rows="4"
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="ct-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="ct-spinner" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                    <div className="ct-submit-shine" />
                  </button>

                  {/* Trust Note */}
                  <p className="ct-form-note">
                    <Shield size={12} />
                    Your information is safe with us. We never share your details.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Trust Bar */}
          <div className={`ct-trust ${isVisible ? 'visible' : ''}`}>
            <div className="ct-trust-item">
              <Shield size={16} />
              <span>100% Natural</span>
            </div>
            <div className="ct-trust-divider" />
            <div className="ct-trust-item">
              <Leaf size={16} />
              <span>Chemical Free</span>
            </div>
            <div className="ct-trust-divider" />
            <div className="ct-trust-item">
              <Clock size={16} />
              <span>24hr Response</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact