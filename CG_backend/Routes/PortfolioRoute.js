import express from 'express'
import { postPortfolio } from '../Controller/Portfolio.Controller/Portfolio.Controller.js'

const PortfolioRoute = express.Router()


PortfolioRoute.post("/", postPortfolio)






export default PortfolioRoute