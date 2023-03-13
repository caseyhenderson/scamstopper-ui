import './App.css';
import ScamstopperTrial from './pages/ScamstopperTrial';
import Information from './pages/Information';
import About from './pages/About';
import Upload from './pages/Upload';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

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
              <Route path="/upload" element={<Upload/>} />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
