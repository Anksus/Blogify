const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
    unique: true,
  },
  subTopic: [
    {
      name: {
        type: String,
      },
    },
  ],
});

const Topic = mongoose.model("Topic", topicSchema);
module.exports = Topic;
