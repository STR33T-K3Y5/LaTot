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
