const express = require("express");
const {
  getNews,
  postNews,
  updateNews,
  deleteNews,
} = require("../Controller/controller");

const Router = express.Router();

Router.route("/").get(getNews).post(postNews);

Router.route("/:id").get(getNews).put(updateNews).delete(deleteNews);

module.exports = Router;
