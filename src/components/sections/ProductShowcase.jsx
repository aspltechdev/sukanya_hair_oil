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

import product1 from "../../assets/p234.png"
import product3 from "../../assets/pro3.png"
import product4 from "../../assets/pro4.png"


const IMAGES = {
  productImage: product1,
  ingredient1: product3,
  ingredient2: product4,
}


const ProductShowcase = () => {
  const [isVisible, setIsVisible] = useState(false)

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

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
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
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
  // MOUSE MOVEMENT
  // ============================================

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect =
        sectionRef.current?.getBoundingClientRect()

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
  // SCROLL TRACKING
  // ============================================

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
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
  // EXPERIENCE THE DIFFERENCE
  // SCROLL TO WHY CHOOSE US
  // ============================================

  const handleExperienceClick = () => {
    const whyChooseSection =
      document.getElementById('why-choose')

    if (!whyChooseSection) {
      console.warn(
        'WhyChooseUs section with id="why-choose" was not found.'
      )
      return
    }

    const navbar =
      document.querySelector('.navbar')

    const navbarHeight =
      navbar?.offsetHeight || 80

    const elementPosition =
      whyChooseSection.getBoundingClientRect().top +
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
          Sukanya Hair Oil - Premium Ayurvedic Product
        </title>

        <meta
          name="description"
          content="Discover Sukanya Hair Oil - 100% natural, chemical-free Ayurvedic hair care."
        />
      </Helmet>


      <section
        className="product-showcase"
        ref={sectionRef}
        id="product"
      >

        {/* ========================================
            BACKGROUND ELEMENTS
        ======================================== */}

        <div className="ps-bg-ambient">

          <div
            className="ps-gradient-orb ps-orb-1"
            style={{
              transform: `translate(
                ${mousePosition.x * 25}px,
                ${mousePosition.y * 25}px
              )`
            }}
          />

          <div
            className="ps-gradient-orb ps-orb-2"
            style={{
              transform: `translate(
                ${-mousePosition.x * 18}px,
                ${-mousePosition.y * 18}px
              )`
            }}
          />

        </div>


        {/* ========================================
            FLOATING DECORATIONS
        ======================================== */}

        <div className="ps-floating-elements">

          <div className="ps-float-item ps-float-1">
            <Leaf size={20} />
          </div>

          <div className="ps-float-item ps-float-2">
            <Droplets size={18} />
          </div>

          <div className="ps-float-item ps-float-3">
            <Sparkles size={16} />
          </div>

        </div>


        <div className="product-showcase-container">

          {/* ======================================
              SECTION HEADER
          ====================================== */}

          <div
            className={`ps-header ${
              isVisible ? 'visible' : ''
            }`}
          >

            <div className="ps-badge">

              <div className="badge-pulse-dot" />

              <span>
                The Product
              </span>

              <Sparkles
                size={12}
                className="badge-icon-sparkle"
              />

            </div>


            <h2 className="ps-title">

              <span className="ps-title-lines">
                Premium Care,
              </span>

              <span className="ps-title-lines ps-title-accents">
                Naturally
              </span>

            </h2>


            <div className="ps-ornament">

              <div className="ps-ornament-line" />

              <Leaf
                size={14}
                className="ps-ornament-icon"
              />

              <div className="ps-ornament-line" />

            </div>

          </div>


          {/* ======================================
              MAIN SHOWCASE GRID
          ====================================== */}

          <div
            className={`ps-main-grid ${
              isVisible ? 'visible' : ''
            }`}
          >

            {/* ====================================
                LEFT - PRODUCT VISUAL
            ==================================== */}

            <div className="ps-visual-column">

              <div
                className="ps-product-wrapper"
                ref={bottleRef}
              >

                {/* PRODUCT AURA */}

                <div className="ps-product-aura">

                  <div className="aura-ring aura-ring-1" />

                  <div className="aura-ring aura-ring-2" />

                  <div className="aura-ring aura-ring-3" />

                </div>


                {/* ==================================
                    MAIN PRODUCT CARD
                ================================== */}

                <div
                  className="ps-product-card"
                  style={{
                    transform: `
                      perspective(1000px)
                      rotateY(${mousePosition.x * 8}deg)
                      rotateX(${-mousePosition.y * 8}deg)
                    `
                  }}
                >

                  {/* FULL BACKGROUND IMAGE */}

                  <div className="ps-card-bg-image">

                    <img
                      src={IMAGES.productImage}
                      alt="Sukanya Hair Oil"
                      className="ps-card-bg-img"
                    />

                  </div>


                  {/* GRADIENT OVERLAYS */}

                  <div className="ps-card-overlay ps-overlay-top" />

                  <div className="ps-card-overlay ps-overlay-bottom" />

                  <div className="ps-card-overlay ps-overlay-center" />


                  {/* CONTENT OVERLAY */}

                  <div className="ps-card-content">

                    {/* Top Badge */}

                    {/*
                    <div className="ps-card-top">
                      <span className="ps-card-badge">
                        100% Natural
                      </span>
                    </div>
                    */}


                    {/* Center Product Info */}

                    {/*
                    <div className="ps-card-center">

                      <div className="ps-card-brand">
                        Sukanya
                      </div>

                      <div className="ps-card-name">
                        Hair Oil
                      </div>

                      <div className="ps-card-divider" />

                      <div className="ps-card-tagline">
                        Ayurvedic • Pure • Natural
                      </div>

                    </div>
                    */}


                    {/* Bottom Info */}

                    <div className="ps-card-bottom">

                      {/*
                      <div className="ps-card-stats">

                        <div className="ps-card-stat">
                          <span className="ps-stat-value">
                            50+
                          </span>

                          <span className="ps-stat-label">
                            Herbs
                          </span>
                        </div>

                        <div className="ps-card-stat-divider" />

                        <div className="ps-card-stat">
                          <span className="ps-stat-value">
                            100%
                          </span>

                          <span className="ps-stat-label">
                            Natural
                          </span>
                        </div>

                        <div className="ps-card-stat-divider" />

                        <div className="ps-card-stat">
                          <span className="ps-stat-value">
                            3 Gen
                          </span>

                          <span className="ps-stat-label">
                            Recipe
                          </span>
                        </div>

                      </div>
                      */}


                      {/*
                      <div className="ps-card-quality">

                        <Shield size={14} />

                        <span>
                          Quality Assured
                        </span>

                      </div>
                      */}

                    </div>

                  </div>


                  {/* LIGHT REFLECTION */}

                  <div className="ps-card-reflection" />

                </div>


                {/* ==================================
                    FLOATING INGREDIENT CARD 1
                ================================== */}

                <div
                  className="ps-ingredient-card ps-ing-top"
                  style={{
                    transform: `translate(
                      ${-mousePosition.x * 15}px,
                      ${-mousePosition.y * 15}px
                    )`
                  }}
                >

                  <div className="ingredient-image">

                    <img
                      src={IMAGES.ingredient1}
                      alt="Natural herbs"
                    />

                  </div>


                  <div className="ingredient-info">

                    <span className="ingredient-label">
                      50+
                    </span>

                    <span className="ingredient-text">
                      Natural Herbs
                    </span>

                  </div>

                </div>


                {/* ==================================
                    FLOATING INGREDIENT CARD 2
                ================================== */}

                <div
                  className="ps-ingredient-card ps-ing-bottom"
                  style={{
                    transform: `translate(
                      ${mousePosition.x * 12}px,
                      ${mousePosition.y * 12}px
                    )`
                  }}
                >

                  <div className="ingredient-image">

                    <img
                      src={IMAGES.ingredient2}
                      alt="Ayurvedic ingredients"
                    />

                  </div>


                  <div className="ingredient-info">

                    <span className="ingredient-label">
                      100%
                    </span>

                    <span className="ingredient-text">
                      Pure & Natural
                    </span>

                  </div>

                </div>

              </div>

            </div>


            {/* ====================================
                RIGHT - CONTENT COLUMN
            ==================================== */}

            <div className="ps-content-column">

              {/* ==================================
                  DESCRIPTION
              ================================== */}

              <div className="ps-description-card">

                <div className="ps-desc-icon">

                  <Droplets size={24} />

                </div>


                <p className="ps-description">

                  Sukanya Hair Oil is crafted with care
                  using a time-tested family recipe.
                  Each bottle contains the essence of
                  nature&apos;s finest organic ingredients,
                  prepared with the same love and
                  dedication passed down through
                  generations.

                </p>


                <div className="ps-desc-decoration">

                  <span className="decoration-dot" />

                  <span className="decoration-dot" />

                  <span className="decoration-dot" />

                </div>

              </div>


              {/* ==================================
                  FEATURES GRID
              ================================== */}

              <div className="ps-features-grid">

                {features.map((feature, index) => {

                  const FeatureIcon =
                    feature.icon

                  return (

                    <div
                      key={index}
                      className={`
                        ps-feature-card
                        ${feature.color}
                        ${isVisible ? 'visible' : ''}
                      `}
                      style={{
                        transitionDelay:
                          `${0.5 + index * 0.15}s`
                      }}
                      onMouseEnter={() =>
                        setActiveFeature(index)
                      }
                      onMouseLeave={() =>
                        setActiveFeature(null)
                      }
                    >

                      {/* FEATURE ICON */}

                      <div
                        className={`
                          ps-feature-icon-wrapper
                          ${
                            activeFeature === index
                              ? 'active'
                              : ''
                          }
                        `}
                      >

                        <div className="ps-feature-icon-circle">

                          <FeatureIcon size={18} />

                        </div>


                        <div className="ps-feature-icon-glow" />

                      </div>


                      {/* FEATURE CONTENT */}

                      <div className="ps-feature-content">

                        <h4 className="ps-feature-title">
                          {feature.title}
                        </h4>


                        <p
                          className={`
                            ps-feature-desc
                            ${
                              activeFeature === index
                                ? 'show'
                                : ''
                            }
                          `}
                        >

                          {feature.description}

                        </p>

                      </div>


                      {/* CHECK */}

                      <div
                        className={`
                          ps-feature-check
                          ${
                            activeFeature === index
                              ? 'active'
                              : ''
                          }
                        `}
                      >

                        <CheckCircle2 size={16} />

                      </div>


                      <div className="ps-feature-border" />

                    </div>

                  )

                })}

              </div>


              {/* ==================================
                  CTA SECTION
              ================================== */}

              <div className="ps-cta-wrapper">

                <button
                  type="button"
                  className="ps-cta-button"
                  onClick={handleExperienceClick}
                >

                  <span>
                    Experience the Difference
                  </span>


                  <span className="ps-cta-icon">

                    <ArrowRight size={18} />

                  </span>


                  <div className="ps-cta-shine" />

                </button>


                <div className="ps-cta-trust">

                  <div className="trust-avatars">

                    <div className="trust-avatar">
                      ✓
                    </div>

                    <div className="trust-avatar">
                      ✓
                    </div>

                    <div className="trust-avatar">
                      ✓
                    </div>

                  </div>


                  <span className="trust-text">
                    Trusted by 5000+ customers
                  </span>

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