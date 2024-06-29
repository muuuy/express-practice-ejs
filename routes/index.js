var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", test: false });
});

router.get("/test/", function (req, res, next) {
  res.render("index", { title: "testing", test: true });
});

module.exports = router;
