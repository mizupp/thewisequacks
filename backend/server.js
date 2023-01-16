const express = require('express');
const cors = require('cors');
const { app, io, server } = require('./initialiseServer');
const { initialise } = require('./socketevent');

app.use(cors());
app.use(express.json());

const highScoreRoutes = require('./controller/highScore');
app.use('/highscores', highScoreRoutes);

app.get('/', (req, res) => {
    res.json("Welcome to the Early Bird Backend")
});

io.on("connection", socket => initialise(socket));

module.exports = { server };
