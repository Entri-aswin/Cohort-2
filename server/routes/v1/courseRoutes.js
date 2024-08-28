const express = require("express");
const { createCourse } = require("../../controller/courseController");
const { upload } = require("../../middlewares/multer");

const router = express.Router();

router.post("/create", upload.single("image"), createCourse);

module.exports = { courseRouter: router };
