import express from 'express'
import protect from '../Middlleware/protect.js'
import { AddNewGroup, addUsersToGroup, deleteUsersFromGroup, getGroup, AddTaskByGroupId, getAllGroup } from '../Controller/Group.Controller/Group.Controller.js';


const GroupRoute = express.Router()

// Group Routes


// Get all groups
GroupRoute.get("/all", getAllGroup)

// Get a Group by ID
GroupRoute.get("/", getGroup)

// Create New Group
GroupRoute.post("/", AddNewGroup);

// Add a User To Group 
GroupRoute.put("/", addUsersToGroup);

// Delete User From Group by Group ID
GroupRoute.delete("/", deleteUsersFromGroup);


// Task Routes


// Add Task to Group By Group ID
GroupRoute.post("/task/:groupID", AddTaskByGroupId);

export default GroupRoute