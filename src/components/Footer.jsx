import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <h3 className="social-title">You Can Find Me Here:</h3>

        <div className="social-icons-container">
          <ul className="social-icons-list">
            <li>
              <a
                href="https://x.com/majesty_web?s=21"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/hey_thxre_dalilah/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MajesticL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            {/* <li>
              <a
                href="https://bsky.app/profile/majestyl.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BlueSky"
              >
                <i className="fa-brands fa-square-bluesky"></i>
              </a>
            </li> */}
            <li>
              <a href="mailto:contact@majestywebmagic.com" aria-label="Email">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 - 2026 Majesty Web Design LLC | Dalilah Heyward</p>
          <p className="tagline">Crafting Digital Excellence</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
