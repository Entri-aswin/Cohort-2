const { User } = require("../models/userModel");

const userSignup = async (req, res, next) => {
    try {
        const { name, email, password, phone, profilePic, courses } = req.body;
        if (!name || !email || !password) {
            res.status(400).josn({
                message: "all fields required",
            });
        }
        const isUserExist = await User.findOne({ email });
        if (isUserExist) {
           return res.status(400).json({ message: "user already exist" });
        }

        


    } catch (error) {
        console.log(error);
    }
};
