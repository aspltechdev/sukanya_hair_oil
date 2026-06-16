import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

// Import all sections
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
// import ProductShowcase from '../components/sections/ProductShowcase'
// import Benefits from '../components/sections/Benefits'
// import WhyChooseUs from '../components/sections/WhyChooseUs'
// import Ingredients from '../components/sections/Ingredients'
// import HowToUse from '../components/sections/HowToUse'
// import Testimonials from '../components/sections/Testimonials'
// import FounderStory from '../components/sections/FounderStory'
// import Guarantee from '../components/sections/Guarantee'
// import FAQ from '../components/sections/FAQ'
// import CallToAction from '../components/sections/CallToAction'

// Import animations
import '../styles/animations.css'
import HowToUse from '../components/sections/HowToUse'
import ProductShowcase from '../components/sections/ProductShowcase'
import Benefits from '../components/sections/Benefits'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Ingredients from '../components/sections/Ingredients'
import Testimonials from '../components/sections/Testimonials'
import FounderStory from '../components/sections/FounderStory'
import FAQ from '../components/sections/FAQ'
import CallToAction from '../components/sections/CallToAction'

const Home = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (!target) return
      
      const href = target.getAttribute('href')
      if (href === '#') return
      
      const element = document.querySelector(href)
      if (element) {
        e.preventDefault()
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navbarHeight
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <>
      <Helmet>
        <title>Sukanya Hair Oil - Experience the Luxury of Nature</title>
        <meta name="description" content="100% Natural Ayurvedic Hair Oil. Traditionally homemade, chemical-free. Guaranteed results in 2 months. Order now!" />
        <meta name="keywords" content="hair oil, ayurvedic hair oil, natural hair oil, homemade hair oil, hair growth oil, Sukanya hair oil" />
        <meta property="og:title" content="Sukanya Hair Oil - Experience the Luxury of Nature" />
        <meta property="og:description" content="100% Natural Ayurvedic Hair Oil. Traditionally homemade, chemical-free. Guaranteed results in 2 months." />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sukanya Hair Oil - Experience the Luxury of Nature" />
        <meta name="twitter:description" content="100% Natural Ayurvedic Hair Oil. Traditionally homemade, chemical-free. Guaranteed results in 2 months." />
        <link rel="canonical" href="https://sukanyahairoil.com" />
      </Helmet>

      <main className="home-page">

        <Hero />
        
    
         <About />
         
        <ProductShowcase/> 
        <Benefits/> 
        <WhyChooseUs/>
        <Ingredients/>
        <HowToUse/>
        <Testimonials/>
<FounderStory/>
<FAQ/>
<CallToAction/>


       {/* <ProductShowcase />
       
        
    
        <Benefits />
        
    
        <WhyChooseUs />
        
   
        <Ingredients />
        
  
        <HowToUse />
        
        
        <Testimonials />
        
        
        <FounderStory />
        
        <Guarantee />
        
      
        <FAQ />
        

        <CallToAction /> */}
      </main>
    </>
  )
}

export default Home