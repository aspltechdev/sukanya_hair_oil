// import React, { useEffect, useRef, useState } from 'react'
// import { Helmet } from 'react-helmet-async'
// import { 
//   ArrowRight, 
//   Sparkles, 
//   Shield, 
//   Truck, 
//   Star, 
//   Heart,
//   Clock,
//   Phone,
//   ShoppingBag,
//   Zap,
//   Leaf
// } from 'lucide-react'
// import './CallToAction.css'
// import ctabg from "../../assets/ctabg.png";

// // ============================================
// // REPLACE WITH YOUR ACTUAL BACKGROUND IMAGE
// // ============================================
// const IMAGES = {
//   bgImage: ctabg,
// }

// const CallToAction = () => {
//   const [isVisible, setIsVisible] = useState(false)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const [scrollY, setScrollY] = useState(0)
//   const sectionRef = useRef(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) setIsVisible(true)
//         })
//       },
//       { threshold: 0.2 }
//     )

//     if (sectionRef.current) observer.observe(sectionRef.current)
//     return () => observer.disconnect()
//   }, [])

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const rect = sectionRef.current?.getBoundingClientRect()
//       if (rect) {
//         setMousePosition({
//           x: (e.clientX - rect.left) / rect.width - 0.5,
//           y: (e.clientY - rect.top) / rect.height - 0.5
//         })
//       }
//     }
//     window.addEventListener('mousemove', handleMouseMove)
//     return () => window.removeEventListener('mousemove', handleMouseMove)
//   }, [])

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY)
//     window.addEventListener('scroll', handleScroll, { passive: true })
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <>
//       <Helmet>
//         <title>Order Sukanya Hair Oil - Start Your Hair Care Journey</title>
//         <meta name="description" content="Ready for healthier hair? Order Sukanya Hair Oil today. Free shipping, satisfaction guaranteed, and secure checkout." />
//       </Helmet>

//       <section className="cta" ref={sectionRef} id="order">
        
//         {/* Background Image with Parallax */}
//         <div className="cta-bg-wrapper">
//           <div 
//             className="cta-bg-image"
//             style={{
//               backgroundImage: `url(${IMAGES.bgImage})`,
//               transform: `scale(${1 + scrollY * 0.0004}) translateY(${scrollY * 0.2}px)`
//             }}
//           />
//           <div className="cta-bg-overlay" />
//           <div className="cta-bg-gradient" />
//         </div>

//         {/* Ambient Orbs */}
//         <div className="cta-ambient">
//           <div className="cta-orb cta-orb-1" style={{
//             transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px)`
//           }} />
//           <div className="cta-orb cta-orb-2" style={{
//             transform: `translate(${-mousePosition.x * 18}px, ${-mousePosition.y * 18}px)`
//           }} />
//         </div>

//         {/* Floating Particles */}
//         <div className="cta-particles">
//           {[...Array(12)].map((_, i) => (
//             <div 
//               key={i}
//               className="cta-particle"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 4}s`,
//                 animationDuration: `${3 + Math.random() * 4}s`
//               }}
//             />
//           ))}
//         </div>

//         <div className="cta-container">
          
//           {/* Main Card */}
//           <div className={`cta-card ${isVisible ? 'visible' : ''}`}>
            
//             {/* Card Glow */}
//             <div className="cta-card-glow" />

//             {/* Limited Badge */}
//             <div className="cta-badge-wrapper">
//               <div className="cta-badge">
//                 <Zap size={14} className="cta-badge-icon" />
//                 <span>Limited Time Offer</span>
//                 <div className="cta-badge-pulse" />
//               </div>
//             </div>

//             {/* Main Content */}
//             <div className="cta-content">
              
//               {/* Left Section */}
//               <div className="cta-left">
//                 <h2 className="cta-title">
//                   <span className="cta-title-top">Ready for</span>
//                   <span className="cta-title-bottom">
//                     <span className="cta-title-highlight">Healthier</span> Hair?
//                   </span>
//                 </h2>

//                 <p className="cta-description">
//                   Join thousands of satisfied customers who have experienced the 
//                   transformative power of our Ayurvedic formula. Your journey to 
//                   stronger, more beautiful hair starts here.
//                 </p>

//                 {/* Trust Indicators */}
//                 <div className="cta-trust-row">
//                   <div className="cta-trust-item">
//                     <div className="cta-trust-icon">
//                       <Star size={14} fill="#B8944B" color="#B8944B" />
//                     </div>
//                     <span>4.9 Rating</span>
//                   </div>
//                   <div className="cta-trust-dot" />
//                   <div className="cta-trust-item">
//                     <div className="cta-trust-icon">
//                       <Heart size={14} />
//                     </div>
//                     <span>5,000+ Customers</span>
//                   </div>
//                   <div className="cta-trust-dot" />
//                   <div className="cta-trust-item">
//                     <div className="cta-trust-icon">
//                       <Clock size={14} />
//                     </div>
//                     <span>50+ Years Legacy</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Section - Action Buttons */}
//               <div className="cta-right">
//                 <div className="cta-actions">
//                   <button className="cta-btn-primary">
//                     <ShoppingBag size={20} />
//                     <span>Order Now</span>
//                     <ArrowRight size={18} className="cta-btn-arrow" />
//                     <div className="cta-btn-shine" />
//                   </button>

