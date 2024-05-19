const express = require("express");
const { shortenUrl } = require("../controller");

const URLRouter = express.Router();

URLRouter.post("/create",shortenUrl)

module.exports = URLRouter;