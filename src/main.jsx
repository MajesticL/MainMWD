import 'vite/modulepreload-polyfill'
import React from 'react'
import ReactDOM from 'react-dom/client'

window.toggleMenu = function() {
    console.log('toggleMenu called');
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    console.log('navLinks:', navLinks);
    console.log('hamburger:', hamburger);
    if(navLinks && hamburger) {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        console.log('Classes toggled. navLinks classes:', navLinks.className);
    }
};

window.handleSubmit = function(event) {
    event.preventDefault();
    alert('Thank you for your message! I will get back to you within 24 hours.');
    setTimeout(() => {
        event.target.reset();
    }, 1000)
}


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePageFeatures);
} else {
    initializePageFeatures();
}

function initializePageFeatures() {
    const reactAppElement = document.getElementById('react-app');
    if (reactAppElement) {
        const root = ReactDOM.createRoot(reactAppElement);
        root.render(
            <h1>Hello from React!</h1>
        );
    }


    window.addEventListener("scroll", function() {
        const header = document.querySelector("header");
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }
    });


    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            const navLinks = document.getElementById('navLinks');
            const hamburger = document.getElementById('hamburger');
            if(navLinks && hamburger) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}


