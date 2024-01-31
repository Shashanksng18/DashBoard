const express = require("express");
const routes = require("./routes/csvRoutes");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.options("*", cors());
app.use(cors({
    credentials: true, //if you are using authentication.
   origin: 'https://dash-board-ashy-xi.vercel.app',
   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
   headers: 'Authorization, Content-Type',
}));

app.get("/", (req, res) => {
    res.json("dashboard vercel api api")
})

app.use(routes)

const port = process.env.PORT || 5000
app.listen(port);