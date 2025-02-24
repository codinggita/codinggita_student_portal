import express from 'express'
import { registerUser, loginUser,getAllUsers } from '../Controller/Auth.Controller/Atuh.Controller.js'


const AuthRoute = express.Router()


AuthRoute.post('/register', registerUser)
AuthRoute.post('/login', loginUser)


AuthRoute.get('/user', getAllUsers)





export default AuthRoute