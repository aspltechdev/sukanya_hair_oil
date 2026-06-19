// // import React, { useEffect, useRef, useState } from 'react'
// // import { Helmet } from 'react-helmet-async'
// // import { ArrowRight, Sparkles, Leaf, Shield, Star, Play, Pause } from 'lucide-react'
// // import './Hero.css'
// // import herobg from "../../assets/herobg.png"
// // import heroimg from "../../assets/oil.png"


// // // ============================================
// // // REPLACE THESE WITH YOUR ACTUAL IMAGE URLS
// // // ============================================
// // const IMAGES = {
// //   // Background image - use a soft, blurred Ayurvedic/nature scene
// //   bgImage: herobg,
  
// //   // Product bottle with transparent/white background (PNG preferred)
// //   productImage: heroimg,
  
// //   // Fallback if product image fails
// //   productFallback: 'https://placehold.co/400x600/EBE3D5/5C7A3E?text=Hair+Oil'
// // }

// // const Hero = () => {
// //   const [scrollY, setScrollY] = useState(0)
// //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
// //   const [isLoaded, setIsLoaded] = useState(false)
// //   const [rotation, setRotation] = useState(0)
// //   const [isAutoRotating, setIsAutoRotating] = useState(true)
// //   const [isDragging, setIsDragging] = useState(false)
// //   const [dragStart, setDragStart] = useState({ x: 0, rotation: 0 })
// //   const [imageError, setImageError] = useState(false)
  
// //   const heroRef = useRef(null)
// //   const productCardRef = useRef(null)
// //   const animationFrameRef = useRef(null)

// //   // Initialize animations
// //   useEffect(() => {
// //     setIsLoaded(true)
    
// //     const handleScroll = () => {
// //       setScrollY(window.scrollY)
// //     }
    
// //     const handleMouseMove = (e) => {
// //       const { clientX, clientY } = e
// //       const x = (clientX / window.innerWidth - 0.5) * 2
// //       const y = (clientY / window.innerHeight - 0.5) * 2
// //       setMousePosition({ x, y })
// //     }

// //     window.addEventListener('scroll', handleScroll, { passive: true })
// //     window.addEventListener('mousemove', handleMouseMove)
    
// //     // Preload images
// //     const preloadImages = () => {
// //       const bgImg = new Image()
// //       bgImg.src = IMAGES.bgImage
// //       const productImg = new Image()
// //       productImg.src = IMAGES.productImage
// //     }
// //     preloadImages()
    
// //     return () => {
// //       window.removeEventListener('scroll', handleScroll)
// //       window.removeEventListener('mousemove', handleMouseMove)
// //       if (animationFrameRef.current) {
// //         cancelAnimationFrame(animationFrameRef.current)
// //       }
// //     }
// //   }, [])

// //   // Auto rotation animation
// //   useEffect(() => {
// //     if (!isAutoRotating || isDragging) return

// //     const animate = () => {
// //       setRotation(prev => (prev + 0.3) % 360)
// //       animationFrameRef.current = requestAnimationFrame(animate)
// //     }
    
// //     animationFrameRef.current = requestAnimationFrame(animate)
    
// //     return () => {
// //       if (animationFrameRef.current) {
// //         cancelAnimationFrame(animationFrameRef.current)
// //       }
// //     }
// //   }, [isAutoRotating, isDragging])

// //   // Drag rotation handlers
// //   const handleDragStart = (e) => {
// //     setIsDragging(true)
// //     setIsAutoRotating(false)
// //     const clientX = e.touches ? e.touches[0].clientX : e.clientX
// //     setDragStart({ x: clientX, rotation: rotation })
// //   }

// //   const handleDragMove = (e) => {
// //     if (!isDragging) return
// //     const clientX = e.touches ? e.touches[0].clientX : e.clientX
// //     const deltaX = clientX - dragStart.x
// //     const newRotation = dragStart.rotation + (deltaX * 0.5)
// //     setRotation(newRotation)
// //   }

// //   const handleDragEnd = () => {
// //     setIsDragging(false)
// //     setTimeout(() => setIsAutoRotating(true), 2000)
// //   }

// //   const handleImageError = () => {
// //     setImageError(true)
// //   }

// //   const handleProductImageError = () => {
// //     // Use fallback image
// //     setImageError(true)
// //   }

// //   return (
// //     <>
// //       <Helmet>
// //         <title>Sukanya Hair Oil - Premium Ayurvedic Hair Care</title>
// //         <meta name="description" content="Experience the luxury of nature with Sukanya Hair Oil. 100% natural, traditionally crafted Ayurvedic formula for radiant, healthy hair." />
// //         <link rel="preload" as="image" href={IMAGES.bgImage} />
// //       </Helmet>

