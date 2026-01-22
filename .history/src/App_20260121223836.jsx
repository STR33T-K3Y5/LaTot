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
        <Route path="/" element={<FindTalent />} />
        <Route path="/" element={<CoreIndustries />} />
        <Route path="/" element={<TalentPlanets />} />
        <Route path="/" element={<Citizen />} />
        <Route path="/" element={<Multiverse />} />
      </Routes>
    </BrowserRouter>
  )
}
