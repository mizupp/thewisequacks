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

    updatePlayer(playerInfo) {
        return new Promise(async (resolve, reject) => {
            try {
                const user = this.users.findIndex((p) => p.userId === playerInfo.userId);
                this.users[user] = playerInfo
                resolve("Player Updated")
            } catch (error) {
                console.log(error);
                reject("Could not update player")
            }
        })
    }
    }


module.exports = { GameState };