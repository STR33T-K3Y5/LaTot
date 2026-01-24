import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { people } from '../constants/People';
import logo from '../images/latot.webp';
import '../index.css';

const FindTalent = () => {
  // State for filters
  const [filters, setFilters] = useState({
    location: '',
    experience: 'all',
    availableForHire: false,
    profession: ''
  });

  // State for modal
  const [selectedTalent, setSelectedTalent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extract unique locations and professions for dropdowns
  const locations = useMemo(() => {
    return [...new Set(people.map(p => p.location))].sort();
  }, []);

  const allProfessions = useMemo(() => {
    const profs = new Set();
    people.forEach(p => p.professions.forEach(prof => profs.add(prof)));
    return [...profs].sort();
  }, []);

  // Filtered talent list
  const filteredPeople = useMemo(() => {
    return people.filter(person => {
      // Location filter
      if (filters.location && person.location !== filters.location) {
        return false;
      }

      // Profession filter
      if (filters.profession && !person.professions.includes(filters.profession)) {
        return false;
      }

      // Available for hire filter
      if (filters.availableForHire && !person.availableForHire) {
        return false;
      }

      return true;
    });
  }, [filters]);

  // Handle filter changes
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

// Handle talent card click
  const handleTalentClick = (person) => {
    setSelectedTalent(person);
    setIsModalOpen(true);
  };

  // Handle modal close
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTalent(null);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {

  // Close modal when clicking backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <Navbar />
      <main className="body talent-page">
        {/* Page Header */}
        <section className="talent-header-section">
          <h1 className="talent-page-header">
            Find <span className="header-gradient">Talent</span>
          </h1>
          <p className="talent-page-subheader">
            Discover exceptional professionals across the LATOT multiverse
          </p>
        </section>

        {/* Filter Section */}
        <section className="talent-filter-section">
          <div className="talent-filter-container">
            {/* Location Filter */}
            <div className="talent-filter-group">
              <label className="talent-filter-label" htmlFor="location-filter">
                Location
              </label>
              <select
                id="location-filter"
                className="talent-filter-select"
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
              >
                <option value="">All Locations</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Experience Filter */}
            <div className="talent-filter-group">
              <label className="talent-filter-label">
                Experience
              </label>
              <div className="talent-experience-options">
                <button
                  className={`talent-experience-btn ${filters.experience === 'all' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('experience', 'all')}
                >
                  All
                </button>
                <button
                  className={`talent-experience-btn ${filters.experience === '0-2' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('experience', '0-2')}
                >
                  0-2 Years
                </button>
                <button
                  className={`talent-experience-btn ${filters.experience === '3-6' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('experience', '3-6')}
                >
                  3-6 Years
                </button>
                <button
                  className={`talent-experience-btn ${filters.experience === '7+' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('experience', '7+')}
                >
                  7+ Years
                </button>
              </div>
            </div>

            {/* Available for Hire Filter */}
            <div className="talent-filter-group talent-filter-checkbox-group">
              <label className="talent-filter-checkbox-label">
                <input
                  type="checkbox"
                  className="talent-filter-checkbox"
                  checked={filters.availableForHire}
                  onChange={(e) => handleFilterChange('availableForHire', e.target.checked)}
                />
                <span className="talent-filter-checkbox-text">Available for Hire</span>
              </label>
            </div>

            {/* Profession Filter */}
            <div className="talent-filter-group">
              <label className="talent-filter-label" htmlFor="profession-filter">
                Profession
              </label>
              <select
                id="profession-filter"
                className="talent-filter-select"
                value={filters.profession}
                onChange={(e) => handleFilterChange('profession', e.target.value)}
              >
                <option value="">All Professions</option>
                {allProfessions.map(profession => (
                  <option key={profession} value={profession}>{profession}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Talent Grid */}
        <section className="talent-grid-section">
          <div className="talent-grid-container">
            {filteredPeople.length === 0 ? (
              <div className="talent-no-results">
                <p className="talent-no-results-text">
                  No talent found matching your criteria. Try adjusting your filters.
                </p>
              </div>
            ) : (
              <div className="talent-grid">
                {filteredPeople.map((person) => (
                  <article
                    key={person.id}
                    className="talent-card"
                    onClick={() => handleTalentClick(person)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleTalentClick(person);
                      }
                    }}
                    tabIndex="0"
                    role="button"
                    aria-label={`View ${person.name}'s profile`}
                  >
                    <div className="talent-card-image-wrapper">
                      <img
                        src={person.imgThumb}
                        alt={`${person.name} thumbnail`}
                        className="talent-card-image"
                        loading="lazy"
                      />
                      <div className="talent-card-overlay">
                        <span className="talent-card-view-more">View Profile</span>
                      </div>
                      {person.availableForHire && (
                        <span className="talent-card-hire-badge">Available</span>
                      )}
                    </div>
                    <div className="talent-card-content">
                      <h2 className="talent-card-name">{person.name}</h2>
                      <p className="talent-card-location">
                        <i className="fa-solid fa-location-dot"></i>
                        {person.location}
                      </p>
                      <div className="talent-card-social">
                        {person.socialLinks.linkedin && (
                          <a
                            href={person.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="talent-social-link"
                            aria-label="LinkedIn"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <i className="fa-brands fa-linkedin"></i>
                          </a>
                        )}
                        {person.socialLinks.github && (
                          <a
                            href={person.socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="talent-social-link"
                            aria-label="GitHub"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <i className="fa-brands fa-github"></i>
                          </a>
                        )}
                        {person.socialLinks.facebook && (
                          <a
                            href={person.socialLinks.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="talent-social-link"
                            aria-label="Facebook"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <i className="fa-brands fa-facebook"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Results Count */}
        <div className="talent-results-count">
          Showing {filteredPeople.length} of {people.length} talent{filteredPeople.length !== 1 ? 's' : ''}
        </div>
      </main>

      {/* Modal / Detail View */}
      {isModalOpen && selectedTalent && (
        <div
          className="talent-modal-backdrop"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-name"
        >
          <div className="talent-modal-container">
            <button
              className="talent-modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="talent-modal-content">
              {/* Modal Image */}
              <div className="talent-modal-image-wrapper">
                <img
                  src={selectedTalent.imgModal}
                  alt={`${selectedTalent.name} full profile`}
                  className="talent-modal-image"
                />
                {selectedTalent.availableForHire && (
                  <span className="talent-modal-hire-badge">Available for Hire</span>
                )}
              </div>

              {/* Modal Details */}
              <div className="talent-modal-details">
                <h2 id="modal-name" className="talent-modal-name">
                  {selectedTalent.name}
                </h2>

                <div className="talent-modal-location">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>{selectedTalent.location}</span>
                </div>

                <div className="talent-modal-professions">
                  {selectedTalent.professions.map((profession, index) => (
                    <span key={index} className="talent-modal-profession-tag">
                      {profession}
                    </span>
                  ))}
                </div>

                <p className="talent-modal-bio">
                  {selectedTalent.shortBio}
                </p>

                {/* Social Links */}
                <div className="talent-modal-social">
                  {selectedTalent.socialLinks.linkedin && (
                    <a
                      href={selectedTalent.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="talent-modal-social-link"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {selectedTalent.socialLinks.github && (
                    <a
                      href={selectedTalent.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="talent-modal-social-link"
                    >
                      <i className="fa-brands fa-github"></i>
                      <span>GitHub</span>
                    </a>
                  )}
                  {selectedTalent.socialLinks.facebook && (
                    <a
                      href={selectedTalent.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="talent-modal-social-link"
                    >
                      <i className="fa-brands fa-facebook"></i>
                      <span>Facebook</span>
                    </a>
                  )}
                  {selectedTalent.personalSite && (
                    <a
                      href={selectedTalent.personalSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="talent-modal-social-link"
                    >
                      <i className="fa-solid fa-globe"></i>
                      <span>Website</span>
                    </a>
                  )}
                </div>

                {/* Contact Button */}
                <a
                  href={`mailto:info@latotofficial.com?subject=Inquiry about ${selectedTalent.name}`}
                  className="talent-modal-contact-btn"
                >
                  Contact {selectedTalent.name}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Section - Copied from Home.jsx */}
      <footer id="footer-section">
        <div className="footer-container">
          {/* Top Footer Content */}
          <div className="footer-top">
            {/* Column 1: Brand */}
            <div className="footer-brand">
              <img src={logo} className="footer-logo" alt="LaTot logo" />
              <p className="footer-brand-tagline">
                Where boundaries dissolve and possibilities expand across interconnected worlds.
              </p>
            </div>

            {/* Columns 2-4: Navigation Links */}
            <div className="footer-nav-columns">
              {/* Platform Column */}
              <div className="footer-column">
                <h3 className="footer-column-header">Platform</h3>
                <ul className="footer-link-list">
                  <li><a href="#hero-section">About</a></li>
                  <li><a href="#core-section">Core Industries</a></li>
                  <li><a href="#planet-section">Planets</a></li>
                </ul>
              </div>

              {/* Community Column */}
              <div className="footer-column">
                <h3 className="footer-column-header">Community</h3>
                <ul className="footer-link-list">
                  <li><a href="#citizen-section">Citizen</a></li>
                  <li><a href="#multiverse-section">Multiverse</a></li>
                  <li><Link to="/findtalent">Find Talent</Link></li>
                </ul>
              </div>

              {/* Contact Column */}
              <div className="footer-column">
                <h3 className="footer-column-header">Contact</h3>
                <ul className="footer-link-list">
                  <li><a href="#contact-section">Get Started</a></li>
                  <li><a href="mailto:info@latotofficial.com">Email Us</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Footer Bar */}
          <div className="footer-bottom">
            <p className="footer-copyright">
              © {new Date().getFullYear()} LaTot, a sub-division of Kings Highway Technologies — All rights reserved
            </p>
            <a
              href="https://787creativestudios.com/html/web"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-designed-by"
            >
              Designed by 787 Creative Studios
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FindTalent;

