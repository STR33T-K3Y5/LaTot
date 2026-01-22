import './App.css';
import Navbar from './components/Navbar';
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
        <Route path="/ciit" element={<Citizen />} />
        <Route path="/" element={<Multiverse />} />
      </Routes>
    </BrowserRouter>
  )
}
