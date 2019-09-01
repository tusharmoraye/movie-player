const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./dist/movie-player"));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "/dist/movie-player/index.html"));
});

app.listen(process.env.PORT || 8080);
