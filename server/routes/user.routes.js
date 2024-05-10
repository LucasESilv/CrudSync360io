import express from "express";
import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

const router = express.Router();

//Get all user
router.get("/", getUsers);

//Create a new user
router.post("/create-users", addUser);

//Update of informations in a user
router.put("/:id", updateUser);

//Delete a user
router.delete("/:id", deleteUser)

export default router;
