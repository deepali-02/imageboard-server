const { Router } = require("express");
const Image = require("../models").image;

const router = new Router();

//get all images from table
router.get("/", async (req, res, next) => {
  try {
    const images = await Image.findAll();
    console.log("Got request for images");
    res.send(images);
  } catch (e) {
    next(e);
  }
});

//create new image and add in table
router.post("/newImage", async (req, res, next) => {
  try {
    const { title, url } = req.body;
    console.log(req.body);
    if (!title || !url) {
      res.status(400).send("title or url missing");
    } else {
      const img = await Image.create({ title: title, url: url });
      console.log(img);
      res.send({ message: "New image added in table", img });
    }
  } catch (e) {
    next(e);
  }
});

//get some specific pet
router.get("/:id", async (req, res, next) => {
  try {
    const imgId = req.params.id;
    const findimgByid = await Image.findByPk(imgId);
    console.log(findimgByid);
    if (!findimgByid) {
      res.status(404).send("Image not found");
    } else {
      res.send(findimgByid);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
