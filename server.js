// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express Server
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up middleware to serve static CSS
app.use(express.static('public'));

// Sets up the Express Server to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

require("./routing/apiroutes")(app);
require("./routing/htmlroutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});