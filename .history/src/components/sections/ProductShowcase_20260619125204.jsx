// import React, { useEffect, useRef, useState } from 'react'
// import { Helmet } from 'react-helmet-async'
// import { 
//   Sparkles, 
//   Shield, 
//   Leaf, 
//   Clock, 
//   Star, 
//   ArrowRight,
//   CheckCircle2,
//   Droplets
// } from 'lucide-react'
// import './ProductShowcase.css'
// import product1 from "../../assets/pro2.png"
// // ============================================
// // REPLACE THESE WITH YOUR ACTUAL IMAGE URLS
// // ============================================
// const IMAGES = {
//   // Main product image - bottle with transparent/white background
//   productImage: product1,
  
//   // Background decorative image - herbs, oils, ingredients
//   bgDeco: product1,
  
//   // Ingredient images
//   ingredient1: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&q=80',
//   ingredient2: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80',
// }

// const ProductShowcase = () => {
//   const [isVisible, setIsVisible] = useState(false)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const [activeFeature, setActiveFeature] = useState(null)
//   const [scrollY, setScrollY] = useState(0)
//   const sectionRef = useRef(null)
//   const bottleRef = useRef(null)

//   const features = [
//     {
//       icon: Leaf,
//       title: '100% Natural',
//       description: 'Pure Ayurvedic ingredients, handpicked from nature',
//       color: 'feature-olive'
//     },
//     {
//       icon: Shield,
//       title: 'Chemical Free',
//       description: 'No parabens, sulfates, or artificial additives',
//       color: 'feature-gold'
//     },
//     {
//       icon: Clock,
//       title: 'Traditional Recipe',
//       description: 'Time-tested family preparation method',
//       color: 'feature-olive'
//     },
//     {
//       icon: Star,
//       title: 'Visible Results',
//       description: 'Noticeable improvement within 8 weeks',
//       color: 'feature-gold'
//     }
//   ]

//   // Intersection Observer
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             setIsVisible(true)
//           }
//         })
//       },
//       { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   // Mouse tracking
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const rect = sectionRef.current?.getBoundingClientRect()
//       if (rect) {
//         const x = (e.clientX - rect.left) / rect.width - 0.5
//         const y = (e.clientY - rect.top) / rect.height - 0.5
//         setMousePosition({ x, y })
//       }
//     }

//     window.addEventListener('mousemove', handleMouseMove)
//     return () => window.removeEventListener('mousemove', handleMouseMove)
//   }, [])

//   // Scroll tracking
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY)
//     }

//     window.addEventListener('scroll', handleScroll, { passive: true })
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <>
//       <Helmet>
//         <title>Sukanya Hair Oil - Premium Ayurvedic Product</title>
//         <meta name="description" content="Discover Sukanya Hair Oil - 100% natural, chemical-free Ayurvedic hair care. Traditional recipe for visible results." />
//       </Helmet>

//       <section className="product-showcase" ref={sectionRef} id="product">
        
//         {/* Background Elements */}
//         <div className="ps-bg-ambient">
//           <div className="ps-gradient-orb ps-orb-1" style={{
//             transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px)`
//           }} />
//           <div className="ps-gradient-orb ps-orb-2" style={{
//             transform: `translate(${-mousePosition.x * 18}px, ${-mousePosition.y * 18}px)`
//           }} />
//           <div className="ps-gradient-orb ps-orb-3" style={{
//             transform: `translate(${mousePosition.x * 12}px, ${-mousePosition.y * 12}px)`
//           }} />
//         </div>

//         {/* Floating Decorations */}
//         <div className="ps-floating-elements">
//           <div className="ps-float-item ps-float-1">
//             <Leaf size={20} />
//           </div>
//           <div className="ps-float-item ps-float-2">
//             <Droplets size={18} />
//           </div>
//           <div className="ps-float-item ps-float-3">
//             <Sparkles size={16} />
//           </div>
//           <div className="ps-float-item ps-float-4">
//             <Star size={14} />
//           </div>
//         </div>

