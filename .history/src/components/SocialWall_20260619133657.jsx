import { useState } from "react";
import "./SocialWall.css";
import { InstagramEmbed } from "react-social-media-embed";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
// import socialWallBg from "../assets/bg.png";

const instagramPosts = [
  "https://www.instagram.com/reel/PLACEHOLDER_1/",
  "https://www.instagram.com/reel/PLACEHOLDER_2/",
  "https://www.instagram.com/reel/PLACEHOLDER_3/",
  "https://www.instagram.com/reel/PLACEHOLDER_4/",
];

const facebookPosts = [
  "https://www.facebook.com/PLACEHOLDER_PAGE/posts/PLACEHOLDER_1",
  "https://www.facebook.com/PLACEHOLDER_PAGE/posts/PLACEHOLDER_2",
  "https://www.facebook.com/PLACEHOLDER_PAGE/posts/PLACEHOLDER_3",
  "https://www.facebook.com/PLACEHOLDER_PAGE/posts/PLACEHOLDER_4",
];

const fillLoop = (arr) => {
  if (arr.length === 0) return [];
  const times = Math.ceil(4 / arr.length);
  const filled = Array.from({ length: times }, () => arr).flat();
  return [...filled, ...filled];
};

export default function SocialWall() {
  const [activeTab, setActiveTab] = useState("instagram");

  return (
    <section
    //   className="sw-section"
    //   style={{
    //     backgroundImage: `url(${socialWallBg})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat"
    //   }}
    >
      <div className="sw-bg-overlay"></div>

      {/* Floating music notes */}
      <div className="sw-notes" aria-hidden="true">
        <span className="sw-note" style={{ left: "5%",  animationDelay: "0s",   fontSize: "2rem",   animationDuration: "9s"  }}>♪</span>
        <span className="sw-note" style={{ left: "15%", animationDelay: "1.5s", fontSize: "1.4rem", animationDuration: "11s" }}>♫</span>
        <span className="sw-note" style={{ left: "28%", animationDelay: "3s",   fontSize: "2.4rem", animationDuration: "8s"  }}>♩</span>
        <span className="sw-note" style={{ left: "42%", animationDelay: "0.8s", fontSize: "1.6rem", animationDuration: "13s" }}>♬</span>
        <span className="sw-note" style={{ left: "57%", animationDelay: "2.2s", fontSize: "2.2rem", animationDuration: "10s" }}>♪</span>
        <span className="sw-note" style={{ left: "68%", animationDelay: "4s",   fontSize: "1.3rem", animationDuration: "7s"  }}>♫</span>
        <span className="sw-note" style={{ left: "78%", animationDelay: "1s",   fontSize: "2.6rem", animationDuration: "12s" }}>♩</span>
        <span className="sw-note" style={{ left: "88%", animationDelay: "3.5s", fontSize: "1.8rem", animationDuration: "9s"  }}>♬</span>
        <span className="sw-note" style={{ left: "93%", animationDelay: "5s",   fontSize: "1.5rem", animationDuration: "14s" }}>♪</span>
      </div>

      <div className="sw-container">

        {/* Header */}
        <div className="sw-header">
          {/* Header background music decorations */}
          <div className="sw-header-music-bg" aria-hidden="true">
            <svg viewBox="0 0 800 250" preserveAspectRatio="xMidYMid meet" className="sw-header-svg">
              {/* Staff Lines */}
              <path d="M-20,90 Q200,50 400,90 T820,90" fill="none" stroke="rgba(201, 160, 61, 0.35)" strokeWidth="1.5" />
              <path d="M-20,100 Q200,60 400,100 T820,100" fill="none" stroke="rgba(201, 160, 61, 0.35)" strokeWidth="1.5" />
              <path d="M-20,110 Q200,70 400,110 T820,110" fill="none" stroke="rgba(201, 160, 61, 0.35)" strokeWidth="1.5" />
              <path d="M-20,120 Q200,80 400,120 T820,120" fill="none" stroke="rgba(201, 160, 61, 0.35)" strokeWidth="1.5" />
              <path d="M-20,130 Q200,90 400,130 T820,130" fill="none" stroke="rgba(201, 160, 61, 0.35)" strokeWidth="1.5" />

              {/* Treble Clef left */}
              <g transform="translate(40, 65) scale(0.9)" stroke="rgba(201, 160, 61, 0.58)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <path d="M12,40c0,0-8-6-8-16c0-5,3-8,6-8c3,0,5,2,5,5c0,5-5,6-5,10c0,5,5,6,7,6c4,0,6-3,6-9c0-11-9-19-9-19" />
                <path d="M12,3 v38 c0,2-1,3-3,3" />
              </g>

              {/* Quarter note middle-left */}
              <g transform="translate(210, 50) scale(1.1)" fill="rgba(201, 160, 61, 0.45)">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V3h2z" />
              </g>

              {/* Eighth note middle-right */}
              <g transform="translate(570, 90) scale(1.1)" fill="rgba(201, 160, 61, 0.48)">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V3h6v2h-6z" />
              </g>

              {/* Double Note right */}
              <g transform="translate(700, 75) scale(1.3)" fill="rgba(201, 160, 61, 0.52)">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h6v3.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V3h-6z" />
              </g>

              {/* Tiny sparkles/stars */}
              <circle cx="150" cy="70" r="1.5" fill="rgba(201, 160, 61, 0.55)" />
              <circle cx="280" cy="120" r="2" fill="rgba(201, 160, 61, 0.45)" />
              <circle cx="380" cy="80" r="1.2" fill="rgba(201, 160, 61, 0.6)" />
              <circle cx="500" cy="60" r="2" fill="rgba(201, 160, 61, 0.55)" />
              <circle cx="640" cy="130" r="1.5" fill="rgba(201, 160, 61, 0.45)" />
            </svg>
          </div>

          <div className="sw-badge">
            <span className="sw-badge-dot"></span>
            <span className="sw-badge-text">FOLLOW OUR JOURNEY</span>
            <span className="sw-badge-dot"></span>
          </div>

          <h2 className="sw-title">
            <span className="sw-title-light">Moments &</span>
<span className="sw-title-gold"> Milestones</span>
          </h2>

          <div className="sw-title-decor">
            <span className="sw-decor-line"></span>
            <span className="sw-decor-diamond">◈</span>
            <span className="sw-decor-line"></span>
          </div>

          <p className="sw-subtitle">
            Discover inspiring insights, entrepreneurial ventures,
spiritual perspectives, and the latest updates from
Anbuarasan's journey.
          </p>

          {/* Social Tabs */}
          <div className="sw-tabs">

            <button
              id="sw-tab-instagram"
              className={`sw-tab-btn ${activeTab === "instagram" ? "sw-tab-active" : ""}`}
              onClick={() => setActiveTab("instagram")}
            >
              <FaInstagram size={20} />
              <span className="sw-tab-text">Instagram</span>
            </button>

            <button
              id="sw-tab-facebook"
              className={`sw-tab-btn ${activeTab === "facebook" ? "sw-tab-active" : ""}`}
              onClick={() => setActiveTab("facebook")}
            >
              <FaFacebook size={20} />
              <span className="sw-tab-text">Facebook</span>
            </button>

          </div>

        </div>

      </div>

      {/* Marquee Track */}
      <div className="sw-marquee">

        <div className="sw-track">

          {activeTab === "instagram" ? (
            fillLoop(instagramPosts).map((url, index) => (
              <div key={`ig-${index}`} className="sw-card">

                <div className="sw-card-top sw-card-top--instagram">
                  <FaInstagram size={16} />
                  <span>ANBUARASAN</span>
                </div>

                <div className="sw-embed-wrapper">
                  <InstagramEmbed url={url} width="100%" />
                </div>

              </div>
            ))
          ) : activeTab === "facebook" ? (
            fillLoop(facebookPosts).map((url, index) => (
              <div key={`fb-${index}`} className="sw-card sw-card--wide">

                <div className="sw-card-top sw-card-top--facebook">
                  <FaFacebook size={16} />
                  <span>ANBUARASAN</span>
                </div>

                <div className="sw-embed-wrapper sw-embed-facebook">
                  <iframe
                    src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(url)}&show_text=true&width=480`}
                    width="100%"
                    height="500"
                    style={{ border: "none", overflow: "hidden", display: "block" }}
                    scrolling="no"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    loading="lazy"
                    title={`Facebook Post ${index}`}
                  />
                </div>

              </div>
            ))
          ) : null}

        </div>

      </div>

      {/* Footer CTA */}
      <div className="sw-footer">
        <div className="sw-footer-line"></div>
        <a
          href={
            activeTab === "instagram"
              ? "https://www.instagram.com/PLACEHOLDER_HANDLE/"
              : "https://www.facebook.com/PLACEHOLDER_PAGE/"
          }
          target="_blank"
          rel="noreferrer"
          className="sw-follow-btn"
        >
          {activeTab === "instagram" && <FaInstagram size={16} />}
          {activeTab === "facebook" && <FaFacebook size={16} />}
          Check us on {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </a>
        <div className="sw-footer-line"></div>
      </div>

    </section>
  );
}