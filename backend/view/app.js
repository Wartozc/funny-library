const express = require("express");
const app = express();
const mongoDbConfig = require("../controller/config/mongodb-connection-config.js");
const userController = require("../controller/user-controller.js");
const cors = require("cors");

require("dotenv").config()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(`${process.env.BASE_PATH}/health`, (req, res)=>{
    res.json({
        "State": "UP",
        "Description": "The application is running"
    })
});

app.use(`${process.env.BASE_PATH}/users`, userController);

const startServer = async () => {
    await mongoDbConfig;
    app.listen(process.env.PORT, () =>
      console.info(`Server listen in port ${process.env.PORT}`)
    );
}

startServer();
  