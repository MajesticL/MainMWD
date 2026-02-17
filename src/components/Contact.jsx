import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

function Contact() {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('SENDING');

        // REPLACE WITH YOUR ACTUAL IDs
        const serviceID = 'YOUR_SERVICE_ID';
        const templateID = 'YOUR_TEMPLATE_ID';
        const publicKey = 'YOUR_PUBLIC_KEY';

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setStatus('SUCCESS');
                e.target.reset(); // Clears the form
            }, (error) => {
                console.log(error.text);
                setStatus('FAILED');
            });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                
                {/* --- LEFT COLUMN: INFO --- */}
                <div className="contact-info">
                    <h2>Get In Touch</h2>
                    <p>I'm currently available for freelance work. If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.</p>

                    <div className="info-item">
                        <i className="fa-solid fa-envelope"></i>
                        <div>
                            <h4>Email</h4>
                            <a href="mailto:contact@majestywebmagic.com">contact@majestywebmagic.com</a>
                        </div>
                    </div>

                    <div className="info-item">
                        <i className="fa-solid fa-location-dot"></i>
                        <div>
                            <h4>Location</h4>
                            <p>South Carolina, USA</p>
                        </div>
                    </div>
                    
                    {/* Socials */}
                    <div className="social-links">
                        <a href="https://github.com/MajesticL" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                        <a href="https://www.instagram.com/hey_thxre_dalilah/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://x.com/majesty_web?s=21" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
                    </div>
                </div>

                {/* --- RIGHT COLUMN: FORM --- */}
                <div className="contact-form-wrapper">
                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="from_name" placeholder="Your Name" required />
                        </div>
                        
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="from_email" placeholder="your@email.com" required />
                        </div>

                        {/* SUBJECT DROPDOWN */}
                        <div className="form-group">
                            <label>Subject</label>
                            <select name="subject" required>
                                <option value="" disabled selected>Select a subject</option>
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Project Quote">Project Quote</option>
                                <option value="Coffee Chat">Coffee Chat</option>
                                <option value="Job Opportunity">Job Opportunity</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea name="message" rows="5" placeholder="Your message..." required></textarea>
                        </div>

                        <button type="submit" className="submit-btn" disabled={status === 'SENDING'}>
                            {status === 'SENDING' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'SUCCESS' && <p className="success-msg">Message sent successfully!</p>}
                        {status === 'FAILED' && <p className="error-msg">Something went wrong. Please try again.</p>}
                    </form>
                </div>

            </div>
        </section>
    );
}

export default Contact;