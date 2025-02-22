import express from 'express'
import protect from '../Middlleware/protect.js'
import { getDashboardAdmin, getDashboardStudent, getDashboardTutor } from '../Controller/Dashboard.Controller.js'


const DashboardRoute = express.Router()



DashboardRoute.get("/admin", protect("AdminPanel"), getDashboardAdmin)
DashboardRoute.get("/tutor", protect("TutorDashboard"), getDashboardTutor)
DashboardRoute.get("/student", protect("StudentDashboard"), getDashboardStudent)






export default DashboardRoute