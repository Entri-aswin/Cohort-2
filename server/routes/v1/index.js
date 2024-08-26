const express = require("express");
const { userRouter } = require("./userRoutes");
const { courseRouter } = require("./courseRoutes");

const v1Router = express.Router();

v1Router.use("/user", userRouter);
v1Router.use("/course", courseRouter);

module.exports = { v1Router };
