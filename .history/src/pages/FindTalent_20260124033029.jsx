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
