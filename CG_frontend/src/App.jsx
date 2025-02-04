
import './App.css'
import Events from './Modules/EventsPage/Events'
import ActivityPage from './Modules/ActivityPage/ActivityPage'
import Navbar from './Modules/Header/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Navbar />}>

            <Route path="/event" element={<Events />} />
            <Route path="/activity" element={<ActivityPage />} />

          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
