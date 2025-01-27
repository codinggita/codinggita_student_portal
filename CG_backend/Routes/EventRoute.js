import express from 'express'
import { getEventList } from '../Controller/Events.Controller/Events.Controller.js'


const EventRouter = express.Router()

EventRouter.get('/', getEventList)



export default EventRouter