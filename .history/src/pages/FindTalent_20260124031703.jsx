import { useState, useMemo, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { people } from '../constants/People';
import logo from '../images/latot.webp';
import '../index.css';

const FindTalent = () => {
  const [selectedLocation, setSelectedLocation] = useState('all');
export default FindTalent