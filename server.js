const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// requiring html routing
require("./routes/htmlRoutes.js")(app);

// requiring api routing
require("./routes/apiRoutes.js")(app);

// Server listening on PORT
app.listen(PORT, function() {
    console.log(`Server is running on ${PORT}`);
  });