import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  Leaf, 
  Sparkles, 
  Shield, 
  Droplets, 
  Star,
  Lock,
  FlaskConical,
  Award,
  Heart,
  Zap
} from 'lucide-react'
import './Ingredients.css'
import herbs from "../../assets/rare.png";
import oils from "../../assets/oils.png";
import extracts from "../../assets/extract.png";

// ============================================
// REPLACE THESE WITH YOUR ACTUAL IMAGE URLS
// ============================================
const IMAGES = {
  // Hero image - herbs, natural ingredients, Ayurvedic elements
  heroImage:"",
  
  // Category images
  herbs: herbs,
  oils: oils,
  extracts: extracts,
}

const Ingredients = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeCategory, setActiveCategory] = useState(null)
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef(null)

  const categories = [
    {
      title: 'Rare Ayurvedic Herbs',
      description: 'Handpicked from pristine natural habitats, our herbs are sourced at peak potency to ensure maximum effectiveness.',
      features: ['Wild-harvested', 'Seasonally collected', 'Lab-tested for purity'],
      image: IMAGES.herbs,
      accent: '#7A9B5A',
      icon: Leaf
    },
    {
      title: 'Cold-Pressed Oils',
      description: 'Extracted using traditional methods that preserve essential nutrients and natural goodness without heat damage.',
      features: ['Cold-pressed', 'Unrefined', 'Nutrient-rich'],
      image: IMAGES.oils,
      accent: '#B8944B',
      icon: Droplets
    },
    {
      title: 'Natural Extracts',
      description: 'Concentrated botanical extracts that deliver powerful active compounds directly to your hair and scalp.',
      features: ['High potency', 'Bio-available', 'Fast absorbing'],
      image: IMAGES.extracts,
      accent: '#5C7A3E',
      icon: FlaskConical
    }
  ]

  const highlights = [
    { icon: Leaf, stat: '50+', label: 'Natural Ingredients', accent: '#7A9B5A' },
    { icon: Shield, stat: '100%', label: 'Chemical Free', accent: '#B8944B' },
    { icon: Award, stat: '3 Gen', label: 'Family Recipe', accent: '#5C7A3E' },
    { icon: Lock, stat: 'Secret', label: 'Proprietary Blend', accent: '#9A7A3A' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setIsVisible(true)
        })
      },
      { threshold: 0.1 }
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
        <title>Our Secret Formula - Sukanya Hair Oil Ingredients</title>
        <meta name="description" content="Discover the power of 50+ natural ingredients in our proprietary Ayurvedic blend. Chemical-free, traditionally crafted for beautiful hair." />
      </Helmet>

      <section className="ingredients" ref={sectionRef} id="ingredients">
        
        {/* Background */}
        <div className="ing-bg-ambient">
          <div className="ing-orb ing-orb-1" style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }} />
          <div className="ing-orb ing-orb-2" style={{
            transform: `translate(${-mousePosition.x * 15}px, ${-mousePosition.y * 15}px)`
          }} />
        </div>

        {/* Floating Elements */}
        <div className="ing-floating">
          <div className="ing-float ing-float-1"><Leaf size={16} /></div>
          <div className="ing-float ing-float-2"><Sparkles size={14} /></div>
          <div className="ing-float ing-float-3"><Star size={12} /></div>
        </div>

        <div className="ingredients-container">
          
          {/* Header */}
          <div className={`ing-header ${isVisible ? 'visible' : ''}`}>
            <div className="ing-badge">
              <Lock size={12} />
              <span>Proprietary Blend</span>
            </div>

            <h2 className="ing-title">
              <span className="ing-title-top">The Power of</span>
              <span className="ing-title-bottom">
                <span className="ing-title-accent">50+ Natural</span> Ingredients
              </span>
            </h2>

            <div className="ing-divider">
              <div className="ing-divider-line" />
              <Leaf size={14} className="ing-divider-icon" />
              <div className="ing-divider-line" />
            </div>

            <p className="ing-description">
             Our secret family formula combines rare organic Ayurvedic herbs, cold-pressed oils, and natural extracts — each carefully chosen for its unique benefits. 
             The exact recipe remains our treasured secret, passed down through three generations.
            </p>
          </div>

          {/* Stats Highlight Cards */}
          <div className={`ing-highlights ${isVisible ? 'visible' : ''}`}>
            {highlights.map((item, index) => {
              const HighlightIcon = item.icon
              return (
                <div 
                  key={index} 
                  className="ing-highlight-card"
                  style={{ 
                    transitionDelay: `${0.2 + index * 0.1}s`,
                    '--accent': item.accent
                  }}
                >
                  <div className="ing-highlight-icon">
                    <HighlightIcon size={20} />
                  </div>
                  <div className="ing-highlight-content">
                    <span className="ing-highlight-stat">{item.stat}</span>
                    <span className="ing-highlight-label">{item.label}</span>
                  </div>
                  <div className="ing-highlight-glow" />
                </div>
              )
            })}
          </div>

          {/* Category Cards */}
          <div className="ing-categories">
            {categories.map((category, index) => {
              const CategoryIcon = category.icon
              const isActive = activeCategory === index
              
              return (
                <div
                  key={index}
                  className={`ing-category-card ${isVisible ? 'visible' : ''} ${isActive ? 'active' : ''}`}
                  style={{ transitionDelay: `${0.4 + index * 0.15}s` }}
                  onMouseEnter={() => setActiveCategory(index)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  {/* Image Section */}
                  <div className="ing-category-image">
                    <div 
                      className="ing-category-bg"
                      style={{ backgroundImage: `url(${category.image})` }}
                    />
                    <div className="ing-category-overlay" />
                    
                    {/* Category Icon */}
                    <div className="ing-category-icon">
                      <CategoryIcon size={24} />
                    </div>

                    {/* Number */}
                    {/* <div className="ing-category-number">0{index + 1}</div> */}
                  </div>

                  {/* Content */}
                  <div className="ing-category-content">
                    <h3 className="ing-category-title">{category.title}</h3>
                    <p className="ing-category-desc">{category.description}</p>
                    
                    {/* Features List */}
                    <div className={`ing-category-features ${isActive ? 'show' : ''}`}>
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="ing-feature-item">
                          <Zap size={12} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Accent Border */}
                  <div className="ing-category-border" style={{ background: category.accent }} />
                </div>
              )
            })}
          </div>

          {/* Bottom Trust Message */}
          <div className={`ing-trust ${isVisible ? 'visible' : ''}`}>
            <div className="ing-trust-card">
              <div className="ing-trust-icon">
                <Shield size={24} />
              </div>
              <div className="ing-trust-content">
                <span className="ing-trust-title">Our Promise to You</span>
                <span className="ing-trust-text">
                  Every ingredient is ethically sourced, lab-tested, and blended 
                  with care. No chemicals, no shortcuts — just nature's best.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Ingredients