//         <div className="product-showcase-container">
          
//           {/* Section Header */}
//           <div className={`ps-header ${isVisible ? 'visible' : ''}`}>
//             <div className="ps-badge">
//               <div className="badge-pulse-dot" />
//               <span>The Product</span>
//               <Sparkles size={12} className="badge-icon-sparkle" />
//             </div>

//             <h2 className="ps-title">
//               <span className="ps-title-lines">Premium Care,</span>
//               <span className="ps-title-lines ps-title-accents">Naturally</span>
//             </h2>

//             <div className="ps-ornament">
//               <div className="ps-ornament-line" />
//               <Leaf size={14} className="ps-ornament-icon" />
//               <div className="ps-ornament-line" />
//             </div>
//           </div>

//           {/* Main Showcase Grid */}
//           <div className={`ps-main-grid ${isVisible ? 'visible' : ''}`}>
            
//             {/* Left - Product Visual */}
//             <div className="ps-visual-column">
//               <div className="ps-product-wrapper" ref={bottleRef}>
                
//                 {/* Product Aura Glow */}
//                 <div className="ps-product-aura">
//                   <div className="aura-ring aura-ring-1" />
//                   <div className="aura-ring aura-ring-2" />
//                   <div className="aura-ring aura-ring-3" />
//                 </div>

//                 {/* Main Product Card */}
//                 <div className="ps-product-card" style={{
//                   transform: `
//                     perspective(1000px)
//                     rotateY(${mousePosition.x * 8}deg)
//                     rotateX(${-mousePosition.y * 8}deg)
//                   `
//                 }}>
                  
//                   {/* Card Glow Effects */}
//                   <div className="ps-card-glow ps-glow-top" />
//                   <div className="ps-card-glow ps-glow-bottom" />

//                   {/* Card Reflection */}
//                   <div className="ps-card-reflection" />

//                   {/* Product Image Container */}
//                   <div className="ps-image-container">
//                     <img 
//                       src={IMAGES.productImage} 
//                       alt="Sukanya Hair Oil Bottle"
//                       className="ps-product-image"
//                       style={{
//                         transform: `translateY(${-mousePosition.y * 10}px)`
//                       }}
//                     />
                    
//                     {/* Image Shine */}
//                     <div className="ps-image-shine" />
//                   </div>

//                   {/* Product Info Overlay */}
//                   <div className="ps-product-info">
//                     <div className="ps-info-brand">Sukanya</div>
//                     <div className="ps-info-name">Hair Oil</div>
//                     <div className="ps-info-divider" />
//                     <div className="ps-info-tag">Ayurvedic • Pure</div>
//                   </div>

//                   {/* Quality Seal */}
//                   <div className="ps-quality-seal">
//                     <Shield size={16} />
//                     <span>Quality Assured</span>
//                   </div>
//                 </div>

//                 {/* Ingredient Preview Cards */}
//                 <div className="ps-ingredient-card ps-ing-top" style={{
//                   transform: `translate(${-mousePosition.x * 15}px, ${-mousePosition.y * 15}px)`
//                 }}>
//                   <div className="ingredient-image">
//                     <img src={IMAGES.ingredient1} alt="Natural herbs" />
//                   </div>
//                   <div className="ingredient-info">
//                     <span className="ingredient-label">50+</span>
//                     <span className="ingredient-text">Natural Herbs</span>
//                   </div>
//                 </div>

//                 <div className="ps-ingredient-card ps-ing-bottom" style={{
//                   transform: `translate(${mousePosition.x * 12}px, ${mousePosition.y * 12}px)`
//                 }}>
//                   <div className="ingredient-image">
//                     <img src={IMAGES.ingredient2} alt="Ayurvedic ingredients" />
//                   </div>
//                   <div className="ingredient-info">
//                     <span className="ingredient-label">100%</span>
//                     <span className="ingredient-text">Pure & Natural</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right - Content Column */}
//             <div className="ps-content-column">
              
