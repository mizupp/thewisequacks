const axios = require('axios')

class GameState{
    constructor(room, hostID){
        this.room = room;
        this.host = hostID;
        this.users = [];
        this.questionNumber = 1;
        this.isGameStarted = false;
        this.hasGameEnded = false;
        this.questions = {
            easy: [],
            medium: [],
            hard: []
        };
    }

     addPlayer(playerInfo) {
        return new Promise(async (resolve, reject) => {
            try {
                if (this.users.length === 0) {
                    this.host = playerInfo.userID
                }
                this.users.push(playerInfo)
                resolve("Player Joined")
            } catch (error) {
                console.log(error);
                reject("Player could not join")
            }
        })
        }

    updatePlayer(playerInfo) {
        return new Promise(async (resolve, reject) => {
            try {
                const user = this.users.findIndex((p) => p.userID === playerInfo.userID);
                this.users[user] = playerInfo
                resolve("Player Updated")
            } catch (error) {
                console.log(error);
                reject("Could not update player")
            }
        })
    }

    removePlayer(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const user = this.users.findIndex((p) => p.userID === id);
                
                
                if (this.host === id && this.users[1]) {
                    this.host = this.users[1].userID
                    this.users[1].isHost = true
                    this.users.splice(user, 1)
                    resolve('Host Removed')
                } else {
                    this.users.splice(user, 1)
                resolve("Player removed")
                }
                
            } catch (error) {
                console.log(error);
                reject("Could not update player")
            }
        })
    }

    async initQuestions() {
        return new Promise(async (resolve, reject) => {
            try {
                const getAllQuestions = async () =>
			    await axios.all([
				    axios.get(
					    "https://the-trivia-api.com/api/questions?limit=20&difficulty=easy"
				    ),
				    axios.get(
					    "https://the-trivia-api.com/api/questions?limit=20&difficulty=medium"
				    ),
				    axios.get(
					    "https://the-trivia-api.com/api/questions?limit=20&difficulty=hard"
				    ),
			    ])

		        await getAllQuestions().then(
			        axios.spread(({ data: easyRes }, { data: medRes }, { data: hardRes }) => {
				        this.questions.easy = easyRes.slice(-6)
                        this.questions.medium = medRes.slice(-6)
                        this.questions.hard = hardRes.slice(-6)
			        })
		        )
                resolve('Added questions')
            } catch (error) {
                console.log(error)
                reject('Could not add questions')
            }
        })
    }

    startGame() {
        return new Promise(async (resolve, reject) => {
            try {
                this.isGameStarted = true
                resolve("Game started")
            } catch (error) {
                console.log(error);
                reject("Game not started")
            }
        })
    }

    endGame() {
        return new Promise(async (resolve, reject) => {
            try {
                this.hasGameEnded = true
                resolve('Game ended')
            } catch (error) {
                console.log(error);
                reject("Game not ended")
            }
        })
    }

    }


module.exports = { GameState };
