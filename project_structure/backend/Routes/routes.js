const express = require("express");
const {
  getNews,
  postNews,
  postOne,
  updateNews,
  deleteNews,
} = require("../Controller/controller");

const Router = express.Router();

Router.route("/").get(getNews).post(postNews);

Router.route("/login").post(postOne);

Router.route("/:id").get(getNews).put(updateNews).delete(deleteNews);

module.exports = Router;