//               {/* Description Card */}
//               <div className="ps-description-card">
//                 <div className="ps-desc-icon">
//                   <Droplets size={24} />
//                 </div>
//                 <p className="ps-description">
//                   Sukanya Hair Oil is crafted with care using a time-tested family recipe. 
//                   Each bottle contains the essence of nature's finest ingredients, prepared 
//                   with the same love and dedication passed down through generations.
//                 </p>
//                 <div className="ps-desc-decoration">
//                   <span className="decoration-dot" />
//                   <span className="decoration-dot" />
//                   <span className="decoration-dot" />
//                 </div>
//               </div>

//               {/* Features Grid */}
//               <div className="ps-features-grid">
//                 {features.map((feature, index) => {
//                   const FeatureIcon = feature.icon
//                   return (
//                     <div
//                       key={index}
//                       className={`ps-feature-card ${feature.color} ${isVisible ? 'visible' : ''}`}
//                       style={{ transitionDelay: `${0.5 + index * 0.15}s` }}
//                       onMouseEnter={() => setActiveFeature(index)}
//                       onMouseLeave={() => setActiveFeature(null)}
//                     >
//                       {/* Feature Icon */}
//                       <div className={`ps-feature-icon-wrapper ${activeFeature === index ? 'active' : ''}`}>
//                         <div className="ps-feature-icon-circle">
//                           <FeatureIcon size={18} />
//                         </div>
//                         <div className="ps-feature-icon-glow" />
//                       </div>

//                       {/* Feature Content */}
//                       <div className="ps-feature-content">
//                         <h4 className="ps-feature-title">{feature.title}</h4>
//                         <p className={`ps-feature-desc ${activeFeature === index ? 'show' : ''}`}>
//                           {feature.description}
//                         </p>
//                       </div>

//                       {/* Check Indicator */}
//                       <div className={`ps-feature-check ${activeFeature === index ? 'active' : ''}`}>
//                         <CheckCircle2 size={16} />
//                       </div>

//                       {/* Hover Border */}
//                       <div className="ps-feature-border" />
//                     </div>
//                   )
//                 })}
//               </div>

//               {/* CTA Section */}
//               <div className="ps-cta-wrapper">
//                 <button className="ps-cta-button">
//                   <span>Experience the Difference</span>
//                   <span className="ps-cta-icon">
//                     <ArrowRight size={18} />
//                   </span>
//                   <div className="ps-cta-shine" />
//                 </button>

//                 <div className="ps-cta-trust">
//                   <div className="trust-avatars">
//                     <div className="trust-avatar">✓</div>
//                     <div className="trust-avatar">✓</div>
//                     <div className="trust-avatar">✓</div>
//                   </div>
//                   <span className="trust-text">Trusted by 5000+ customers</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default ProductShowcase


import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  Sparkles, 
  Shield, 
  Leaf, 
  Clock, 
  Star, 
  ArrowRight,
  CheckCircle2,
  Droplets
} from 'lucide-react'
import './ProductShowcase.css'
import product1 from "../../assets/pro2a.png"
import product3 from "../../assets/pro3.png"
import product4 from "../../assets/pro4.png"

const IMAGES = {
  productImage: product1,
  ingredient1: product3,
  ingredient2: product4,
}

