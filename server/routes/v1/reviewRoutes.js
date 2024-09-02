const express = require("express");
const { userAuth } = require("../../middlewares/userAuth");
const { getAverageRating, addReview, getCourseReviews, deleteReview } = require("../../controller/reviewControllers");

const router = express.Router();

router.get("/avg-rating/:courseId", userAuth, getAverageRating);
router.get("/course-review/:courseId", userAuth, getCourseReviews);
router.post("/add-review", userAuth, addReview);
router.put("/delete/:reviewId", userAuth, deleteReview);

module.exports = { reviewRouter: router };
