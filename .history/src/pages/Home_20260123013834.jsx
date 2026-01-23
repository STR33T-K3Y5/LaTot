import Navbar from "../components/Navbar";
import HeaderImage from "../images/header.webp"
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
import MobileConsu from "../images/mobile/m-headshot.webp"
import DesktopConsu from "../images/desktop/d-headshot.webp"
import MobileHeadshot from "../images/mobile/m-headshot.webp"
import DesktopHeadshot from "../images/desktop/d-headshot.webp"
import MobileHeadshot from "../images/mobile/m-headshot.webp"
import DesktopHeadshot from "../images/desktop/d-headshot.webp"
import MobileHeadshot from "../images/mobile/m-headshot.webp"
import DesktopHeadshot from "../images/desktop/d-headshot.webp"
import MobileHeadshot from "../images/mobile/m-headshot.webp"
import DesktopHeadshot from "../images/desktop/d-headshot.webp"
import MobileHeadshot from "../images/mobile/m-headshot.webp"
import DesktopHeadshot from "../images/desktop/d-headshot.webp"
import MobileHeadshot from "../images/mobile/m-headshot.webp"
import DesktopHeadshot from "../images/desktop/d-headshot.webp"
import MobileHeadshot from "../images/mobile/m-headshot.webp"
import DesktopHeadshot from "../images/desktop/d-headshot.webp"
import MobileHeadshot from "../images/mobile/m-headshot.webp"
import DesktopHeadshot from "../images/desktop/d-headshot.webp"