// //       <section className="hero" ref={heroRef}>
        
// //         {/* Background Image with Overlay */}
// //         <div className="hero-bg-wrapper">
// //           <div 
// //             className="hero-bg-image"
// //             style={{
// //               backgroundImage: `url(${IMAGES.bgImage})`,
// //               transform: `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.2}px)`
// //             }}
// //           />
// //           <div className="hero-bg-overlay" />
// //           <div className="hero-bg-gradient" />
// //         </div>

// //         {/* Animated Ambient Elements */}
// //         <div className="hero-ambient">
// //           <div className="ambient-orb ambient-orb-1" style={{
// //             transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`
// //           }} />
// //           <div className="ambient-orb ambient-orb-2" style={{
// //             transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`
// //           }} />
// //           <div className="ambient-orb ambient-orb-3" style={{
// //             transform: `translate(${mousePosition.x * 20}px, ${-mousePosition.y * 20}px)`
// //           }} />
// //         </div>

// //         {/* Particle Effects */}
// //         <div className="particles-container">
// //           {[...Array(20)].map((_, i) => (
// //             <div 
// //               key={i}
// //               className="particle"
// //               style={{
// //                 left: `${Math.random() * 100}%`,
// //                 top: `${Math.random() * 100}%`,
// //                 animationDelay: `${Math.random() * 5}s`,
// //                 animationDuration: `${3 + Math.random() * 4}s`,
// //                 opacity: 0.1 + Math.random() * 0.2
// //               }}
// //             />
// //           ))}
// //         </div>

// //         {/* Main Content Container */}
// //         <div className="hero-container">
// //           <div className="hero-grid">
            
// //             {/* Left Column - Content */}
// //             <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
              
// //               {/* Premium Badge */}
// //               <div className="premium-badge">
// //                 <Sparkles size={14} className="badge-icon pulse-animation" />
// //                 <span>Premium Ayurvedic Formula</span>
// //                 <div className="badge-shine" />
// //               </div>

// //               {/* Main Heading */}
// //               <h1 className="hero-heading">
// //                 <span className="heading-line line-1 stagger-1">
// //                   The Essence of
// //                 </span>
// //                 <span className="heading-line line-2 stagger-2">
// //                   <span className="word-highlight word-natural">Natural</span>
// //                   {' '}
// //                   <span className="word-highlight word-beauty">Beauty</span>
// //                 </span>
// //               </h1>

// //               {/* Description */}
// //               <p className="hero-description stagger-3">
// //                 A symphony of rare Ayurvedic herbs, cold-pressed oils, 
// //                 and ancient wisdom — crafted to transform your hair 
// //                 into its most radiant, vibrant form.
// //               </p>

// //               {/* CTA Buttons */}
// //               <div className="hero-actions stagger-4">
// //                 <button className="btn-primary">
// //                   <span className="btn-text">Discover the Ritual</span>
// //                   <span className="btn-icon">
// //                     <ArrowRight size={18} />
// //                   </span>
// //                   <div className="btn-shine-effect" />
// //                   <div className="btn-ripple" />
// //                 </button>
                
// //                 <button className="btn-secondary">
// //                   <span>Our Heritage</span>
// //                   <div className="btn-underline" />
// //                 </button>
// //               </div>

// //               {/* Trust Indicators */}
// //               <div className="trust-indicators stagger-5">
// //                 <div className="trust-item">
// //                   <div className="trust-icon-wrapper">
// //                     <div className="trust-icon">
// //                       <Shield size={16} />
// //                     </div>
// //                   </div>
// //                   <div className="trust-text">
// //                     <span className="trust-number">100%</span>
// //                     <span className="trust-label">Natural</span>
// //                   </div>
// //                 </div>
                
// //                 <div className="trust-divider" />
                
// //                 <div className="trust-item">
// //                   <div className="trust-icon-wrapper">
// //                     <div className="trust-icon">
// //                       <Star size={16} />
// //                     </div>
// //                   </div>
// //                   <div className="trust-text">
// //                     <span className="trust-number">5,000+</span>
// //                     <span className="trust-label">Happy Souls</span>
// //                   </div>
// //                 </div>
                
// //                 <div className="trust-divider" />
                
// //                 <div className="trust-item">
// //                   <div className="trust-icon-wrapper">
// //                     <div className="trust-icon">
// //                       <Leaf size={16} />
// //                     </div>
// //                   </div>
// //                   <div className="trust-text">
// //                     <span className="trust-number">50+</span>
// //                     <span className="trust-label">Herbs</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Right Column - 360° Product Showcase */}
// //             <div className={`hero-visual ${isLoaded ? 'loaded' : ''}`}>
// //               <div className="product-showcase-wrapper">
                
