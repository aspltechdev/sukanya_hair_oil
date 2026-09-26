import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import {
  Leaf,
  Heart,
  Clock,
  Sparkles,
  Flower2
} from 'lucide-react'

import './About.css'

import abtimg from '../../assets/abt.png'


// ============================================
// IMAGES
// ============================================

const IMAGES = {
  aboutImage: abtimg,

  leafPattern:
    'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=200&q=60'
}


const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  const [scrollProgress, setScrollProgress] = useState(0)

  const sectionRef = useRef(null)
  const imageRef = useRef(null)


  // ============================================
  // INTERSECTION OBSERVER
  // ============================================

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])


  // ============================================
  // MOUSE PARALLAX
  // ============================================

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect =
        imageRef.current?.getBoundingClientRect()

      if (!rect) return

      const x =
        (e.clientX - rect.left) /
          rect.width -
        0.5

      const y =
        (e.clientY - rect.top) /
          rect.height -
        0.5

      setMousePosition({
        x,
        y
      })
    }


    window.addEventListener(
      'mousemove',
      handleMouseMove
    )


    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      )
    }
  }, [])


  // ============================================
  // SCROLL PARALLAX
  // ============================================

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect =
        sectionRef.current.getBoundingClientRect()

      const windowHeight =
        window.innerHeight

      const progress =
        1 - rect.top / windowHeight

      setScrollProgress(
        Math.min(
          Math.max(progress, 0),
          1
        )
      )
    }


    window.addEventListener(
      'scroll',
      handleScroll,
      {
        passive: true
      }
    )


    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      )
    }
  }, [])


  // ============================================
  // LEARN OUR FULL STORY NAVIGATION
  // ============================================

  const handleFounderStoryClick = () => {
    const founderStory =
      document.getElementById('story')

    if (!founderStory) {
      console.warn(
        'FounderStory section not found. Make sure FounderStory.jsx has id="story".'
      )

      return
    }


    const navbar =
      document.querySelector('.navbar')


    const navbarHeight =
      navbar?.offsetHeight || 80


    const elementPosition =
      founderStory.getBoundingClientRect().top +
      window.pageYOffset


    const offsetPosition =
      elementPosition -
      navbarHeight -
      10


    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }


  return (
    <>
      <Helmet>

        <title>
          About Sukanya Hair Oil - Our Heritage & Tradition
        </title>

        <meta
          name="description"
          content="Discover the rich family tradition behind Sukanya Hair Oil. 50+ years of natural Ayurvedic hair care, passed down through generations."
        />

      </Helmet>


      <section
        className="about"
        ref={sectionRef}
        id="about"
      >

        {/* ========================================
            BACKGROUND AMBIENT ELEMENTS
        ======================================== */}

        <div className="about-bg-ambient">

          <div
            className="ambient-shape shape-1"
            style={{
              transform:
                `translate(
                  ${mousePosition.x * 15}px,
                  ${mousePosition.y * 15}px
                )`
            }}
          />


          <div
            className="ambient-shape shape-2"
            style={{
              transform:
                `translate(
                  ${-mousePosition.x * 10}px,
                  ${-mousePosition.y * 10}px
                )`
            }}
          />


          <div className="ambient-leaf leaf-float-1">
            <Leaf size={20} />
          </div>


          <div className="ambient-leaf leaf-float-2">
            <Flower2 size={16} />
          </div>


          <div className="ambient-leaf leaf-float-3">
            <Sparkles size={14} />
          </div>

        </div>


        {/* ========================================
            TOP DECORATIVE LINE
        ======================================== */}

        <div className="section-divider">

          <div className="divider-line" />

          <div className="divider-dot" />

        </div>


        {/* ========================================
            MAIN CONTAINER
        ======================================== */}

        <div className="about-container">

          <div
            className={`about-grid ${
              isVisible ? 'visible' : ''
            }`}
          >

            {/* ====================================
                LEFT CONTENT
            ==================================== */}

            <div className="about-content">


              {/* HERITAGE BADGE */}

              <div className="about-badge">

                <div className="badge-icon-wrapper">

                  <Clock
                    size={14}
                    className="badge-icon"
                  />

                </div>


                <span>
                  50+ Years of Heritage
                </span>


                <div className="badge-sparkle">

                  <Sparkles size={10} />

                </div>

              </div>


              {/* ==================================
                  HEADING
              ================================== */}

              <h2 className="about-heading">

                <span className="heading-line line-1">
                  A Tradition of
                </span>


                <span className="heading-line line-2">

                  <span className="word-natural">
                    Natural
                  </span>

                  {' '}

                  <span className="word-care">
                    Care
                  </span>

                </span>

              </h2>


              {/* ==================================
                  ORNAMENT
              ================================== */}

              <div className="about-ornament">

                <div className="ornament-line" />


                <div className="ornament-icon">

                  <Flower2 size={16} />

                </div>


                <div className="ornament-line" />

              </div>


              {/* ==================================
                  DESCRIPTION
              ================================== */}

              <div className="about-description-wrapper">

                <p className="about-description">

                  Sukanya Hair Oil is rooted in a rich
                  family tradition passed down through
                  generations. What began as a cherished
                  homemade remedy, crafted with organic
                  ingredients, has grown into a trusted
                  brand without compromising the
                  authenticity, purity, and love that
                  goes into every bottle.

                </p>


                <p className="about-description about-description-secondary">

                  Each drop carries the wisdom of
                  ancient Ayurveda, blended with
                  nature&apos;s finest organic
                  ingredients to give your hair the care
                  it truly deserves.

                </p>

              </div>


              {/* ==================================
                  STATS
              ================================== */}

              <div className="about-stats-grid">


                {/* YEARS */}

                <div className="stat-card">

                  <div className="stat-icon-ring">

                    <div className="stat-icon">

                      <Clock size={20} />

                    </div>

                  </div>


                  <div className="stat-content">

                    <span className="stat-number">

                      <span className="stat-counter">
                        50
                      </span>

                      +

                    </span>


                    <span className="stat-label">
                      Years of Tradition
                    </span>

                  </div>

                </div>


                {/* NATURAL */}

                <div className="stat-card">

                  <div className="stat-icon-ring">

                    <div className="stat-icon">

                      <Leaf size={20} />

                    </div>

                  </div>


                  <div className="stat-content">

                    <span className="stat-number">

                      <span className="stat-counter">
                        100
                      </span>

                      %

                    </span>


                    <span className="stat-label">
                      Natural Ingredients
                    </span>

                  </div>

                </div>


                {/* CUSTOMERS */}

                <div className="stat-card">

                  <div className="stat-icon-ring">

                    <div className="stat-icon">

                      <Heart size={20} />

                    </div>

                  </div>


                  <div className="stat-content">

                    <span className="stat-number">

                      <span className="stat-counter">
                        5
                      </span>

                      K+

                    </span>


                    <span className="stat-label">
                      Happy Customers
                    </span>

                  </div>

                </div>

              </div>


              {/* ==================================
                  LEARN OUR FULL STORY
              ================================== */}

              <div className="about-cta">

                <button
                  type="button"
                  className="cta-button"
                  onClick={handleFounderStoryClick}
                >

                  <span>
                    Learn Our Full Story
                  </span>


                  <span className="cta-arrow">
                    →
                  </span>

                </button>

              </div>

            </div>


            {/* ====================================
                RIGHT VISUAL
            ==================================== */}

            <div
              className="about-visual"
              ref={imageRef}
            >

              <div className="visual-wrapper">


                {/* ==================================
                    FLOATING TOP CARD
                ================================== */}

                <div
                  className="floating-card card-top"
                  style={{
                    transform:
                      `translate(
                        ${mousePosition.x * -20}px,
                        ${mousePosition.y * -20}px
                      )`
                  }}
                >

                  <div className="mini-card">

                    <Leaf
                      size={14}
                      className="mini-card-icon"
                    />


                    <div className="mini-card-content">

                      <span className="mini-card-number">
                        50+
                      </span>

                      <span className="mini-card-text">
                        Natural Herbs
                      </span>

                    </div>

                  </div>

                </div>


                {/* ==================================
                    FLOATING BOTTOM CARD
                ================================== */}

                <div
                  className="floating-card card-bottom"
                  style={{
                    transform:
                      `translate(
                        ${mousePosition.x * 15}px,
                        ${mousePosition.y * 15}px
                      )`
                  }}
                >

                  <div className="mini-card">

                    <Heart
                      size={14}
                      className="mini-card-icon"
                    />


                    <div className="mini-card-content">

                      <span className="mini-card-number">
                        100%
                      </span>

                      <span className="mini-card-text">
                        Chemical Free
                      </span>

                    </div>

                  </div>

                </div>


                {/* ==================================
                    MAIN IMAGE FRAME
                ================================== */}

                <div
                  className="image-frame"
                  style={{
                    transform:
                      `
                        perspective(1000px)
                        rotateY(${mousePosition.x * 5}deg)
                        rotateX(${-mousePosition.y * 5}deg)
                      `
                  }}
                >

                  {/* GLOW */}

                  <div className="frame-glow frame-glow-1" />

                  <div className="frame-glow frame-glow-2" />


                  {/* BORDER */}

                  <div className="frame-border">

                    <div className="border-corner corner-tl" />

                    <div className="border-corner corner-tr" />

                    <div className="border-corner corner-bl" />

                    <div className="border-corner corner-br" />

                  </div>


                  {/* IMAGE */}

                  <div className="frame-image-container">

                    <div
                      className="frame-image"
                      style={{
                        backgroundImage:
                          `url(${IMAGES.aboutImage})`,

                        transform:
                          `scale(${
                            1 +
                            scrollProgress * 0.1
                          })`
                      }}
                    />

                    <div className="frame-overlay" />

                  </div>


                  {/* INNER CONTENT */}

                  <div className="frame-inner-content" />


                  {/* DECORATIVE DOTS */}

                  <div className="frame-dots">

                    {[...Array(12)].map(
                      (_, i) => (

                        <div
                          key={i}
                          className="frame-dot"
                          style={{
                            animationDelay:
                              `${i * 0.2}s`
                          }}
                        />

                      )
                    )}

                  </div>

                </div>


                {/* ==================================
                    FLOATING HERB ICONS
                ================================== */}

                <div className="herb-icons">


                  <div
                    className="herb-icon icon-1"
                    style={{
                      transform:
                        `translate(
                          ${mousePosition.x * -30}px,
                          ${-mousePosition.y * 25}px
                        )`
                    }}
                  >

                    <Leaf size={18} />

                  </div>


                  <div
                    className="herb-icon icon-2"
                    style={{
                      transform:
                        `translate(
                          ${mousePosition.x * 25}px,
                          ${mousePosition.y * 20}px
                        )`
                    }}
                  >

                    <Flower2 size={16} />

                  </div>


                  <div
                    className="herb-icon icon-3"
                    style={{
                      transform:
                        `translate(
                          ${-mousePosition.x * 20}px,
                          ${mousePosition.y * 30}px
                        )`
                    }}
                  >

                    <Sparkles size={14} />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ========================================
            BOTTOM DECORATIVE LINE
        ======================================== */}

        <div className="section-divider section-divider-bottom">

          <div className="divider-line" />

          <div className="divider-dot" />

        </div>

      </section>
    </>
  )
}


export default About