const Home = () => {
  return (
    <>
    <main className="body">
      {/* Hero Section */}
      <section id="hero-section">
        <div className="hero-content">
          <h1 className="hero-header">Welcome To LaTot</h1>
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
      
      {/* About Section */}
      <section id="about-section">
        <h1 className="about-header">YOUR IDENTITY, YOUR WORLD, YOUR LEGACY</h1>
        <h2 className="about-subheader">How LaTot Works For You</h2>
        <div className="about-carousel">
          {/* Headshot */}
          <div className="about-item">
            <h1 className="about-header">Headshot</h1>
            <p className="about-description">In the LATOT multiverse, your professional identity is your passport. A compelling headshot is more than a photograph—it's your introduction to a universe of opportunities. Showcase your authentic self and stand out among the stars.</p>
          </div>
          {/* Planet */}
          <div className="about-item">
            <h1 className="about-header">Planet</h1>
            <p className="about-description">Every talent has its habitat. Find the perfect environment where your skills can flourish. From digital metropolises to creative sanctuaries, LATOT connects you with worlds designed for your unique abilities.</p>
          </div>
          {/* Palace */}
          <div className="about-item">
            <h1 className="about-header">Palace</h1>
            <p className="about-description">Rise to prominence in your chosen domain. The palace represents the pinnacle of achievement—where your talents are recognized, rewarded, and celebrated. Build your legacy in the heart of the LATOT multiverse.</p>
          </div>
        </div>
      </section> 

      {/* Core Industries Section */}
      <section id="core-section">
        <h1 className="core-header">Our Core Industries</h1>
        <h2 className="core-subheader">How LaTot Works For You</h2>
        <div className="core-carousel" alt="Core Industries Wrapper">
          {/* Technology */}
          <div className="core-item" alt="Technology Container">
            <h1 className="core-header">Technology</h1>
            <p className="core-description">Cutting-edge innovation in software, hardware, AI, and digital transformation solutions.</p>
          </div>
          {/* Creative Arts */}
          <div className="core-item" alt="Creative Arts Container">
            <h1 className="core-header">Creative Arts</h1>
            <p className="core-description">Design, visual arts, music, and creative expression across all digital and traditional mediums.</p>
          </div>
          {/* Finance */}
          <div className="core-item" alt="Finance Container">
            <h1 className="core-header">Finance</h1>
            <p className="core-description">Rise to prominence in your chosen domain. The palace represents the pinnacle of achievement—where your talents are recognized, rewarded, and celebrated. Build your legacy in the heart of the LATOT multiverse.</p>
          </div>
          {/* HealthCare */}
          <div className="core-item" alt="HealthCare Container">
            <h1 className="core-header">HealthCare</h1>
            <p className="core-description">Medical innovation, telemedicine, wellness, and life sciences advancing human health.</p>
          </div>
          {/* Education */}
          <div className="core-item">
            <h1 className="core-header" alt="Education Container">Education</h1>
            <p className="core-description">Learning technologies, personalized education, and skills development for the future.</p>
          </div>
          {/* Entertainment */}
          <div className="core-item">
            <h1 className="core-header" alt="Entertainment Container">Entertainment</h1>
            <p className="core-description">Gaming, streaming, content creation, and immersive entertainment experiences.</p>
          </div>
          {/* Sustainability */}
          <div className="core-item">
            <h1 className="core-header" alt="Sustainability Container">Sustainability</h1>
            <p className="core-description">Green technology, renewable energy, and environmental solutions for a better planet.</p>
          </div>
          {/* Retail */}
          <div className="core-item">
            <h1 className="core-header" alt="Retail Container">Retail</h1>
            <p className="core-description">E-commerce, omnichannel experiences, and the future of consumer commerce.</p>
          </div>
          {/* Manufacturing */}
          <div className="core-item">
            <h1 className="core-header" alt="Manufacturing Container">Manufacturing</h1>
            <p className="core-description">Smart manufacturing, automation, and advanced production technologies.</p>
          </div>
          {/* Consulting */}
          <div className="core-item">
            <h1 className="core-header" alt="Consulting Container">Consulting</h1>
            <p className="core-description">Strategic advice, business transformation, and expert guidance across industries.</p>
          </div>
        </div>
      </section> 

      {/* Talent Planets Section */}
      <section id="planet-section">
        <h1 className="planet-header">Talent Planets</h1>
        <h2 className="planet-subheader">Every talent deserves the perfect world. Explore our specialized planets, each designed to nurture and amplify specific skill sets and creative passions.</h2>
        <div className="about-carousel">
          {/* Creative Hub */}
          <div className="planet-item" alt="Creative Arts Container">
            <h1 className="planet-header">Creative Arts</h1>
            <h2 className="planet-subheader">Creative Hub</h2>
            <p className="planet-description">A world where imagination knows no bounds. Artists, designers, and creators find their sanctuary here, surrounded by infinite inspiration and collaborative energy.</p>
          </div>
          {/* Planet */}
          <div className="planet-item" alt="Technology Container">
            <h1 className="planet-header">Technology</h1>
            <h2 className="planet-subheader">Tech Nexus</h2>
            <p className="planet-description">Every talent has its habitat. Find the perfect environment where your skills can flourish. From digital metropolises to creative sanctuaries, LATOT connects you with worlds designed for your unique abilities.</p>
          </div>
          {/* Palace */}
          <div className="planet-item" alt="Education Container">
            <h1 className="planet-header">Education</h1>
            <h2 className="planet-subheader">Wisdom Academy</h2>
            <p className="planet-description">Where knowledge is revered. Educators, researchers, and lifelong learners thrive in environments dedicated to wisdom, discovery, and intellectual growth.</p>
          </div>
        </div>
      </section> 

      {/* Citizen */}

      <section id="citizen-section">
        <h1 className="citizen-top-header">Every citizen in the LATOT multiverse has a unique profile structure that defines their identity, permissions, and journey.</h1>
        {/* identity Core */}
        <div className="citizen-container">
          <h1 className="citizen-header">Identity Core</h1>
          <p className="citizen-description">Your unique digital identity that travels with you across all planets and sectors.</p>
        </div>
        {/* identity Core */}
        <div className="citizen-container">
          <h1 className="citizen-header">Security Layer</h1>
          <p className="citizen-description">Advanced protection for your data, assets, and digital presence.</p>
        </div>
        {/* identity Core */}
        <div className="citizen-container">
          <h1 className="citizen-header">Capability Matrix</h1>
          <p className="citizen-description">Your skills, certifications, and recognized abilities within the multiverse.</p>
        </div>
        {/* identity Core */}
        <div className="citizen-container">
          <h1 className="citizen-header">Planet Affinity</h1>
          <p className="citizen-description">Connections to specific planets where you have membership and access rights.</p>
        </div>
        {/* identity Core */}
        <div className="citizen-container">
          <h1 className="citizen-header">Achievement Record</h1>
          <p className="citizen-description">Your accomplishments, contributions, and recognized achievements.</p>
        </div>
        {/* identity Core */}
        <div className="citizen-container">
          <h1 className="citizen-header">Community Ties</h1>
          <p className="citizen-description">Your connections, collaborations, and community relationships.</p>
        </div>

        {/* Governance Permisions */}
        <div className="governance-container">
          {/* Headshot Level */}
          <div className="governance-item">
            <h1 className="governance-header">Headshot Level</h1>
            <p className="governance-description">Entry-level permission for all new citizens.</p>
            <ul className="governance-list">
              <li className="governance-item">Basic Profile</li>
              <li className="governance-item">Community Access</li>
              <li className="governance-item">Event Participation</li>
            </ul>
          </div>
          {/* Headshot Level */}
          <div className="governance-item">
            <h1 className="governance-header">Planet Level</h1>
            <p className="governance-description">Unlock access to specialized talent planets.</p>
            <ul className="governance-list">
              <li className="governance-item">Planet Access</li>
              <li className="governance-item">Specialized Tools</li>
              <li className="governance-item">Sector Projects</li>
            </ul>
          </div>
          {/* Planet Level */}
          <div className="governance-item">
            <h1 className="governance-header">Palace Level</h1>
            <p className="governance-description">The pinnacle of citizen achievement and recognition.</p>
            <ul className="governance-list">
              <li className="governance-item">Leadership Role</li>
              <li className="governance-item">Voting Rights</li>
              <li className="governance-item">Resource Allocation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LaTot Multiverse Section */}
      <section id="multiverse-section">
        <h1 className="multiverse-header">The LATOT Multiverse</h1>
        <h2 className="multiverse-subheader">Infinite Worlds, One Community</h2>
        <p className="multiverse-description">Where boundaries dissolve and possibilities expand. The LATOT multiverse connects talent, opportunity, and innovation across countless interconnected worlds.</p>
        <div className="multiverse-carousel">
          {/* Our Worlds */}
            <h1 className="multiverse-header">Discover Our Worlds</h1>
            <p className="multiverse-description">The LATOT multiverse is a tapestry of interconnected worlds, each offering unique opportunities, communities, and experiences for citizens from all walks of life.</p>
          {/* A Universe of Possibilities */}
          <div className="multiverse-item">
            <h1 className="multiverse-header">A Universe of Possibilities</h1>
            <p className="multiverse-description">Every world in the LATOT multiverse is designed to foster growth, creativity, and collaboration. Whether you're a creator, innovator, or leader, there's a place for you here.</p>
            <p className="multiverse-description">Cross-dimensional travel is seamless, allowing you to explore, connect, and contribute across all our worlds without barriers.</p>
          </div>
          {/* Collaboration Without Borders */}
          <div className="multiverse-item">
            <h1 className="multiverse-header">Collaboration Without Borders</h1>
            <p className="multiverse-description">The LATOT multiverse was built on the belief that great things happen when talented individuals from different worlds come together.</p>
            <p className="multiverse-description">Our collaborative platforms break down barriers, enabling seamless teamwork across sectors, planets, and dimensions. Whatever your vision, find the right partners to bring it to life.</p>
            <ul className="tick-list">
              <li className="tick-item">Cross-dimensional project teams</li>
              <li className="tick-item">Shared resources and knowledge</li>
              <li className="tick-item">Global networking opportunities</li>
            </ul>
          </div>
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
    </main>
    </>
  )
}

export default Home

