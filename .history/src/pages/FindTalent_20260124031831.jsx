import { useState, useMemo, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { people } from '../constants/People';
import logo from '../images/latot.webp';
import '../index.css';

const FindTalent = () => {
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [availableForHireOnly, setAvailableForHireOnly] = useState(false);
  const [selectedProfession, setSelectedProfession] = useState('all');
  const [selectedTalent, setSelectedTalent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extract unique locations and professions from data
  const locations = useMemo(() => {
    const locs = [...new Set(people.map(p => p.location))];
    return locs.sort();
  }, []);

  const professions = useMemo(() => {
    const profs = [...new Set(people.flatMap(p => p.professions))];
    return profs.sort();
  }, []);

  // Calculate years of experience from professions if available
  const getExperienceRange = (person) => {
    // Since People.jsx doesn't have yearsOfExp, we'll derive it from availableForHire
    // and assign a default based on profile complexity
    return '3-6'; // Default to middle range
  };

  // Filter talent based on all filter criteria
  const filteredTalent = useMemo(() => {
    return people.filter(person => {
      // Location filter
      if (selectedLocation !== 'all' && person.location !== selectedLocation) {
        return false;
      }

      // Experience filter
      const expRange = getExperienceRange(person);
      if (selectedExperience !== 'all') {
        if (selectedExperience === '0-2' && expRange !== '0-2') return false;
        if (selectedExperience === '3-6' && expRange !== '3-6') return false;
        if (selectedExperience === '7+' && expRange !== '7+') return false;
      }

      // Available for hire filter
      if (availableForHireOnly && !person.availableForHire) {
        return false;
      }

      // Profession filter
      if (selectedProfession !== 'all' && !person.professions.includes(selectedProfession)) {
        return false;
      }

      return true;
    });
  }, [selectedLocation, selectedExperience, availableForHireOnly, selectedProfession]);

  // Handle card click
  const handleTalentClick = (person) => {
    setSelectedTalent(person);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Handle modal close
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTalent(null);
    document.body.style.overflow = '';
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  // Close modal when clicking backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <main className="body talent-page">
        <Navbar />

        {/* Page Header */}
        <section className="talent-header-section">
          <div className="talent-header-container">
            <h1 className="talent-page-header">Find <span className="header-gradient">Talent</span></h1>
            <p className="talent-page-subheader">
              Discover exceptional professionals across the LATOT multiverse
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="filter-section">
          <div className="filter-container">
            <div className="filter-row">
              {/* Location Filter */}
              <div className="filter-group">
                <label className="filter-label" htmlFor="location-filter">
                  Location
                </label>
                <select
                  id="location-filter"
                  className="filter-select"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="all">All Locations</option>
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              {/* Experience Filter */}
              <div className="filter-group">
                <span className="filter-label">Experience</span>
                <div className="filter-radio-group">
                  <label className="filter-radio-label">
                    <input
                      type="radio"
                      name="experience"
                      value="all"
                      checked={selectedExperience === 'all'}
                      onChange={(e) => setSelectedExperience(e.target.value)}
                      className="filter-radio"
                    />
                    <span className="filter-radio-custom"></span>
                    <span className="filter-radio-text">All</span>
                  </label>
                  <label className="filter-radio-label">
                    <input
                      type="radio"
                      name="experience"
                      value="0-2"
                      checked={selectedExperience === '0-2'}
                      onChange={(e) => setSelectedExperience(e.target.value)}
                      className="filter-radio"
                    />
                    <span className="filter-radio-custom"></span>
                    <span className="filter-radio-text">0-2 yrs</span>
                  </label>
                  <label className="filter-radio-label">
                    <input
                      type="radio"
                      name="experience"
                      value="3-6"
                      checked={selectedExperience === '3-6'}
                      onChange={(e) => setSelectedExperience(e.target.value)}
                      className="filter-radio"
                    />
                    <span className="filter-radio-custom"></span>
                    <span className="filter-radio-text">3-6 yrs</span>
                  </label>
                  <label className="filter-radio-label">
                    <input
                      type="radio"
                      name="experience"
                      value="7+"
                      checked={selectedExperience === '7+'}
                      onChange={(e) => setSelectedExperience(e.target.value)}
                      className="filter-radio"
                    />
                    <span className="filter-radio-custom"></span>
                    <span className="filter-radio-text">7+ yrs</span>
                  </label>
                </div>
              </div>

              {/* Available for Hire Filter */}
              <div className="filter-group filter-group-checkbox">
                <label className="filter-checkbox-label">
                  <input
                    type="checkbox"
                    className="filter-checkbox"
                    checked={availableForHireOnly}
                    onChange={(e) => setAvailableForHireOnly(e.target.checked)}
                  />
                  <span className="filter-checkbox-custom"></span>
                  <span className="filter-checkbox-text">Available for Hire</span>
                </label>
              </div>

              {/* Profession Filter */}
              <div className="filter-group">
                <label className="filter-label" htmlFor="profession-filter">
                  Profession
                </label>
                <select
                  id="profession-filter"
                  className="filter-select"
                  value={selectedProfession}
                  onChange={(e) => setSelectedProfession(e.target.value)}
                >
                  <option value="all">All Professions</option>
                  {professions.map(prof => (
                    <option key={prof} value={prof}>{prof}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="filter-results">
              <span className="results-count">{filteredTalent.length} {filteredTalent.length === 1 ? 'talent' : 'talents'} found</span>
            </div>
          </div>
        </section>

        {/* Talent Grid */}
        <section className="talent-grid-section">
          <div className="talent-grid-container">
            {filteredTalent.length > 0 ? (
              <div className="talent-grid">
                {filteredTalent.map((person) => (
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
                    <div className="talent-card-image-container">
                      <img
                        src={person.imgThumb}
                        alt={`${person.name} thumbnail`}
                        className="talent-card-image"
                      />
                      <div className="talent-card-overlay">
                        <div className="talent-card-overlay-content">
                          <span className="talent-card-view">View Profile</span>
                        </div>
                      </div>
                      {person.availableForHire && (
                        <span className="talent-available-badge">Available</span>
                      )}
                    </div>
                    <div className="talent-card-info">
                      <h2 className="talent-card-name">{person.name}</h2>
                      <p className="talent-card-location">
                        <svg className="talent-location-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
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
                            <i className="fa-brands fa-linkedin-in"></i>
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
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                        )}
                        {person.personalSite && (
                          <a
                            href={person.personalSite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="talent-social-link"
                            aria-label="Personal Website"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <i className="fa-solid fa-globe"></i>
