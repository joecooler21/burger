var express = require("express");
var bodyParser = require("body-parser");
var router = require("./controllers/burgers_controllers");

var PORT = process.env.PORT || 8080;

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var hb = require("express-handlebars");

app.engine("handlebars", hb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use('/', router);

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });