const express = require("express");
const cors = require("cors");
const { apiRouter } = require("./routes");
const { connectDB } = require("./config/db");
const cookieParser = require("cookie-parser");
const { handleError } = require("./utils/error");
const port = 3000;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: ["http://localhost:5100", "https://elearning-app-phi.vercel.app"],
        credentials: true,
        methods :['POST','GET',"PUT","DELETE","OPTION"],
        
    })
);

connectDB();

app.get("/", (req, res) => {
    res.send("Hello  World!");
});

app.use("/api", apiRouter);

app.use(handleError);

app.all("*", (req, res) => {
    res.status(404).json({ message: "end point does not exist" });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
