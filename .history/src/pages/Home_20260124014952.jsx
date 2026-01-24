import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import HeaderImage from "../images/header.webp"
import logo from '../images/latot.webp';
import "../index.css"
import MobileHeadshot from "../images/mobile/m-headshot.webp"
import DesktopHeadshot from "../images/desktop/d-headshot.webp"
import MobilePlanet from "../images/mobile/m-planet.webp"
import DesktopPlanet from "../images/desktop/d-planet.webp"
import MobilePalace from "../images/mobile/m-palace.webp"
import DesktopPalace from "../images/desktop/d-palace.webp"
import MobileTech from "../images/mobile/m-tech.webp"
import DesktopTech from "../images/desktop/d-tech.webp"
import MobileArts from "../images/mobile/m-arts.webp"
import DesktopArts from "../images/desktop/d-arts.webp"
import MobileFinance from "../images/mobile/m-finance.webp"
import DesktopFinance from "../images/desktop/d-finance.webp"
import MobileHealth from "../images/mobile/m-health.webp"
import DesktopHealth from "../images/desktop/d-health.webp"
import MobileEducation from "../images/mobile/m-education.webp"
import DesktopEducation from "../images/desktop/d-education.webp"
import MobileEntertainment from "../images/mobile/m-entertainment.webp"
import DesktopEntertainment from "../images/desktop/d-entertainment.webp"
import MobileSustainability from "../images/mobile/m-sustainability.webp"
import DesktopSustainability from "../images/desktop/d-sustainability.webp"
import MobileRetail from "../images/mobile/m-retail.webp"
import DesktopRetail from "../images/desktop/d-retail.webp"
import MobileManufacturing from "../images/mobile/m-manufacturing.webp"
import DesktopManufacturing from "../images/desktop/d-manufacturing.webp"
import MobileConsulting from "../images/mobile/m-consulting.webp"
import DesktopConsulting from "../images/desktop/d-consulting.webp"
import MobileHub from "../images/mobile/m-hub.webp"
import DesktopHub from "../images/desktop/d-hub.webp"
import MobileNexus from "../images/mobile/m-nexus.webp"
import DesktopNexus from "../images/desktop/d-nexus.webp"
import MobileAcademy from "../images/mobile/m-academy.webp"
import DesktopAcademy from "../images/desktop/d-academy.webp"
import MobileWorlds from "../images/mobile/m-worlds.webp"
import DesktopWorlds from "../images/desktop/d-worlds.webp"
import MobileUniverse from "../images/mobile/m-universe.webp"
import DesktopUniverse from "../images/desktop/d-universe.webp"
import MobileCollaboration from "../images/mobile/m-collaboration.webp"
import DesktopCollaboration from "../images/desktop/d-collaboration.webp"

