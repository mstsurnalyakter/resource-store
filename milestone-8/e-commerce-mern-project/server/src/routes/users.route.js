const { handleGetUsers, handleGetUser, handleDeleteUser, handleUserRegistration } = require("../controllers/users.controller");

const userRouter = require("express").Router();

userRouter.post("/process-register", handleUserRegistration);
userRouter.get("/", handleGetUsers);
userRouter.get("/:id([0-9a-zA-Z])", handleGetUser);
userRouter.delete("/:id([0-9a-zA-Z])", handleDeleteUser);


module.exports = userRouter;
