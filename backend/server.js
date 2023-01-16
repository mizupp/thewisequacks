const express = require('express');
const { app, io, server } = require('./initialiseServer');

const cors = require('cors');
const { initialise } = require('./socketevent');

app.use(cors());
app.use(express.json());

const highScoreRoutes = require('./controller/highScore');
app.use('/highscores', highScoreRoutes);

app.get('/', (req, res) => {
    res.json('Early Bird')
});

io.on("connection", socket => initialise(socket));

module.exports = { server };

