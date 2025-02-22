import express from 'express'
import protect from '../Middlleware/protect.js'
import { postGroup, addUser_Group, deleteUsersFromGroup, getGroup } from '../Controller/Group.Controller/Group.Controller.js';


const GroupRoute = express.Router()

GroupRoute.get("/:groupID", getGroup)

GroupRoute.post("/", postGroup);

GroupRoute.put("/", addUser_Group);

GroupRoute.delete("/", deleteUsersFromGroup);


export default GroupRoute