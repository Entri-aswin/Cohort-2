const express = require("express");
const { userSignup, userLogin, userLogout, userProfile, checkUser } = require("../../controller/userControllers");
const { userAuth } = require("../../middlewares/userAuth");

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.post("/logout",userAuth, userLogout);

router.get("/profile", userAuth, userProfile);
router.put("/update");
router.delete("/delete");

router.get("/userList");
router.get("/check-user", userAuth, checkUser);

module.exports = { userRouter: router };
