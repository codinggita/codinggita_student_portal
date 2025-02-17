import express from 'express'
import { registerUser, loginUser } from '../Controller/Auth.Controller/Atuh.Controller.js'


const AuthRoute = express.Router()


AuthRoute.post('/register', registerUser)
AuthRoute.post('/login', loginUser)



export default AuthRoute