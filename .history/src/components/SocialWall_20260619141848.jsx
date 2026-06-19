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
      className="sw-section"
      style={{
        backgroundImage: `url(${socialWallBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="sw-bg-overlay"></div>

      <div className="sw-container">

        {/* Header */}
        <div className="sw-header">

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