// //                 {/* Orbital Rings */}
// //                 <div className="orbital-rings">
// //                   <div className="orbital-ring ring-1" style={{
// //                     transform: `rotate(${rotation * 0.5}deg)`
// //                   }} />
// //                   <div className="orbital-ring ring-2" style={{
// //                     transform: `rotate(${-rotation * 0.3}deg)`
// //                   }} />
// //                   <div className="orbital-ring ring-3" style={{
// //                     transform: `rotate(${rotation * 0.2}deg)`
// //                   }} />
// //                 </div>

// //                 {/* Glowing Aura */}
// //                 <div className="product-aura">
// //                   <div className="aura-circle aura-1" />
// //                   <div className="aura-circle aura-2" />
// //                   <div className="aura-circle aura-3" />
// //                 </div>

// //                 {/* 360° Product Card */}
// //                 <div 
// //                   className="product-card-3d"
// //                   ref={productCardRef}
// //                   style={{
// //                     transform: `rotateY(${rotation}deg)`,
// //                   }}
// //                   onMouseDown={handleDragStart}
// //                   onMouseMove={handleDragMove}
// //                   onMouseUp={handleDragEnd}
// //                   onMouseLeave={handleDragEnd}
// //                   onTouchStart={handleDragStart}
// //                   onTouchMove={handleDragMove}
// //                   onTouchEnd={handleDragEnd}
// //                 >
// //                   {/* Card Faces */}
// //                   <div className="card-face card-front">
// //                     <div className="card-content">
// //                       <div className="card-reflection" />
// //                       <div className="product-image-container">
// //                         <img 
// //                           src={imageError ? IMAGES.productFallback : IMAGES.productImage}
// //                           alt="Sukanya Hair Oil Bottle"
// //                           className="product-image"
// //                           onError={handleProductImageError}
// //                           draggable="false"
// //                         />
// //                         <div className="product-glow" />
// //                       </div>
// //                       <div className="card-label">
// //                         <span className="label-brand">Sukanya</span>
// //                         <span className="label-name">Hair Oil</span>
// //                       </div>
// //                     </div>
// //                   </div>
                  
// //                   <div className="card-face card-back">
// //                     <div className="card-content">
// //                       <div className="card-reflection" />
// //                       <div className="back-content">
// //                         <div className="back-icon">
// //                           <Leaf size={32} />
// //                         </div>
// //                         <h3>100% Natural</h3>
// //                         <p>Cold-pressed from 50+ Ayurvedic herbs</p>
// //                         <div className="back-seal">✓ Chemical Free</div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Rotation Controls */}
// //                 <div className="rotation-controls">
// //                   <button 
// //                     className="control-btn"
// //                     onClick={() => setIsAutoRotating(!isAutoRotating)}
// //                     title={isAutoRotating ? 'Pause rotation' : 'Auto rotate'}
// //                   >
// //                     {isAutoRotating ? <Pause size={16} /> : <Play size={16} />}
// //                   </button>
// //                   <span className="control-hint">
// //                     {isDragging ? '↔ Swipe to rotate' : 'Drag to explore'}
// //                   </span>
// //                 </div>

// //                 {/* Feature Pills */}
// //                 <div className="feature-pills">
// //                   <div className="pill pill-1">
// //                     <Leaf size={12} />
// //                     <span>100% Natural</span>
// //                   </div>
// //                   <div className="pill pill-2">
// //                     <Shield size={12} />
// //                     <span>No Chemicals</span>
// //                   </div>
// //                   <div className="pill pill-3">
// //                     <Sparkles size={12} />
// //                     <span>Cold Pressed</span>
// //                   </div>
// //                   <div className="pill pill-4">
// //                     <Star size={12} />
// //                     <span>Ayurvedic</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Bottom Gradient Fade */}
// //         <div className="bottom-fade" />
        
// //         {/* Scroll Indicator */}
// //         <div className="scroll-indicator">
// //           <div className="scroll-mouse">
// //             <div className="scroll-wheel" />
// //           </div>
// //           <span className="scroll-text">Scroll to explore</span>
// //         </div>
// //       </section>
// //     </>
// //   )
// // }

// // export default Hero

// import React, { useEffect, useRef, useState } from 'react'
// import { Helmet } from 'react-helmet-async'
// import { ArrowRight, Sparkles, Leaf, Shield, Star, Play, Pause } from 'lucide-react'
// import './Hero.css'
// import herobg from "../../assets/herobg.png"
// import heroimg from "../../assets/oil.png"

// const IMAGES = {
//   bgImage: herobg,
//   productImage: heroimg,
//   productFallback: 'https://placehold.co/400x600/EBE3D5/5C7A3E?text=Hair+Oil'
// }

