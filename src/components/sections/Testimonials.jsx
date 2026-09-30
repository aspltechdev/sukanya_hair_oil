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

import cus1 from "../../assets/cus1.png";
import cus2 from "../../assets/cus2.png";
import cus3 from "../../assets/cus3.png";
import cus4 from "../../assets/cus4.png";
import cus5 from "../../assets/cus5.png";
import cus6 from "../../assets/cus6.png";
import cus7 from "../../assets/cus7.png";
import cus8 from "../../assets/cus8.png";
import cus9 from "../../assets/cus9.png";
import cus10 from "../../assets/cus10.jpeg";

// ============================================
// REPLACE THESE WITH YOUR ACTUAL IMAGE URLS
// ============================================
const IMAGES = {
  avatar1: cus1,
  avatar2: cus2,
  avatar3: cus3,
  avatar4: cus4,
  avatar5: cus5,
  avatar6: cus6,
  avatar7: cus7,
  avatar8: cus8,
  avatar9: cus9,
  avatar10: cus10,
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
      text: "I have been using this homemade hair oil for the past month and am very happy with the results. My hair feels healthier and better nourished, and the oil absorbs well without leaving a heavy residue. An unexpected benefit is that applying it to my scalp is relaxing, and I have been sleeping noticeably better on the nights I use it. The natural formulation and consistent quality make it a product I would happily continue using. I recommend it to anyone looking for a gentle, effective hair care option.",
      name: "Harish",
      location: "Andhra",
      rating: 5,
      usage: "5 months",
      avatar: IMAGES.avatar10,
      highlight: "Nourished roots, gorgeous hair"
    },
    {
      text: "The oil feels very natural and nourishing. My hair feels softer and healthier after regular use.",
      name: "Nirmala",
      location: "Gulbarga",
      rating: 5,
      usage: "1 Year",
      avatar: IMAGES.avatar1,
      highlight: "Reduced hair fall after 2 times"
    },
    {
      text: "I really liked the traditional herbal fragrance and lightweight feel. It has become part of my weekly hair-care routine.",
      name: "Savitri",
      location: "Herur, Kalaburgi",
      rating: 5,
      usage: "2 months",
      avatar: IMAGES.avatar2,
      highlight: "Visible new hair growth"
    },
    {
      text: "Sukanya Hair Oil feels like a traditional family hair-care remedy with a fresh, natural touch.",
      name: "Shashikala Mangalesh",
      location: "Hubali Dharwad",
      rating: 5,
      usage: "4 months",
      avatar: IMAGES.avatar3,
      highlight: "Best natural hair oil"
    },
    {
      text: "After using it regularly, my hair feels smoother, softer and more manageable.",
      name: "Anupama Dev Prabhu",
      location: "Bangalore",
      rating: 5,
      usage: "6 weeks",
      avatar: IMAGES.avatar4,
      highlight: "Dandruff completely gone"
    },
    {
      text: "I love the natural ingredients and the care that goes into every bottle. Definitely worth trying!",
      name: "Ashwini  B K Patil",
      location: "Lakmeshwara, Gadag",
      rating: 5,
      usage: "1 year",
      avatar: IMAGES.avatar5,
      highlight: "Family favorite for years"
    },
    {
      text: "The oil feels gentle on my scalp and leaves my hair feeling nourished without being too heavy.",
      name: "Anuradha",
      location: "Hosapete",
      rating: 5,
      usage: "5 months",
      avatar: IMAGES.avatar6,
      highlight: "Thicker, shinier hair"
    },
    {
      text: "A beautiful blend of traditional hair care and natural ingredients. I’m enjoying using it regularly.",
      name: "Jyoti Pavan",
      location: "Harihara,  Davanagere",
      rating: 5,
      usage: "5 months",
      avatar: IMAGES.avatar7,
      highlight: "Fuller hair, natural shine"
    },
    {
      text: "Fresh, natural and easy to use—Sukanya Hair Oil is now part of my regular hair-care routine.",
      name: "Vittala Siddannavar",
      location: "Herur, Kalaburgi ulbarga",
      rating: 5,
      usage: "5 months",
      avatar: IMAGES.avatar8,
      highlight: "Less breakage, more strength"
    },
    {
      text: "Light, natural, and easy to apply—Sukanya Hair Oil has become a simple part of my everyday hair-care routine.",
      name: "Jyoti Pavan",
      location: "Harihara, Davangere",
      rating: 5,
      usage: "5 months",
      avatar: IMAGES.avatar9,
      highlight: "Nourished roots, gorgeous hair"
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