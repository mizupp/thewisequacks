const express = require('express');
const router = express.Router();
const highScoreController = require('../controller/highScore')

// get all high scores  
router.get('/', highScoreController.index);

// post a new high score, body needs to contain name, category, difficulty, score
router.post('/', highScoreController.create);

module.exports = router ;
