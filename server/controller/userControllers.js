const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/token");

const userSignup = async (req, res, next) => {
    try {
        const { name, email, password, phone, profilePic } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "all fields required" });
        }
        const isUserExist = await User.findOne({ email });

        if (isUserExist) {
            return res.status(400).json({ message: "user already exist" });
        }

        const saltRounds = 10;
        const hashedPassword = bcrypt.hashSync(password, saltRounds);

        const newUser = new User({ name, email, password: hashedPassword, phone, profilePic });
        await newUser.save();

        const token = generateToken(newUser._id);

        res.cookie("token", token);
        res.json({ success: true, message: "user created successfully" });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "all fields are required" });
        }

        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(404).json({ success: false, message: "user does not exist" });
        }

        const passwordMatch = bcrypt.compareSync(password, userExist.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "user not autherized" });
        }

        const token = generateToken(userExist._id);

        res.cookie("token", token);
        res.json({ success: true, message: "user login successfull" });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const userLogout = async (req, res, next) => {
    try {
        res.clearCookie("token");
        res.json({ message: "user logout success", success: true });
    } catch (error) {
        console.log(error);
        next(error)
    }
};
const userProfile = async (req, res, next) => {
    try {
        const { user } = req;
        console.log(user, "=========user");

        const userData = await User.findOne({ _id: user.id });

        res.json({ success: true, message: "user data fetched", data: userData });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

const checkUser = async (req, res, next) => {
    try {
        const { user } = req;
        if (!user) {
            res.status(401).json({ success: false, message: "user not autherized" });
        }

        res.json({ success: true, message: "user autherized" });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

module.exports = { userSignup, userLogin, userLogout, userProfile, checkUser };
