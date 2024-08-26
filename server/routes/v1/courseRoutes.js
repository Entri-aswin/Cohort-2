const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("accessed course route get method");
});

module.exports = { courseRouter: router };
