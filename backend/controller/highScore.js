const express = require('express');
const router = express.Router();
const HighScore = require('../models/HighScore');

// get all high scores
router.get('/', async (req, res)=>{
    try {
        const scores = await HighScore.all();
        res.status(200).json(scores);
    } catch (error) {
        console.log(error); 
        res.status(400)
    }
});

// post a new high score, body needs to contain name, category, difficulty, score
router.post('/', async (req,res) => {
    try {
        const {name, category, difficulty, score} = req.body;
        const data = await HighScore.create(name, category, difficulty, score);
        console.log(data);
        res.status(201).json(data);
    } catch (error) {
       console.log(error); 
       res.status(400)
    }
});

// get scores by category and difficulty
router.get('/:category/:difficulty', async (req, res)=>{
    const {category, difficulty} = req.params;
    try {
        const scores = await HighScore.getByCategoryAndDifficulty(category, difficulty);
        res.status(200).json(scores);
    } catch (error) {
        console.log(error); 
        res.status(400)
    }
});

//checks if this username is already in the database
router.get('/:username', async (req,res)=>{
    try {
        const message = await HighScore.checkUsername(req.params.username);
        res.status(200).json(message);
    } catch (error) {
        res.status(400)
    }
});

module.exports =  router ;