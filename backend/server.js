const express = require("express");
const routes = require("./routes/csvRoutes");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors({
    credentials: true, //if you are using authentication.
   origin: 'https://dash-board-ashy-xi.vercel.app' // if line above is true, then this CANNOT be '*'
}));

app.get("/", (req, res) => {
    res.json("dashboard api")
})

app.use(routes)

const port = process.env.PORT || 5000
app.listen(port);