//                   <a href="tel:7624920239" className="cta-btn-secondary">
//                     <Phone size={18} />
//                     <span>Call to Order</span>
//                   </a>
//                 </div>

//                 {/* Features */}
//                 <div className="cta-features">
//                   <div className="cta-feature">
//                     <Truck size={16} />
//                     <span>Free shipping above ₹499</span>
//                   </div>
//                   <div className="cta-feature">
//                     <Shield size={16} />
//                     <span>100% Satisfaction Guaranteed</span>
//                   </div>
//                   <div className="cta-feature">
//                     <Leaf size={16} />
//                     <span>Natural & Chemical Free</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Bottom Security Badge */}
//             <div className="cta-security">
//               <Shield size={14} />
//               <span>Secure Checkout • COD Available • Easy Returns</span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default CallToAction


import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  ArrowRight, 
  Sparkles, 
  Shield, 
  Truck, 
  Star, 
  Heart,
  Clock,
  Phone,
  ShoppingBag,
  Zap,
  Leaf
} from 'lucide-react'
import './CallToAction.css'
import ctabg from "../../assets/ctabg.png"

const IMAGES = {
  bgImage: ctabg,
}

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)
  const sectionRef = useRef(null)

  // Preload image
  useEffect(() => {
    const img = new Image()
    img.src = IMAGES.bgImage
    img.onload = () => {
      setImageLoaded(true)
      console.log('Background image loaded successfully')
    }
    img.onerror = () => {
      console.error('Failed to load background image')
      setImageLoaded(true) // Show anyway with fallback color
    }
  }, [])

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setIsVisible(true)
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Mouse tracking
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

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Helmet>
        <title>Order Sukanya Hair Oil - Start Your Hair Care Journey</title>
        <meta name="description" content="Ready for healthier hair? Order Sukanya Hair Oil today. Free shipping, satisfaction guaranteed, and secure checkout." />
      </Helmet>

      <section className="cta" ref={sectionRef} id="order">
        
        {/* Background Image */}
        <div className="cta-bg-wrapper">
          <div 
            className="cta-bg-image"
            style={{
              backgroundImage: `url(${IMAGES.bgImage})`,
            }}
          />
          <div className="cta-bg-overlay" />
          <div className="cta-bg-gradient" />
        </div>

        {/* Ambient Orbs */}
        <div className="cta-ambient">
          <div className="cta-orb cta-orb-1" />
          <div className="cta-orb cta-orb-2" />
        </div>

        {/* Floating Particles */}
        <div className="cta-particles">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="cta-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="cta-container">
          
          {/* Main Card */}
          <div className={`cta-card ${isVisible ? 'visible' : ''}`}>
            
            {/* Card Glow */}
            <div className="cta-card-glow" />

            {/* Limited Badge */}
            <div className="cta-badge-wrapper">
              <div className="cta-badge">
                <Zap size={14} className="cta-badge-icon" />
                <span>Limited Time Offer</span>
                <div className="cta-badge-pulse" />
              </div>
            </div>

            {/* Main Content */}
            <div className="cta-content">
              
              {/* Left Section */}
              <div className="cta-left">
                <h2 className="cta-title">
                  <span className="cta-title-top">Ready for</span>
                  <span className="cta-title-bottom">
                    <span className="cta-title-highlight">Healthier</span> Hair?
                  </span>
                </h2>

                <p className="cta-description">
                  Join thousands of satisfied customers who have experienced the 
                  transformative power of our Ayurvedic formula. Your journey to 
                  stronger, more beautiful hair starts here.
                </p>

                {/* Trust Indicators */}
                <div className="cta-trust-row">
                  <div className="cta-trust-item">
                    <div className="cta-trust-icon">
                      <Star size={14} fill="#B8944B" color="#B8944B" />
                    </div>
                    <span>4.9 Rating</span>
                  </div>
                  <div className="cta-trust-dot" />
                  <div className="cta-trust-item">
                    <div className="cta-trust-icon">
                      <Heart size={14} />
                    </div>
                    <span>5,000+ Customers</span>
                  </div>
                  <div className="cta-trust-dot" />
                  <div className="cta-trust-item">
                    <div className="cta-trust-icon">
                      <Clock size={14} />
                    </div>
                    <span>50+ Years Legacy</span>
                  </div>
                </div>
              </div>

              {/* Right Section - Action Buttons */}
              <div className="cta-right">
                <div className="cta-actions">
                  <button className="cta-btn-primary">
                    <ShoppingBag size={20} />
                    <span>Order Now</span>
                    <ArrowRight size={18} className="cta-btn-arrow" />
                    <div className="cta-btn-shine" />
                  </button>

                  <a href="tel:7624920239" className="cta-btn-secondary">
                    <Phone size={18} />
                    <span>Call to Order</span>
                  </a>
                </div>

                {/* Features */}
                <div className="cta-features">
                  <div className="cta-feature">
                    <Truck size={16} />
                    <span>Free shipping above ₹499</span>
                  </div>
                  <div className="cta-feature">
                    <Shield size={16} />
                    <span>100% Satisfaction Guaranteed</span>
                  </div>
                  <div className="cta-feature">
                    <Leaf size={16} />
                    <span>Natural & Chemical Free</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Security Badge */}
            <div className="cta-security">
              <Shield size={14} />
              <span>Secure Checkout • COD Available • Easy Returns</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CallToAction