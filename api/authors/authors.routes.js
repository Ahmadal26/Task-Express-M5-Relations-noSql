const express = require("express");
const router = express.Router();
const {
  postCreate,
  authorCreate,
  authorGet,
} = require("./authors.controllers");

router.post("/:authorId", postCreate);
router.post("/", authorCreate);
router.get("/", authorGet);

module.exports = router;
