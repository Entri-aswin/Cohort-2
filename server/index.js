const express = require("express");
const { apiRouter } = require("./routes");
const { connectDB } = require("./config/db");
const app = express();
const port = 3000;

connectDB();

app.get("/", (req, res) => {
    res.send("Hello  World!");
});

app.use("/api", apiRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
