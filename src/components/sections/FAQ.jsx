import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  HelpCircle, 
  ChevronDown, 
  MessageCircle, 
  Mail, 
  Phone,
  Sparkles,
  ArrowRight,
  Shield,
  Clock,
  Leaf
} from 'lucide-react'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null)

  const faqs = [
    {
      question: "How long does it take to see results?",
      answer: "Most users notice visible improvements within 4-6 weeks of regular use. For best results, we recommend consistent use for at least 2 months. Results may vary depending on individual hair conditions and consistency of use.",
      icon: Clock,
      category: "Results"
    },
    {
      question: "Is Sukanya Hair Oil suitable for all hair types?",
      answer: "Yes! Sukanya Hair Oil is formulated with natural Ayurvedic ingredients that are beneficial for all hair types — whether you have dry, oily, normal, curly, or straight hair. The natural ingredients work to balance and nourish your hair regardless of your hair type.",
      icon: Leaf,
      category: "Usage"
    },
    {
      question: "How often should I use the oil?",
      answer: "We recommend using Sukanya Hair Oil 2-3 times a week for regular maintenance. For intense conditioning and faster results, you can use it more frequently. Always listen to your hair and adjust usage based on your specific needs.",
      icon: Sparkles,
      category: "Usage"
    },
    {
      question: "Does it have any side effects?",
      answer: "Sukanya Hair Oil is made from 100% natural ingredients and is completely chemical-free. It has no known side effects. However, we always recommend doing a patch test before first use if you have sensitive skin or known allergies to any herbal ingredients.",
      icon: Shield,
      category: "Safety"
    },
    {
      question: "How should I store the oil?",
      answer: "Store the oil in a cool, dry place away from direct sunlight. Keep the bottle tightly closed when not in use. The shelf life of the product is 18 months from the manufacturing date when stored properly.",
      icon: HelpCircle,
      category: "Care"
    },
    {
      question: "Is it safe for colored or chemically treated hair?",
      answer: "Absolutely! Sukanya Hair Oil is gentle and nourishing, making it safe for all hair types including colored and chemically treated hair. The natural ingredients help maintain hair health and can actually improve the condition of treated hair over time.",
      icon: Shield,
      category: "Safety"
    }
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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <Helmet>
        <title>FAQ - Sukanya Hair Oil | Common Questions Answered</title>
        <meta name="description" content="Find answers to common questions about Sukanya Hair Oil. Learn about usage, results, safety, and more." />
      </Helmet>

      <section className="faq" ref={sectionRef} id="faq">
        
        {/* Background */}
        <div className="fq-ambient">
          <div className="fq-orb fq-orb-1" style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }} />
          <div className="fq-orb fq-orb-2" style={{
            transform: `translate(${-mousePosition.x * 15}px, ${-mousePosition.y * 15}px)`
          }} />
        </div>

        <div className="faq-container">
          
          {/* Header */}
          <div className={`fq-header ${isVisible ? 'visible' : ''}`}>
            <div className="fq-badge">
              <HelpCircle size={13} />
              <span>Frequently Asked</span>
            </div>

            <h2 className="fq-title">
              Common Questions,
              <span className="fq-title-accent"> Simple Answers</span>
            </h2>

            <p className="fq-subtitle">
              Everything you need to know about Sukanya Hair Oil. 
              Can't find what you're looking for? We're here to help.
            </p>
          </div>

          {/* Main Content - Split Layout */}
          <div className={`fq-main ${isVisible ? 'visible' : ''}`}>
            
            {/* Left - FAQ List */}
            <div className="fq-list">
              {faqs.map((faq, index) => {
                const FaqIcon = faq.icon
                const isOpen = openIndex === index
                
                return (
                  <div 
                    key={index}
                    className={`fq-item ${isOpen ? 'active' : ''}`}
                    style={{ transitionDelay: `${index * 0.06}s` }}
                  >
                    <button 
                      className="fq-question"
                      onClick={() => toggleFAQ(index)}
                    >
                      <div className="fq-question-left">
                        <div className={`fq-question-icon ${isOpen ? 'active' : ''}`}>
                          <FaqIcon size={16} />
                        </div>
                        <span className="fq-question-text">{faq.question}</span>
                      </div>
                      <div className={`fq-toggle ${isOpen ? 'active' : ''}`}>
                        <ChevronDown size={18} />
                      </div>
                    </button>
                    
                    <div className={`fq-answer ${isOpen ? 'open' : ''}`}>
                      <div className="fq-answer-inner">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right - Help Card */}
            <div className="fq-help">
              <div className="fq-help-card">
                <div className="fq-help-icon">
                  <MessageCircle size={28} />
                </div>
                
                <h3 className="fq-help-title">Still have questions?</h3>
                <p className="fq-help-text">
                  We're here to help you with any questions about our product, 
                  usage, or anything else you'd like to know.
                </p>

                <div className="fq-help-actions">
                  <a href="tel:7624920239" className="fq-help-btn fq-btn-phone">
                    <Phone size={16} />
                    <span>Call Us</span>
                  </a>
                  <a href="mailto:care@sukanyahairoil.com" className="fq-help-btn fq-btn-email">
                    <Mail size={16} />
                    <span>Email Us</span>
                  </a>
                </div>

                <div className="fq-help-avatar">
                  <div className="fq-avatar-circle">?</div>
                  <span className="fq-avatar-label">We respond within 24 hours</span>
                </div>
              </div>

              {/* Quick Info */}
              <div className="fq-quick-info">
                <div className="fq-quick-item">
                  <Shield size={14} />
                  <span>100% Natural</span>
                </div>
                <div className="fq-quick-item">
                  <Leaf size={14} />
                  <span>Chemical Free</span>
                </div>
                <div className="fq-quick-item">
                  <Clock size={14} />
                  <span>Results in 4-6 weeks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