// // import React from 'react'
// // import { HelmetProvider } from 'react-helmet-async'
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// // import Navbar from './components/Navbar'
// // import Footer from './components/Footer'
// // import Home from './pages/Home'


// // function App() {
// //   return (
// //     <HelmetProvider>
// //       <Router>
   
// //         <Navbar />
// //         <Routes>
// //           <Route path="/" element={<Home />} />
      
// //         </Routes>
// //         <Footer />
// //       </Router>
// //     </HelmetProvider>
// //   )
// // }

// // export default App


// import React, { useState, useEffect } from 'react'
// import { HelmetProvider } from 'react-helmet-async'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { MessageCircle, X, Send, Sparkles } from 'lucide-react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import Home from './pages/Home'
// import './App.css'

// function App() {
//   const [isChatOpen, setIsChatOpen] = useState(false)
//   const [isVisible, setIsVisible] = useState(false)
//   const [message, setMessage] = useState('')
//   const [showTooltip, setShowTooltip] = useState(true)
//   const [isHovered, setIsHovered] = useState(false)

//   const phoneNumber = '7624920239' // Replace with your WhatsApp number (without +)
//   const defaultMessage = "Hi! I'm interested in Sukanya Hair Oil. Can you tell me more?"

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsVisible(window.scrollY > 300)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   useEffect(() => {
//     if (showTooltip) {
//       const timer = setTimeout(() => setShowTooltip(false), 5000)
//       return () => clearTimeout(timer)
//     }
//   }, [showTooltip])

//   const handleToggleChat = () => {
//     setIsChatOpen(!isChatOpen)
//     setShowTooltip(false)
//   }

//   const handleSendMessage = () => {
//     const finalMessage = message.trim() || defaultMessage
//     const encodedMessage = encodeURIComponent(finalMessage)
//     const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
//     window.open(whatsappURL, '_blank')
//     setIsChatOpen(false)
//     setMessage('')
//   }

//   const handleQuickReply = (replyMessage) => {
//     const encodedMessage = encodeURIComponent(replyMessage)
//     const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
//     window.open(whatsappURL, '_blank')
//     setIsChatOpen(false)
//   }

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault()
//       handleSendMessage()
//     }
//   }

//   const quickReplies = [
//     { icon: '🛒', text: 'I want to order', message: 'Hi! I want to order Sukanya Hair Oil.' },
//     { icon: '💰', text: 'Check price', message: 'Hi! What is the price of Sukanya Hair Oil?' },
//     { icon: '❓', text: 'Know more', message: 'Hi! Can you tell me more about Sukanya Hair Oil?' },
//     { icon: '🚚', text: 'Delivery info', message: 'Hi! Do you deliver to my location?' }
//   ]

//   return (
//     <HelmetProvider>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//         <Footer />

//         {/* WhatsApp Floating Button */}
//         <div className={`whatsapp-wrapper ${isVisible ? 'visible' : ''}`}>
          
//           {/* Chat Box */}
//           {isChatOpen && (
//             <div className="whatsapp-chat">
//               {/* Chat Header */}
//               <div className="whatsapp-chat-header">
//                 <div className="whatsapp-chat-header-left">
//                   <div className="whatsapp-chat-avatar">
//                     <MessageCircle size={22} />
//                   </div>
//                   <div className="whatsapp-chat-header-info">
//                     <span className="whatsapp-chat-title">Sukanya Hair Oil</span>
//                     <span className="whatsapp-chat-subtitle">Typically replies instantly</span>
//                   </div>
//                 </div>
//                 <button 
//                   className="whatsapp-chat-close"
//                   onClick={handleToggleChat}
//                 >
//                   <X size={18} />
//                 </button>
//               </div>

//               {/* Chat Body */}
//               <div className="whatsapp-chat-body">
//                 <div className="whatsapp-chat-bubble">
//                   <p>
//                     👋 Hello! Welcome to <strong>Sukanya Hair Oil</strong>. 
//                     How can we help you today?
//                   </p>
//                 </div>

//                 {/* Quick Replies */}
//                 <div className="whatsapp-quick-replies">
//                   <span className="whatsapp-quick-label">
//                     <Sparkles size={12} />
//                     Quick replies
//                   </span>
//                   <div className="whatsapp-quick-grid">
//                     {quickReplies.map((reply, index) => (
//                       <button
//                         key={index}
//                         className="whatsapp-quick-btn"
//                         onClick={() => handleQuickReply(reply.message)}
//                       >
//                         <span className="whatsapp-quick-icon">{reply.icon}</span>
//                         <span className="whatsapp-quick-text">{reply.text}</span>
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Chat Footer */}
//               <div className="whatsapp-chat-footer">
//                 <div className="whatsapp-input-wrapper">
//                   <input
//                     type="text"
//                     className="whatsapp-input"
//                     placeholder="Type your message..."
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     onKeyPress={handleKeyPress}
//                   />
//                   <button 
//                     className="whatsapp-send-btn"
//                     onClick={handleSendMessage}
//                     disabled={!message.trim()}
//                   >
//                     <Send size={18} />
//                   </button>
//                 </div>
//                 <span className="whatsapp-branding">Powered by WhatsApp</span>
//               </div>
//             </div>
//           )}

//           {/* Floating Button */}
//           <button
//             className={`whatsapp-float-btn ${isChatOpen ? 'active' : ''} ${isHovered ? 'hovered' : ''}`}
//             onClick={handleToggleChat}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//             aria-label="Chat on WhatsApp"
//           >
//             {isChatOpen ? (
//               <X size={24} className="whatsapp-float-icon" />
//             ) : (
//               <svg 
//                 viewBox="0 0 24 24" 
//                 className="whatsapp-float-icon"
//                 fill="currentColor"
//               >
//                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//               </svg>
//             )}
//           </button>

//           {/* Tooltip */}
//           {showTooltip && !isChatOpen && (
//             <div className="whatsapp-tooltip">
//               <div className="whatsapp-tooltip-content">
//                 <span>👋 Chat with us!</span>
//               </div>
//               <button 
//                 className="whatsapp-tooltip-close"
//                 onClick={() => setShowTooltip(false)}
//               >
//                 <X size={12} />
//               </button>
//             </div>
//           )}
//         </div>
//       </Router>
//     </HelmetProvider>
//   )
// }

// export default App

import React, { useState, useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  const phoneNumber = '917624920239' // Your WhatsApp number with country code, without +
  const defaultMessage = "Hi! I'm interested in Sukanya Hair Oil. Can you tell me more?"

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage)
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappURL, '_blank')
  }

  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />

        {/* Simple WhatsApp Floating Button */}
        <button
          className={`whatsapp-simple-btn ${isVisible ? 'visible' : ''}`}
          onClick={handleWhatsAppClick}
          aria-label="Chat on WhatsApp"
        >
          <svg 
            viewBox="0 0 24 24" 
            className="whatsapp-simple-icon"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </button>
      </Router>
    </HelmetProvider>
  )
}

export default App