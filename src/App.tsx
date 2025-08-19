import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from './utils/constants';
import NavBar from '@/components/NavBar';
import Home from '@/pages/Home';
import ProjectPage from '@/pages/Projects';
import ExperiencesPage from '@/pages/Experiences';
import ContactPage from '@/pages/Contact';
import '@/App.scss';

function App() {
  return (
    <>
      <Router>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.PROJECTS} element={<ProjectPage />} />
            <Route path={ROUTES.EXPERIENCE} element={<ExperiencesPage />} />
            <Route path={ROUTES.CONTACT} element={<ContactPage />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
