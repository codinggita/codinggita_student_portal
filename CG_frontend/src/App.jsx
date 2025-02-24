
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
import { Revamp2 } from './Modules/Revamp2';
import PortfolioSetup from './Modules/PortfolioPage/PortfolioSetup';
import ProtectedRoute from './Modules/ProtectedRoute';
import ProjectPage from './Modules/ProjectPage/ProjectPage';
import { ProjectDetails } from './Modules/ProjectPage/ProjectDetails';
import HeroPortfolio from './Modules/ProjectPage/HeroPortfolio';
import NotFound from './Modules/PageNotFound'
import Dashboard from './Modules/Dashboard/Dashboard';
import Resources from './Modules/Resources/Resources';
import LeetTracker from './Modules/LeetcodeTracker/LeetTracker';
import TutorDashboard from './Modules/TutorDashboard/TutorDashboard';
import AdminDashboard from './Modules/Dashboard/AdminDashboard';

function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/cg" element={<Revamp />} /> */}

          {/* Protected Route Wrapping Portfolio */}


          <Route element={<Revamp2 />}>

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
            <Route path="/event" element={<Events />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/tracker" element={<LeetTracker />} />


            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/student/dashboard" element={<Dashboard />} />
            <Route path="/tutor/dashboard" element={<TutorDashboard />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />



            <Route path="/activity" element={<ActivityPage />} />
            <Route path="/newsletter" element={<Newsletter />} />


            <Route path='*' element={<NotFound />} />

          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
