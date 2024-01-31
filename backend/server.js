const express = require("express");
const routes = require("./routes/csvRoutes");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());

app.get("/", (req, res) => {
    res.json("hello")
})

app.use(routes)

const port = process.env.PORT || 5000
app.listen(port);