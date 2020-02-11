let path = require("path");

module.exports = function(app){

    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("../public/assets/css/styles.css", function(req, res){
        res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"));
    });

    app.get("../public/assets/js/index.js", function(req, res){
        res.sendFile(path.join(__dirname, "../public/assets/js/index.js"));
    });

    app.get("../public/notes.html", function(req, res){
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

};