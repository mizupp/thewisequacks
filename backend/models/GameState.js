class GameState{
    constructor(room){
        this.room = room;
        // this.host = host;
        this.users = [
            {
                // userId: 0,
                // name: host,
                // isHost: false,
                score: 0,
                hasCompletedQuiz: false
            }
        ];
        this.questionNumber = 1;
        // this.questions = questions;
        this.isGameStarted = false;
    }

     addPlayer(playerInfo) {
        return new Promise(async (resolve, reject) => {
            try {
                this.users.push(playerInfo)
                resolve("Player Joined")
            } catch (error) {
                console.log(error);
                reject("Player could not join")
            }
        })
        }
    }


module.exports = { GameState };