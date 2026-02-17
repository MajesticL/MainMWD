import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

function Contact() {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        const honeypot = document.getElementById('website');
        if (honeypot.value) {
        console.log("Bot detected. Email blocked.");
        setStatus('SUCCESS'); 
        e.target.reset();
        return;
    }
        setStatus('SENDING');

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setStatus('SUCCESS');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setStatus('FAILED');
            });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
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
                </div>

                <div className="contact-form-wrapper">
                    <form ref={form} onSubmit={sendEmail} className="contact-form">

                        <input 
                            type="text" 
                            name="website" 
                            id="website" 
                            style={{ display: 'none' }} 
                            tabIndex={-1} 
                            autoComplete="off"
                        />


                        
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="from_name" placeholder="Your Name" required />
                        </div>
                        
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="from_email" placeholder="your@email.com" required />
                        </div>

                        <div className="form-group">
                            <label>Subject</label>
                            <select name="subject" defaultValue="" required>
                                <option value="" disabled>Select a subject</option>
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