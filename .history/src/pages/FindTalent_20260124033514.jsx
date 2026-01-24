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
