import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Members from './Pages/Members/Members';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="members" element={<Members />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
