const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    duration: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081",
    },
    description: {
        type: String,
        minLength: 50,
        maxLength: 500,
    },
    syllabus: String,
    price: Number,
    mentor: {
        type: Schema.Types.ObjectId,
        ref: "Mentor",
    },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = { Course };
