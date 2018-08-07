var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// app.use(express.static('/Public'))
// app.use(express.static(process.cwd() + '/Public'));
// app.use(express.static(__dirname + '/Public'));
// var dir = path.join(__dirname, 'public');

// app.use(express.static(dir));
// app.use(express.static(__dirname + '/public'));
// app.use(express.static(process.cwd() + '/public'));
// process.env.PWD = process.cwd();
// app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(express.static("public"));

require("./Routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });