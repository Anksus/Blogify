const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  topic: {
    type: String,
    trim: true,
  },
  subTopicName: {
    type: String,
    trim: true,
  },
  articleName: {
    type: String,
    unique: true,
    true: true,
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
