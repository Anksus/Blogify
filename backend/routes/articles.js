const express = require("express");
const router = express.Router();
const Article = require("../models/article.model");
const Topic = require("../models/topic.model");

// NOTE: TO GET ALL THE TOPICS AND SUBTOPICS
router.route("/topics").get(async (req, res) => {
  try {
    const topics = await Topic.find().exec();
    res.send(topics);
  } catch (error) {
    res.status(400).send(error);
  }
});

// NOTE:  TO GET CORRESPONDING SUBTOPICS
router.route("/subtopics/:topic").get(async (req, res) => {
  const query = req.params.topic;
  try {
    const subtopic = await Topic.find({ topic: query }).exec();
    res.send(subtopic);
  } catch (error) {
    res.status(400).send(error);
  }
});

// NOTE: TO GET ALL ARTICLE NAMES FROM TOPIC AND SUBTOPIC
router.route("/articles/:topic/:subtopic").get(async (req, res) => {
  const query = { topic: req.params.topic, subtopic: req.params.subtopic };
  console.log(query);
  try {
    const data = await Article.find({
      topic: query.topic,
      subTopicName: query.subtopic,
    })
      .select({ articleName: -1 })
      .exec();
    console.log(data);
    res.send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

// NOTE: TO GET HTML OF THE ARTICLE
router.route("/article/:name").get(async (req, res) => {
  try {
    const data = await Article.find({ articleName: req.params.name })
      .select({ sanitizeHTML: -1 })
      .exec();
    res.send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
