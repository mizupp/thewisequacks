class GameState{
    constructor(room){
        this.room = room;
        // this.host = host;
        this.users = [];
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
                console.log(user)
                
                if (this.users[user].isHost && this.users[1]) {
                    this.users[1].isHost = true
                }
                this.users.splice(user, 1)
                resolve("Player removed")
            } catch (error) {
                console.log(error);
                reject("Could not update player")
            }
        })
    }
    }


module.exports = { GameState };
