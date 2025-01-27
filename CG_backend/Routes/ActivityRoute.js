import express from 'express'
import { getPointsTable } from '../Controller/Activity.Controller/getPointsTable.Controller.js'

const ActivityRouter = express.Router()


ActivityRouter.get("/", getPointsTable)





export default ActivityRouter