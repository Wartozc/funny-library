const express = require("express");
const router = express.Router();
const User = require("../model/user.js")

router.get("/", async(req, res)=>{
    const userList = await User.find();
    return res.json(userList);
})

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  return res.json(user);
});

router.post("/", (req, res) => {
  const user = req.body;
  User.create(user).then(user => {
    console.log("user created: ", user);
    return res.json(user)
  }).catch (error=> {
    console.error(error);
    return res.status(500).json(error);
  });
});

router.patch("/:id", (req, res) => {
  const userBody = req.body;
  User.findByIdAndUpdate(req.params.id, userBody, { new: true })
    .then((user) => {
      console.log("user updated: ", user);
      return res.json(user);
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json(error);
    });
});

router.delete("/:id", async (req, res) => {
  User
    .findByIdAndDelete(req.params.id)
    .then((user) => {
      console.log("user deleted: ", user);
      return res.json(user);
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json(error);
    });
});

module.exports = router