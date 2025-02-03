import express from 'express'
import { getEventList,postEvent } from '../Controller/Events.Controller/Events.Controller.js'


const EventRouter = express.Router()

EventRouter.get('/', getEventList)
EventRouter.post('/', postEvent)



export default EventRouter