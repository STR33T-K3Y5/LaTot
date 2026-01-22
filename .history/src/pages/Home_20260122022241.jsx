import Navbar from "../components/Navbar";
import HeaderImage from "../images/header.webp"



const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="hero-section">
        <h1 class="hero-header">Welcome To LaTot</h1>
        <h2 class="hero-subheader">Where Talent Meets Opportunity</h2>
        <p class="hero-text">Discover a universe of possibilities where your skills, creativity, and passion converge with endless opportunities across the multiverse.</p>
        <div class="video-container"><p>Video Goes Here</p></div> 
        <button>
          <a href="mailto:info@latotofficial.com">Join Now</a>
        </button>
      </section> 
      
      {/* About Section */}
      <section id="about-section">
        <h1 class="about-header">YOUR IDENTITY, YOUR WORLD, YOUR LEGACY</h1>
        <h2 class="about-subheader">How LaTot Works For You</h2>
        <div class="about-carousel">
          {/* Headshot */}
          <div class="about-item">
            <h1 class="about-header">Headshot</h1>
            <p class="about-description">In the LATOT multiverse, your professional identity is your passport. A compelling headshot is more than a photograph—it's your introduction to a universe of opportunities. Showcase your authentic self and stand out among the stars.</p>
          </div>
          {/* Planet */}
          <div class="about-item">
            <h1 class="about-header">Planet</h1>
            <p class="about-description">Every talent has its habitat. Find the perfect environment where your skills can flourish. From digital metropolises to creative sanctuaries, LATOT connects you with worlds designed for your unique abilities.</p>
          </div>
          {/* Palace */}
          <div class="about-item">
            <h1 class="about-header">Palace</h1>
            <p class="about-description">Rise to prominence in your chosen domain. The palace represents the pinnacle of achievement—where your talents are recognized, rewarded, and celebrated. Build your legacy in the heart of the LATOT multiverse.</p>
          </div>
        </div>
      </section> 

      {/* Core Industries Section */}
      <section id="core-section">
        <h1 class="core-header">Our Core Industries</h1>
        <h2 class="core-subheader">How LaTot Works For You</h2>
        <div class="core-carousel" alt="Core Industries Wrapper">
          {/* Technology */}
          <div class="core-item" alt="Technology Container">
            <h1 class="core-header">Technology</h1>
            <p class="core-description">Cutting-edge innovation in software, hardware, AI, and digital transformation solutions.</p>
          </div>
          {/* Creative Arts */}
          <div class="core-item" alt="Creative Arts Container">
            <h1 class="core-header">Creative Arts</h1>
            <p class="core-description">Design, visual arts, music, and creative expression across all digital and traditional mediums.</p>
          </div>
          {/* Finance */}
          <div class="core-item" alt="Finance Container">
            <h1 class="core-header">Finance</h1>
            <p class="core-description">Rise to prominence in your chosen domain. The palace represents the pinnacle of achievement—where your talents are recognized, rewarded, and celebrated. Build your legacy in the heart of the LATOT multiverse.</p>
          </div>
          {/* HealthCare */}
          <div class="core-item" alt="HealthCare Container">
            <h1 class="core-header">HealthCare</h1>
            <p class="core-description">Medical innovation, telemedicine, wellness, and life sciences advancing human health.</p>
          </div>
          {/* Education */}
          <div class="core-item">
            <h1 class="core-header" alt="Education Container">Education</h1>
            <p class="core-description">Learning technologies, personalized education, and skills development for the future.</p>
          </div>
          {/* Entertainment */}
          <div class="core-item">
            <h1 class="core-header" alt="Entertainment Container">Entertainment</h1>
            <p class="core-description">Gaming, streaming, content creation, and immersive entertainment experiences.</p>
          </div>
          {/* Sustainability */}
          <div class="core-item">
            <h1 class="core-header" alt="Sustainability Container">Sustainability</h1>
            <p class="core-description">Green technology, renewable energy, and environmental solutions for a better planet.</p>
          </div>
          {/* Retail */}
          <div class="core-item">
            <h1 class="core-header" alt="Retail Container">Retail</h1>
            <p class="core-description">E-commerce, omnichannel experiences, and the future of consumer commerce.</p>
          </div>
          {/* Manufacturing */}
          <div class="core-item">
            <h1 class="core-header" alt="Manufacturing Container">Manufacturing</h1>
            <p class="core-description">Smart manufacturing, automation, and advanced production technologies.</p>
          </div>
          {/* Consulting */}
          <div class="core-item">
            <h1 class="core-header" alt="Consulting Container">Consulting</h1>
            <p class="core-description">Strategic advice, business transformation, and expert guidance across industries.</p>
          </div>
        </div>
      </section> 

      {/* Talent Planets Section */}
      <section id="planet-section">
        <h1 class="planet-header">Talent Planets</h1>
        <h2 class="planet-subheader">Every talent deserves the perfect world. Explore our specialized planets, each designed to nurture and amplify specific skill sets and creative passions.</h2>
        <div class="about-carousel">
          {/* Creative Hub */}
          <div class="planet-item" alt="Creative Arts Container">
            <h1 class="planet-header">Creative Arts</h1>
            <h2 class="planet-subheader">Creative Hub</h2>
            <p class="planet-description">A world where imagination knows no bounds. Artists, designers, and creators find their sanctuary here, surrounded by infinite inspiration and collaborative energy.</p>
          </div>
          {/* Planet */}
          <div class="planet-item" alt="Technology Container">
            <h1 class="planet-header">Technology</h1>
            <h2 class="planet-subheader">Tech Nexus</h2>
            <p class="planet-description">Every talent has its habitat. Find the perfect environment where your skills can flourish. From digital metropolises to creative sanctuaries, LATOT connects you with worlds designed for your unique abilities.</p>
          </div>
          {/* Palace */}
          <div class="planet-item" alt="Education Container">
            <h1 class="planet-header">Education</h1>
            <h2 class="planet-subheader">Wisdom Academy</h2>
            <p class="planet-description">Where knowledge is revered. Educators, researchers, and lifelong learners thrive in environments dedicated to wisdom, discovery, and intellectual growth.</p>
          </div>
        </div>
      </section> 

      {/* Citizen */}

      <section id="citizen-section">
        <h1 class="citizen-top-header">Every citizen in the LATOT multiverse has a unique profile structure that defines their identity, permissions, and journey.</h1>
        {/* identity Core */}
        <div class="citizen-container">
          <h1 class="citizen-header">Identity Core</h1>
          <p class="citizen-description">Your unique digital identity that travels with you across all planets and sectors.</p>
        </div>
        {/* identity Core */}
        <div class="citizen-container">
          <h1 class="citizen-header">Security Layer</h1>
          <p class="citizen-description">Advanced protection for your data, assets, and digital presence.</p>
        </div>
        {/* identity Core */}
        <div class="citizen-container">
          <h1 class="citizen-header">Capability Matrix</h1>
          <p class="citizen-description">Your skills, certifications, and recognized abilities within the multiverse.</p>
        </div>
        {/* identity Core */}
        <div class="citizen-container">
          <h1 class="citizen-header">Planet Affinity</h1>
          <p class="citizen-description">Connections to specific planets where you have membership and access rights.</p>
        </div>
        {/* identity Core */}
        <div class="citizen-container">
          <h1 class="citizen-header">Achievement Record</h1>
          <p class="citizen-description">Your accomplishments, contributions, and recognized achievements.</p>
        </div>
        {/* identity Core */}
        <div class="citizen-container">
          <h1 class="citizen-header">Community Ties</h1>
          <p class="citizen-description">Your connections, collaborations, and community relationships.</p>
        </div>

        {/* Governance Permisions */}
        <div class="governance-container">
          {/* Headshot Level */}
          <div class="governance-item">
            <h1 class="governance-header">Headshot Level</h1>
            <p class="governance-description">Entry-level permission for all new citizens.</p>
            <ul class="governance-list">
              <li class="governance-item">Basic Profile</li>
              <li class="governance-item">Community Access</li>
              <li class="governance-item">Event Participation</li>
            </ul>
          </div>
          {/* Headshot Level */}
          <div class="governance-item">
            <h1 class="governance-header">Planet Level</h1>
            <p class="governance-description">Unlock access to specialized talent planets.</p>
            <ul class="governance-list">
              <li class="governance-item">Planet Access</li>
              <li class="governance-item">Specialized Tools</li>
              <li class="governance-item">Sector Projects</li>
            </ul>
          </div>
          {/* Planet Level */}
          <div class="governance-item">
            <h1 class="governance-header">Palace Level</h1>
            <p class="governance-description">The pinnacle of citizen achievement and recognition.</p>
            <ul class="governance-list">
              <li class="governance-item">Leadership Role</li>
              <li class="governance-item">Voting Rights</li>
              <li class="governance-item">Resource Allocation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LaTot Multiverse Section */}
      <section id="about-section">
        <h1 class="about-header">The LATOT Multiverse</h1>
        <h2 class="about-subheader">Infinite Worlds, One Community</h2>
        <
        <div class="about-carousel">
          {/* Headshot */}
          <div class="about-item">
            <h1 class="about-header">Headshot</h1>
            <p class="about-description">In the LATOT multiverse, your professional identity is your passport. A compelling headshot is more than a photograph—it's your introduction to a universe of opportunities. Showcase your authentic self and stand out among the stars.</p>
          </div>
          {/* Planet */}
          <div class="about-item">
            <h1 class="about-header">Planet</h1>
            <p class="about-description">Every talent has its habitat. Find the perfect environment where your skills can flourish. From digital metropolises to creative sanctuaries, LATOT connects you with worlds designed for your unique abilities.</p>
          </div>
          {/* Palace */}
          <div class="about-item">
            <h1 class="about-header">Palace</h1>
            <p class="about-description">Rise to prominence in your chosen domain. The palace represents the pinnacle of achievement—where your talents are recognized, rewarded, and celebrated. Build your legacy in the heart of the LATOT multiverse.</p>
          </div>
        </div>
      </section> 

    </>
  )
}

export default Home