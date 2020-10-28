const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const articleRoutes = require("./routes/articles");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  if (req.method === "GET") {
    next();
  } else {
    res.status(503).send("Sorry");
  }
});

const uri = process.env.ATLAS_URI;
const LOCAL = "mongodb://localhost/local-testing-blogify";

mongoose.connect(LOCAL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connection with database is established!");
});

app.use("/cp", articleRoutes);

const port = process.env.PORT || 8000;
app.listen(port, console.log(`server running on port ${port}`));
