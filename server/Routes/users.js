const usersRouter = require("express").Router();
const { register , login , getUsersData } = require("../Controllers/users");

usersRouter.get("/", getUsersData);
usersRouter.post("/register", register);
usersRouter.post("/login", login);

module.exports = usersRouter ;