import express from 'express'
import { postPortfolio } from '../Controller/Portfolio.Controller/Portfolio.Controller.js'
import { getUser } from '../Controller/User.Controller.js'

const PortfolioRoute = express.Router()



PortfolioRoute.post("/", postPortfolio)

// Get USer Details with portfolio
PortfolioRoute.get("/", getUser)






export default PortfolioRoute