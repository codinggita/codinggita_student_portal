import express from 'express'
import { postPortfolio } from '../Controller/Portfolio.Controller/Portfolio.Controller.js'
import { getUser, EditUser } from '../Controller/User.Controller.js'
import protect from '../Middlleware/protect.js'

const PortfolioRoute = express.Router()




PortfolioRoute.post("/", protect("Portfolio"), postPortfolio)


// Get USer Details with portfolio
PortfolioRoute.get("/", protect("Portfolio"), getUser)


// this put request adds portfolio id to refer user object
PortfolioRoute.put("/", protect("Portfolio"), EditUser)






export default PortfolioRoute