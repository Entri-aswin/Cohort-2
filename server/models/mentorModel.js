const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLenght: 8,
        trim: true,
    },
    qualifications: {
        type: String,
    },
    department: String,
    phone: String,
    role: {
        type: String,
        enum: ["mentor", "admin"],
        default: "mentor",
    },
    profilePic: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt_NZykul07nU3cliFuRZQr4_q-gOdkRTmRA&s",
    },
    course: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        },
    ],
});

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = { Mentor };
