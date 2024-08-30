const express = require("express");
const { mentorSignup, mentorLogout, mentorLogin, mentorProfile } = require("../../controller/mentorControllers");
const { mentorAuth } = require("../../middlewares/mentorAuth");

const router = express.Router();

router.post("/signup", mentorSignup);
router.post("/login", mentorLogin);
router.post("/logout", mentorLogout);

router.get("/profile", mentorAuth, mentorProfile);
router.put("/update");
router.delete("/delete");

router.get("/userList");
// router.get("/check-mentor", );

// router.get("/some-end-point", adminAuth, handleSomething);

module.exports = { mentorRouter: router };
