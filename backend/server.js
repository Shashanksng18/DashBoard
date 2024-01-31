const express = require("express");
const routes = require("./routes/csvRoutes");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.options("*", cors());
app.use(cors({    
     origin: '*',   
     methods: '*',   
     allowedHeaders: ['Content-Type', 'Authorization'],
     credentials: true,  
     }));

app.get("/", (req, res) => {
    res.json("dashboard vercel api api")
})

app.use(routes)

const port = process.env.PORT || 5000
app.listen(port);