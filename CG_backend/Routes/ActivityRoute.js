import express from 'express'
import { getPointsTable, addPointsTable, deletePointsTable } from '../Controller/Activity.Controller/Activity.Controller.js'

const ActivityRouter = express.Router()


ActivityRouter.get("/", getPointsTable)
ActivityRouter.post("/", addPointsTable)
ActivityRouter.delete("/", deletePointsTable)



export default ActivityRouter