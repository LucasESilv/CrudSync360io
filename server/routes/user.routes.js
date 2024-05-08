import express from "express";
import {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

const router = express.Router();

//Get all user
router.get("/", getUsers);

//Get one user
router.get("/:id", getUserById);

//Create a new user
router.post("/:id/create-new-user", addUser);

//Update of informations in a user
router.post("/:id", updateUser);

//Delete a user
router.delete("/:id", deleteUser)

export default router;