// const Hero = () => {
//   const [scrollY, setScrollY] = useState(0)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const [isLoaded, setIsLoaded] = useState(false)
//   const [rotationY, setRotationY] = useState(0)
//   const [rotationX, setRotationX] = useState(0)
//   const [isAutoRotating, setIsAutoRotating] = useState(true)
//   const [isDragging, setIsDragging] = useState(false)
//   const [dragStart, setDragStart] = useState({ x: 0, y: 0, rotationY: 0, rotationX: 0 })
//   const [imageError, setImageError] = useState(false)
  
//   const heroRef = useRef(null)
//   const productCardRef = useRef(null)
//   const animationFrameRef = useRef(null)

//   useEffect(() => {
//     setIsLoaded(true)
    
//     const handleScroll = () => setScrollY(window.scrollY)
    
//     const handleMouseMove = (e) => {
//       const { clientX, clientY } = e
//       const x = (clientX / window.innerWidth - 0.5) * 2
//       const y = (clientY / window.innerHeight - 0.5) * 2
//       setMousePosition({ x, y })
//     }

//     window.addEventListener('scroll', handleScroll, { passive: true })
//     window.addEventListener('mousemove', handleMouseMove)
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//       window.removeEventListener('mousemove', handleMouseMove)
//       if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
//     }
//   }, [])

//   // 3D Auto Rotation - Rotates on Y axis with slight X tilt
//   useEffect(() => {
//     if (!isAutoRotating || isDragging) return

//     const animate = () => {
//       setRotationY(prev => (prev + 0.5) % 360)
//       setRotationX(prev => {
//         // Subtle wobble on X axis
//         const wobble = Math.sin(Date.now() * 0.001) * 5
//         return wobble
//       })
//       animationFrameRef.current = requestAnimationFrame(animate)
//     }
    
//     animationFrameRef.current = requestAnimationFrame(animate)
    
//     return () => {
//       if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
//     }
//   }, [isAutoRotating, isDragging])

//   // Mouse follow effect for 3D tilt
//   useEffect(() => {
//     if (isDragging) return
    
//     const tiltY = mousePosition.x * 25
//     const tiltX = -mousePosition.y * 15
    
//     setRotationY(prev => prev + (tiltY - prev) * 0.05)
//     setRotationX(prev => prev + (tiltX - prev) * 0.05)
//   }, [mousePosition, isDragging])

//   // Drag rotation handlers
//   const handleDragStart = (e) => {
//     setIsDragging(true)
//     setIsAutoRotating(false)
//     const clientX = e.touches ? e.touches[0].clientX : e.clientX
//     const clientY = e.touches ? e.touches[0].clientY : e.clientY
//     setDragStart({ 
//       x: clientX, 
//       y: clientY, 
//       rotationY: rotationY, 
//       rotationX: rotationX 
//     })
//   }

//   const handleDragMove = (e) => {
//     if (!isDragging) return
//     const clientX = e.touches ? e.touches[0].clientX : e.clientX
//     const clientY = e.touches ? e.touches[0].clientY : e.clientY
//     const deltaX = clientX - dragStart.x
//     const deltaY = clientY - dragStart.y
    
//     setRotationY(dragStart.rotationY + (deltaX * 0.8))
//     setRotationX(dragStart.rotationX - (deltaY * 0.5))
//   }

//   const handleDragEnd = () => {
//     setIsDragging(false)
//     setTimeout(() => setIsAutoRotating(true), 2000)
//   }

//   const handleProductImageError = () => {
//     setImageError(true)
//   }

//   return (
//     <>
//       <Helmet>
//         <title>Sukanya Hair Oil - Premium Ayurvedic Hair Care</title>
//         <meta name="description" content="Experience the luxury of nature with Sukanya Hair Oil. 100% natural, traditionally crafted Ayurvedic formula for radiant, healthy hair." />
//         <link rel="preload" as="image" href={IMAGES.bgImage} />
//       </Helmet>

//       <section className="hero" ref={heroRef}>
        
//         {/* Background Image with Overlay */}
//         <div className="hero-bg-wrapper">
//           <div 
//             className="hero-bg-image"
//             style={{
//               backgroundImage: `url(${IMAGES.bgImage})`,
//               transform: `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.2}px)`
//             }}
//           />
//           <div className="hero-bg-overlay" />
//           <div className="hero-bg-gradient" />
//         </div>

//         {/* Animated Ambient Elements */}
//         <div className="hero-ambient">
//           <div className="ambient-orb ambient-orb-1" style={{
//             transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`
//           }} />
//           <div className="ambient-orb ambient-orb-2" style={{
//             transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`
//           }} />
//           <div className="ambient-orb ambient-orb-3" style={{
//             transform: `translate(${mousePosition.x * 20}px, ${-mousePosition.y * 20}px)`
//           }} />
//         </div>

