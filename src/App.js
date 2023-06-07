import { Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './layouts/Layout';
import ProjectsLayout from './layouts/ProjectsLayout';

import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ErrandAppPage from './pages/ErrandAppPage';
import MHPCPage from './pages/MHPCPage';
import IceTPage from './pages/IceTPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="*" element={<FourOhFour />} /> */}
      </Routes>
    </div>
  );
}

export default App;
