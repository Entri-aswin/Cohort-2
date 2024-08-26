const express = require("express");

const router = express.Router();

router.post("/signup");
router.post("/login");
router.post("/logout");

router.get("/profile");
router.put("/update");
router.delete("/delete");

router.get("/userList");
router.get("/check-user");



module.exports = { userRouter: router };
