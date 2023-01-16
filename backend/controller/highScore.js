const express = require('express');
const router = express.Router();
const HighScore = require('../models/HighScore');

//get all the scores
router.get('/', async (req, res)=>{
    try{
        const scores = await HighScore.all();
        res.status(200).json(scores);
    }catch (error){
        console.log(error);
        res.status(400);
    }
});

//create
router.post('/', async (req, res) => {
    try {
        const scores = req.body.scores;
        HighScore.create(scores);
        res.status(201).json(scores);
    } catch (error) {
        console.log(error);
        res.status(422).json({error})
    }
})

//filter the category and difficulty; determine highscore in each filter
router.get("/:category/:difficulty", async (req, res) => {
    const {category, difficulty} = req.params;
    try{
        const scores = await HighScore.getByFilter(category, difficulty);
        res.status(200).json(scores);
    }catch (error){
        console.log(error);
        res.status(400);
    }
})

// check username already exists in the database
router.get('/:username', async (req,res)=>{
    try {
        const message = await HighScore.checkUsername(req.params.username);
        res.status(200).json(message);
    } catch (error) {
        res.status(400)
    }
});

module.exports =  router;