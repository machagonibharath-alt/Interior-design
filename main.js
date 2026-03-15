/* Design System & Global Styles */

:root {
    /* Color Palette - Sleek Dark Mode with Gold Accents */
    --clr-background: #0f1014;
    --clr-surface: #1a1b22;
    --clr-text-main: #f0f0f0;
    --clr-text-muted: #a0a0a0;
    --clr-accent: #d4af37; /* Gold */
    --clr-accent-hover: #e5c358;

    /* Typography */
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Inter', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--clr-background);
    color: var(--clr-text-main);
    font-family: var(--font-body);
    line-height: 1.6;
    overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: 400;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
}

/* Header */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 5%;
    position: absolute;
    width: 100%;
    z-index: 100;
}

.logo {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    letter-spacing: 2px;
    font-weight: 600;
}

nav ul {
    display: flex;
    gap: 2rem;
}

nav a {
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 1px;
    transition: color 0.3s ease;
}

nav a:hover {
    color: var(--clr-accent);
}

/* Basic Button */
.btn {
    display: inline-block;
    padding: 1rem 2rem;
    background-color: var(--clr-accent);
    color: #000;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.85rem;
    font-weight: 500;
    transition: background-color 0.3s ease, transform 0.3s ease;
    cursor: pointer;
    border: none;
}

.btn:hover {
    background-color: var(--clr-accent-hover);
    transform: translateY(-2px);
}

/* Base sections */
section {
    padding: 5rem 5%;
}

/* Hero Section */
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    padding: 0 5%;
    position: relative;
    /* High-end interior placeholder */
    background: linear-gradient(rgba(15, 16, 20, 0.4), rgba(15, 16, 20, 0.9)), url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat;
}

.hero-content {
    max-width: 600px;
}

.hero h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
    line-height: 1.1;
    animation: fadeInUp 1s ease forwards;
}

.hero p {
    font-size: 1.25rem;
    color: var(--clr-text-muted);
    margin-bottom: 2.5rem;
    animation: fadeInUp 1s ease 0.2s forwards;
    opacity: 0;
}

.hero .btn {
    animation: fadeInUp 1s ease 0.4s forwards;
    opacity: 0;
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-up-element {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-up-element.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Section Header */
.section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-header h2 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    color: var(--clr-accent);
}

.section-header p {
    color: var(--clr-text-muted);
    font-size: 1.1rem;
}

/* Services Section */
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.service-card {
    background-color: var(--clr-surface);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.service-img {
    height: 250px;
    background-position: center;
    background-size: cover;
    transition: transform 0.6s ease;
}

.service-card:hover .service-img {
    transform: scale(1.05);
}

.residential-img { background-image: url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'); }
.commercial-img { background-image: url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'); }
.styling-img { background-image: url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'); }

.service-content {
    padding: 2.5rem 2rem;
}

.service-content h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.service-content p {
    color: var(--clr-text-muted);
    font-size: 0.95rem;
}

/* Portfolio Section */
.portfolio {
    background-color: #0c0d11;
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

@media (max-width: 768px) {
    .portfolio-grid {
        grid-template-columns: 1fr;
    }
}

.portfolio-item {
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    height: 400px;
    cursor: pointer;
}

.portfolio-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
}

.portfolio-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 16, 20, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.4s ease;
}

.overlay-text {
    font-family: var(--font-heading);
    font-size: 2rem;
    color: var(--clr-accent);
    transform: translateY(20px);
    transition: transform 0.4s ease;
}

.portfolio-item:hover img {
    transform: scale(1.05);
}

.portfolio-item:hover .portfolio-overlay {
    opacity: 1;
}

.portfolio-item:hover .overlay-text {
    transform: translateY(0);
}

/* Contact Section */
.contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    background-color: var(--clr-surface);
    padding: 4rem;
    border-radius: 8px;
}

@media (max-width: 900px) {
    .contact-container {
        grid-template-columns: 1fr;
        padding: 2rem;
    }
}

.contact-info h2 {
    font-size: 3rem;
    color: var(--clr-accent);
    margin-bottom: 1rem;
}

.contact-info p {
    color: var(--clr-text-muted);
    font-size: 1.1rem;
    margin-bottom: 2rem;
}

.contact-details {
    color: var(--clr-text-main);
    font-size: 1rem;
}

.contact-details li {
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--clr-text-main);
    font-family: var(--font-body);
    font-size: 1rem;
    border-radius: 4px;
    transition: border-color 0.3s ease, background-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--clr-accent);
    background-color: rgba(255, 255, 255, 0.08);
}

.contact-form .btn {
    align-self: flex-start;
}

/* Footer (Basic) */
footer {
    text-align: center;
    padding: 2rem 5%;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    color: var(--clr-text-muted);
    font-size: 0.9rem;
}