//         {/* Particle Effects */}
//         <div className="particles-container">
//           {[...Array(20)].map((_, i) => (
//             <div 
//               key={i}
//               className="particle"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 5}s`,
//                 animationDuration: `${3 + Math.random() * 4}s`,
//                 opacity: 0.1 + Math.random() * 0.2
//               }}
//             />
//           ))}
//         </div>

//         {/* Main Content Container */}
//         <div className="hero-container">
//           <div className="hero-grid">
            
//             {/* Left Column - Content */}
//             <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
              
//               <div className="premium-badge">
//                 <Sparkles size={14} className="badge-icon pulse-animation" />
//                 <span>Premium Ayurvedic Formula</span>
//                 <div className="badge-shine" />
//               </div>

//               <h1 className="hero-heading">
//                 <span className="heading-line line-1 stagger-1">The Essence of</span>
//                 <span className="heading-line line-2 stagger-2">
//                   <span className="word-highlight word-natural">Natural</span>
//                   {' '}
//                   <span className="word-highlight word-beauty">Beauty</span>
//                 </span>
//               </h1>

//               <p className="hero-description stagger-3">
//                 A symphony of rare Ayurvedic herbs, cold-pressed oils, 
//                 and ancient wisdom — crafted to transform your hair 
//                 into its most radiant, vibrant form.
//               </p>

//               <div className="hero-actions stagger-4">
//                 <button className="btn-primary">
//                   <span className="btn-text">Discover the Ritual</span>
//                   <span className="btn-icon">
//                     <ArrowRight size={18} />
//                   </span>
//                   <div className="btn-shine-effect" />
//                   <div className="btn-ripple" />
//                 </button>
                
//                 <button className="btn-secondary">
//                   <span>Our Heritage</span>
//                   <div className="btn-underline" />
//                 </button>
//               </div>

//               <div className="trust-indicators stagger-5">
//                 <div className="trust-item">
//                   <div className="trust-icon-wrapper">
//                     <div className="trust-icon"><Shield size={16} /></div>
//                   </div>
//                   <div className="trust-text">
//                     <span className="trust-number">100%</span>
//                     <span className="trust-label">Natural</span>
//                   </div>
//                 </div>
//                 <div className="trust-divider" />
//                 <div className="trust-item">
//                   <div className="trust-icon-wrapper">
//                     <div className="trust-icon"><Star size={16} /></div>
//                   </div>
//                   <div className="trust-text">
//                     <span className="trust-number">5,000+</span>
//                     <span className="trust-label">Happy Souls</span>
//                   </div>
//                 </div>
//                 <div className="trust-divider" />
//                 <div className="trust-item">
//                   <div className="trust-icon-wrapper">
//                     <div className="trust-icon"><Leaf size={16} /></div>
//                   </div>
//                   <div className="trust-text">
//                     <span className="trust-number">50+</span>
//                     <span className="trust-label">Herbs</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - 3D Product Showcase */}
//             <div className={`hero-visual ${isLoaded ? 'loaded' : ''}`}>
//               <div className="product-showcase-wrapper">
                
//                 {/* Orbital Rings */}
//                 <div className="orbital-rings">
//                   <div className="orbital-ring ring-1" style={{
//                     transform: `rotate(${rotationY * 0.5}deg)`
//                   }} />
//                   <div className="orbital-ring ring-2" style={{
//                     transform: `rotate(${-rotationY * 0.3}deg)`
//                   }} />
//                   <div className="orbital-ring ring-3" style={{
//                     transform: `rotate(${rotationY * 0.2}deg)`
//                   }} />
//                 </div>

//                 {/* Glowing Aura */}
//                 <div className="product-aura">
//                   <div className="aura-circle aura-1" />
//                   <div className="aura-circle aura-2" />
//                   <div className="aura-circle aura-3" />
//                 </div>

//                 {/* 3D Product Stage */}
//                 <div className="product-3d-stage">
//                   <div 
//                     className="product-3d-container"
//                     ref={productCardRef}
//                     style={{
//                       transform: `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`,
//                     }}
//                     onMouseDown={handleDragStart}
//                     onMouseMove={handleDragMove}
//                     onMouseUp={handleDragEnd}
//                     onMouseLeave={handleDragEnd}
//                     onTouchStart={handleDragStart}
//                     onTouchMove={handleDragMove}
//                     onTouchEnd={handleDragEnd}
//                   >
//                     {/* Front Face - Product Image */}
//                     <div className="product-face product-face-front">
//                       <div className="product-image-wrapper">
//                         <img 
//                           src={imageError ? IMAGES.productFallback : IMAGES.productImage}
//                           alt="Sukanya Hair Oil Bottle"
//                           className="product-bottle-image"
//                           onError={handleProductImageError}
//                           draggable="false"
//                         />
//                         <div className="product-image-glow" />
//                         <div className="product-image-shine" />
//                       </div>
//                       <div className="product-label-overlay">
//                         <span className="product-label-brand">Sukanya</span>
//                         <span className="product-label-name">Hair Oil</span>
//                       </div>
//                     </div>

