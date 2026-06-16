import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  Star, 
  Quote, 
  Heart, 
  ThumbsUp, 
  MessageCircle,
  Shield,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Verified
} from 'lucide-react'
import './Testimonials.css'

// ============================================
// REPLACE THESE WITH YOUR ACTUAL IMAGE URLS
// ============================================
const IMAGES = {
  avatar1: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  avatar2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  avatar3: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  avatar4: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
  avatar5: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
  avatar6: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&q=80',
}

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const sectionRef = useRef(null)
  const sliderRef = useRef(null)

  const testimonials = [
    {
      text: "My hair feels stronger and looks shinier than ever. I've noticed a significant reduction in hair fall within just a month. The natural ingredients truly make a difference.",
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      usage: "3 months",
      avatar: IMAGES.avatar1,
      highlight: "Reduced hair fall in 1 month"
    },
    {
      text: "After trying countless products, I finally found something that works. My hair is thicker, healthier, and I can see new growth. Highly recommend it to everyone!",
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      usage: "2 months",
      avatar: IMAGES.avatar2,
      highlight: "Visible new hair growth"
    },
    {
      text: "The traditional recipe shows in the quality. My entire family now uses Sukanya Hair Oil. It's become our little secret for beautiful, healthy hair. Worth every rupee!",
      name: "Sneha Patel",
      location: "Bangalore",
      rating: 5,
      usage: "4 months",
      avatar: IMAGES.avatar3,
      highlight: "Best natural hair oil"
    },
    {
      text: "I was skeptical at first, but the results speak for themselves. My dandruff is gone, hair is smoother, and I get compliments everywhere I go. This oil is magical!",
      name: "Ankit Verma",
      location: "Jaipur",
      rating: 5,
      usage: "6 weeks",
      avatar: IMAGES.avatar4,
      highlight: "Dandruff completely gone"
    },
    {
      text: "Three generations of my family now use Sukanya Hair Oil. The traditional recipe truly shows in the quality. My grandmother swears by it and now I do too!",
      name: "Meera Iyer",
      location: "Chennai",
      rating: 5,
      usage: "1 year",
      avatar: IMAGES.avatar5,
      highlight: "Family favorite for years"
    },
    {
      text: "I've tried every hair oil on the market. Nothing compares to Sukanya. My hair has never been this thick and shiny. The cold-pressed oils make all the difference.",
      name: "Deepak Reddy",
      location: "Hyderabad",
      rating: 5,
      usage: "5 months",
      avatar: IMAGES.avatar6,
      highlight: "Thicker, shinier hair"
    }
  ]

  const stats = [
    { value: '4.9', label: 'Average Rating', icon: Star },
    { value: '5,000+', label: 'Happy Customers', icon: Heart },
    { value: '98%', label: 'Recommend Rate', icon: ThumbsUp }
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
    if (!isPaused && isVisible) {
      const interval = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % testimonials.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isPaused, isVisible, testimonials.length])

  const renderStars = (count) => {
    return Array(count).fill(0).map((_, i) => (
      <Star key={i} size={13} fill="#B8944B" color="#B8944B" />
    ))
  }

  const nextTestimonial = () => {
    setActiveIndex(prev => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <>
      <Helmet>
        <title>Customer Reviews - Sukanya Hair Oil</title>
        <meta name="description" content="Read real customer reviews. 4.9 rating from 5,000+ happy customers. See why everyone loves Sukanya Hair Oil." />
      </Helmet>

      <section className="testimonials" ref={sectionRef} id="testimonials">
        
        {/* Background Ambient */}
        <div className="tm-ambient">
          <div className="tm-ambient-orb tm-ao-1" style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }} />
          <div className="tm-ambient-orb tm-ao-2" style={{
            transform: `translate(${-mousePosition.x * 15}px, ${-mousePosition.y * 15}px)`
          }} />
        </div>

        <div className="testimonials-container">
          
          {/* Header */}
          <div className={`tm-header ${isVisible ? 'visible' : ''}`}>
            <div className="tm-label">
              <MessageCircle size={14} />
              <span>Customer Stories</span>
            </div>

            <h2 className="tm-title">
              Loved by
              <span className="tm-title-highlight"> Thousands</span>
            </h2>

            <p className="tm-subtitle">
              Don't just take our word for it. Hear from real people who 
              have transformed their hair with our Ayurvedic formula.
            </p>
          </div>

          {/* Stats Row */}
          <div className={`tm-stats-row ${isVisible ? 'visible' : ''}`}>
            {stats.map((stat, index) => {
              const StatIcon = stat.icon
              return (
                <div key={index} className="tm-stat-card">
                  <StatIcon size={20} className="tm-stat-icon" />
                  <span className="tm-stat-value">{stat.value}</span>
                  <span className="tm-stat-label">{stat.label}</span>
                </div>
              )
            })}
          </div>

          {/* Main Testimonial Slider */}
          <div 
            className={`tm-slider ${isVisible ? 'visible' : ''}`}
            ref={sliderRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            
            {/* Left Arrow */}
            <button className="tm-slider-arrow tm-arrow-left" onClick={prevTestimonial}>
              <ChevronLeft size={22} />
            </button>

            {/* Cards Container */}
            <div className="tm-slider-track">
              <div 
                className="tm-slider-inner"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="tm-slider-slide">
                    <div className="tm-card">
                      
                      {/* Quote Icon */}
                      <div className="tm-card-quote">
                        <Quote size={28} />
                      </div>

                      {/* Rating */}
                      <div className="tm-card-rating">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Text */}
                      <p className="tm-card-text">"{testimonial.text}"</p>

                      {/* Author */}
                      <div className="tm-card-author">
                        <div className="tm-card-avatar">
                          <img src={testimonial.avatar} alt={testimonial.name} />
                          <div className="tm-card-verified">
                            <Verified size={12} />
                          </div>
                        </div>
                        <div className="tm-card-author-info">
                          <span className="tm-card-name">{testimonial.name}</span>
                          <span className="tm-card-location">{testimonial.location}</span>
                        </div>
                      </div>

                      {/* Highlight Tag */}
                      <div className="tm-card-tag">
                        <Sparkles size={11} />
                        <span>{testimonial.highlight}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button className="tm-slider-arrow tm-arrow-right" onClick={nextTestimonial}>
              <ChevronRight size={22} />
            </button>

            {/* Dots */}
            <div className="tm-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`tm-dot ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Bottom Trust Badge */}
          <div className={`tm-trust ${isVisible ? 'visible' : ''}`}>
            <div className="tm-trust-badge">
              <Shield size={16} />
              <span>All reviews are from verified customers</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials