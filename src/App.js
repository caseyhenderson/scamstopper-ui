import './App.css';
import ScamstopperTrial from './pages/ScamstopperLandingPage';
import Information from './pages/Information';
import About from './pages/About';
import TextAnalysis from './forms/TextAnalysis';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Feedback from './pages/Feedback';

function App() {
  return (
    <div className="Application">
      <BrowserRouter>
      <Navbar />
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<ScamstopperTrial/>} />
              <Route path="/usefulInfo" element={<Information/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/textAnalysis" element={<TextAnalysis/>} />
              <Route path="/feedback" element={<Feedback/>} />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
