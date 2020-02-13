const path = require("path");
const fs = require("fs");

module.exports = function(app){

    app.get("/api/notes", function(err, res){
        if (err) throw err;
        res.sendFile(path.join(__dirname, "./db/db.json"));
    });


    // 
    app.post("/api/notes", function(req, res){
        let newNote = req.body;

        fs.readFile("./db/db.json", "utf-8", (err, data) =>{
            if (err) throw err;
            let db = JSON.parse(data);
            db.push(newNote);
            let idKey = 1;
            for(var i = 0; i < db.length; i++){
                db[i].id = idKey++;
            }

            fs.writeFile("./db/db.json", JSON.stringify(db), function(err){
                if (err) throw err;
                return res.status(200).send("Added new Note");
            })
         })
       
    })
    // 


    app.delete("/api/notes:id", function(req, res){
        let specificNoteId = req.params.id;
        fs.readFile("./db/db.json", "uft-8", (err, data), err =>{
            if (err) throw err;
            let db = JSON.parse(data);
            let newDb = db.filter(function(note){
                return note.id != specificNoteId;
            });
            fs.writeFile("./db/db.json", JSON.stringify(newDb, null, 2), err =>{
                if (err) throw err;
                res.send("./db/db.json");
            })
        })
    })

};
