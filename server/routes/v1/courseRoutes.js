const express = require("express");
const { createCourse, updateCourse, deleteCourse } = require("../../controller/courseController");
const { upload } = require("../../middlewares/multer");
const { mentorAuth } = require("../../middlewares/mentorAuth");

const router = express.Router();

router.post("/create", mentorAuth, upload.single("image"), createCourse);
router.put("/update/:courseId", mentorAuth, upload.single("image"), updateCourse);
router.delete("/delete/:courseId", mentorAuth, deleteCourse);

module.exports = { courseRouter: router };
