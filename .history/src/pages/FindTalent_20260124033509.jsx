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

