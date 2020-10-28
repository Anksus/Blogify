const express = require("express");
const router = express.Router();
const Article = require("../models/article.model");
const Topic = require("../models/topic.model");

// TODO: To get all the topics and subtopics
router.route("/topics").get(async (req, res) => {
  try {
    const topics = await Topic.find().exec();
    res.send(topics);
  } catch (error) {
    res.status(400).send(error);
  }
});

// NOTE:  To get coresponding subtopics
router.route("/topics/:topic").get(async (req, res) => {
  const query = req.params.topic;
  try {
    const subtopic = await Topic.find({ topic: query }).exec();
    res.send(subtopic);
  } catch (error) {
    res.status(400).send(error);
  }
});

// NOTE: To get Article names from topic and subtopic
router.route("/topics/:topic/:subtopic").get(async (req, res) => {
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

module.exports = router;
