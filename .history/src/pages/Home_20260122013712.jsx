import Navbar from "../components/Navbar";
import HeaderImage from "../images/header.webp"



const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="hero-section">
        <h1 class="hero-header">Welcome To LaTot</h1>
        <p class="hero-subheader">Where Talent Meets Opportunity</p>
        <p class="hero-text">Discover a universe of possibilities where your skills, creativity, and passion converge with endless opportunities across the multiverse.</p>
        <div class="video-container"><p>Video Goes Here</p></div> 
        <button>
          <a href="mailto:info@latotofficial.com">Join Now</a>
        </button>
      </section> 
      
      {/* About Section */}
      <section id="about-section">
        <h1 class="about-header">YOUR IDENTITY, YOUR WORLD, YOUR LEGACY</h1>
        <p class="about-subheader">How LaTot Works For You</p>
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
        <p class="core-subheader">How LaTot Works For You</p>
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
        <p class="planet-subheader">Every talent deserves the perfect world. Explore our specialized planets, each designed to nurture and amplify specific skill sets and creative passions.</p>
        <div class="about-carousel">
          {/* Creative Hub */}
          <div class="planet-item">
            <h1 class="planet-header">Creative Arts</h1>
            <h2 class="planet-subheader">Creative Hub</h2>
            <p class="planet-description">A world where imagination knows no bounds. Artists, designers, and creators find their sanctuary here, surrounded by infinite inspiration and collaborative energy.</p>
          </div>
          {/* Planet */}
          <div class="planet-item">
            <h1 class="planet-header">Technology</h1>
            <h2 class="planet-subheader">Planet</h2>
            <p class="planet-description">Every talent has its habitat. Find the perfect environment where your skills can flourish. From digital metropolises to creative sanctuaries, LATOT connects you with worlds designed for your unique abilities.</p>
          </div>
          {/* Palace */}
          <div class="planet-item">
            <h1 class="planet-header"></h1>
            <h2 class="planet-subheader">Palace</h2>
            <p class="planet-description">Rise to prominence in your chosen domain. The palace represents the pinnacle of achievement—where your talents are recognized, rewarded, and celebrated. Build your legacy in the heart of the LATOT multiverse.</p>
          </div>
        </div>
      </section> 

    </>
  )
}

export default Home