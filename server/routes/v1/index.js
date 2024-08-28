const express = require("express");
const { userRouter } = require("./userRoutes");
const { courseRouter } = require("./courseRoutes");
const { mentorRouter } = require("./mentorRoutes");

const v1Router = express.Router();

v1Router.use("/user", userRouter);
v1Router.use("/course", courseRouter);
v1Router.use("/mentor", mentorRouter);

module.exports = { v1Router };
