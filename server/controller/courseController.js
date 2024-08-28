const { cloudinaryInstance } = require("../config/cloudinaryConfig");
const { Course } = require("../models/courseModel");
const { handleImageUpload } = require("../utils/imageUpload");

const createCourse = async (req, res, next) => {
    try {
        console.log("create course route hitted");
        console.log(req.file, " =====image in controller");

        const { title, description, duration, image, price, mentor } = req.body;
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
        await newCourse.save();

        res.status(201).json({ success: true, message: "course created successfully" });
    } catch (error) {
        next(error);
    }
};

module.exports = { createCourse };
