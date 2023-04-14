const expressHander = require("express-async-handler");
const News = require("../db/model");

const getNews = expressHander(async (req, res) => {
  try {
    var news = await News.find();
    if (req.params.id) news = await News.findById(req.params.id);

    if (!news) throw new Error("No news found");
    //   res.status(500).json({ message: "News not found" });

    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const postNews = expressHander(async (req, res) => {
  try {
    // const news = await News.create(req.body);
    const news = await News.insertMany({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    if (!news) throw new Error("Nothing posted");

    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const postOne = expressHander(async (req, res) => {
  const { email, password } = req.body;
  const news = await News.findOne({ email: email, password: password });
  if (!news) {
    res.status(400).json({ "not found": "User not found" });
  }
  res.status(200).json(news);
});

const updateNews = expressHander(async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      },
      { new: true }
    );
    if (!news) throw new Error("Nothing updated");
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const deleteNews = expressHander(async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    if (!news) throw new Error("Nothing deleted");
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = { getNews, postNews, postOne, updateNews, deleteNews };
