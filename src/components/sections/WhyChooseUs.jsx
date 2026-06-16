import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Leaf, Heart, TrendingUp, Clock, Sparkles, Star, Shield, ArrowRight } from 'lucide-react'
import './WhyChooseUs.css'

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null)

  const benefits = [
    {
      icon: Leaf,
      title: '100% Natural',
      description: 'Pure Ayurvedic ingredients, free from chemicals, parabens, and sulfates.',
      accent: '#7A9B5A'
    },
    {
      icon: Clock,
      title: 'Traditional Recipe',
      description: 'Family formula passed through generations, preserved with authenticity.',
      accent: '#B8944B'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Visible improvement in hair health within 8 weeks of regular use.',
      accent: '#5C7A3E'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Each batch crafted with the same care as a homemade family remedy.',
      accent: '#9A7A3A'
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

  return (
    <>
      <Helmet>
        <title>Why Choose Sukanya Hair Oil - Made Different, Made Better</title>
        <meta name="description" content="Discover why Sukanya Hair Oil is different. 100% natural, traditional recipe, proven results, and made with love." />
      </Helmet>

      <section className="why-choose" ref={sectionRef} id="why-choose">
        
        {/* Ambient Background */}
        <div className="wc-ambient">
          <div className="wc-orb wc-orb-1" style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }} />
          <div className="wc-orb wc-orb-2" style={{
            transform: `translate(${-mousePosition.x * 15}px, ${-mousePosition.y * 15}px)`
          }} />
        </div>

        <div className="why-choose-container">
          
          {/* Header */}
          <div className={`wc-header ${isVisible ? 'visible' : ''}`}>
            <div className="wc-label">
              <Sparkles size={12} />
              <span>Why Choose Us</span>
            </div>
            
            <h2 className="wc-title">
              Made different.<br />
              <span className="wc-title-highlight">Made better.</span>
            </h2>
            
            <p className="wc-subtitle">
              Every aspect of Sukanya Hair Oil is designed with your hair's health in mind.
            </p>
          </div>

          {/* Benefits Grid - 4 Cards */}
          <div className="wc-grid">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon
              return (
                <div 
                  key={index}
                  className={`wc-card ${isVisible ? 'visible' : ''}`}
                  style={{ 
                    transitionDelay: `${0.3 + index * 0.12}s`,
                    '--accent': benefit.accent
                  }}
                >
                  {/* Card Top Accent Line */}
                  <div className="wc-card-accent" />

                  {/* Icon */}
                  <div className="wc-card-icon">
                    <div className="wc-icon-circle">
                      <BenefitIcon size={22} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="wc-card-title">{benefit.title}</h3>
                  <p className="wc-card-desc">{benefit.description}</p>

                  {/* Bottom Indicator */}
                  <div className="wc-card-indicator">
                    <span className="wc-indicator-number">0{index + 1}</span>
                    <div className="wc-indicator-line" />
                  </div>

                  {/* Hover Glow */}
                  <div className="wc-card-glow" />
                </div>
              )
            })}
          </div>

          {/* Trust Strip */}
          <div className={`wc-trust ${isVisible ? 'visible' : ''}`}>
            <div className="wc-trust-item">
              <Shield size={16} />
              <span>Chemical Free</span>
            </div>
            <div className="wc-trust-divider" />
            <div className="wc-trust-item">
              <Star size={16} />
              <span>4.9 Rating</span>
            </div>
            <div className="wc-trust-divider" />
            <div className="wc-trust-item">
              <Heart size={16} />
              <span>5000+ Customers</span>
            </div>
            <div className="wc-trust-divider" />
            <div className="wc-trust-item">
              <Leaf size={16} />
              <span>50+ Herbs</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyChooseUs