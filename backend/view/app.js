const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config()

mongoose.connect(process.env.DATABASE_CONNECTION)
.then(()=>{
    console.info("Mongodb Connected");
}).catch(error => {
    console.error("An error was presented: " + error);
});

app.get(`${process.env.BASE_PATH}/health`, (req, res)=>{
    res.json({
        "State": "UP",
        "Description": "The application is running"
    })
});


app.listen(process.env.PORT, ()=> console.info(`Server listen in port ${process.env.PORT}`));