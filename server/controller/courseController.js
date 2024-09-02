const { cloudinaryInstance } = require("../config/cloudinaryConfig");
const { Course } = require("../models/courseModel");
const { handleImageUpload } = require("../utils/imageUpload");

const createCourse = async (req, res, next) => {
    try {
        const user = req.user;

        const { title, description, duration, price, mentor } = req.body;
        let imageUrl;

        if (!title || !description || !duration || !price) {
            return res.status(400).json({ message: "all fields required" });
        }

        const isCourseExist = await Course.findOne({ title });

        if (isCourseExist) {
            return res.status(400).json({ success: false, message: "course already exist" });
        }

        if (req.file) {
            imageUrl = await handleImageUpload(req.file.path);
        }

        const newCourse = new Course({ title, description, duration, image: imageUrl && imageUrl, price, mentor });
        if (user.role === "mentor") newCourse.mentor = user.id;
        await newCourse.save();

        res.status(201).json({ success: true, message: "course created successfully" });
    } catch (error) {
        next(error);
    }
};
const updateCourse = async (req, res, next) => {
    try {
        const { courseId } = req.params;

        const { title, description, duration, price, mentor } = req.body;
        let imageUrl;

        const isCourseExist = await Course.findOne({ _id: courseId });

        if (!isCourseExist) {
            return res.status(400).json({ success: false, message: "course does not exist" });
        }

        if (req.file) {
            imageUrl = await handleImageUpload(req.file.path);
        }

        const updatedCourse = await Course.findOneAndUpdate(
            { _id: courseId },
            { title, description, duration, price, mentor },
            { new: true }
        );

        res.status(200).json({ success: true, message: "course updated successfully", data: updatedCourse });
    } catch (error) {
        next(error);
    }
};
const deleteCourse = async (req, res, next) => {
    try {
        const { courseId } = req.params;

        const courseDeleted = await Course.findByIdAndDelete({ _id: courseId });

        if (!courseDeleted) res.status(400).json({ success: true, message: "course already deleted" });

        res.status(200).json({ success: true, message: "course deleted successfully", data: courseDeleted });
    } catch (error) {
        next(error);
    }
};
const getCourses = async (req, res, next) => {
    try {

        const courses = await Course.find();

        res.status(200).json({ success: true, message: "courses fetched", data: courses });
    } catch (error) {
        next(error);
    }
};

module.exports = { createCourse, updateCourse ,deleteCourse,getCourses };
