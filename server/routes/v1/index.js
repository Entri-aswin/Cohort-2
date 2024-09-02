const express = require("express");
const { userRouter } = require("./userRoutes");
const { courseRouter } = require("./courseRoutes");
const { mentorRouter } = require("./mentorRoutes");
const { cartRouter } = require("./cartRoutes");
const { reviewRouter } = require("./reviewRoutes");

const v1Router = express.Router();

v1Router.use("/user", userRouter);
v1Router.use("/course", courseRouter);
v1Router.use("/mentor", mentorRouter);
v1Router.use("/cart", cartRouter);
v1Router.use("/review", reviewRouter);

module.exports = { v1Router };
