/* ======== 0. Global & Root Variables (Simplified) ======== */
:root {
    /* Light Mode (Default) */
    --primary-green: #3a8e3d;
    --light-green: #f0f9f0;
    --card-bg: #ffffff;
    --body-bg: #ffffff;
    --text-color: #333;
    --text-medium: #555;
    --header-bg: #ffffff;
    --header-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);
    --card-border: #eee;
    --faq-border: #ddd;
    --gradient-start: #ffffff;
    --gradient-end-light: #f4f4f4;
    --gradient-end-green: #f0f9f0;
    --footer-bg: #333;
    --footer-text: #f4f4f4;
    --soft-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    --card-radius: 15px;
    
    /* Light Feature Colors */
    --feature-color-1: #eef6ff;
    --feature-color-2: var(--light-green);
    --feature-color-3: #fffaf0;
    --feature-color-4: #f9f9f9;
}

body.dark-mode {
    /* Dark Mode */
    --primary-green: #4caf50;
    --light-green: #1a2e1a;
    --card-bg: #1e1e1e;
    --body-bg: #121212;
    --text-color: #e0e0e0;
    --text-medium: #b0b0b0;
    --header-bg: #1e1e1e;
    --header-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    --card-border: #333;
    --faq-border: #333;
    --gradient-start: #1e1e1e;
    --gradient-end-light: #2a2a2a;
    --gradient-end-green: #1a2e1a;
    --footer-bg: #111;
    --footer-text: #aaa;
    --soft-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    
    /* Dark Feature Colors */
    --feature-color-1: #1a2233;
    --feature-color-2: #1a2e1a;
    --feature-color-3: #332f1a;
    --feature-color-4: #222222;
}

