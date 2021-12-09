const { Router } = require("express");
const User = require("../models").user;

const router = new Router();

//get all users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    console.log("got a request to send all users");
    res.send(users);
  } catch (e) {
    next(e);
  }
});

//create new user and add into the table
router.post("/newUser", async (req, res, next) => {
  try {
    const { email, password, fullName } = req.body;
    console.log(req.body);
    if (!email || !password || !fullName) {
      res.status(400).send("Something missing");
    } else {
      const user = await User.create({
        email: email,
        password: password,
        fullName: fullName,
      });
      console.log(user);
      res.send(user);
    }
  } catch (e) {}
});
module.exports = router;
