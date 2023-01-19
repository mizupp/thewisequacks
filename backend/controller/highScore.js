const HighScore = require('../models/HighScore');

// get all high scores  
const index = async (req, res) => {
    try {
        const scores = await HighScore.all();
        res.status(200).json(scores);
    } catch (error) {
        console.log(error); 
        res.status(400)
    }
};

// post a new high score, body needs to contain name, category, difficulty, score
const create = async (req,res) => {
    try {
        const {name, category, difficulty, score} = req.body;
        const data = await HighScore.create(name, category, difficulty, score);
        res.status(201).json(data);
    } catch (error) {
       console.log(error); 
       res.status(400)
    }
};

module.exports =  {
    index,
    create,
} 
