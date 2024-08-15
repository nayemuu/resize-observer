import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Hscreen from './pages/Hscreen/Hscreen';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/h-screen" element={<Hscreen />} />
      </Routes>
    </Router>
  );
}
