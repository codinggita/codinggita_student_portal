
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
import Portfolio from './Modules/Portfolio';
import ProtectedRoute from './Modules/ProtectedRoute';


function App() {

  return (
    <>
      <Router>
        <Navbar /> {/* Navbar should be placed outside Routes */}
        <Routes>
          <Route path="/cg" element={<Revamp />} />

          {/* Protected Route Wrapping Portfolio */}
          <Route
            path="/cg/port"
            element={
              <ProtectedRoute>
                <Portfolio />
              </ProtectedRoute>
            }
          />

          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
          <Route path="/event" element={<Events />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
