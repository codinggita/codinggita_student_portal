import express from 'express'
import protect from '../Middlleware/protect.js'
import { AddNewGroup, addUsersToGroup, deleteUsersFromGroup, getGroup, AddTaskByGroupId } from '../Controller/Group.Controller/Group.Controller.js';


const GroupRoute = express.Router()

GroupRoute.get("/:groupID", getGroup)

GroupRoute.post("/", AddNewGroup);

GroupRoute.put("/", addUsersToGroup);

GroupRoute.delete("/", deleteUsersFromGroup);


// Task Routes
GroupRoute.post("/task/:groupID", AddTaskByGroupId);

export default GroupRoute