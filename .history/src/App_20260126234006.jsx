import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FindTalent from './pages/FindTalent';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return(
    <BrowserRouter>
      {/* ScrollToTop must be inside BrowserRouter to access useLocation hook */}
      {/* It automatically scrolls to top on every route change */}
      <ScrollToTop />
      <Navbar />
