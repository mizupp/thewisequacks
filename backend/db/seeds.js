const MongoClient = require('mongodb').MongoClient;
const { init } = require('./init');

// const db = init();

var url = "mongodb+srv://mizupp:Mizna123@cluster0.4soxi1r.mongodb.net/";
var dbname = "QuackDB"
// var highscores = db.collection('highscores');
// const db = init();
// await db.collection('highscores');

MongoClient.connect(url, function(err, db) {

    if (err) throw err;
    var dbo = db.db("QuackDB");
    var myobj = [
        {
            _id: 1,
            name: "Russell",
            category: "History",
            difficulty: 1,
            score: 350,
        },
        {
            _id: 2,
            name: "Mizna",
            category: "Geography",
            difficulty: 1,
            score: 300,
        },
        {
            _id: 3,
            name: "Adam",
            category: "Geography",
            difficulty: 1,
            score: 250,
        },
        {
            _id: 4,
            name: "Liam",
            category: "History",
            difficulty: 1,
            score: 250,
        },
      ];
    //   dbo.collection("highscores").drop(function(err, delOK) {
    //     if (err) throw err;
    //     if (delOK) console.log("Collection deleted");
    //     db.close();
    //   });
      dbo.collection("highscores").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
      });
    });

// db.highscores.drop()
// console.log(db);
// Sample Posts
// db.highscores.insertMany([
//     {
//         _id: 1,
//         name: "Russell",
//         category: "History",
//         difficulty: 1,
//         score: 100,
//     },
//     {
//         _id: 2,
//         name: "Mizna",
//         category: "Geography",
//         difficulty: 1,
//         score: 100,
//     },
//   ]);

