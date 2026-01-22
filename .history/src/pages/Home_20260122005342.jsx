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

      {/* Core Industries */}
      <section id="about-section">
        <h1 class="about-header">YOUR IDENTITY, YOUR WORLD, YOUR LEGACY</h1>
        <p class="about-subheader">How LaTot Works For You</p>
        <div class="core-carousel">
          {/* Headshot */}
          <div class="ab-item">
            <h1 class="about-header">Headshot</h1>
            <p class="about-description">In the LATOT multiverse, your professional identity is your passport. A compelling headshot is more than a photograph—it's your introduction to a universe of opportunities. Showcase your authentic self and stand out among the stars.</p>
          </div>
          {/* Planet */}
          <div class="ab-item">
            <h1 class="about-header">Planet</h1>
            <p class="about-description">Every talent has its habitat. Find the perfect environment where your skills can flourish. From digital metropolises to creative sanctuaries, LATOT connects you with worlds designed for your unique abilities.</p>
          </div>
          {/* Palace */}
          <div class="ab-item">
            <h1 class="about-header">Palace</h1>
            <p class="about-description">Rise to prominence in your chosen domain. The palace represents the pinnacle of achievement—where your talents are recognized, rewarded, and celebrated. Build your legacy in the heart of the LATOT multiverse.</p>
          </div>
        </div>
      </section> 

    </>
  )
}

export default Home