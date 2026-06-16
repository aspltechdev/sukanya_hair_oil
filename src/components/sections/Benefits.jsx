import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  Sparkles, 
  TrendingUp, 
  Shield, 
  Star,
  ArrowRight,
  Heart,
  Droplets,
  Leaf,
  Zap,
  CheckCircle2
} from 'lucide-react'
import './Benefits.css'

// ============================================
// REPLACE THESE WITH YOUR ACTUAL IMAGE URLS
// ============================================
const IMAGES = {
  // Background image for the section
  bgTexture: 'https://images.unsplash.com/photo-1612831455543-fbd5dbca1a3e?w=1920&q=80',
  
  // Feature images
  feature1: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80',
  feature2: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&q=80',
  feature3: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
  feature4: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600&q=80',
}

const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef(null)

  const benefits = [
    {
      icon: Shield,
      number: '01',
      title: 'Strengthens Roots',
      tagline: 'Deep Nourishment',
      description: 'Our Ayurvedic blend penetrates deep into the scalp, fortifying each strand from the root. Rich in essential nutrients that reduce breakage and promote resilient, healthier growth.',
      highlights: ['Reduces breakage by 85%', 'Strengthens hair follicles', 'Prevents split ends'],
      image: IMAGES.feature1,
      accent: '#7A9B5A',
      statValue: '85%',
      statText: 'Stronger Roots'
    },
    {
      icon: TrendingUp,
      number: '02',
      title: 'Promotes Growth',
      tagline: 'Visible Transformation',
      description: 'Natural herbs and cold-pressed oils stimulate dormant follicles, accelerating the natural growth cycle. Experience noticeably longer, thicker hair within weeks of consistent use.',
      highlights: ['2x faster growth rate', 'Stimulates dormant follicles', 'Thicker hair density'],
      image: IMAGES.feature2,
      accent: '#B8944B',
      statValue: '2x',
      statText: 'Faster Growth'
    },
    {
      icon: Heart,
      number: '03',
      title: 'Reduces Hair Fall',
      tagline: 'Fuller & Thicker',
      description: 'Fortifies hair strands from within using a powerful combination of Bhringraj, Amla, and Brahmi. Dramatically reduces shedding while improving overall hair density and volume.',
      highlights: ['70% less hair fall', 'Improves hair density', 'Strengthens hair shaft'],
      image: IMAGES.feature3,
      accent: '#5C7A3E',
      statValue: '70%',
      statText: 'Less Hair Fall'
    },
    {
      icon: Star,
      number: '04',
      title: 'Restores Shine',
      tagline: 'Natural Radiance',
      description: 'Restores your hair\'s natural luster with a blend of nourishing oils and herbs. Each strand is coated with nature\'s finest ingredients for a healthy, glossy, salon-worthy finish.',
      highlights: ['100% natural shine', 'Eliminates dullness', 'Smooth & silky texture'],
      image: IMAGES.feature4,
      accent: '#9A7A3A',
      statValue: '100%',
      statText: 'Natural Shine'
    }
  ]

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect()
      if (rect) {
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        setMousePosition({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Helmet>
        <title>Benefits of Sukanya Hair Oil - Real Results Naturally</title>
        <meta name="description" content="Discover the powerful benefits of Sukanya Hair Oil. Strengthens roots, promotes growth, reduces hair fall, and restores natural shine." />
      </Helmet>

      <section className="benefits" ref={sectionRef} id="benefits">
        
        {/* Background Layers */}
        <div className="bn-bg-wrapper">
          <div 
            className="bn-bg-image"
            style={{
              backgroundImage: `url(${IMAGES.bgTexture})`,
              transform: `scale(${1 + scrollY * 0.0002}) translateY(${scrollY * 0.1}px)`
            }}
          />
          <div className="bn-bg-overlay" />
        </div>

        {/* Ambient Orbs */}
        <div className="bn-ambient">
          <div className="bn-ambient-orb bn-ao-1" style={{
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`
          }} />
          <div className="bn-ambient-orb bn-ao-2" style={{
            transform: `translate(${-mousePosition.x * 12}px, ${-mousePosition.y * 12}px)`
          }} />
        </div>

        {/* Floating Particles */}
        <div className="bn-particles">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="bn-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="benefits-container">
          
          {/* Header Section */}
          <div className={`bn-header ${isVisible ? 'visible' : ''}`}>
            <div className="bn-header-top">
              <div className="bn-badge">
                <Zap size={12} className="bn-badge-icon" />
                <span>Why Choose Sukanya</span>
              </div>
            </div>

            <div className="bn-header-main">
              <h2 className="bn-title">
                <span className="bn-title-prefix">The</span>
                <span className="bn-title-main">Sukanya</span>
                <span className="bn-title-suffix">Difference</span>
              </h2>
              
              <div className="bn-title-decoration">
                <Leaf size={16} />
              </div>
            </div>

            <p className="bn-description">
              Every drop is a testament to nature's power. Our formula combines 
              50+ herbs in a precise, time-tested blend that delivers 
              <span className="bn-description-highlight"> visible results </span> 
              you can see and feel.
            </p>
          </div>

          {/* Main Content - Asymmetric Layout */}
          <div className={`bn-main-content ${isVisible ? 'visible' : ''}`}>
            
            {/* Left - Feature Navigation */}
            <div className="bn-feature-nav">
              {benefits.map((benefit, index) => {
                const BenefitIcon = benefit.icon
                const isActive = activeFeature === index
                
                return (
                  <button
                    key={index}
                    className={`bn-nav-item ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveFeature(index)}
                    style={{
                      '--accent-color': benefit.accent
                    }}
                  >
                    {/* Active Indicator */}
                    <div className="bn-nav-indicator">
                      <div className="bn-nav-indicator-line" />
                      <div className="bn-nav-indicator-dot" />
                    </div>

                    {/* Content */}
                    <div className="bn-nav-content">
                      <div className="bn-nav-icon-wrapper">
                        <BenefitIcon size={18} />
                      </div>
                      <div className="bn-nav-text">
                        <span className="bn-nav-number">{benefit.number}</span>
                        <span className="bn-nav-title">{benefit.title}</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="bn-nav-progress">
                      <div className={`bn-nav-progress-bar ${isActive ? 'active' : ''}`} />
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Right - Feature Display */}
            <div className="bn-feature-display">
              <div className="bn-feature-card">
                
                {/* Feature Image */}
                <div className="bn-feature-image-wrapper">
                  <div 
                    className="bn-feature-image"
                    style={{
                      backgroundImage: `url(${benefits[activeFeature].image})`,
                      transform: `scale(${1 + mousePosition.x * 0.03})`
                    }}
                  />
                  <div className="bn-feature-image-overlay" style={{
                    background: `linear-gradient(135deg, ${benefits[activeFeature].accent}40, ${benefits[activeFeature].accent}10)`
                  }} />
                  
                  {/* Stat Badge */}
                  <div className="bn-feature-stat-badge">
                    <span className="bn-feature-stat-value">{benefits[activeFeature].statValue}</span>
                    <span className="bn-feature-stat-text">{benefits[activeFeature].statText}</span>
                  </div>
                </div>

                {/* Feature Content */}
                <div className="bn-feature-content">
                  <div className="bn-feature-tagline">
                    <Sparkles size={14} />
                    <span>{benefits[activeFeature].tagline}</span>
                  </div>

                  <h3 className="bn-feature-title">{benefits[activeFeature].title}</h3>
                  
                  <p className="bn-feature-description">
                    {benefits[activeFeature].description}
                  </p>

                  {/* Highlights List */}
                  <div className="bn-feature-highlights">
                    {benefits[activeFeature].highlights.map((highlight, idx) => (
                      <div key={idx} className="bn-highlight-item" style={{
                        animationDelay: `${idx * 0.15}s`
                      }}>
                        <CheckCircle2 size={16} className="bn-highlight-check" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="bn-feature-cta">
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                    <div className="bn-feature-cta-shine" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div className={`bn-stats-bar ${isVisible ? 'visible' : ''}`}>
            <div className="bn-stat-item">
              <div className="bn-stat-icon-circle">
                <Leaf size={20} />
              </div>
              <div className="bn-stat-info">
                <span className="bn-stat-num">50+</span>
                <span className="bn-stat-lbl">Natural Herbs</span>
              </div>
            </div>

            <div className="bn-stat-divider" />

            <div className="bn-stat-item">
              <div className="bn-stat-icon-circle">
                <Shield size={20} />
              </div>
              <div className="bn-stat-info">
                <span className="bn-stat-num">100%</span>
                <span className="bn-stat-lbl">Chemical Free</span>
              </div>
            </div>

            <div className="bn-stat-divider" />

            <div className="bn-stat-item">
              <div className="bn-stat-icon-circle">
                <Heart size={20} />
              </div>
              <div className="bn-stat-info">
                <span className="bn-stat-num">5000+</span>
                <span className="bn-stat-lbl">Happy Customers</span>
              </div>
            </div>

            <div className="bn-stat-divider" />

            <div className="bn-stat-item">
              <div className="bn-stat-icon-circle">
                <Star size={20} />
              </div>
              <div className="bn-stat-info">
                <span className="bn-stat-num">4.9</span>
                <span className="bn-stat-lbl">Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Benefits