const ProductShowcase = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeFeature, setActiveFeature] = useState(null)
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef(null)
  const bottleRef = useRef(null)

  const features = [
    {
      icon: Leaf,
      title: '100% Natural',
      description: 'Pure Ayurvedic ingredients, handpicked from nature',
      color: 'feature-olive'
    },
    {
      icon: Shield,
      title: 'Chemical Free',
      description: 'No parabens, sulfates, or artificial additives',
      color: 'feature-gold'
    },
    {
      icon: Clock,
      title: 'Traditional Recipe',
      description: 'Time-tested family preparation method',
      color: 'feature-olive'
    },
    {
      icon: Star,
      title: 'Visible Results',
      description: 'Improvement within 8 weeks',
      color: 'feature-gold'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setIsVisible(true)
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

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

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Helmet>
        <title>Sukanya Hair Oil - Premium Ayurvedic Product</title>
        <meta name="description" content="Discover Sukanya Hair Oil - 100% natural, chemical-free Ayurvedic hair care." />
      </Helmet>

      <section className="product-showcase" ref={sectionRef} id="product">
        
        {/* Background Elements */}
        <div className="ps-bg-ambient">
          <div className="ps-gradient-orb ps-orb-1" style={{
            transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px)`
          }} />
          <div className="ps-gradient-orb ps-orb-2" style={{
            transform: `translate(${-mousePosition.x * 18}px, ${-mousePosition.y * 18}px)`
          }} />
        </div>

        {/* Floating Decorations */}
        <div className="ps-floating-elements">
          <div className="ps-float-item ps-float-1"><Leaf size={20} /></div>
          <div className="ps-float-item ps-float-2"><Droplets size={18} /></div>
          <div className="ps-float-item ps-float-3"><Sparkles size={16} /></div>
        </div>

        <div className="product-showcase-container">
          
          {/* Section Header */}
          <div className={`ps-header ${isVisible ? 'visible' : ''}`}>
            <div className="ps-badge">
              <div className="badge-pulse-dot" />
              <span>The Product</span>
              <Sparkles size={12} className="badge-icon-sparkle" />
            </div>

            <h2 className="ps-title">
              <span className="ps-title-lines">Premium Care,</span>
              <span className="ps-title-lines ps-title-accents">Naturally</span>
            </h2>

            <div className="ps-ornament">
              <div className="ps-ornament-line" />
              <Leaf size={14} className="ps-ornament-icon" />
              <div className="ps-ornament-line" />
            </div>
          </div>

          {/* Main Showcase Grid */}
          <div className={`ps-main-grid ${isVisible ? 'visible' : ''}`}>
            
            {/* Left - Product Visual with Image Overlay */}
            <div className="ps-visual-column">
              <div className="ps-product-wrapper" ref={bottleRef}>
                
                {/* Product Aura Glow */}
                <div className="ps-product-aura">
                  <div className="aura-ring aura-ring-1" />
                  <div className="aura-ring aura-ring-2" />
                  <div className="aura-ring aura-ring-3" />
                </div>

                {/* Main Product Card - Image Overlay Style */}
                <div className="ps-product-card" style={{
                  transform: `
                    perspective(1000px)
                    rotateY(${mousePosition.x * 8}deg)
                    rotateX(${-mousePosition.y * 8}deg)
                  `
                }}>
                  
                  {/* Full Background Image */}
                  <div className="ps-card-bg-image">
                    <img 
                      src={IMAGES.productImage} 
                      alt="Sukanya Hair Oil"
                      className="ps-card-bg-img"
                    />
                  </div>

                  {/* Gradient Overlays */}
                  <div className="ps-card-overlay ps-overlay-top" />
                  <div className="ps-card-overlay ps-overlay-bottom" />
                  <div className="ps-card-overlay ps-overlay-center" />

                  {/* Content Overlay */}
                  <div className="ps-card-content">
                    {/* Top Badge */}
                    <div className="ps-card-top">
                      <span className="ps-card-badge">100% Natural</span>
                    </div>

                    {/* Center Product Info */}
                    <div className="ps-card-center">
                      <div className="ps-card-brand">Sukanya</div>
                      <div className="ps-card-name">Hair Oil</div>
                      <div className="ps-card-divider" />
                      <div className="ps-card-tagline">Ayurvedic • Pure • Natural</div>
                    </div>

                    {/* Bottom Info */}
                    <div className="ps-card-bottom">
                      <div className="ps-card-stats">
                        <div className="ps-card-stat">
                          <span className="ps-stat-value">50+</span>
                          <span className="ps-stat-label">Herbs</span>
                        </div>
                        <div className="ps-card-stat-divider" />
                        <div className="ps-card-stat">
                          <span className="ps-stat-value">100%</span>
                          <span className="ps-stat-label">Natural</span>
                        </div>
                        <div className="ps-card-stat-divider" />
                        <div className="ps-card-stat">
                          <span className="ps-stat-value">3 Gen</span>
                          <span className="ps-stat-label">Recipe</span>
                        </div>
                      </div>

                      <div className="ps-card-quality">
                        <Shield size={14} />
                        <span>Quality Assured</span>
                      </div>
                    </div>
                  </div>

                  {/* Light Reflection */}
                  <div className="ps-card-reflection" />
                </div>

                {/* Floating Ingredient Cards */}
                <div className="ps-ingredient-card ps-ing-top" style={{
                  transform: `translate(${-mousePosition.x * 15}px, ${-mousePosition.y * 15}px)`
                }}>
                  <div className="ingredient-image">
                    <img src={IMAGES.ingredient1} alt="Natural herbs" />
                  </div>
                  <div className="ingredient-info">
                    <span className="ingredient-label">50+</span>
                    <span className="ingredient-text">Natural Herbs</span>
                  </div>
                </div>

                <div className="ps-ingredient-card ps-ing-bottom" style={{
                  transform: `translate(${mousePosition.x * 12}px, ${mousePosition.y * 12}px)`
                }}>
                  <div className="ingredient-image">
                    <img src={IMAGES.ingredient2} alt="Ayurvedic ingredients" />
                  </div>
                  <div className="ingredient-info">
                    <span className="ingredient-label">100%</span>
                    <span className="ingredient-text">Pure & Natural</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content Column */}
            <div className="ps-content-column">
              
              {/* Description Card */}
              <div className="ps-description-card">
                <div className="ps-desc-icon">
                  <Droplets size={24} />
                </div>
                <p className="ps-description">
                  Sukanya Hair Oil is crafted with care using a time-tested family recipe. 
                  Each bottle contains the essence of nature's finest organic ingredients, 
                  prepared with the same love and dedication passed down through generations.
                </p>
                <div className="ps-desc-decoration">
                  <span className="decoration-dot" />
                  <span className="decoration-dot" />
                  <span className="decoration-dot" />
                </div>
              </div>

              {/* Features Grid */}
              <div className="ps-features-grid">
                {features.map((feature, index) => {
                  const FeatureIcon = feature.icon
                  return (
                    <div
                      key={index}
                      className={`ps-feature-card ${feature.color} ${isVisible ? 'visible' : ''}`}
                      style={{ transitionDelay: `${0.5 + index * 0.15}s` }}
                      onMouseEnter={() => setActiveFeature(index)}
                      onMouseLeave={() => setActiveFeature(null)}
                    >
                      <div className={`ps-feature-icon-wrapper ${activeFeature === index ? 'active' : ''}`}>
                        <div className="ps-feature-icon-circle">
                          <FeatureIcon size={18} />
                        </div>
                        <div className="ps-feature-icon-glow" />
                      </div>

                      <div className="ps-feature-content">
                        <h4 className="ps-feature-title">{feature.title}</h4>
                        <p className={`ps-feature-desc ${activeFeature === index ? 'show' : ''}`}>
                          {feature.description}
                        </p>
                      </div>

                      <div className={`ps-feature-check ${activeFeature === index ? 'active' : ''}`}>
                        <CheckCircle2 size={16} />
                      </div>

                      <div className="ps-feature-border" />
                    </div>
                  )
                })}
              </div>

              {/* CTA Section */}
              <div className="ps-cta-wrapper">
                <button className="ps-cta-button">
                  <span>Experience the Difference</span>
                  <span className="ps-cta-icon">
                    <ArrowRight size={18} />
                  </span>
                  <div className="ps-cta-shine" />
                </button>

                <div className="ps-cta-trust">
                  <div className="trust-avatars">
                    <div className="trust-avatar">✓</div>
                    <div className="trust-avatar">✓</div>
                    <div className="trust-avatar">✓</div>
                  </div>
                  <span className="trust-text">Trusted by 5000+ customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductShowcase