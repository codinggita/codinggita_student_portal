
import './App.css'
import Events from './Modules/EventsPage/Events'
import ActivityPage from './Modules/ActivityPage/ActivityPage'
import Navbar from './Modules/Header/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Modules/Authentication/Login';
import SignUp from './Modules/Authentication/SignUp';
import LandingPage from './Modules/LandingPage/LandingPage';
import Newsletter from './Modules/NewsletterPage/Newsletter';
import Revamp from './Modules/Revamp';
import PortfolioSetup from './Modules/PortfolioPage/PortfolioSetup';
import ProtectedRoute from './Modules/ProtectedRoute';
import ProjectPage from './Modules/ProjectPage/ProjectPage';
import { ProjectDetails } from './Modules/ProjectPage/ProjectDetails';
import HeroPortfolio from './Modules/ProjectPage/HeroPortfolio';


function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/cg" element={<Revamp />} /> */}

          {/* Protected Route Wrapping Portfolio */}


          <Route element={<Revamp />}>

            <Route
              path="/port"
              element={
                <ProtectedRoute>
                  <PortfolioSetup />
                </ProtectedRoute>
              }
            />
            <Route path="/myport" element={<HeroPortfolio />} />

            <Route path="/project" element={<ProjectPage />} />
            <Route path="/project/:id" element={<ProjectDetails />} />


            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/event" element={<Events />} />
            <Route path="/activity" element={<ActivityPage />} />
            <Route path="/newsletter" element={<Newsletter />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
