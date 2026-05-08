// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link, .nav-btn');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link has a hash (anchor link)
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();

                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // Calculate offset for sticky navbar
                    const navbar = document.querySelector('.navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    const targetPosition = targetElement.offsetTop - navbarHeight - 20;

                    // Smooth scroll to target
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add scroll effect to navbar
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add shadow on scroll
        if (scrollTop > 10) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        lastScrollTop = scrollTop;
    });

    // Enhanced scroll animations for all sections
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for feature cards
                if (entry.target.classList.contains('feature-card')) {
                    const delay = index * 100; // 100ms stagger
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay);
                } else if (entry.target.classList.contains('faq-item')) {
                    // Stagger FAQ items
                    const faqItems = document.querySelectorAll('.faq-item');
                    const faqIndex = Array.from(faqItems).indexOf(entry.target);
                    const delay = faqIndex * 80; // 80ms stagger
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay);
                } else {
                    entry.target.classList.add('visible');
                }
            }
        });
    }, observerOptions);

    // Add animate-on-scroll class to elements and observe them
    const animateElements = [
        // Features section
        '.features h2',
        '.features > p',
        '.feature-card',
        // Download CTA section
        '.download-cta h2',
        '.download-container > p',
        '.download-qr',
        // FAQ section
        '.faq h2',
        '.faq-item'
    ];

    animateElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.classList.add('animate-on-scroll');
            observer.observe(element);
        });
    });

    // Add click tracking for download buttons (placeholder)
    const downloadButtons = document.querySelectorAll('.nav-btn, .cta-button');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Here you would typically add analytics tracking
            console.log('Download button clicked:', this.textContent);

            // If it's not an anchor link, you can add actual App Store link
            if (!this.getAttribute('href').startsWith('#')) {
                // Replace with actual App Store URL when available
                // window.open('https://apps.apple.com/app/nogambling/id123456789', '_blank');
            }
        });
    });

    // Mobile menu toggle (if needed in future)
    const createMobileMenu = () => {
        const navContainer = document.querySelector('.nav-container');
        const navMenu = document.querySelector('.nav-menu');

        // Add mobile menu button
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '☰';
        mobileMenuBtn.style.display = 'none';
        mobileMenuBtn.style.background = 'none';
        mobileMenuBtn.style.border = 'none';
        mobileMenuBtn.style.fontSize = '1.5rem';
        mobileMenuBtn.style.color = 'white';
        mobileMenuBtn.style.cursor = 'pointer';

        navContainer.appendChild(mobileMenuBtn);

        // Handle mobile menu visibility
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                mobileMenuBtn.style.display = 'block';
                navMenu.style.display = 'none';
            } else {
                mobileMenuBtn.style.display = 'none';
                navMenu.style.display = 'flex';
            }
        };

        mobileMenuBtn.addEventListener('click', () => {
            const isVisible = navMenu.style.display === 'flex';
            navMenu.style.display = isVisible ? 'none' : 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.right = '0';
            navMenu.style.background = 'rgba(30, 41, 59, 0.95)';
            navMenu.style.padding = '1rem';
            navMenu.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        });

        window.addEventListener('resize', handleResize);
        handleResize();
    };

    // Initialize mobile menu
    createMobileMenu();

    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
});