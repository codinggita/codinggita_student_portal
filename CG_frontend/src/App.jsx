
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


function App() {

  return (
    <>
      <Router>
        <Routes>
          
          <Route path="/cg" element={<Revamp />} />
          <Route path="/cg/port" element={<Portfolio />} />

          <Route element={<Navbar />}>

            <Route path="/" element={<LandingPage />} />
            <Route path="/event" element={<Events />} />
            <Route path="/activity" element={<ActivityPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/newsletter" element={<Newsletter />} />

          </Route>

        </Routes>
      </Router>

    </>
  )
}

export default App
