import express from 'express'
import protect from '../Middlleware/protect.js'
import { getDashboardAdmin, getDashboardStudent, getDashboardTutor } from '../Controller/Dashboard.Controller.js'


const DashboardRoute = express.Router()



// Admin Dashboard (Only Admins)
DashboardRoute.get("/admin", protect("LevelOne"), getDashboardAdmin);

// Tutor Dashboard (Admins & Tutors)
DashboardRoute.get("/tutor", protect("LevelTwo"), getDashboardTutor);

// Student Dashboard (Admins, Tutors & Students)
DashboardRoute.get("/student", protect("LevelThree"), getDashboardStudent);






export default DashboardRoute