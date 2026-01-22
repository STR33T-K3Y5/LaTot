import Navbar from "../components/Navbar";
import HeaderImage from "../images/header.webp"
import DeskopHeadshot from "../images/desktop-headshot.webp"
import MobileHeadshot from "../images/mobile-headshot.webp"


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
        <div class="about-carousel">
          <div class="about-item">
            
          </div>
        </div>
      </section> 

    </>
  )
}

export default Home