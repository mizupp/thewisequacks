class GameState{
    constructor(category, difficulty, host, roomName, questions){
        this.roomName = roomName;
        this.host = host;
        this.users = [
            {
                userId: 0,
                name: host,
                isHost: false,
                score: 0,
                hasCompletedQuiz: false
            }
        ];
        this.questionNumber = 1;
        this.questions = questions;
        this.isGameStarted = false;
    }

     addPlayer(playerInfo) {
        return new Promise(async (resolve, reject) => {
            try {
                if (this.users.length === 0 ) {
                    playerInfo.isHost = true;
                } 
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