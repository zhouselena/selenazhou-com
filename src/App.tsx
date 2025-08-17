import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from './utils/constants';
import NavBar from '@/components/NavBar';

import './App.scss';

function App() {
  return (
    <>
      <Router>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path={ROUTES.HOME} element={<div />} />
            <Route path={ROUTES.PROJECTS} element={<div />} />
            <Route path={ROUTES.EXPERIENCE} element={<div />} />
            <Route path={ROUTES.CONTACT} element={<div />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
