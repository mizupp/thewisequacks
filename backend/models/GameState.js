class GameState{
    constructor(room, hostID){
        this.room = room;
        this.host = hostID;
        this.users = [];
        this.questionNumber = 1;
        // this.questions = questions;
        this.isGameStarted = false;
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
                console.log("updated player obj: ", playerInfo);
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

    }


module.exports = { GameState };
