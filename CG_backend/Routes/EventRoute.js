import express from 'express'
import { getEventList,postEvent,deleteEvent} from '../Controller/Events.Controller/Events.Controller.js'


const EventRouter = express.Router()

EventRouter.get('/', getEventList)
EventRouter.post('/', postEvent)
EventRouter.delete('/', deleteEvent)

export default EventRouter;