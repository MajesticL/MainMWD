import React from 'react';
import '../styles/Services.css';

function Footer() {
    return (
        <div>
            <footer>
                <h3 class="social-title">You can Find Me Here:</h3>
                <div class="socials">
                    <ul class="icons">
                        <li><a class="fa-brands fa-twitter" href="https://x.com/majesty_web?s=21" aria-label="Twitter"></a></li>
                        <li><a class="fa-brands fa-instagram" href="https://www.instagram.com/hey_thxre_dalilah/" aria-label="Instagram"></a></li>
                        <li><a class="fa-brands fa-github" href="https://github.com/MajesticL" aria-label="Github"></a></li>
                        <li><a class="fa-solid fa-cloud-arrow-up" href="https://bsky.app/profile/majestyl.bsky.social" aria-label="BlueSky"></a></li>
                        <li><a class="fa-solid fa-inbox" href="mailto:contact@majestywebmagic.com" aria-label="Email"></a></li>
                    </ul>
                </div>
                <p>&copy; 2025 Majesty Web Design LLC | Dalilah Heyward | Crafting Digital Excellence</p>
            </footer>
        </div>
    );
}

export default Footer;