import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FindTalent from './pages/FindTalent';
import CoreIndustries from './pages/CoreIndustries';
import TalentPlanets from './pages/TalentPlanets';
import Citizen from './pages/Citizen';
import Multiverse from './pages/Multiverse';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findtalent" element={<FindTalent />} />
      </Routes>
    </BrowserRouter>
  )
}
