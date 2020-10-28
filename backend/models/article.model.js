const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  topic: {
    type: String,
  },
  subTopicName: {
    type: String,
  },
  articleName: {
    type: String,
    unique: true,
  },
  markdown: {
    type: String,
    unique: true,
  },
  sanitizeHTML: {
    type: String,
  },
});

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