//                     {/* Back Face */}
//                     <div className="product-face product-face-back">
//                       <div className="product-back-content">
//                         <div className="product-back-icon">
//                           <Leaf size={40} />
//                         </div>
//                         <h3 className="product-back-title">100% Natural</h3>
//                         <p className="product-back-desc">Cold-pressed from 50+ Ayurvedic herbs</p>
//                         <div className="product-back-badges">
//                           <span className="back-badge">✓ Chemical Free</span>
//                           <span className="back-badge">✓ No Parabens</span>
//                           <span className="back-badge">✓ Ayurvedic</span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Right Face */}
//                     <div className="product-face product-face-right">
//                       <div className="product-side-content">
//                         <Shield size={32} className="side-icon" />
//                         <h4>Quality Assured</h4>
//                         <p>Lab tested for purity and potency</p>
//                       </div>
//                     </div>

//                     {/* Left Face */}
//                     <div className="product-face product-face-left">
//                       <div className="product-side-content">
//                         <Star size={32} className="side-icon" />
//                         <h4>Trusted by 5000+</h4>
//                         <p>Rated 4.9 by happy customers</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Rotation Controls */}
//                 <div className="rotation-controls">
//                   <button 
//                     className="control-btn"
//                     onClick={() => setIsAutoRotating(!isAutoRotating)}
//                     title={isAutoRotating ? 'Pause rotation' : 'Auto rotate'}
//                   >
//                     {isAutoRotating ? <Pause size={16} /> : <Play size={16} />}
//                   </button>
//                   <span className="control-hint">
//                     {isDragging ? '↔ Drag to rotate' : 'Drag to explore 360°'}
//                   </span>
//                 </div>

//                 {/* Feature Pills */}
//                 <div className="feature-pills">
//                   <div className="pill pill-1">
//                     <Leaf size={12} />
//                     <span>100% Natural</span>
//                   </div>
//                   <div className="pill pill-2">
//                     <Shield size={12} />
//                     <span>No Chemicals</span>
//                   </div>
//                   <div className="pill pill-3">
//                     <Sparkles size={12} />
//                     <span>Cold Pressed</span>
//                   </div>
//                   <div className="pill pill-4">
//                     <Star size={12} />
//                     <span>Ayurvedic</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bottom-fade" />
        
//         <div className="scroll-indicator">
//           <div className="scroll-mouse">
//             <div className="scroll-wheel" />
//           </div>
//           <span className="scroll-text">Scroll to explore</span>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Hero

import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Sparkles, Leaf, Shield, Star, Play, Pause } from 'lucide-react'
import './Hero.css'
import herobg from "../../assets/herobg.png"
import heroimg from "../../assets/bottle.png"

