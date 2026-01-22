import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FindTa from './pages/Home';
import Home from './pages/Home';
import Home from './pages/Home';
import Home from './pages/Home';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findtalent" element={<FindTalent />} />
        <Route path="/coreindustries" element={<CoreIndustries />} />
        <Route path="/talentplanets" element={<TalentPlanets />} />
        <Route path="/citizen" element={<Citizen />} />
        <Route path="/multiverse" element={<Multiverse />} />
      </Routes>
    </BrowserRouter>
  )
}
