const express = require("express");
const router = express.Router();

const publicationController = require("../controllers/publicationController");

router.get("/", publicationController.showPublication);

module.exports = router;
