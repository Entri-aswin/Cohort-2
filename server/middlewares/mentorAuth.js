const jwt = require("jsonwebtoken");

const mentorAuth = (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(401).json({ success: false, message: "user not autherized" });
        }
        const tokenVerified = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (!tokenVerified) {
            return res.status(401).json({ success: false, message: "user not autherized" });
        }

        console.log("tokenVerified=====", tokenVerified);

        if (tokenVerified.role !== "mentor" && tokenVerified.role !== "admin") {
            return res.status(401).json({ success: false, message: "user not autherized" });
        }

        req.user = tokenVerified;

        next();
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

module.exports = { mentorAuth };
