const { Mentor } = require("../models/mentorModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/token");

const mentorSignup = async (req, res, next) => {
    try {
        const { name, email, password, phone, department, qualification, profilePic } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "all fields required" });
        }
        const isMentorExist = await Mentor.findOne({ email });

        if (isMentorExist) {
            return res.status(400).json({ message: "mentor already exist" });
        }

        const saltRounds = 10;
        const hashedPassword = bcrypt.hashSync(password, saltRounds);

        const newUser = new Mentor({ name, email, password: hashedPassword, phone, department, qualification, profilePic });
        await newUser.save();

        const token = generateToken(newUser._id, "mentor");

        res.cookie("token", token);
        res.json({ success: true, message: "mentor created successfully" });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

const mentorLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "all fields are required" });
        }

        const mentorExist = await Mentor.findOne({ email });
        if (!mentorExist) {
            return res.status(404).json({ success: false, message: "mentor does not exist" });
        }

        const passwordMatch = bcrypt.compareSync(password, mentorExist.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "user not autherized" });
        }

        const token = generateToken(mentorExist._id, "mentor");

        res.cookie("token", token);
        res.json({ success: true, message: "mentor login successfull" });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

const mentorLogout = async (req, res, next) => {
    try {
        res.clearCookie("token");
        res.json({ message: "user logout success", success: true });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};
const mentorProfile = async (req, res, next) => {
    try {
        const mentor = req.user;
        
        const mentorData = await Mentor.findOne({ _id: mentor.id });

        res.json({ success: true, message: "mentor data fetched", data: mentorData });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

const checkMentor = async (req, res, next) => {
    try {
        const { user } = req;
        if (!user) {
            res.status(401).json({ success: false, message: "user not autherized" });
        }

        res.json({ success: true, message: "mentor autherized" });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

module.exports = { mentorSignup, mentorLogin , mentorLogout, mentorProfile, checkMentor};