/* ======== Global Styles ======== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--body-bg);
    color: var(--text-color);
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
}

section {
    padding: 80px 0;
}

img {
    max-width: 100%;
    border-radius: 10px;
}

.section-title {
    text-align: center;
    margin-bottom: 50px;
}

.section-title h2 {
    font-size: 2.5rem;
    color: var(--text-color);
    margin-bottom: 10px;
    transition: color 0.3s ease;
}

.section-title hr {
    width: 80px;
    height: 4px;
    background: var(--primary-green);
    border: none;
    margin: 0 auto;
}

/* ======== 1. Header & Navigation ======== */
header {
    background: var(--header-bg);
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: var(--header-shadow);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.nav-right {
    display: flex;
    align-items: center;
    gap: 20px; /* Space between links and toggle */
}

/* LOGO STYLING */
.logo {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo img {
    height: 50px;
    width: auto;
}

.logo span {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-green);
    padding-top: 5px;
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li {
    margin-left: 30px;
}

.nav-links a {
    text-decoration: none;
    color: var(--text-medium);
    font-weight: 400;
    padding-bottom: 5px;
    border-bottom: 2px solid transparent;
    transition: color 0.3s ease, border-bottom 0.3s ease;
}

.nav-links a:hover,
.nav-links a.active {
    color: var(--primary-green);
    border-bottom: 2px solid var(--primary-green);
}

.hamburger {
    display: none;
    cursor: pointer;
}

.hamburger div {
    width: 25px;
    height: 3px;
    background: var(--text-color);
    margin: 5px;
    transition: all 0.3s ease;
}


/* ======== DARK MODE BUTTON STYLING ======== */
#theme-toggle {
    background: none;
    border: 2px solid var(--text-medium);
    color: var(--text-color);
    border-radius: 50%; /* Circular */
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

#theme-toggle:hover {
    background-color: var(--primary-green);
    color: var(--header-bg); /* Use header bg for icon color */
    border-color: var(--primary-green);
    transform: scale(1.1) rotate(15deg);
}
/* ============================================= */


/* ======== 2. Home Section ======== */
#home {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff; /* Default text color (for subtitle) */
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('BioSmartImage3.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

.home-content h1 {
    font-size: 3.5rem;
    margin-bottom: 10px;
}

/* TITLE STYLES */
.airopod-white {
    color: #ffffff;
}
.airopod-green {
    color: var(--primary-green);
    transition: color 0.3s ease; /* Dark mode mein green badlega */
}

.home-content h2 {
    font-size: 1.5rem;
    font-weight: 300;
}

/* ======== 3. About Section ======== */
.about-content {
    display: flex;
    align-items: center;
    gap: 50px;
}

.about-text {
    flex: 1;
}

.about-text p {
    margin-bottom: 15px;
}

.about-image {
    flex: 1;
    text-align: center;
}

.about-image img {
    box-shadow: var(--soft-shadow);
    max-width: 500px;
}

/* ======== 4. How It Works Section ======== */
#how-it-works {
    background: linear-gradient(180deg, var(--gradient-start), var(--gradient-end-light));
    transition: background 0.3s ease;
}

.how-it-works-content {
    text-align: center;
}

.how-it-works-content img {
    max-width: 900px;
    width: 100%;
    height: auto;
    border-radius: var(--card-radius);
    box-shadow: var(--soft-shadow);
}

/* ======== 5. Features Section ======== */
.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.feature-card {
    background: var(--card-bg); /* Default background */
    border: 1px solid var(--card-border);
    padding: 30px;
    text-align: center;
    border-radius: var(--card-radius);
    box-shadow: var(--soft-shadow);
    transition: all 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

/* Feature Card Colors */
.features-grid .feature-card:nth-child(1) {
    background-color: var(--feature-color-1);
}
.features-grid .feature-card:nth-child(2) {
    background-color: var(--feature-color-2);
}
.features-grid .feature-card:nth-child(3) {
    background-color: var(--feature-color-3);
}
.features-grid .feature-card:nth-child(4) {
    background-color: var(--feature-color-4);
}


.feature-icon {
    font-size: 3rem;
    margin-bottom: 15px;
}

.feature-card h3 {
    margin-bottom: 10px;
    font-size: 1.25rem;
}

/* ======== 6. Help (FAQ) Section ======== */
#help {
    background: linear-gradient(180deg, var(--gradient-start), var(--gradient-end-green));
    transition: background 0.3s ease;
}

.faq-container {
    max-width: 800px;
    margin: 0 auto;
}

.faq-item {
    background: var(--card-bg); /* Default background */
    border-radius: 10px;
    margin-bottom: 10px;
    border: 1px solid var(--faq-border);
    box-shadow: var(--soft-shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.faq-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

/* FAQ Colors */
.faq-container .faq-item:nth-child(1) {
    background-color: var(--feature-color-2); /* Green */
}
.faq-container .faq-item:nth-child(2) {
    background-color: var(--feature-color-4); /* Grey */
}
.faq-container .faq-item:nth-child(3) {
    background-color: var(--feature-color-1); /* Blue */
}
.faq-container .faq-item:nth-child(4) {
    background-color: var(--feature-color-3); /* Cream */
}


.faq-item summary {
    font-size: 1.1rem;
    font-weight: 600;
    padding: 20px;
    cursor: pointer;
    list-style: none;
    position: relative;
    padding-right: 40px;
}

.faq-item summary::after {
    content: '+';
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5rem;
    color: var(--primary-green);
    transition: transform 0.2s ease;
}

.faq-item[open] summary::after {
    content: '−';
    transform: translateY(-50%) rotate(180deg);
}

.faq-item p {
    padding: 0 20px 20px;
    border-top: 1px solid var(--card-border);
    margin-top: -10px;
}

/* ======== 7. Contact Section ======== */
.contact-content {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.contact-content p {
    font-size: 1.1rem;
    margin-bottom: 20px;
}

.btn {
    display: inline-block;
    background: var(--primary-green);
    color: #ffffff; /* Button text hamesha white rakha hai */
    padding: 12px 25px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: background 0.3s ease, transform 0.3s ease;
}

.btn:hover {
    background: #2e7d32;
    transform: translateY(-2px) scale(1.02);
}

/* ======== 8. Footer ======== */
footer {
    background: var(--footer-bg);
    color: var(--footer-text);
    text-align: center;
    padding: 20px;
    margin-top: 40px;
    transition: background-color 0.3s ease, color 0.3s ease;
}

/* ======== 9. Responsive Design ======== */
@media (max-width: 768px) {
    .section-title h2 {
        font-size: 2rem;
    }
    
    .hamburger {
        display: block;
    }

    .nav-right {
        gap: 15px; /* Mobile par kam space */
    }
    
    .nav-links {
        position: fixed;
        top: 70px;
        right: -100%;
        width: 100%;
        height: calc(100vh - 70px);
        background: var(--header-bg); /* Dark mode support */
        flex-direction: column;
        align-items: center;
        padding-top: 50px;
        transition: right 0.5s ease-in-out, background-color 0.3s ease;
    }

    .nav-links.active {
        right: 0;
    }

    .nav-links li {
        margin: 20px 0;
    }
    
    .hamburger.toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    .hamburger.toggle .line2 {
        opacity: 0;
    }
    .hamburger.toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }

    #home h1 {
        font-size: 2.5rem;
    }

    #home h2 {
        font-size: 1.2rem;
        padding: 0 10px;
    }

    .about-content {
        flex-direction: column;
    }
    
    #home {
        background-attachment: scroll; /* Mobile par parallax nahi */
    }

    .how-it-works-content img {
        max-width: 100%;
    }
}

/* ======== Image Hover Animation ======== */
.about-image img,
.how-it-works-content img {
    transition: transform 0.7s ease;
}
.about-image img:hover,
.how-it-works-content img:hover {
    transform: scale(1.05);
}