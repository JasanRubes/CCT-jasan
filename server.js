// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/projects.html", function(request, response) {
  response.sendFile(__dirname + "/views/projects.html");
});

app.get("/index.html", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/problems.html", function(request, response) {
  response.sendFile(__dirname + "/views/problems.html");
});

app.get("/labs.html", function(request, response) {
  response.sendFile(__dirname + "/views/labs.html");
});

app.get("/fun.html", function(request, response) {
  response.sendFile(__dirname + "/views/fun.html");
});

app.get("/cats.html", function(request, response) {
  response.sendFile(__dirname + "/views/cats.html");
});

app.get("/hacks.html", function(request, response) {
  response.sendFile(__dirname + "/views/hacks.html");
});

app.get("/contact.html", function(request, response) {
  response.sendFile(__dirname + "/views/contact.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
