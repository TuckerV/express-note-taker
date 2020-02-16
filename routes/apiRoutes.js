const path = require("path");
const fs = require("fs");

const uuid = require("uuid");


module.exports = function(app){

    app.get("/api/notes", function(req, res){
        // if (err) throw err;
        res.sendFile(path.join(__dirname, "../db/db.json"));
    });


    // 
    app.post("/api/notes", function(req, res){

        let noteId = uuid();

        let newNote = {
          id: noteId,
          title: req.body.title,
          text: req.body.text
        };

        fs.readFile("./db/db.json", "utf-8", (err, data) =>{

            if (err) throw err;
          
            const notesDb = JSON.parse(data);

            notesDb.push(newNote);

            fs.writeFile("./db/db.json", JSON.stringify(notesDb, null, 2), function(err){
                if (err) throw err;
                res.send(notesDb);
            })
         })
       
    })
    // 


    app.delete("/api/notes/:id", function(req, res){
        let specificNoteId = req.params.id;
        fs.readFile("./db/db.json", "utf8", (err, data) =>{
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