const IMAGES = {
  bgImage: herobg,
  productImage: heroimg,
  productFallback: 'https://placehold.co/400x600/EBE3D5/5C7A3E?text=Hair+Oil'
}

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [rotationY, setRotationY] = useState(0)
  const [rotationX, setRotationX] = useState(0)
  const [isAutoRotating, setIsAutoRotating] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0, rotationY: 0, rotationX: 0 })
  const [imageError, setImageError] = useState(false)
  
  const heroRef = useRef(null)
  const productCardRef = useRef(null)
  const animationFrameRef = useRef(null)

  useEffect(() => {
    setIsLoaded(true)
    
    const handleScroll = () => setScrollY(window.scrollY)
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 2
      const y = (clientY / window.innerHeight - 0.5) * 2
      setMousePosition({ x, y })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

  // 3D Auto Rotation
  useEffect(() => {
    if (!isAutoRotating || isDragging) return

    const animate = () => {
      setRotationY(prev => (prev + 0.5) % 360)
      setRotationX(prev => Math.sin(Date.now() * 0.001) * 5)
      animationFrameRef.current = requestAnimationFrame(animate)
    }
    
    animationFrameRef.current = requestAnimationFrame(animate)
    
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [isAutoRotating, isDragging])

  // Mouse follow effect
  useEffect(() => {
    if (isDragging) return
    const tiltY = mousePosition.x * 25
    const tiltX = -mousePosition.y * 15
    setRotationY(prev => prev + (tiltY - prev) * 0.05)
    setRotationX(prev => prev + (tiltX - prev) * 0.05)
  }, [mousePosition, isDragging])

  // Drag handlers
  const handleDragStart = (e) => {
    setIsDragging(true)
    setIsAutoRotating(false)
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    setDragStart({ x: clientX, y: clientY, rotationY: rotationY, rotationX: rotationX })
  }

  const handleDragMove = (e) => {
    if (!isDragging) return
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    const deltaX = clientX - dragStart.x
    const deltaY = clientY - dragStart.y
    setRotationY(dragStart.rotationY + (deltaX * 0.8))
    setRotationX(dragStart.rotationX - (deltaY * 0.5))
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    setTimeout(() => setIsAutoRotating(true), 2000)
  }

  const handleProductImageError = () => setImageError(true)

  return (
    <>
      <Helmet>
        <title>Sukanya Hair Oil - Premium Ayurvedic Hair Care</title>
        <meta name="description" content="Experience the luxury of nature with Sukanya Hair Oil. 100% natural, traditionally crafted Ayurvedic formula for radiant, healthy hair." />
        <link rel="preload" as="image" href={IMAGES.bgImage} />
      </Helmet>

      <section className="hero" ref={heroRef}>
        
        {/* Background Image with Overlay */}
        <div className="hero-bg-wrapper">
          <div 
            className="hero-bg-image"
            style={{
              backgroundImage: `url(${IMAGES.bgImage})`,
              transform: `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.2}px)`
            }}
          />
          <div className="hero-bg-overlay" />
          <div className="hero-bg-gradient" />
        </div>

        {/* Animated Ambient Elements */}
        <div className="hero-ambient">
          <div className="ambient-orb ambient-orb-1" style={{
            transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`
          }} />
          <div className="ambient-orb ambient-orb-2" style={{
            transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`
          }} />
          <div className="ambient-orb ambient-orb-3" style={{
            transform: `translate(${mousePosition.x * 20}px, ${-mousePosition.y * 20}px)`
          }} />
        </div>

        {/* Particle Effects */}
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                opacity: 0.1 + Math.random() * 0.2
              }}
            />
          ))}
        </div>

        {/* Main Content Container */}
        <div className="hero-container">
          <div className="hero-grid">
            
            {/* Left Column - Content */}
            <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
              <div className="premium-badge">
                <Sparkles size={14} className="badge-icon pulse-animation" />
                <span>Natural Ayurvedic Formula</span>
                <div className="badge-shine" />
              </div>

              <h1 className="hero-heading">
                <span className="heading-line line-1 stagger-1">The Essence of</span>
                <span className="heading-line line-2 stagger-2">
                  <span className="word-highlight word-natural">Natural</span>
                  {' '}
                  <span className="word-highlight word-beauty">Beauty</span>
                </span>
              </h1>

              <p className="hero-description stagger-3">
                A symphony of rare organic Ayurvedic herbs, cold-pressed oils, and ancient 
                wisdom — crafted to transform your hair into its most radiant, vibrant form.
              </p>

              <div className="hero-actions stagger-4">
                <button className="btn-primary">
                  <span className="btn-text">Discover the Ritual</span>
                  <span className="btn-icon"><ArrowRight size={18} /></span>
                  <div className="btn-shine-effect" />
                  <div className="btn-ripple" />
                </button>
                <button className="btn-secondary">
                  <span>Our Heritage</span>
                  <div className="btn-underline" />
                </button>
              </div>

              <div className="trust-indicators stagger-5">
                <div className="trust-item">
                  <div className="trust-icon-wrapper">
                    <div className="trust-icon"><Shield size={16} /></div>
                  </div>
                  <div className="trust-text">
                    <span className="trust-number">100%</span>
                    <span className="trust-label">Natural</span>
                  </div>
                </div>
                <div className="trust-divider" />
                <div className="trust-item">
                  <div className="trust-icon-wrapper">
                    <div className="trust-icon"><Star size={16} /></div>
                  </div>
                  <div className="trust-text">
                    <span className="trust-number">5,000+</span>
                    <span className="trust-label">Happy Souls</span>
                  </div>
                </div>
                <div className="trust-divider" />
                <div className="trust-item">
                  <div className="trust-icon-wrapper">
                    <div className="trust-icon"><Leaf size={16} /></div>
                  </div>
                  <div className="trust-text">
                    <span className="trust-number">50+</span>
                    <span className="trust-label">Herbs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - 3D Product Showcase */}
            <div className={`hero-visual ${isLoaded ? 'loaded' : ''}`}>
              <div className="product-showcase-wrapper">
                
                {/* Orbital Rings */}
                <div className="orbital-rings">
                  <div className="orbital-ring ring-1" style={{ transform: `rotate(${rotationY * 0.5}deg)` }} />
                  <div className="orbital-ring ring-2" style={{ transform: `rotate(${-rotationY * 0.3}deg)` }} />
                  <div className="orbital-ring ring-3" style={{ transform: `rotate(${rotationY * 0.2}deg)` }} />
                </div>

                {/* Glowing Aura */}
                <div className="product-aura">
                  <div className="aura-circle aura-1" />
                  <div className="aura-circle aura-2" />
                  <div className="aura-circle aura-3" />
                </div>

                {/* 3D Product Stage */}
                <div className="product-3d-stage">
                  <div 
                    className="product-3d-container"
                    ref={productCardRef}
                    style={{ transform: `rotateY(${rotationY}deg) rotateX(${rotationX}deg)` }}
                    onMouseDown={handleDragStart}
                    onMouseMove={handleDragMove}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                    onTouchStart={handleDragStart}
                    onTouchMove={handleDragMove}
                    onTouchEnd={handleDragEnd}
                  >
                    {/* Front Face - Full Image with Text Overlay */}
                    <div className="product-face product-face-front">
                      <img 
                        src={imageError ? IMAGES.productFallback : IMAGES.productImage}
                        alt="Sukanya Hair Oil"
                        className="product-face-image"
                        onError={handleProductImageError}
                        draggable="false"
                      />
                      <div className="product-face-gradient" />
                      <div className="product-face-content">
                        <div className="face-content-top">
                          <span className="face-badge">100% Natural</span>
                        </div>
                        <div className="face-content-bottom">
                          <span className="face-brand">Sukanya</span>
                          <span className="face-name">Hair Oil</span>
                          <div className="face-divider" />
                          <span className="face-tagline">The Essence of Natural Beauty</span>
                        </div>
                      </div>
                      <div className="face-shine" />
                    </div>

                    {/* Back Face - Full Image with Different Overlay */}
                    <div className="product-face product-face-back">
                      <img 
                        src={imageError ? IMAGES.productFallback : IMAGES.productImage}
                        alt="Sukanya Hair Oil"
                        className="product-face-image"
                        draggable="false"
                      />
                      <div className="product-face-gradient product-face-gradient-dark" />
                      <div className="product-face-content">
                        <div className="face-content-center">
                          <div className="face-back-icon">
                            <Leaf size={36} />
                          </div>
                          <h3 className="face-back-title">50+ Natural Herbs</h3>
                          <p className="face-back-desc">Cold-pressed from rare Ayurvedic ingredients</p>
                          <div className="face-back-badges">
                            <span>✓ Chemical Free</span>
                            <span>✓ No Parabens</span>
                            <span>✓ Ayurvedic Formula</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Face */}
                    <div className="product-face product-face-right">
                      <img 
                        src={imageError ? IMAGES.productFallback : IMAGES.productImage}
                        alt="Sukanya Hair Oil"
                        className="product-face-image"
                        draggable="false"
                      />
                      <div className="product-face-gradient product-face-gradient-dark" />
                      <div className="product-face-content">
                        <div className="face-content-center">
                          <Shield size={32} className="face-side-icon" />
                          <h4>Quality Assured</h4>
                          <p>Lab tested for purity</p>
                        </div>
                      </div>
                    </div>

                    {/* Left Face */}
                    <div className="product-face product-face-left">
                      <img 
                        src={imageError ? IMAGES.productFallback : IMAGES.productImage}
                        alt="Sukanya Hair Oil"
                        className="product-face-image"
                        draggable="false"
                      />
                      <div className="product-face-gradient product-face-gradient-dark" />
                      <div className="product-face-content">
                        <div className="face-content-center">
                          <Star size={32} className="face-side-icon" />
                          <h4>4.9 ★ Rating</h4>
                          <p>Trusted by 5000+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rotation Controls */}
                {/* <div className="rotation-controls">
                  <button 
                    className="control-btn"
                    onClick={() => setIsAutoRotating(!isAutoRotating)}
                    title={isAutoRotating ? 'Pause rotation' : 'Auto rotate'}
                  >
                    {isAutoRotating ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                  <span className="control-hint">
                    {isDragging ? '↔ Drag to rotate' : 'Drag to explore 360°'}
                  </span>
                </div> */}

                {/* Feature Pills */}
                <div className="feature-pills">
                  <div className="pill pill-1"><Leaf size={12} /><span>100% Natural</span></div>
                  <div className="pill pill-2"><Shield size={12} /><span>No Chemicals</span></div>
                  <div className="pill pill-3"><Sparkles size={12} /><span>Cold Pressed</span></div>
                  <div className="pill pill-4"><Star size={12} /><span>Ayurvedic</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-fade" />
        
        <div className="scroll-indicator">
          <div className="scroll-mouse"><div className="scroll-wheel" /></div>
          <span className="scroll-text">Scroll to explore</span>
        </div>
      </section>
    </>
  )
}

export default Hero