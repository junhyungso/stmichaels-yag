import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Gallery from './Pages/Gallery/Gallery';
import Home from './Pages/Home/Home';
import PrayerIntentions from './Pages/Members/PrayerIntentions';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="prayer-intentions" element={<PrayerIntentions />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
