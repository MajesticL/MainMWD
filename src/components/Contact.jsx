import React from 'react'
import '../styles/Services.css'

function Contact() {
    return (
        <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Let's Create Something Majestic</h2>
            <div class="contact-content">
                <div class="contact-form">
                    <h3>Get Your Free Consultation</h3>
                    <form action="https://formsubmit.co/contact@majestywebmagic.com" method="POST" onsubmit="handleSubmit(event)">
                        <input type="hidden" name="_next" value="https://www.majestywebmagic.com/" />
                        <input type="hidden" name="_blacklist" value="btc, account,urgent, prize, bitcoin, transfer" />
                        
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div class="form-group">
                            <label for="project">Project Type</label>
                            <input type="text" id="project" name="project" placeholder="e.g., Custom Website, E-commerce Store" />
                        </div>
                        <div class="form-group">
                            <label for="budget">Budget Range</label>
                            <input type="text" id="budget" name="budget" placeholder="e.g., $500 - $5,000" />
                        </div>
                        <div class="form-group">
                            <label for="message">Project Details</label>
                            <textarea id="message" name="message" rows="4" placeholder="Tell me about your project goals, timeline, and any specific requirements..."></textarea>
                        </div>
                        <button type="submit" class="cta-button send">Send Message</button>
                    </form>
                </div>
                <div class="contact-info">
                    <div class="contact-item">
                        <div class="contact-icon"><i class="fa-solid fa-envelope"></i></div>
                        <div>
                            <h4>Email</h4>
                            <p>contact@majestywebmagic.com</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon"><i class="fa-solid fa-comments"></i></div>
                        <div>
                            <h4>Response Time</h4>
                            <p>Within 24 hours</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon"><i class="fa-solid fa-business-time"></i></div>
                        <div>
                            <h4>Project Timeline</h4>
                            <p>8-20 weeks depending on scope</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon"><i class="fa-solid fa-credit-card"></i></div>
                        <div>
                            <h4>Payment Plans</h4>
                            <p>25% installments throughout project</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Contact;