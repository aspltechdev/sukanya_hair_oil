import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  Droplets, 
  Moon, 
  ShowerHead, 
  ArrowRight, 
  Sparkles,
  Clock,
  Play,
  Pause,
  ChevronRight
} from 'lucide-react'
import './HowToUse.css'

// ============================================
// REPLACE THESE WITH YOUR ACTUAL IMAGE URLS
// ============================================
const IMAGES = {
  // Background pattern or subtle texture (optional)
  bgPattern: '',
  
  // Step images - replace with your actual images
  step1: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
  step2: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&q=80',
  step3: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&q=80',
}

const HowToUse = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const sectionRef = useRef(null)
  const autoPlayRef = useRef(null)

  const steps = [
    {
      number: '01',
      icon: Droplets,
      title: 'Apply to Scalp',
      subtitle: 'Gentle Massage Ritual',
      description: 'Take a generous amount of warm oil and gently massage into your scalp using circular motions. This stimulates blood circulation and ensures deep penetration of the natural herbs.',
      duration: '5-10 mins',
      tip: 'Warm the oil slightly for better absorption',
      color: 'step-olive',
      accentColor: '#7A9B5A',
      image: IMAGES.step1
    },
    {
      number: '02',
      icon: Moon,
      title: 'Leave it On',
      subtitle: 'Deep Nourishment',
      description: 'Allow the Ayurvedic blend to work its magic. Leave the oil on for at least 1-2 hours. For transformative results, let it penetrate overnight while you rest.',
      duration: '1-2 hrs / Overnight',
      tip: 'Use a soft cotton towel on your pillow',
      color: 'step-gold',
      accentColor: '#B8944B',
      image: IMAGES.step2
    },
    {
      number: '03',
      icon: ShowerHead,
      title: 'Wash Thoroughly',
      subtitle: 'Pure Cleanse',
      description: 'Rinse with a mild herbal shampoo using lukewarm water. The natural ingredients will have already done their work, leaving your hair soft, strong, and naturally radiant.',
      duration: '10-15 mins',
      tip: 'Use lukewarm water to preserve natural oils',
      color: 'step-olive',
      accentColor: '#5C7A3E',
      image: IMAGES.step3
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
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
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

  // Auto-play
  useEffect(() => {
    if (isAutoPlaying && isVisible && !isHovering) {
      autoPlayRef.current = setInterval(() => {
        setActiveStep(prev => (prev + 1) % steps.length)
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, isVisible, isHovering, steps.length])

  return (
    <>
      <Helmet>
        <title>How to Use Sukanya Hair Oil - 3 Simple Steps</title>
        <meta name="description" content="Learn the 3-step Ayurvedic ritual for beautiful hair. Apply, leave, and wash with Sukanya Hair Oil for transformative results." />
      </Helmet>

      <section className="how-to-use" ref={sectionRef} id="how-to-use">
        
        {/* Background Ambient Elements */}
        <div className="htu-bg-ambient">
          <div className="htu-gradient-orb htu-orb-1" style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }} />
          <div className="htu-gradient-orb htu-orb-2" style={{
            transform: `translate(${-mousePosition.x * 15}px, ${-mousePosition.y * 15}px)`
          }} />
          <div className="htu-gradient-orb htu-orb-3" style={{
            transform: `translate(${mousePosition.x * 10}px, ${-mousePosition.y * 10}px)`
          }} />
        </div>

        {/* Decorative Leaves */}
        <div className="htu-decorative-leaves">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className={`htu-leaf htu-leaf-${i + 1}`}
              style={{
                animationDelay: `${i * 1.5}s`
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C12 2 8 8 8 12C8 16 12 22 12 22C12 22 16 16 16 12C16 8 12 2 12 2Z" 
                  fill="currentColor" opacity="0.3"/>
              </svg>
            </div>
          ))}
        </div>

        <div className="how-to-use-container">
          
          {/* Section Header */}
          <div className={`htu-header ${isVisible ? 'visible' : ''}`}>
            <div className="htu-badge">
              <div className="badge-dot-pulse" />
              <span>Simple 3-Step Ritual</span>
              <Sparkles size={12} className="badge-sparkle" />
            </div>

            <h2 className="htu-title">
              <span className="title-line line-top">The Art of</span>
              <span className="title-line line-bottom">
                <span className="word-application">Application</span>
              </span>
            </h2>

            <div className="htu-ornament">
              <div className="ornament-line" />
              <div className="ornament-diamond">◆</div>
              <div className="ornament-line" />
            </div>

            <p className="htu-subtitle">
              Transforming your hair is simple. Follow our guided ritual 
              to unlock the full potential of nature's finest ingredients.
            </p>
          </div>

          {/* Main Content Area */}
          <div 
            className={`htu-main-content ${isVisible ? 'visible' : ''}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            
            {/* Left - Step Image Display */}
            <div className="htu-visual-panel">
              <div className="htu-image-frame">
                {/* Frame Border */}
                <div className="image-frame-border">
                  <div className="frame-corner corner-top-left" />
                  <div className="frame-corner corner-top-right" />
                  <div className="frame-corner corner-bottom-left" />
                  <div className="frame-corner corner-bottom-right" />
                </div>

                {/* Image Container */}
                <div className="image-container">
                  <div 
                    className="step-image"
                    style={{
                      backgroundImage: `url(${steps[activeStep].image})`,
                      transform: `scale(${1 + mousePosition.x * 0.03})`
                    }}
                  />
                  <div className="image-overlay" />
                  
                  {/* Step Number Watermark */}
                  <div className="step-watermark">
                    <span className="watermark-number">{steps[activeStep].number}</span>
                  </div>

                  {/* Duration Badge */}
                  <div className="duration-badge">
                    <Clock size={14} />
                    <span>{steps[activeStep].duration}</span>
                  </div>
                </div>

                {/* Frame Shadow */}
                <div className="frame-shadow" />
              </div>

              {/* Navigation Dots */}
              <div className="image-nav-dots">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    className={`image-dot ${activeStep === index ? 'active' : ''}`}
                    onClick={() => {
                      setActiveStep(index)
                      setIsAutoPlaying(false)
                      setTimeout(() => setIsAutoPlaying(true), 8000)
                    }}
                  >
                    <div className="dot-fill" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right - Steps Content */}
            <div className="htu-content-panel">
              
              {/* Steps Timeline */}
              <div className="steps-timeline">
                {steps.map((step, index) => {
                  const StepIcon = step.icon
                  const isActive = activeStep === index
                  
                  return (
                    <div 
                      key={index}
                      className={`timeline-step ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        setActiveStep(index)
                        setIsAutoPlaying(false)
                        setTimeout(() => setIsAutoPlaying(true), 8000)
                      }}
                    >
                      {/* Timeline Connector */}
                      {index < steps.length - 1 && (
                        <div className="timeline-connector">
                          <div className={`connector-line ${isActive ? 'active' : ''}`} />
                        </div>
                      )}

                      {/* Step Card */}
                      <div className="step-card-wrapper">
                        <div className={`step-card ${isActive ? 'active' : ''}`}>
                          
                          {/* Step Header */}
                          <div className="step-card-header">
                            <div className={`step-number-circle ${isActive ? 'active' : ''}`}>
                              <span className="step-number">{step.number}</span>
                              <div className="circle-glow" />
                            </div>
                            
                            <div className="step-header-content">
                              <span className="step-subtitle">{step.subtitle}</span>
                              <h3 className="step-title">{step.title}</h3>
                            </div>

                            <div className={`step-icon-wrapper ${isActive ? 'active' : ''}`}>
                              <StepIcon size={18} />
                            </div>
                          </div>

                          {/* Step Description - Expandable */}
                          <div className={`step-description-wrapper ${isActive ? 'expanded' : ''}`}>
                            <p className="step-description">{step.description}</p>
                            
                            {/* Pro Tip */}
                            <div className="step-tip">
                              <div className="tip-icon-circle">
                                <Sparkles size={12} />
                              </div>
                              <span>{step.tip}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Controls */}
              <div className="steps-controls">
                <button 
                  className="control-btn control-prev"
                  onClick={() => {
                    setActiveStep(prev => (prev - 1 + steps.length) % steps.length)
                    setIsAutoPlaying(false)
                    setTimeout(() => setIsAutoPlaying(true), 8000)
                  }}
                >
                  <ChevronRight size={18} style={{ transform: 'rotate(180deg)' }} />
                </button>

                <button 
                  className="control-btn control-autoplay"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                >
                  {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>

                <button 
                  className="control-btn control-next"
                  onClick={() => {
                    setActiveStep(prev => (prev + 1) % steps.length)
                    setIsAutoPlaying(false)
                    setTimeout(() => setIsAutoPlaying(true), 8000)
                  }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* CTA */}
              <button className="htu-cta-button">
                <span>View Full Guide</span>
                <ArrowRight size={16} />
                <div className="cta-shine" />
              </button>
            </div>
          </div>

          {/* Bottom Benefits Strip */}
          <div className={`htu-benefits-strip ${isVisible ? 'visible' : ''}`}>
            <div className="benefit-item">
              <div className="benefit-icon">
                <Clock size={18} />
              </div>
              <div className="benefit-text">
                <span className="benefit-label">Best Time</span>
                <span className="benefit-value">Evening</span>
              </div>
            </div>

            <div className="benefit-divider" />

            <div className="benefit-item">
              <div className="benefit-icon">
                <Droplets size={18} />
              </div>
              <div className="benefit-text">
                <span className="benefit-label">Frequency</span>
                <span className="benefit-value">2-3x / Week</span>
              </div>
            </div>

            <div className="benefit-divider" />

            <div className="benefit-item">
              <div className="benefit-icon">
                <Sparkles size={18} />
              </div>
              <div className="benefit-text">
                <span className="benefit-label">Results</span>
                <span className="benefit-value">4-6 Weeks</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HowToUse