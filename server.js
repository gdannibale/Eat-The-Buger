let express = require("express");

let PORT = process.env.PORT || 8080;

let app = express();

var db = require("./models")

app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
let routes = require("./controllers/burgers.js");
// require("./Routes/html-routes.js")(app);
// require("./Routes/api-routes.js")(app);
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});