import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  Heart, 
  Clock, 
  Users, 
  Sparkles,
  Leaf,
  ArrowRight,
  Quote,
  Shield,
  Star,
  Play,
  Pause
} from 'lucide-react'
import './FounderStory.css'
import founder from "../../assets/founder.png";

// ============================================
// REPLACE THESE WITH YOUR ACTUAL IMAGE URLS
// ============================================
const IMAGES = {
  founderImage: founder,
  bgTexture: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&q=80',
}

const FounderStory = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef(null)

  const legacy = [
    { icon: Users, value: '3', label: 'Generations', subtitle: 'Of Family Wisdom' },
    { icon: Clock, value: '50+', label: 'Years', subtitle: 'Of Tradition' },
    { icon: Leaf, value: '100%', label: 'Natural', subtitle: 'Pure Ingredients' }
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

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Helmet>
        <title>Our Story - The Legacy Behind Sukanya Hair Oil</title>
        <meta name="description" content="Discover the heartwarming story of Mrs. Sukanya and three generations of Ayurvedic hair care wisdom." />
      </Helmet>

      <section className="founder" ref={sectionRef} id="story">
        
        {/* Background */}
        <div className="fd-ambient">
          <div className="fd-orb fd-orb-1" style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }} />
          <div className="fd-orb fd-orb-2" style={{
            transform: `translate(${-mousePosition.x * 15}px, ${-mousePosition.y * 15}px)`
          }} />
        </div>

        <div 
          className="fd-pattern"
          style={{
            backgroundImage: `url(${IMAGES.bgTexture})`,
            transform: `translateY(${scrollY * 0.03}px)`
          }}
        />

        <div className="founder-container">
          
          {/* Header */}
          <div className={`fd-header ${isVisible ? 'visible' : ''}`}>
            <div className="fd-label">
              <Heart size={13} />
              <span>Founder's Story</span>
            </div>

            <h2 className="fd-title">
              The Heart Behind
              <span className="fd-title-emphasis"> Sukanya</span>
            </h2>

            <p className="fd-subtitle">
              A legacy of natural care, passed down through three generations
            </p>
          </div>

          {/* Main Layout */}
          <div className={`fd-layout ${isVisible ? 'visible' : ''}`}>
            
            {/* Left - Founder Card */}
            <div className="fd-card">
              <div className="fd-card-image">
                <img src={IMAGES.founderImage} alt="Mrs. Sukanya - Founder" />
                <div className="fd-card-overlay" />
                
                {/* Quote Overlay */}
                <div className="fd-card-quote">
                  <Quote size={20} />
                  <p>"Nature holds the secret to true beauty"</p>
                </div>
              </div>

              <div className="fd-card-footer">
                <div className="fd-card-avatar">S</div>
                <div className="fd-card-info">
                  <span className="fd-card-name">Mrs. Sukanya</span>
                  <span className="fd-card-role">Founder & Visionary</span>
                </div>
                <div className="fd-card-badge">
                  <Shield size={12} />
                  <span>3rd Generation</span>
                </div>
              </div>
            </div>

            {/* Right - Story Content */}
            <div className="fd-story">
              
              {/* Story Block */}
              <div className="fd-story-block">
                <div className="fd-story-icon">
                  <Star size={20} />
                </div>
                <div className="fd-story-content">
                  <h3 className="fd-story-heading">A Mother's Wisdom</h3>
                  <p className="fd-story-text">
                    The story of Sukanya Hair Oil is the story of our family. Our founder, 
                    Mrs. Sukanya, inherited the sacred knowledge of Ayurvedic hair care 
                    from her mother and grandmother — a lineage of wise women who understood 
                    the profound healing power of nature's ingredients.
                  </p>
                </div>
              </div>

              {/* Story Block */}
              <div className="fd-story-block">
                <div className="fd-story-icon">
                  <Leaf size={20} />
                </div>
                <div className="fd-story-content">
                  <h3 className="fd-story-heading">Rooted in Tradition</h3>
                  <p className="fd-story-text">
                    In a time before commercial products filled every shelf, they relied on 
                    the wisdom of the earth. They gathered medicinal herbs at dawn, prepared 
                    oils with patience and care, and created remedies that nourished not just 
                    hair, but the soul. This knowledge is the bedrock of everything we create.
                  </p>
                </div>
              </div>

              {/* Legacy Stats */}
              <div className="fd-legacy">
                {legacy.map((item, index) => {
                  const LegacyIcon = item.icon
                  return (
                    <div key={index} className="fd-legacy-item">
                      <LegacyIcon size={18} className="fd-legacy-icon" />
                      <div className="fd-legacy-text">
                        <span className="fd-legacy-value">{item.value}</span>
                        <span className="fd-legacy-label">{item.label}</span>
                        <span className="fd-legacy-sub">{item.subtitle}</span>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* CTA */}
              <button className="fd-cta">
                <span>Read Our Full Story</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FounderStory