const Home = () => {
  // About carousel state - SIMPLIFIED
  const [aboutCurrentIndex, setAboutCurrentIndex] = useState(0);
  const aboutTouchStartX = useRef(null);
  const aboutTouchEndX = useRef(null);

  // About carousel items data
  const aboutItems = [
    {
      id: 'headshot',
      mobileImg: MobileHeadshot,
      desktopImg: DesktopHeadshot,
      title: 'Headshot',
      description: 'In the LATOT multiverse, your professional identity is your passport. A compelling headshot is more than a photograph it is your introduction to a universe of opportunities. Showcase your authentic self and stand out among the stars.'
    },
    {
      id: 'planet',
      mobileImg: MobilePlanet,
      desktopImg: DesktopPlanet,
      title: 'Planet',
      description: 'Every talent has its habitat. Find the perfect environment where your skills can flourish. From digital metropolises to creative sanctuaries, LATOT connects you with worlds designed for your unique abilities.'
    },
    {
      id: 'palace',
      mobileImg: MobilePalace,
      desktopImg: DesktopPalace,
      title: 'Palace',
      description: 'Rise to prominence in your chosen domain. The palace represents the pinnacle of achievement—where your talents are recognized, rewarded, and celebrated. Build your legacy in the heart of the LATOT multiverse.'
    }
  ];

  const aboutTotalSlides = aboutItems.length;

  // Core Industries Carousel Data
  const coreIndustries = [
    {
      id: 'technology',
      mobileImg: MobileTech,
      desktopImg: DesktopTech,
      title: 'Technology',
    },
    {
      id: 'creative-arts',
      mobileImg: MobileArts,
      desktopImg: DesktopArts,
      title: 'Creative Arts',
    },
    {
      id: 'finance',
      mobileImg: MobileFinance,
      desktopImg: DesktopFinance,
      title: 'Finance',
    },
    {
      id: 'healthcare',
      mobileImg: MobileHealth,
      desktopImg: DesktopHealth,
      title: 'HealthCare',
    },
    {
      id: 'education',
      mobileImg: MobileEducation,
      desktopImg: DesktopEducation,
      title: 'Education',
    },
    {
      id: 'entertainment',
      mobileImg: MobileEntertainment,
      desktopImg: DesktopEntertainment,
      title: 'Entertainment',
    },
    {
      id: 'sustainability',
      mobileImg: MobileSustainability,
      desktopImg: DesktopSustainability,
      title: 'Sustainability',
    },
    {
      id: 'retail',
      mobileImg: MobileRetail,
      desktopImg: DesktopRetail,
      title: 'Retail',
    },
    {
      id: 'manufacturing',
      mobileImg: MobileManufacturing,
      desktopImg: DesktopManufacturing,
      title: 'Manufacturing',
    },
    {
      id: 'consulting',
      mobileImg: MobileConsulting,
      desktopImg: DesktopConsulting,
      title: 'Consulting',
    }
  ];

  // About navigation handlers - SIMPLIFIED
  const nextAboutSlide = () => {
    setAboutCurrentIndex((prev) => (prev + 1) % aboutTotalSlides);
  };

  const prevAboutSlide = () => {
    setAboutCurrentIndex((prev) => (prev - 1 + aboutTotalSlides) % aboutTotalSlides);
  };

  const goToAboutSlide = (index) => {
    setAboutCurrentIndex(index);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    aboutTouchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    aboutTouchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!aboutTouchStartX.current || !aboutTouchEndX.current) return;
    
    const diff = aboutTouchStartX.current - aboutTouchEndX.current;
    const minSwipeDistance = 50;
    
    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        nextAboutSlide();
      } else {
        prevAboutSlide();
      }
    }
    
    aboutTouchStartX.current = null;
    aboutTouchEndX.current = null;
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      prevAboutSlide();
    } else if (e.key === 'ArrowRight') {
      nextAboutSlide();
    }
  };

  

  // Scroll reveal animation for multiverse section using Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    // Observe all multiverse cards
    const cards = document.querySelectorAll('.multiverse-card');
    cards.forEach((card) => {
      observer.observe(card);
    });

    // Cleanup observer on unmount
    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <>
    <main className="body">
      {/* Hero Section */}
      <section id="hero-section">
        <div className="hero-content">
          <h1 className="hero-header">Welcome To <span className='header-gradient'>ToLaTot</span></h1>
          <h2 className="hero-subheader">
            Where Talent Meets{" "} 
            <span className="word-swap-container">
              <span className="word-swap-word word-1">Opportunity</span>
              <span className="word-swap-word word-2">Purpose</span>
              <span className="word-swap-word word-3">Growth</span>
              <span className="word-swap-word word-4">Impact</span>
              <span className="word-swap-word word-5">Innovation</span>
              <span className="word-swap-word word-6">Possibility</span>
            </span>
          </h2>
          <p className="hero-text">
            Discover a universe of possibilities where your skills, creativity,
            and passion converge with endless opportunities across the multiverse.
          </p>
          <button className="hero-cta-btn">
            <a href="mailto:info@latotofficial.com">Join Now</a>
          </button>
        </div>
      </section>
      
      {/* About Section - Track-Based Carousel */}
      <section id="about-section">
        <h1 className="about-header">
          YOUR IDENTITY  YOUR LEGACY <br/> <span className="about-header-gradient">YOUR WORLD</span>
        </h1>
        <h2 className="about-subheader">How LaTot Works For You</h2>
        
        {/* Carousel Container */}
        <div 
          className="about-carousel-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onKeyDown={handleKeyDown}
          tabIndex="0"
          role="region"
          aria-label="About section carousel"
        >
          {/* Left Arrow */}
          <button 
            className="about-carousel-arrow about-carousel-arrow-left"
            onClick={prevAboutSlide}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Carousel Viewport - overflow hidden */}
          <div className="about-carousel-viewport">
            {/* Carousel Track - all slides rendered, moves via transform */}
            <div 
              className="about-carousel-track"
              style={{ 
                transform: `translateX(-${aboutCurrentIndex * 100}%)`,
                transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {aboutItems.map((item, index) => (
                <div key={item.id} className={`about-slide ${index === aboutCurrentIndex ? 'is-active' : ''}`}>
                  <picture>
                    <source media="(min-width: 768px)" srcSet={item.desktopImg} />
                    <img src={item.mobileImg} alt={item.title} />
                  </picture>
                  <div className="about-slide-content">
                    <h1 className="about-slide-title">{item.title}</h1>
                    <p className="about-slide-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            className="about-carousel-arrow about-carousel-arrow-right"
            onClick={nextAboutSlide}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="about-carousel-indicators" role="tablist" aria-label="Slide navigation">
          {aboutItems.map((_, index) => (
            <button
              key={index}
              className={`about-indicator ${index === aboutCurrentIndex ? 'active' : ''}`}
              onClick={() => goToAboutSlide(index)}
              role="tab"
              aria-selected={index === aboutCurrentIndex}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Core Industries Section - Infinite Scroll Carousel */}
      <section id="core-section">
        <h1 className="core-header">Featured <span className="header-gradient">Industries</span> We Cater For</h1>
        <h2 className="core-subheader">How LaTot Works For You</h2>
        
        {/* Carousel Container with Edge Blur */}
        <div className="core-carousel-wrapper">
          {/* Left Edge Blur */}
          <div className="core-carousel-blur core-carousel-blur-left"></div>
          
          {/* Infinite Scrolling Track */}
          <div className="core-carousel">
            {/* First set of items */}
            {coreIndustries.map((item) => (
              <div key={item.id} className="core-item">
                <div className="core-item-image">
                  <picture>
                    <source media="(min-width: 768px)" srcSet={item.desktopImg} />
                    <img src={item.mobileImg} alt={item.title} />
                  </picture>
                  <div className="core-item-overlay"></div>
                </div>
                <div className="core-item-content">
                  <h1 className="core-item-title">{item.title}</h1>
                  <p className="core-item-description">{item.description}</p>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless infinite scroll */}
            {coreIndustries.map((item) => (
              <div key={`${item.id}-duplicate`} className="core-item">
                <div className="core-item-image">
                  <picture>
                    <source media="(min-width: 768px)" srcSet={item.desktopImg} />
                    <img src={item.mobileImg} alt={item.title} />
                  </picture>
                  <div className="core-item-overlay"></div>
                </div>
                <div className="core-item-content">
                  <h1 className="core-item-title">{item.title}</h1>
                  <p className="core-item-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Edge Blur */}
          <div className="core-carousel-blur core-carousel-blur-right"></div>
        </div>
      </section>

      {/* Talent Planets Section */}
      <section id="planet-section">
        <div className="planet-section-container">
          <h1 className="planet-header">Talent Planets</h1>
          <h2 className="planet-subheader">Every talent deserves the perfect world. Explore our specialized planets, each designed to nurture and amplify specific skill sets and creative passions.</h2>
          
          <div className="planet-grid">
            {/* Creative Hub */}
            <article className="planet-card">
              <div className="planet-card-image">
                <picture>
                  <source media="(min-width: 768px)" srcSet={DesktopHub} />
                  <img src={MobileHub} alt="Creative Hub - A world where imagination knows no bounds" />
                </picture>
                <div className="planet-card-overlay"></div>
              </div>
              <div className="planet-card-content">
                <span className="planet-card-category">Creative Arts</span>
                <h2 className="planet-card-title">Creative Hub</h2>
                <p className="planet-card-description">A world where imagination knows no bounds. Artists, designers, and creators find their sanctuary here, surrounded by infinite inspiration and collaborative energy.</p>
              </div>
            </article>

            {/* Technology Nexus */}
            <article className="planet-card">
              <div className="planet-card-image">
                <picture>
                  <source media="(min-width: 768px)" srcSet={DesktopNexus} />
                  <img src={MobileNexus} alt="Tech Nexus - Find the perfect environment for your skills" />
                </picture>
                <div className="planet-card-overlay"></div>
              </div>
              <div className="planet-card-content">
                <span className="planet-card-category">Technology</span>
                <h2 className="planet-card-title">Tech Nexus</h2>
                <p className="planet-card-description">Every talent has its habitat. Find the perfect environment where your skills can flourish. From digital metropolises to creative sanctuaries, LATOT connects you with worlds designed for your unique abilities.</p>
              </div>
            </article>

            {/* Wisdom Academy */}
            <article className="planet-card">
              <div className="planet-card-image">
                <picture>
                  <source media="(min-width: 768px)" srcSet={DesktopAcademy} />
                  <img src={MobileAcademy} alt="Wisdom Academy - Where knowledge is revered" />
                </picture>
                <div className="planet-card-overlay"></div>
              </div>
              <div className="planet-card-content">
                <span className="planet-card-category">Education</span>
                <h2 className="planet-card-title">Wisdom Academy</h2>
                <p className="planet-card-description">Where knowledge is revered. Educators, researchers, and lifelong learners thrive in environments dedicated to wisdom, discovery, and intellectual growth.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Citizen Section */}
      <section id="citizen-section">
        <header className="citizen-header-wrapper">
          <h1 className="citizen-top-header">Every citizen in the LATOT multiverse has a unique profile structure that defines their identity, permissions, and journey.</h1>
        </header>

        {/* Citizen Profile Structure Grid */}
        <div className="citizen-grid">
          {/* Identity Core */}
          <article className="citizen-card">
            <div className="citizen-icon-wrapper">
              <i className="fa-solid fa-user-shield citizen-icon"></i>
            </div>
            <h2 className="citizen-card-header">Identity Core</h2>
            <p className="citizen-description">Your unique digital identity that travels with you across all planets and sectors.</p>
          </article>

          {/* Security Layer */}
          <article className="citizen-card">
            <div className="citizen-icon-wrapper">
              <i className="fa-solid fa-shield-halved citizen-icon"></i>
            </div>
            <h2 className="citizen-card-header">Security Layer</h2>
            <p className="citizen-description">Advanced protection for your data, assets, and digital presence.</p>
          </article>

          {/* Capability Matrix */}
          <article className="citizen-card">
            <div className="citizen-icon-wrapper">
              <i className="fa-solid fa-brain citizen-icon"></i>
            </div>
            <h2 className="citizen-card-header">Capability Matrix</h2>
            <p className="citizen-description">Your skills, certifications, and recognized abilities within the multiverse.</p>
          </article>

          {/* Planet Affinity */}
          <article className="citizen-card">
            <div className="citizen-icon-wrapper">
              <i className="fa-solid fa-earth-americas citizen-icon"></i>
            </div>
            <h2 className="citizen-card-header">Planet Affinity</h2>
            <p className="citizen-description">Connections to specific planets where you have membership and access rights.</p>
          </article>

          {/* Achievement Record */}
          <article className="citizen-card">
            <div className="citizen-icon-wrapper">
              <i className="fa-solid fa-trophy citizen-icon"></i>
            </div>
            <h2 className="citizen-card-header">Achievement Record</h2>
            <p className="citizen-description">Your accomplishments, contributions, and recognized achievements.</p>
          </article>

          {/* Community Ties */}
          <article className="citizen-card">
            <div className="citizen-icon-wrapper">
              <i className="fa-solid fa-people-arrows citizen-icon"></i>
            </div>
            <h2 className="citizen-card-header">Community Ties</h2>
            <p className="citizen-description">Your connections, collaborations, and community relationships.</p>
          </article>
        </div>

        {/* Governance Permissions Section */}
        <div className="governance-section">
          <div className="governance-container">
            {/* Headshot Level */}
            <article className="governance-card">
              <div className="governance-icon-wrapper">
                <i className="fa-solid fa-user governance-icon"></i>
              </div>
              <h2 className="governance-header">Headshot Level</h2>
              <p className="governance-description">Entry-level permission for all new citizens.</p>
              <ul className="governance-list">
                <li className="governance-item">Basic Profile</li>
                <li className="governance-item">Community Access</li>
                <li className="governance-item">Event Participation</li>
              </ul>
            </article>

            {/* Planet Level */}
            <article className="governance-card">
              <div className="governance-icon-wrapper">
                <i className="fa-solid fa-globe governance-icon"></i>
              </div>
              <h2 className="governance-header">Planet Level</h2>
              <p className="governance-description">Unlock access to specialized talent planets.</p>
              <ul className="governance-list">
                <li className="governance-item">Planet Access</li>
                <li className="governance-item">Specialized Tools</li>
                <li className="governance-item">Sector Projects</li>
              </ul>
            </article>

            {/* Palace Level */}
            <article className="governance-card">
              <div className="governance-icon-wrapper">
                <i className="fa-solid fa-crown governance-icon"></i>
              </div>
              <h2 className="governance-header">Palace Level</h2>
              <p className="governance-description">The pinnacle of citizen achievement and recognition.</p>
              <ul className="governance-list">
                <li className="governance-item">Leadership Role</li>
                <li className="governance-item">Voting Rights</li>
                <li className="governance-item">Resource Allocation</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* LaTot Multiverse Section */}
      <section id="multiverse-section">
        {/* Section Header */}
        <header className="multiverse-header-wrapper">
          <h1 className="multiverse-header">The LATOT Multiverse</h1>
          <h2 className="multiverse-subheader">Infinite Worlds, One Community</h2>
          <p className="multiverse-description">
            Where boundaries dissolve and possibilities expand. The LATOT multiverse connects talent, opportunity, and innovation across countless interconnected worlds.
          </p>
        </header>

        {/* Feature Containers Grid */}
        <div className="multiverse-grid">
          
          {/* Feature 1: Discover Our Worlds */}
          <article className="multiverse-card multiverse-card-first">
            <div className="multiverse-card-image">
              <picture>
                <source media="(min-width: 768px)" srcSet={DesktopWorlds} />
                <img src={MobileWorlds} alt="Discover Our Worlds - Interconnected worlds in the LATOT multiverse" />
              </picture>
              <div className="multiverse-card-overlay"></div>
            </div>
            <div className="multiverse-card-content">
              <h2 className="multiverse-card-header">Discover Our Worlds</h2>
              <p className="multiverse-card-description">
                The LATOT multiverse is a tapestry of interconnected worlds, each offering unique opportunities, communities, and experiences for citizens from all walks of life.
              </p>
            </div>
          </article>

          {/* Feature 2: A Universe of Possibilities */}
          <article className="multiverse-card multiverse-card-second">
            <div className="multiverse-card-image">
              <picture>
                <source media="(min-width: 768px)" srcSet={DesktopUniverse} />
                <img src={MobileUniverse} alt="A Universe of Possibilities - Growth and collaboration across worlds" />
              </picture>
              <div className="multiverse-card-overlay"></div>
            </div>
            <div className="multiverse-card-content">
              <h2 className="multiverse-card-header">A Universe of Possibilities</h2>
              <p className="multiverse-card-description">
                Every world in the LATOT multiverse is designed to foster growth, creativity, and collaboration. Whether you're a creator, innovator, or leader, there's a place for you here.
              </p>
              <p className="multiverse-card-description">
                Cross-dimensional travel is seamless, allowing you to explore, connect, and contribute across all our worlds without barriers.
              </p>
            </div>
          </article>

          {/* Feature 3: Collaboration Without Borders */}
          <article className="multiverse-card multiverse-card-third">
            <div className="multiverse-card-image">
              <picture>
                <source media="(min-width: 768px)" srcSet={DesktopCollaboration} />
                <img src={MobileCollaboration} alt="Collaboration Without Borders - Global teamwork across dimensions" />
              </picture>
              <div className="multiverse-card-overlay"></div>
            </div>
            <div className="multiverse-card-content">
              <h2 className="multiverse-card-header">Collaboration Without Borders</h2>
              <p className="multiverse-card-description">
                The LATOT multiverse was built on the belief that great things happen when talented individuals from different worlds come together.
              </p>
              <p className="multiverse-card-description">
                Our collaborative platforms break down barriers, enabling seamless teamwork across sectors, planets, and dimensions.
              </p>
              <ul className="multiverse-tick-list">
                <li className="multiverse-tick-item">
                  <svg className="multiverse-tick-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Cross-dimensional project teams
                </li>
                <li className="multiverse-tick-item">
                  <svg className="multiverse-tick-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Shared resources and knowledge
                </li>
                <li className="multiverse-tick-item">
                  <svg className="multiverse-tick-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Global networking opportunities
                </li>
              </ul>
            </div>
          </article>

        </div>
      </section>

      <section id="contact-section">
        <div className="contact-container">
          <h1 className="contact-header">Your Journey Begins Here</h1>
          <p className="contact-description">The LATOT multiverse is always expanding. Whether you're looking to join an existing world or create something entirely new, there's a place for you in our community.</p>
          <button className="contact-cta-button">
            <a href="mailto:info@latotofficial.com">Become A Citizen</a>
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="footer-section">
        <div className="footer-container">
          {/* Top Footer Content */}
          <div className="footer-top">
            {/* Column 1: Brand */}

