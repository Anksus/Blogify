const express = require("express");
const app = express();
const loginRoute = require("./routes/login");

app.use("/", loginRoute);

const port = process.env.PORT || 3000;
app.listen(port, console.log("server running"));
