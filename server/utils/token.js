var jwt = require("jsonwebtoken");

const generateToken = (id, role) => {
    try {
        var token = jwt.sign({ id: id, role: role || "user" }, process.env.JWT_SECRET_KEY);
        return token;
    } catch (error) {
        console.log(error);
    }
};

module.exports = { generateToken };
