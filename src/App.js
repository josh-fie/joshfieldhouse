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
      <Layout>
        <Routes>
          <Route index element={<HomePage />} ></Route>
          <Route path='/aboutme' element={<AboutMePage />} ></Route>
          <Route path='/projects' element={<ProjectsLayout />}>
              <Route path='errandapp' element={<ErrandAppPage />}>
                      </Route>
              <Route path='microsofthpclone' element={<MHPCPage />}>
                      </Route>
              <Route path='icetapp' element={<IceTPage />}>
                      </Route>
          </Route>
          <Route path='/contact' element={<ContactPage />} ></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
