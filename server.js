const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

let port = process.env.port || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// requiring html routing
require("./routes/htmlRoutes")(app);

// requiring api routing
require("./routes/apiRoutes")(app);

// Server listening on port
app.listen(port, function() {
    console.log(`Server is running on ${port}`);
  });