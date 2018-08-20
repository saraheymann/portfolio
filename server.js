var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var nodemailer = require("nodemailer");
require('dotenv').config();

var app = express();

var PORT = process.env.PORT || 3000;
app.use(express.static(process.cwd() + '/Public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./Routes/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });


  