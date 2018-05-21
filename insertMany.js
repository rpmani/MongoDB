var client = require("mongodb")

dbUrl = "mongodb://localhost:27017/"

client.connect(dbUrl, function (err, db) {
    if (err) {
        throw (err)
    }
    console.log("database created");
    //db.close();
    var database = db.db("nodeMongo");
    var jsonObj = [{ "gender": "male", "name": "MANI", "location": "Chennai" },
            { "gender": "male", "name": "MANIkamdan", "location": "Chennai" },
            { "gender": "male", "name": "Raja", "location": "Chennai" },
            { "gender": "male", "name": "ream", "location": "Chennai" }
    ]
    database.collection("tutorial").insert(jsonObj, function (err, res) {
        if (err) {
            throw err
        }
        console.log("One Document created...")
    })



}) 